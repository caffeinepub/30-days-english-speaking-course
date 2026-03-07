import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, CheckCircle2, Flame, Lock, Trophy } from "lucide-react";
import { useMemo } from "react";
import type { AppPage } from "../App";
import type { Lesson } from "../backend.d";
import {
  useGetAllLessonCompletions,
  useGetCourseCompletion,
  useGetCourseWithLessons,
  useGetEnrolledCourses,
} from "../hooks/useQueries";

interface DashboardPageProps {
  courseId: bigint | null;
  navigateTo: (page: AppPage) => void;
}

function getMotivationalMessage(completed: number): string {
  if (completed === 0) return "Ready to start? Day 1 is waiting for you! 🌟";
  if (completed < 5)
    return "Great start! You're building a habit. Keep it up! 💪";
  if (completed < 10)
    return "Fantastic progress! Your English is already improving. 🚀";
  if (completed < 15)
    return "One third done! Your consistency is paying off. 🌱";
  if (completed === 15)
    return "You're halfway there! The hard part is behind you. 🎯";
  if (completed < 20) return "More than halfway! You're doing amazing. ⭐";
  if (completed < 25) return "Almost at the finish line! Keep pushing! 🏃";
  if (completed < 30) return "So close! Just a few more days to go! 🎉";
  return "You did it! 30 days completed. You're a champion! 🏆";
}

function calculateStreak(
  lessons: Lesson[],
  completions: Record<string, boolean>,
): number {
  const sorted = [...lessons].sort((a, b) => Number(a.order) - Number(b.order));
  let streak = 0;
  for (const lesson of sorted) {
    if (completions[lesson.id.toString()]) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

interface DayCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  isActive: boolean;
  dayNumber: number;
  onClick: () => void;
}

function DayCard({
  lesson,
  isCompleted,
  isActive,
  dayNumber,
  onClick,
}: DayCardProps) {
  const isLocked = !isCompleted && !isActive;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-2xl p-4 text-left transition-all day-card-hover group border ${
        isCompleted
          ? "gradient-card-completed border-success/30 shadow-sm"
          : isActive
            ? "gradient-card-active border-primary/50 shadow-md"
            : "bg-card border-border hover:border-muted-foreground/30"
      }`}
    >
      {/* Day number */}
      <div
        className={`text-3xl font-display font-800 leading-none mb-2 ${
          isCompleted
            ? "text-success-foreground"
            : isActive
              ? "text-primary-foreground"
              : "text-muted-foreground/40"
        }`}
      >
        {dayNumber}
      </div>

      {/* Title */}
      <div
        className={`text-xs font-body font-600 leading-tight line-clamp-2 ${
          isCompleted
            ? "text-success-foreground/90"
            : isActive
              ? "text-primary-foreground/90"
              : "text-muted-foreground"
        }`}
      >
        {lesson.title}
      </div>

      {/* Status badge */}
      <div className="absolute top-2.5 right-2.5">
        {isCompleted && (
          <div className="w-6 h-6 rounded-full bg-success-foreground/20 flex items-center justify-center animate-check-pop">
            <CheckCircle2
              size={14}
              className="text-success-foreground fill-success-foreground/20"
            />
          </div>
        )}
        {isActive && (
          <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/80 animate-pulse" />
        )}
        {isLocked && <Lock size={12} className="text-muted-foreground/30" />}
      </div>
    </button>
  );
}

export default function DashboardPage({
  courseId,
  navigateTo,
}: DashboardPageProps) {
  const { data: courseWithLessons, isLoading: courseLoading } =
    useGetCourseWithLessons(courseId);
  const { data: enrolledCourses } = useGetEnrolledCourses();
  const { data: completionPct } = useGetCourseCompletion(courseId);

  const lessons = useMemo(() => {
    if (!courseWithLessons) return [];
    return [...courseWithLessons[1]].sort(
      (a, b) => Number(a.order) - Number(b.order),
    );
  }, [courseWithLessons]);

  const lessonIds = useMemo(() => lessons.map((l) => l.id), [lessons]);
  const { data: completions = {} } = useGetAllLessonCompletions(lessonIds);

  const completedCount = useMemo(
    () => Object.values(completions).filter(Boolean).length,
    [completions],
  );

  const streak = useMemo(
    () => calculateStreak(lessons, completions),
    [lessons, completions],
  );
  const progressPercent = Number(completionPct ?? 0);
  const enrolledCourse = enrolledCourses?.find(
    (ec) => ec.course.id === courseId,
  );
  const course = enrolledCourse?.course ?? courseWithLessons?.[0];

  // Active lesson = first uncompleted lesson
  const activeLesson = useMemo(() => {
    return lessons.find((l) => !completions[l.id.toString()]);
  }, [lessons, completions]);

  if (courseLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <Skeleton className="h-8 w-64 rounded-xl" />
        <Skeleton className="h-24 w-full rounded-2xl" />
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-3">
          {Array.from({ length: 30 }, (_, i) => `sk-${i}`).map((key) => (
            <Skeleton key={key} className="h-24 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!course || lessons.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-4">
        <BookOpen size={48} className="text-muted-foreground/40 mx-auto" />
        <h2 className="font-display text-xl font-600 text-foreground">
          No lessons yet
        </h2>
        <p className="font-body text-muted-foreground">
          The course content is being prepared. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="animate-fade-in-up">
        <p className="font-body text-sm text-muted-foreground uppercase tracking-widest font-600 mb-1">
          Your journey
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-800 text-foreground">
          {course.title}
        </h1>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up stagger-1 opacity-0-init">
        {/* Progress */}
        <div className="col-span-2 bg-card border border-border rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm font-600 text-muted-foreground">
              Overall Progress
            </span>
            <span className="font-display font-700 text-foreground">
              {completedCount}/30 days
            </span>
          </div>
          <Progress value={progressPercent} className="h-3 rounded-full" />
          <p className="font-body text-sm text-muted-foreground">
            {progressPercent}% complete
          </p>
        </div>

        {/* Streak */}
        <div
          className={`bg-card border rounded-2xl p-5 flex items-center gap-3 ${streak > 0 ? "border-amber/50 streak-glow" : "border-border"}`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${streak > 0 ? "bg-amber/20" : "bg-muted"}`}
          >
            <Flame
              size={20}
              className={streak > 0 ? "text-amber" : "text-muted-foreground"}
            />
          </div>
          <div>
            <p className="font-display font-700 text-2xl text-foreground">
              {streak}
            </p>
            <p className="font-body text-xs text-muted-foreground font-600">
              Day streak
            </p>
          </div>
        </div>

        {/* Trophy */}
        <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${completedCount === 30 ? "bg-amber/20" : "bg-muted"}`}
          >
            <Trophy
              size={20}
              className={
                completedCount === 30
                  ? "text-amber"
                  : "text-muted-foreground/40"
              }
            />
          </div>
          <div>
            <p className="font-display font-700 text-2xl text-foreground">
              {completedCount}
            </p>
            <p className="font-body text-xs text-muted-foreground font-600">
              Days done
            </p>
          </div>
        </div>
      </div>

      {/* Motivational message */}
      <div className="bg-primary/5 border border-primary/15 rounded-2xl px-5 py-4 animate-fade-in-up stagger-2 opacity-0-init">
        <p className="font-body font-600 text-foreground text-sm md:text-base">
          {getMotivationalMessage(completedCount)}
        </p>
      </div>

      {/* Day Grid */}
      <div className="animate-fade-in-up stagger-3 opacity-0-init">
        <h2 className="font-display font-700 text-xl text-foreground mb-4">
          30 Days at a Glance
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2.5">
          {lessons.map((lesson) => {
            const dayNum = Number(lesson.order);
            const isCompleted = completions[lesson.id.toString()] ?? false;
            const isActive = !isCompleted && lesson.id === activeLesson?.id;
            return (
              <DayCard
                key={lesson.id.toString()}
                lesson={lesson}
                isCompleted={isCompleted}
                isActive={isActive}
                dayNumber={dayNum}
                onClick={() => navigateTo({ name: "lesson", dayOrder: dayNum })}
              />
            );
          })}
        </div>
      </div>

      {/* Active lesson CTA */}
      {activeLesson && (
        <div className="gradient-card-active rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in-up stagger-4 opacity-0-init">
          <div>
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-0 font-body mb-2">
              Up next
            </Badge>
            <h3 className="font-display font-700 text-primary-foreground text-lg">
              Day {Number(activeLesson.order)}: {activeLesson.title}
            </h3>
            <p className="font-body text-primary-foreground/80 text-sm mt-1">
              {Number(activeLesson.durationMinutes)} min · Keep the streak
              going!
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              navigateTo({
                name: "lesson",
                dayOrder: Number(activeLesson.order),
              })
            }
            className="bg-primary-foreground text-primary font-display font-700 px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors whitespace-nowrap shrink-0"
          >
            Start Now →
          </button>
        </div>
      )}
    </div>
  );
}
