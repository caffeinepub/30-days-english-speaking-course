import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  PlayCircle,
} from "lucide-react";
import { useMemo } from "react";
import { toast } from "sonner";
import type { AppPage } from "../App";
import type { Lesson } from "../backend.d";
import {
  useGetCourseWithLessons,
  useIsLessonComplete,
  useMarkLessonComplete,
  useUnmarkLessonComplete,
} from "../hooks/useQueries";

interface LessonDetailPageProps {
  courseId: bigint | null;
  dayOrder: number;
  navigateTo: (page: AppPage) => void;
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
  );
  return match ? match[1] : null;
}

function renderContent(content: string) {
  // Parse simple markdown-like formatting for content
  const lines = content.split("\n");
  return lines.map((line, i) => {
    const key = `line-${i}`;
    if (line.startsWith("## ")) {
      return (
        <h3
          key={key}
          className="font-display font-700 text-lg text-foreground mt-5 mb-2"
        >
          {line.slice(3)}
        </h3>
      );
    }
    if (line.startsWith("# ")) {
      return (
        <h2
          key={key}
          className="font-display font-700 text-xl text-foreground mt-6 mb-3"
        >
          {line.slice(2)}
        </h2>
      );
    }
    if (line.startsWith("- ") || line.startsWith("• ")) {
      return (
        <div key={key} className="flex items-start gap-2 my-1.5">
          <span className="text-primary mt-1 shrink-0">•</span>
          <span className="font-body text-foreground leading-relaxed">
            {line.slice(2)}
          </span>
        </div>
      );
    }
    if (line.trim() === "") {
      return <div key={key} className="h-2" />;
    }
    return (
      <p key={key} className="font-body text-foreground leading-relaxed my-1">
        {line}
      </p>
    );
  });
}

export default function LessonDetailPage({
  courseId,
  dayOrder,
  navigateTo,
}: LessonDetailPageProps) {
  const { data: courseWithLessons, isLoading } =
    useGetCourseWithLessons(courseId);
  const markComplete = useMarkLessonComplete();
  const unmarkComplete = useUnmarkLessonComplete();

  const lessons = useMemo(() => {
    if (!courseWithLessons) return [] as Lesson[];
    return [...courseWithLessons[1]].sort(
      (a, b) => Number(a.order) - Number(b.order),
    );
  }, [courseWithLessons]);

  const lesson = useMemo(
    () => lessons.find((l) => Number(l.order) === dayOrder) ?? null,
    [lessons, dayOrder],
  );

  const { data: isComplete } = useIsLessonComplete(lesson?.id ?? null);

  const prevDay = useMemo(() => {
    const idx = lessons.findIndex((l) => Number(l.order) === dayOrder);
    if (idx > 0) return Number(lessons[idx - 1].order);
    return null;
  }, [lessons, dayOrder]);

  const nextDay = useMemo(() => {
    const idx = lessons.findIndex((l) => Number(l.order) === dayOrder);
    if (idx >= 0 && idx < lessons.length - 1)
      return Number(lessons[idx + 1].order);
    return null;
  }, [lessons, dayOrder]);

  const handleToggleComplete = async () => {
    if (!lesson) return;
    try {
      if (isComplete) {
        await unmarkComplete.mutateAsync(lesson.id);
        toast.success("Lesson marked as incomplete");
      } else {
        await markComplete.mutateAsync(lesson.id);
        toast.success(`Day ${dayOrder} complete! 🎉`);
      }
    } catch {
      toast.error("Failed to update progress. Please try again.");
    }
  };

  const youtubeId = lesson?.videoUrl ? extractYouTubeId(lesson.videoUrl) : null;
  const isMutating = markComplete.isPending || unmarkComplete.isPending;

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <Skeleton className="h-6 w-32 rounded-lg" />
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-48 w-full rounded-2xl" />
        <Skeleton className="h-80 w-full rounded-2xl" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <BookOpen size={48} className="text-muted-foreground/40 mx-auto" />
        <h2 className="font-display text-xl font-600 text-foreground">
          Lesson not found
        </h2>
        <p className="font-body text-muted-foreground">
          Day {dayOrder} doesn't exist yet.
        </p>
        <Button
          variant="outline"
          onClick={() => navigateTo({ name: "dashboard" })}
          className="font-body font-600"
        >
          <ArrowLeft size={16} className="mr-1.5" /> Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <button
        type="button"
        onClick={() => navigateTo({ name: "dashboard" })}
        className="flex items-center gap-1.5 text-sm font-body font-600 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
      >
        <ArrowLeft size={15} />
        Back to Dashboard
      </button>

      {/* Header */}
      <div className="animate-fade-in-up space-y-3">
        <div className="flex items-center gap-3">
          <div className="gradient-card-active w-16 h-16 rounded-2xl flex items-center justify-center shadow-md shrink-0">
            <span className="font-display font-800 text-primary-foreground text-xl">
              {dayOrder}
            </span>
          </div>
          <div>
            <p className="font-body text-sm text-muted-foreground font-600 uppercase tracking-widest">
              Day {dayOrder}
            </p>
            <h1 className="font-display font-800 text-2xl md:text-3xl text-foreground leading-tight">
              {lesson.title}
            </h1>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="secondary" className="font-body font-600 gap-1.5">
            <Clock size={13} />
            {Number(lesson.durationMinutes)} minutes
          </Badge>
          {isComplete && (
            <Badge className="bg-success text-success-foreground border-0 font-body font-600 gap-1.5">
              <CheckCircle2 size={13} />
              Completed
            </Badge>
          )}
        </div>
      </div>

      {/* Video embed */}
      {lesson.videoUrl && (
        <div className="rounded-2xl overflow-hidden border border-border shadow-xs animate-fade-in-up stagger-1 opacity-0-init">
          {youtubeId ? (
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`Day ${dayOrder} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <a
              href={lesson.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-card hover:bg-accent transition-colors"
            >
              <PlayCircle size={24} className="text-primary shrink-0" />
              <div>
                <p className="font-body font-600 text-foreground">
                  Watch video lesson
                </p>
                <p className="font-body text-sm text-muted-foreground truncate max-w-xs">
                  {lesson.videoUrl}
                </p>
              </div>
            </a>
          )}
        </div>
      )}

      {/* Content */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-1 animate-fade-in-up stagger-2 opacity-0-init">
        <h2 className="font-display font-700 text-lg text-foreground mb-4">
          Lesson Content
        </h2>
        <div className="prose-content">{renderContent(lesson.content)}</div>
      </div>

      {/* Complete button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-up stagger-3 opacity-0-init">
        <Button
          onClick={handleToggleComplete}
          disabled={isMutating}
          size="lg"
          variant={isComplete ? "outline" : "default"}
          className={`font-display font-600 text-base px-8 rounded-xl gap-2.5 w-full sm:w-auto ${
            isComplete ? "" : "shadow-md"
          }`}
        >
          {isMutating ? (
            "Updating..."
          ) : isComplete ? (
            <>
              <Circle size={18} />
              Mark as Incomplete
            </>
          ) : (
            <>
              <CheckCircle2 size={18} />
              Mark as Complete
            </>
          )}
        </Button>

        {/* Next lesson after completing */}
        {isComplete && nextDay && (
          <Button
            onClick={() => navigateTo({ name: "lesson", dayOrder: nextDay })}
            size="lg"
            className="font-display font-600 text-base px-8 rounded-xl gap-2 shadow-md w-full sm:w-auto"
          >
            Day {nextDay} <ChevronRight size={18} />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-border pt-6 animate-fade-in-up stagger-4 opacity-0-init">
        <div>
          {prevDay !== null && (
            <button
              type="button"
              onClick={() => navigateTo({ name: "lesson", dayOrder: prevDay })}
              className="flex items-center gap-2 text-sm font-body font-600 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ChevronLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>
                <span className="text-xs uppercase tracking-widest block text-muted-foreground/60">
                  Previous
                </span>
                Day {prevDay}
              </span>
            </button>
          )}
        </div>
        <div className="text-right">
          {nextDay !== null && (
            <button
              type="button"
              onClick={() => navigateTo({ name: "lesson", dayOrder: nextDay })}
              className="flex items-center gap-2 text-sm font-body font-600 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>
                <span className="text-xs uppercase tracking-widest block text-muted-foreground/60">
                  Next
                </span>
                Day {nextDay}
              </span>
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
