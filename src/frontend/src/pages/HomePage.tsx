import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Mic,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import type { AppPage } from "../App";
import type { Course } from "../backend.d";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useEnrollInCourse, useGetEnrolledCourses } from "../hooks/useQueries";

interface HomePageProps {
  courseId: bigint | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  coursesLoading: boolean;
  courses: Course[];
  navigateTo: (page: AppPage) => void;
}

const benefits = [
  {
    icon: <Mic size={20} />,
    title: "Daily Speaking Practice",
    desc: "Structured 15–20 min sessions built for real-world conversations",
  },
  {
    icon: <Target size={20} />,
    title: "Clear Daily Goals",
    desc: "Each day focuses on one skill: greetings, storytelling, opinions & more",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Track Your Progress",
    desc: "Visual 30-day grid shows exactly how far you've come",
  },
  {
    icon: <Star size={20} />,
    title: "Build a Streak",
    desc: "Consecutive day completions keep you motivated and consistent",
  },
];

export default function HomePage({
  courseId,
  isAuthenticated,
  isAdmin,
  coursesLoading,
  courses,
  navigateTo,
}: HomePageProps) {
  const { login, loginStatus } = useInternetIdentity();
  const { data: enrolledCourses } = useGetEnrolledCourses();
  const enrollMutation = useEnrollInCourse();

  const course = courses[0] ?? null;
  const isEnrolled =
    enrolledCourses?.some((ec) => ec.course.id === courseId) ?? false;
  const isLoggingIn = loginStatus === "logging-in";

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      try {
        await login();
      } catch {
        toast.error("Login failed. Please try again.");
      }
      return;
    }
    if (!courseId) {
      toast.error("Course not found. Please check back later.");
      return;
    }
    try {
      await enrollMutation.mutateAsync(courseId);
      toast.success("You're enrolled! Let's start Day 1 🎉");
      navigateTo({ name: "dashboard" });
    } catch {
      toast.error("Enrollment failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero wave-bg">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-body font-600">
              <Sparkles size={14} />
              30 Days to Confident English
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-foreground leading-tight">
              Speak English{" "}
              <span className="relative">
                <span className="text-primary">Fluently</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full" />
              </span>
              <br />
              in 30 Days
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
              A structured daily speaking course that guides you from basic
              phrases to confident conversations. Just 15–20 minutes a day —
              that's all it takes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {coursesLoading ? (
                <Skeleton className="h-12 w-40 rounded-xl" />
              ) : isEnrolled ? (
                <Button
                  size="lg"
                  onClick={() => navigateTo({ name: "dashboard" })}
                  className="font-display font-600 text-base px-8 rounded-xl gap-2 shadow-md"
                >
                  Continue Learning <ArrowRight size={18} />
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={handleEnroll}
                  disabled={enrollMutation.isPending || isLoggingIn}
                  className="font-display font-600 text-base px-8 rounded-xl gap-2 shadow-md"
                >
                  {enrollMutation.isPending || isLoggingIn
                    ? "Please wait..."
                    : isAuthenticated
                      ? "Enroll Now — Free"
                      : "Get Started Free"}
                  <ArrowRight size={18} />
                </Button>
              )}
              {isAdmin && !course && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigateTo({ name: "admin" })}
                  className="font-display font-600 text-base px-8 rounded-xl gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Set Up Course
                </Button>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm font-body text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-success" />
                30 structured lessons
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-primary" />
                15–20 min/day
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={15} className="text-amber" />
                Free forever
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden md:flex justify-center items-center animate-scale-in stagger-2 opacity-0-init">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-110" />
              <img
                src="/assets/generated/hero-illustration.dim_600x400.png"
                alt="English speaking course illustration"
                className="relative w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Info Card */}
      {!coursesLoading && course && (
        <section className="max-w-6xl mx-auto px-4 py-10 w-full">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-xs animate-fade-in-up stagger-3 opacity-0-init">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen size={22} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-700 text-xl text-foreground">
                    {course.title}
                  </h2>
                  <p className="font-body text-muted-foreground mt-1 text-sm leading-relaxed max-w-xl">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <Badge variant="secondary" className="font-body font-600">
                      {course.lessonIds.length} Lessons
                    </Badge>
                    <Badge variant="outline" className="font-body font-600">
                      30 Days
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                {isEnrolled ? (
                  <Button
                    onClick={() => navigateTo({ name: "dashboard" })}
                    className="font-body font-600 gap-2 rounded-xl"
                  >
                    My Progress <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button
                    onClick={handleEnroll}
                    disabled={enrollMutation.isPending}
                    className="font-body font-600 gap-2 rounded-xl"
                  >
                    {enrollMutation.isPending ? "Enrolling..." : "Enroll Now"}
                    <ArrowRight size={16} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No course yet — admin notice */}
      {!coursesLoading && !course && isAdmin && (
        <section className="max-w-6xl mx-auto px-4 py-10 w-full">
          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 text-center animate-fade-in">
            <p className="font-display font-600 text-foreground mb-2">
              Course not set up yet
            </p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              As admin, you can create the course and add lessons in the Admin
              panel.
            </p>
            <Button
              onClick={() => navigateTo({ name: "admin" })}
              variant="outline"
              className="font-body font-600"
            >
              Open Admin Panel
            </Button>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-12 w-full">
        <h2 className="font-display text-2xl md:text-3xl font-700 text-foreground text-center mb-8 animate-fade-in-up">
          Why Speak30 works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-card border border-border rounded-2xl p-5 space-y-3 animate-fade-in-up opacity-0-init"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                {b.icon}
              </div>
              <h3 className="font-display font-600 text-foreground">
                {b.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-10 w-full">
        <div className="gradient-hero wave-bg rounded-3xl p-8 md:p-12 text-center space-y-5 border border-primary/10">
          <p className="font-body text-primary font-600 text-sm uppercase tracking-widest">
            Start today
          </p>
          <h2 className="font-display font-800 text-2xl md:text-4xl text-foreground">
            Your first lesson is waiting.
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Day 1 starts whenever you're ready. No prior English experience
            required — just commitment and 15 minutes.
          </p>
          {!isEnrolled && (
            <Button
              size="lg"
              onClick={handleEnroll}
              disabled={enrollMutation.isPending || isLoggingIn}
              className="font-display font-600 text-base px-10 rounded-xl gap-2 shadow-md mt-2"
            >
              {enrollMutation.isPending || isLoggingIn
                ? "Please wait..."
                : "Begin Day 1"}
              <ArrowRight size={18} />
            </Button>
          )}
          {isEnrolled && (
            <Button
              size="lg"
              onClick={() => navigateTo({ name: "dashboard" })}
              className="font-display font-600 text-base px-10 rounded-xl gap-2 shadow-md mt-2"
            >
              Go to My Dashboard <ArrowRight size={18} />
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}

function Settings({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Settings icon"
    >
      <title>Settings icon</title>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
