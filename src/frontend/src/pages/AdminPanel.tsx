import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  GraduationCap,
  Loader2,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import type { AppPage } from "../App";
import type { Course, Lesson } from "../backend.d";
import {
  useCreateCourse,
  useCreateLesson,
  useDeleteCourse,
  useDeleteLesson,
  useGetCourseWithLessons,
  useUpdateCourse,
  useUpdateLesson,
} from "../hooks/useQueries";

interface AdminPanelProps {
  courseId: bigint | null;
  courses: Course[];
  navigateTo: (page: AppPage) => void;
}

interface LessonFormData {
  title: string;
  content: string;
  videoUrl: string;
  durationMinutes: number;
  order: number;
}

const EMPTY_LESSON: LessonFormData = {
  title: "",
  content: "",
  videoUrl: "",
  durationMinutes: 15,
  order: 1,
};

function LessonFormDialog({
  open,
  onClose,
  onSave,
  isSaving,
  initial,
  title,
  maxOrder,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (data: LessonFormData) => Promise<void>;
  isSaving: boolean;
  initial: LessonFormData;
  title: string;
  maxOrder: number;
}) {
  const [form, setForm] = useState<LessonFormData>(initial);

  const set =
    (key: keyof LessonFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        key === "durationMinutes" || key === "order"
          ? Number(e.target.value)
          : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      toast.error("Title and content are required.");
      return;
    }
    await onSave(form);
  };

  // Reset form when dialog opens with new initial
  useState(() => {
    setForm(initial);
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
    >
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">{title}</DialogTitle>
          <DialogDescription className="font-body">
            Fill in the lesson details. Content supports simple markdown: use #
            for headings, - for bullet points.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="l-title" className="font-body font-600">
                Lesson title *
              </Label>
              <Input
                id="l-title"
                placeholder="e.g. Introducing Yourself"
                value={form.title}
                onChange={set("title")}
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="l-order" className="font-body font-600">
                Day number (1–{maxOrder})
              </Label>
              <Input
                id="l-order"
                type="number"
                min={1}
                max={maxOrder}
                value={form.order}
                onChange={set("order")}
                className="font-body"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="l-duration" className="font-body font-600">
                Duration (minutes)
              </Label>
              <Input
                id="l-duration"
                type="number"
                min={1}
                max={120}
                value={form.durationMinutes}
                onChange={set("durationMinutes")}
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="l-video" className="font-body font-600">
                Video URL (optional)
              </Label>
              <Input
                id="l-video"
                placeholder="https://youtube.com/watch?v=..."
                value={form.videoUrl}
                onChange={set("videoUrl")}
                className="font-body"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="l-content" className="font-body font-600">
              Content / Practice phrases *
            </Label>
            <Textarea
              id="l-content"
              placeholder={`# Today's Focus\nIntroducing yourself in English\n\n## Key Phrases\n- Hello, my name is...\n- Nice to meet you!\n- I'm from...\n\n## Practice\nRepeat each phrase 3 times...`}
              value={form.content}
              onChange={set("content")}
              rows={12}
              className="font-mono text-sm resize-y"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="font-body font-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSaving}
              className="font-body font-600"
            >
              {isSaving ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Lesson"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function AdminPanel({
  courseId,
  courses,
  navigateTo: _navigateTo,
}: AdminPanelProps) {
  const { data: courseWithLessons, isLoading } =
    useGetCourseWithLessons(courseId);
  const createCourse = useCreateCourse();
  const updateCourse = useUpdateCourse();
  const deleteCourse = useDeleteCourse();
  const createLesson = useCreateLesson();
  const updateLesson = useUpdateLesson();
  const deleteLesson = useDeleteLesson();

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
  });
  const [editingCourse, setEditingCourse] = useState(false);
  const [lessonDialog, setLessonDialog] = useState<
    { mode: "create" } | { mode: "edit"; lesson: Lesson } | null
  >(null);

  const course = courses[0] ?? courseWithLessons?.[0] ?? null;

  const lessons = useMemo(() => {
    if (!courseWithLessons) return [] as Lesson[];
    return [...courseWithLessons[1]].sort(
      (a, b) => Number(a.order) - Number(b.order),
    );
  }, [courseWithLessons]);

  const nextDayOrder =
    lessons.length > 0
      ? Math.max(...lessons.map((l) => Number(l.order))) + 1
      : 1;

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseForm.title.trim()) {
      toast.error("Title required");
      return;
    }
    try {
      await createCourse.mutateAsync({
        title: courseForm.title,
        description: courseForm.description,
        thumbnailUrl:
          courseForm.thumbnailUrl ||
          "/assets/generated/hero-illustration.dim_600x400.png",
      });
      toast.success("Course created!");
      setCourseForm({ title: "", description: "", thumbnailUrl: "" });
    } catch {
      toast.error("Failed to create course.");
    }
  };

  const handleUpdateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course || !courseId) return;
    try {
      await updateCourse.mutateAsync({
        courseId,
        title: courseForm.title || course.title,
        description: courseForm.description || course.description,
        thumbnailUrl: courseForm.thumbnailUrl || course.thumbnailUrl,
      });
      toast.success("Course updated!");
      setEditingCourse(false);
    } catch {
      toast.error("Failed to update course.");
    }
  };

  const handleDeleteCourse = async () => {
    if (!courseId) return;
    try {
      await deleteCourse.mutateAsync(courseId);
      toast.success("Course deleted.");
    } catch {
      toast.error("Failed to delete course.");
    }
  };

  const handleSaveLesson = async (data: LessonFormData) => {
    if (!courseId) {
      toast.error("No course found.");
      return;
    }
    try {
      if (lessonDialog?.mode === "edit") {
        await updateLesson.mutateAsync({
          lessonId: lessonDialog.lesson.id,
          courseId,
          title: data.title,
          content: data.content,
          videoUrl: data.videoUrl.trim() || null,
          durationMinutes: data.durationMinutes,
          order: data.order,
        });
        toast.success("Lesson updated!");
      } else {
        await createLesson.mutateAsync({
          courseId,
          title: data.title,
          content: data.content,
          videoUrl: data.videoUrl.trim() || null,
          durationMinutes: data.durationMinutes,
          order: data.order,
        });
        toast.success("Lesson added!");
      }
      setLessonDialog(null);
    } catch {
      toast.error("Failed to save lesson.");
    }
  };

  const handleDeleteLesson = async (lesson: Lesson) => {
    if (!courseId) return;
    try {
      await deleteLesson.mutateAsync({ lessonId: lesson.id, courseId });
      toast.success("Lesson deleted.");
    } catch {
      toast.error("Failed to delete lesson.");
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <Skeleton className="h-8 w-48 rounded-xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
        <Skeleton className="h-60 w-full rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 animate-fade-in">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
          <GraduationCap size={22} className="text-primary" />
        </div>
        <div>
          <h1 className="font-display font-800 text-2xl text-foreground">
            Admin Panel
          </h1>
          <p className="font-body text-sm text-muted-foreground">
            Manage your 30-day English course
          </p>
        </div>
      </div>

      {/* Course Section */}
      {!course ? (
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 animate-fade-in-up">
          <h2 className="font-display font-700 text-xl text-foreground mb-1">
            Create Course
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Set up your 30-day English speaking course.
          </p>
          <form onSubmit={handleCreateCourse} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="c-title" className="font-body font-600">
                Course title *
              </Label>
              <Input
                id="c-title"
                placeholder="e.g. 30 Days English Speaking Course"
                value={courseForm.title}
                onChange={(e) =>
                  setCourseForm((f) => ({ ...f, title: e.target.value }))
                }
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-desc" className="font-body font-600">
                Description
              </Label>
              <Textarea
                id="c-desc"
                placeholder="A structured 30-day course to master English speaking..."
                value={courseForm.description}
                onChange={(e) =>
                  setCourseForm((f) => ({ ...f, description: e.target.value }))
                }
                rows={3}
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-thumb" className="font-body font-600">
                Thumbnail URL (optional)
              </Label>
              <Input
                id="c-thumb"
                placeholder="https://example.com/image.jpg"
                value={courseForm.thumbnailUrl}
                onChange={(e) =>
                  setCourseForm((f) => ({ ...f, thumbnailUrl: e.target.value }))
                }
                className="font-body"
              />
            </div>
            <Button
              type="submit"
              disabled={createCourse.isPending}
              className="font-body font-600 gap-2"
            >
              {createCourse.isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Create Course
                </>
              )}
            </Button>
          </form>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-2xl p-6 animate-fade-in-up">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <BookOpen size={18} className="text-primary" />
              </div>
              <div>
                <h2 className="font-display font-700 text-lg text-foreground">
                  {course.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-0.5">
                  {course.description}
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="font-body">
                    {lessons.length} / 30 lessons
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="font-body font-600 gap-1.5"
                onClick={() => {
                  setCourseForm({
                    title: course.title,
                    description: course.description,
                    thumbnailUrl: course.thumbnailUrl,
                  });
                  setEditingCourse(true);
                }}
              >
                <Pencil size={14} /> Edit
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-body font-600 gap-1.5 text-destructive hover:text-destructive"
                  >
                    <Trash2 size={14} /> Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="font-display">
                      Delete course?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="font-body">
                      This will permanently delete the course and all its
                      lessons. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="font-body">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteCourse}
                      className="font-body bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      )}

      {/* Edit course dialog */}
      <Dialog open={editingCourse} onOpenChange={(v) => setEditingCourse(v)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">Edit Course</DialogTitle>
            <DialogDescription className="font-body">
              Update the course details.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateCourse} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="ec-title" className="font-body font-600">
                Title
              </Label>
              <Input
                id="ec-title"
                value={courseForm.title}
                onChange={(e) =>
                  setCourseForm((f) => ({ ...f, title: e.target.value }))
                }
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ec-desc" className="font-body font-600">
                Description
              </Label>
              <Textarea
                id="ec-desc"
                value={courseForm.description}
                onChange={(e) =>
                  setCourseForm((f) => ({ ...f, description: e.target.value }))
                }
                rows={3}
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ec-thumb" className="font-body font-600">
                Thumbnail URL
              </Label>
              <Input
                id="ec-thumb"
                value={courseForm.thumbnailUrl}
                onChange={(e) =>
                  setCourseForm((f) => ({ ...f, thumbnailUrl: e.target.value }))
                }
                className="font-body"
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditingCourse(false)}
                className="font-body font-600"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={updateCourse.isPending}
                className="font-body font-600"
              >
                {updateCourse.isPending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Lessons Section */}
      {course && (
        <div className="space-y-4 animate-fade-in-up stagger-2 opacity-0-init">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-700 text-xl text-foreground">
              Lessons{" "}
              <span className="text-muted-foreground font-400 text-base">
                ({lessons.length}/30)
              </span>
            </h2>
            <Button
              onClick={() => setLessonDialog({ mode: "create" })}
              className="font-body font-600 gap-2"
              size="sm"
            >
              <Plus size={16} /> Add Lesson
            </Button>
          </div>

          {lessons.length === 0 ? (
            <div className="bg-card border-2 border-dashed border-border rounded-2xl p-10 text-center space-y-3">
              <BookOpen
                size={40}
                className="text-muted-foreground/30 mx-auto"
              />
              <p className="font-display font-600 text-foreground">
                No lessons yet
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Add your first lesson to get started.
              </p>
              <Button
                onClick={() => setLessonDialog({ mode: "create" })}
                className="font-body font-600 gap-2 mt-1"
              >
                <Plus size={16} /> Add Day 1
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id.toString()}
                  className="bg-card border border-border rounded-xl px-4 py-3.5 flex items-center gap-4 hover:border-muted-foreground/30 transition-colors"
                >
                  <div className="w-10 h-10 gradient-card-active rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-display font-700 text-primary-foreground text-sm">
                      {Number(lesson.order)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-600 text-foreground truncate">
                      {lesson.title}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">
                      {Number(lesson.durationMinutes)} min
                      {lesson.videoUrl ? " · Has video" : ""}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-body gap-1.5 h-8"
                      onClick={() => setLessonDialog({ mode: "edit", lesson })}
                    >
                      <Pencil size={13} /> Edit
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="font-body gap-1.5 h-8 text-destructive hover:text-destructive"
                        >
                          <Trash2 size={13} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-display">
                            Delete lesson?
                          </AlertDialogTitle>
                          <AlertDialogDescription className="font-body">
                            Delete "Day {Number(lesson.order)}: {lesson.title}"?
                            This cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="font-body">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteLesson(lesson)}
                            className="font-body bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lesson Form Dialog */}
      {lessonDialog && (
        <LessonFormDialog
          open={!!lessonDialog}
          onClose={() => setLessonDialog(null)}
          onSave={handleSaveLesson}
          isSaving={createLesson.isPending || updateLesson.isPending}
          initial={
            lessonDialog.mode === "edit"
              ? {
                  title: lessonDialog.lesson.title,
                  content: lessonDialog.lesson.content,
                  videoUrl: lessonDialog.lesson.videoUrl ?? "",
                  durationMinutes: Number(lessonDialog.lesson.durationMinutes),
                  order: Number(lessonDialog.lesson.order),
                }
              : { ...EMPTY_LESSON, order: nextDayOrder }
          }
          title={
            lessonDialog.mode === "edit"
              ? `Edit Day ${Number(lessonDialog.lesson.order)}`
              : "Add New Lesson"
          }
          maxOrder={Math.max(nextDayOrder, 30)}
        />
      )}
    </div>
  );
}
