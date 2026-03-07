import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CourseWithProgress {
    completionPercentage: bigint;
    course: Course;
}
export type Time = bigint;
export interface Lesson {
    id: LessonId;
    title: string;
    content: string;
    order: bigint;
    durationMinutes: bigint;
    videoUrl?: string;
    courseId: CourseId;
}
export type LessonId = bigint;
export type CourseId = bigint;
export interface UserProfile {
    bio: string;
    displayName: string;
}
export interface Course {
    id: CourseId;
    title: string;
    thumbnailUrl: string;
    instructor: Principal;
    createdAt: Time;
    description: string;
    lessonIds: Array<LessonId>;
    category: CourseCategory;
}
export enum CourseCategory {
    other = "other",
    arts = "arts",
    technology = "technology",
    business = "business",
    science = "science"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createCourse(title: string, description: string, category: CourseCategory, thumbnailUrl: string): Promise<CourseId>;
    createLesson(courseId: CourseId, title: string, content: string, videoUrl: string | null, durationMinutes: bigint, order: bigint): Promise<LessonId>;
    deleteCourse(courseId: CourseId): Promise<void>;
    deleteLesson(lessonId: LessonId): Promise<void>;
    enrollInCourse(courseId: CourseId): Promise<void>;
    getAllCourses(): Promise<Array<Course>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCourse(courseId: CourseId): Promise<Course | null>;
    getCourseCompletion(courseId: CourseId): Promise<bigint>;
    getCourseWithLessons(courseId: CourseId): Promise<[Course, Array<Lesson>] | null>;
    getCoursesByCategory(category: CourseCategory): Promise<Array<Course>>;
    getEnrolledCourses(): Promise<Array<CourseWithProgress>>;
    getLesson(lessonId: LessonId): Promise<Lesson | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isEnrolled(user: Principal, courseId: CourseId): Promise<boolean>;
    isLessonComplete(user: Principal, lessonId: LessonId): Promise<boolean>;
    markLessonComplete(lessonId: LessonId): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    unenrollFromCourse(courseId: CourseId): Promise<void>;
    unmarkLessonComplete(lessonId: LessonId): Promise<void>;
    updateCourse(courseId: CourseId, title: string, description: string, category: CourseCategory, thumbnailUrl: string): Promise<void>;
    updateLesson(lessonId: LessonId, title: string, content: string, videoUrl: string | null, durationMinutes: bigint, order: bigint): Promise<void>;
}
