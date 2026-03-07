import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  Course,
  CourseWithProgress,
  Lesson,
  UserProfile,
} from "../backend.d";
import { CourseCategory } from "../backend.d";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

// ─── Courses ───────────────────────────────────────────────────────────────

export function useGetAllCourses() {
  const { actor, isFetching } = useActor();
  return useQuery<Course[]>({
    queryKey: ["allCourses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCourses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCourseWithLessons(courseId: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<[Course, Lesson[]] | null>({
    queryKey: ["courseWithLessons", courseId?.toString()],
    queryFn: async () => {
      if (!actor || courseId === null) return null;
      return actor.getCourseWithLessons(courseId);
    },
    enabled: !!actor && !isFetching && courseId !== null,
  });
}

export function useGetEnrolledCourses() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<CourseWithProgress[]>({
    queryKey: ["enrolledCourses"],
    queryFn: async () => {
      if (!actor || !identity) return [];
      return actor.getEnrolledCourses();
    },
    enabled: !!actor && !isFetching && !!identity,
  });
}

export function useGetCourseCompletion(courseId: bigint | null) {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<bigint>({
    queryKey: ["courseCompletion", courseId?.toString()],
    queryFn: async () => {
      if (!actor || courseId === null) return BigInt(0);
      return actor.getCourseCompletion(courseId);
    },
    enabled: !!actor && !isFetching && courseId !== null && !!identity,
  });
}

export function useIsLessonComplete(lessonId: bigint | null) {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<boolean>({
    queryKey: [
      "lessonComplete",
      lessonId?.toString(),
      identity?.getPrincipal().toString(),
    ],
    queryFn: async () => {
      if (!actor || lessonId === null || !identity) return false;
      return actor.isLessonComplete(identity.getPrincipal(), lessonId);
    },
    enabled: !!actor && !isFetching && lessonId !== null && !!identity,
  });
}

export function useGetAllLessonCompletions(lessonIds: bigint[]) {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<Record<string, boolean>>({
    queryKey: [
      "allLessonCompletions",
      identity?.getPrincipal().toString(),
      lessonIds.map(String).join(","),
    ],
    queryFn: async () => {
      if (!actor || !identity || lessonIds.length === 0) return {};
      const results = await Promise.all(
        lessonIds.map((id) =>
          actor
            .isLessonComplete(identity.getPrincipal(), id)
            .then((v) => [id.toString(), v] as [string, boolean]),
        ),
      );
      return Object.fromEntries(results);
    },
    enabled: !!actor && !isFetching && !!identity && lessonIds.length > 0,
  });
}

// ─── User Role ────────────────────────────────────────────────────────────

export function useGetCallerUserRole() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery({
    queryKey: ["callerUserRole", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return "guest";
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<boolean>({
    queryKey: ["isCallerAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── User Profile ─────────────────────────────────────────────────────────

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const query = useQuery<UserProfile | null>({
    queryKey: ["currentUserProfile", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && !!identity,
    retry: false,
  });
  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

// ─── Mutations ────────────────────────────────────────────────────────────

export function useEnrollInCourse() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.enrollInCourse(courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enrolledCourses"] });
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
    },
  });
}

export function useMarkLessonComplete() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (lessonId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.markLessonComplete(lessonId);
    },
    onSuccess: (_, lessonId) => {
      queryClient.invalidateQueries({
        queryKey: ["lessonComplete", lessonId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["allLessonCompletions"] });
      queryClient.invalidateQueries({ queryKey: ["courseCompletion"] });
      queryClient.invalidateQueries({ queryKey: ["enrolledCourses"] });
    },
  });
}

export function useUnmarkLessonComplete() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (lessonId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.unmarkLessonComplete(lessonId);
    },
    onSuccess: (_, lessonId) => {
      queryClient.invalidateQueries({
        queryKey: ["lessonComplete", lessonId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["allLessonCompletions"] });
      queryClient.invalidateQueries({ queryKey: ["courseCompletion"] });
      queryClient.invalidateQueries({ queryKey: ["enrolledCourses"] });
    },
  });
}

export function useCreateCourse() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      title,
      description,
      thumbnailUrl,
    }: {
      title: string;
      description: string;
      thumbnailUrl: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createCourse(
        title,
        description,
        CourseCategory.other,
        thumbnailUrl,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
    },
  });
}

export function useUpdateCourse() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      courseId,
      title,
      description,
      thumbnailUrl,
    }: {
      courseId: bigint;
      title: string;
      description: string;
      thumbnailUrl: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateCourse(
        courseId,
        title,
        description,
        CourseCategory.other,
        thumbnailUrl,
      );
    },
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
      queryClient.invalidateQueries({
        queryKey: ["courseWithLessons", courseId.toString()],
      });
    },
  });
}

export function useDeleteCourse() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteCourse(courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
      queryClient.invalidateQueries({ queryKey: ["courseWithLessons"] });
    },
  });
}

export function useCreateLesson() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      courseId,
      title,
      content,
      videoUrl,
      durationMinutes,
      order,
    }: {
      courseId: bigint;
      title: string;
      content: string;
      videoUrl: string | null;
      durationMinutes: number;
      order: number;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createLesson(
        courseId,
        title,
        content,
        videoUrl,
        BigInt(durationMinutes),
        BigInt(order),
      );
    },
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({
        queryKey: ["courseWithLessons", courseId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
    },
  });
}

export function useUpdateLesson() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      lessonId,
      courseId: _courseId,
      title,
      content,
      videoUrl,
      durationMinutes,
      order,
    }: {
      lessonId: bigint;
      courseId: bigint;
      title: string;
      content: string;
      videoUrl: string | null;
      durationMinutes: number;
      order: number;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateLesson(
        lessonId,
        title,
        content,
        videoUrl,
        BigInt(durationMinutes),
        BigInt(order),
      );
    },
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({
        queryKey: ["courseWithLessons", courseId.toString()],
      });
    },
  });
}

export function useDeleteLesson() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      lessonId,
      courseId: _courseId,
    }: { lessonId: bigint; courseId: bigint }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteLesson(lessonId);
    },
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({
        queryKey: ["courseWithLessons", courseId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
    },
  });
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error("Actor not available");
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
    },
  });
}
