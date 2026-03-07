import Array "mo:core/Array";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Data Models
  module CourseCategory {
    public type T = {
      #technology;
      #science;
      #arts;
      #business;
      #other;
    };

    public func compare(cat1 : T, cat2 : T) : Order.Order {
      switch (cat1, cat2) {
        case (#technology, #technology) { #equal };
        case (#technology, _) { #less };

        case (#science, #technology) { #greater };
        case (#science, #science) { #equal };
        case (#science, _) { #less };

        case (#arts, #arts) { #equal };
        case (#arts, #business) { #less };
        case (#arts, #other) { #less };
        case (#arts, _) { #greater };

        case (#business, #business) { #equal };
        case (#business, #other) { #less };
        case (#business, _) { #greater };

        case (#other, #other) { #equal };
        case (#other, _) { #greater };
      };
    };
  };

  type CourseCategory = CourseCategory.T;

  type CourseId = Nat;
  type LessonId = Nat;

  let maxCourseId = 100_000_000;
  var nextAvailableCourseId = 0;

  var nextLessonId = 0;

  public type Course = {
    id : CourseId;
    title : Text;
    description : Text;
    category : CourseCategory;
    instructor : Principal;
    thumbnailUrl : Text;
    createdAt : Time.Time;
    lessonIds : [LessonId];
  };

  public type Lesson = {
    id : LessonId;
    courseId : CourseId;
    title : Text;
    content : Text;
    videoUrl : ?Text;
    durationMinutes : Nat;
    order : Nat;
  };

  public type UserProfile = {
    displayName : Text;
    bio : Text;
  };

  type Enrollment = {
    user : Principal;
    courseId : CourseId;
    enrolledAt : Time.Time;
  };

  type LessonCompletion = {
    user : Principal;
    lessonId : LessonId;
    completedAt : Time.Time;
  };

  public type CourseWithProgress = {
    course : Course;
    completionPercentage : Nat;
  };

  // Persistent Storage using Maps
  let courses = Map.empty<CourseId, Course>();
  let lessons = Map.empty<LessonId, Lesson>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let enrollments = Map.empty<Text, Enrollment>();
  let lessonCompletions = Map.empty<Text, LessonCompletion>();

  // Authorization
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Utility Functions
  func getCourseOrTrap(courseId : CourseId) : Course {
    switch (courses.get(courseId)) {
      case (?course) { course };
      case (null) { Runtime.trap("Course does not exist") };
    };
  };

  func getLessonOrTrap(lessonId : LessonId) : Lesson {
    switch (lessons.get(lessonId)) {
      case (?lesson) { lesson };
      case (null) { Runtime.trap("Lesson does not exist") };
    };
  };

  func checkInstructorOrAdmin(instructor : Principal, caller : Principal) : () {
    if (not AccessControl.isAdmin(accessControlState, caller) and instructor != caller) {
      Runtime.trap("Unauthorized: Must be instructor or admin");
    };
  };

  func makeEnrollmentKey(user : Principal, courseId : CourseId) : Text {
    user.toText() # "-" # Nat.toText(courseId);
  };

  func makeLessonCompletionKey(user : Principal, lessonId : LessonId) : Text {
    user.toText() # "-" # Nat.toText(lessonId);
  };

  // Courses
  public shared ({ caller }) func createCourse(title : Text, description : Text, category : CourseCategory, thumbnailUrl : Text) : async CourseId {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create courses");
    };
    if (nextAvailableCourseId >= maxCourseId) {
      Runtime.trap("Course limit reached. Cannot create more courses.");
    };
    let courseId = nextAvailableCourseId;
    nextAvailableCourseId += 1;
    let course : Course = {
      id = courseId;
      title;
      description;
      category;
      instructor = caller;
      thumbnailUrl;
      createdAt = Time.now();
      lessonIds = [];
    };
    courses.add(courseId, course);
    courseId;
  };

  public shared ({ caller }) func updateCourse(courseId : CourseId, title : Text, description : Text, category : CourseCategory, thumbnailUrl : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update courses");
    };
    let course = getCourseOrTrap(courseId);
    checkInstructorOrAdmin(course.instructor, caller);

    let updatedCourse : Course = {
      id = course.id;
      title;
      description;
      category;
      instructor = course.instructor;
      thumbnailUrl;
      createdAt = course.createdAt;
      lessonIds = course.lessonIds;
    };
    courses.add(courseId, updatedCourse);
  };

  public shared ({ caller }) func deleteCourse(courseId : CourseId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can delete courses");
    };
    let course = getCourseOrTrap(courseId);
    checkInstructorOrAdmin(course.instructor, caller);

    // Delete all lessons in the course
    for (lessonId in course.lessonIds.values()) {
      lessons.remove(lessonId);
    };

    courses.remove(courseId);
  };

  public query func getCourse(courseId : CourseId) : async ?Course {
    courses.get(courseId);
  };

  public query func getAllCourses() : async [Course] {
    courses.values().toArray();
  };

  public query func getCoursesByCategory(category : CourseCategory) : async [Course] {
    let filtered = courses.values().filter(
      func(course : Course) : Bool {
        course.category == category;
      }
    );
    filtered.toArray();
  };

  public query func getCourseWithLessons(courseId : CourseId) : async ?(Course, [Lesson]) {
    switch (courses.get(courseId)) {
      case (?course) {
        let courseLessons = course.lessonIds.map(
          func(lessonId : LessonId) : ?Lesson {
            lessons.get(lessonId);
          }
        ).filter(
          func(lessonOpt : ?Lesson) : Bool {
            switch (lessonOpt) {
              case (null) { false };
              case (_) { true };
            };
          }
        );
        ?(course, courseLessons.map(
          func(lessonOpt : ?Lesson) : Lesson {
            switch (lessonOpt) {
              case (?lesson) { lesson };
              case (null) {
                Runtime.trap("Unexpected null lesson");
              };
            };
          }
        ));
      };
      case (null) { null };
    };
  };

  // Lessons
  public shared ({ caller }) func createLesson(courseId : CourseId, title : Text, content : Text, videoUrl : ?Text, durationMinutes : Nat, order : Nat) : async LessonId {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create lessons");
    };
    let course = getCourseOrTrap(courseId);
    checkInstructorOrAdmin(course.instructor, caller);

    let lessonId = nextLessonId;
    nextLessonId += 1;

    let lesson : Lesson = {
      id = lessonId;
      courseId;
      title;
      content;
      videoUrl;
      durationMinutes;
      order;
    };

    lessons.add(lessonId, lesson);

    // Update course with new lesson ID
    let updatedCourse : Course = {
      id = course.id;
      title = course.title;
      description = course.description;
      category = course.category;
      instructor = course.instructor;
      thumbnailUrl = course.thumbnailUrl;
      createdAt = course.createdAt;
      lessonIds = course.lessonIds.concat([lessonId]);
    };

    courses.add(course.id, updatedCourse);
    lessonId;
  };

  public shared ({ caller }) func updateLesson(lessonId : LessonId, title : Text, content : Text, videoUrl : ?Text, durationMinutes : Nat, order : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update lessons");
    };
    let lesson = getLessonOrTrap(lessonId);
    let course = getCourseOrTrap(lesson.courseId);
    checkInstructorOrAdmin(course.instructor, caller);

    let updatedLesson : Lesson = {
      id = lesson.id;
      courseId = lesson.courseId;
      title;
      content;
      videoUrl;
      durationMinutes;
      order;
    };
    lessons.add(lessonId, updatedLesson);
  };

  public shared ({ caller }) func deleteLesson(lessonId : LessonId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can delete lessons");
    };
    let lesson = getLessonOrTrap(lessonId);
    let course = getCourseOrTrap(lesson.courseId);
    checkInstructorOrAdmin(course.instructor, caller);

    lessons.remove(lessonId);

    // Remove lesson from course
    let updatedLessonIds = course.lessonIds.filter(
      func(id : LessonId) : Bool { id != lessonId },
    );

    let updatedCourse : Course = {
      id = course.id;
      title = course.title;
      description = course.description;
      category = course.category;
      instructor = course.instructor;
      thumbnailUrl = course.thumbnailUrl;
      createdAt = course.createdAt;
      lessonIds = updatedLessonIds;
    };
    courses.add(course.id, updatedCourse);
  };

  public query func getLesson(lessonId : LessonId) : async ?Lesson {
    lessons.get(lessonId);
  };

  // Enrollments
  public shared ({ caller }) func enrollInCourse(courseId : CourseId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can enroll in courses");
    };
    let _ = getCourseOrTrap(courseId);

    let enrollmentKey = makeEnrollmentKey(caller, courseId);
    let enrollment : Enrollment = {
      user = caller;
      courseId;
      enrolledAt = Time.now();
    };
    enrollments.add(enrollmentKey, enrollment);
  };

  public shared ({ caller }) func unenrollFromCourse(courseId : CourseId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can unenroll from courses");
    };
    let enrollmentKey = makeEnrollmentKey(caller, courseId);
    enrollments.remove(enrollmentKey);
  };

  public query ({ caller }) func isEnrolled(user : Principal, courseId : CourseId) : async Bool {
    // Users can check their own enrollment, admins can check anyone's
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only check your own enrollment status");
    };
    let enrollmentKey = makeEnrollmentKey(user, courseId);
    switch (enrollments.get(enrollmentKey)) {
      case (?enrollment) { true };
      case (null) { false };
    };
  };

  public query ({ caller }) func getEnrolledCourses() : async [CourseWithProgress] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view enrolled courses");
    };
    let userEnrollments = enrollments.values().filter(
      func(enrollment : Enrollment) : Bool {
        enrollment.user == caller;
      }
    );

    let coursesWithProgress = userEnrollments.map(
      func(enrollment : Enrollment) : CourseWithProgress {
        switch (courses.get(enrollment.courseId)) {
          case (?course) {
            let completionPercentage = calculateCourseCompletion(caller, course);
            { course; completionPercentage };
          };
          case (null) {
            // Should not happen, but handle gracefully
            {
              course = {
                id = enrollment.courseId;
                title = "";
                description = "";
                category = #other;
                instructor = Principal.fromText("aaaaa-aa");
                thumbnailUrl = "";
                createdAt = 0;
                lessonIds = [];
              };
              completionPercentage = 0;
            };
          };
        };
      },
    );

    coursesWithProgress.toArray();
  };

  // Progress Tracking
  public shared ({ caller }) func markLessonComplete(lessonId : LessonId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can mark lessons complete");
    };
    let lesson = getLessonOrTrap(lessonId);

    // Check if user is enrolled in the course
    let enrollmentKey = makeEnrollmentKey(caller, lesson.courseId);
    switch (enrollments.get(enrollmentKey)) {
      case (null) {
        Runtime.trap("Unauthorized: Must be enrolled in course to mark lessons complete");
      };
      case (?_) {
        let completionKey = makeLessonCompletionKey(caller, lessonId);
        let completion : LessonCompletion = {
          user = caller;
          lessonId;
          completedAt = Time.now();
        };
        lessonCompletions.add(completionKey, completion);
      };
    };
  };

  public shared ({ caller }) func unmarkLessonComplete(lessonId : LessonId) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can unmark lessons");
    };
    let completionKey = makeLessonCompletionKey(caller, lessonId);
    lessonCompletions.remove(completionKey);
  };

  public query ({ caller }) func isLessonComplete(user : Principal, lessonId : LessonId) : async Bool {
    // Users can check their own completion, admins can check anyone's
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only check your own lesson completion");
    };
    let completionKey = makeLessonCompletionKey(user, lessonId);
    switch (lessonCompletions.get(completionKey)) {
      case (?_) { true };
      case (null) { false };
    };
  };

  public query ({ caller }) func getCourseCompletion(courseId : CourseId) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view course completion");
    };
    let course = getCourseOrTrap(courseId);
    calculateCourseCompletion(caller, course);
  };

  func calculateCourseCompletion(user : Principal, course : Course) : Nat {
    let totalLessons = course.lessonIds.size();
    if (totalLessons == 0) {
      return 100;
    };

    let completedLessons = course.lessonIds.filter(
      func(lessonId : LessonId) : Bool {
        let completionKey = makeLessonCompletionKey(user, lessonId);
        switch (lessonCompletions.get(completionKey)) {
          case (?_) { true };
          case (null) { false };
        };
      },
    );

    (completedLessons.size() * 100) / totalLessons;
  };

  // User Profiles
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };
};
