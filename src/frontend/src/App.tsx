import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { Component, Suspense, lazy, useState } from "react";
import type { ReactNode } from "react";
import AppFooter from "./components/AppFooter";
import AppNavBar from "./components/AppNavBar";
import { StudentAuthProvider, useStudentAuth } from "./hooks/useStudentAuth";
import type { Section } from "./pages/LearningHome";
import StudentLoginPage from "./pages/StudentLoginPage";

// Legacy type export — kept for backward compatibility with unused old pages
export type AppPage =
  | { name: "home" }
  | { name: "dashboard" }
  | { name: "lesson"; dayOrder: number }
  | { name: "admin" };

// Lazy-loaded page components for code splitting
const AuxiliariesPage = lazy(() => import("./pages/AuxiliariesPage"));
const ConversationsPage = lazy(() => import("./pages/ConversationsPage"));
const CoursePage = lazy(() => import("./pages/CoursePage"));
const DayDetailPage = lazy(() => import("./pages/DayDetailPage"));
const HomophonesPage = lazy(() => import("./pages/HomophonesPage"));
const ImperativePage = lazy(() => import("./pages/ImperativePage"));
const InfinitivePage = lazy(() => import("./pages/InfinitivePage"));
const LearningHome = lazy(() => import("./pages/LearningHome"));
const NonInfinitivePage = lazy(() => import("./pages/NonInfinitivePage"));
const PhonicsPage = lazy(() => import("./pages/PhonicsPage"));
const PhrasesPage = lazy(() => import("./pages/PhrasesPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const TensesPage = lazy(() => import("./pages/TensesPage"));
const VowelsPage = lazy(() => import("./pages/VowelsPage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));

// ─── Error Boundary ─────────────────────────────────────────────────────────

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center p-6"
          style={{ background: "oklch(0.97 0.012 75)" }}
        >
          <div
            className="max-w-md w-full rounded-2xl p-8 text-center shadow-card"
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.88 0.018 75)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "oklch(0.96 0.06 28)" }}
            >
              <span className="text-2xl">⚠️</span>
            </div>
            <h1
              className="text-xl font-display font-bold mb-2"
              style={{ color: "oklch(0.15 0.04 255)" }}
            >
              Something went wrong
            </h1>
            <p
              className="text-sm mb-6"
              style={{ color: "oklch(0.48 0.05 258)" }}
            >
              The app encountered an error. Please refresh the page to try
              again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "oklch(0.28 0.12 258)" }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Page Loader ─────────────────────────────────────────────────────────────

const PageLoader = () => (
  <div
    className="flex flex-col items-center justify-center min-h-[60vh] gap-4"
    data-ocid="app.loading_state"
  >
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center animate-pulse"
      style={{ background: "oklch(0.93 0.08 258)" }}
    >
      <span className="text-2xl">📚</span>
    </div>
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full animate-bounce"
          style={{
            background: "oklch(0.28 0.12 258)",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
    <p className="text-sm font-body" style={{ color: "oklch(0.48 0.05 258)" }}>
      Loading The Learning Hub…
    </p>
  </div>
);

// ─── Main App ─────────────────────────────────────────────────────────────

function AppInner() {
  const { isLoggedIn } = useStudentAuth();
  const [section, setSection] = useState<Section>("home");
  const [selectedCourseDay, setSelectedCourseDay] = useState<number>(1);

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <StudentLoginPage />;
  }

  const handleNavigate = (target: Section) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSection(target);
  };

  const renderSection = () => {
    switch (section) {
      case "home":
        return <LearningHome onNavigate={handleNavigate} />;
      case "tenses":
        return <TensesPage />;
      case "phonics":
        return <PhonicsPage />;
      case "auxiliaries":
        return <AuxiliariesPage />;
      case "homophones":
        return <HomophonesPage />;
      case "vowels":
        return <VowelsPage />;
      case "quiz":
        return <QuizPage />;
      case "imperative":
        return <ImperativePage />;
      case "infinitive":
        return <InfinitivePage />;
      case "non-infinitive":
        return <NonInfinitivePage />;
      case "conversations":
        return <ConversationsPage />;
      case "phrases":
        return <PhrasesPage />;
      case "stories":
        return <StoriesPage />;
      case "course":
        return (
          <CoursePage
            onBack={() => handleNavigate("home")}
            onSelectDay={(d) => {
              setSelectedCourseDay(d);
              handleNavigate("course-day");
            }}
          />
        );
      case "course-day":
        return (
          <DayDetailPage
            day={selectedCourseDay}
            onBack={() => handleNavigate("course")}
          />
        );
      case "chat":
        return <ChatPage />;
      default:
        return <LearningHome onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNavBar active={section} onNavigate={handleNavigate} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Suspense fallback={<PageLoader />}>{renderSection()}</Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <AppFooter />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

// ─── Root App ────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <ErrorBoundary>
      <StudentAuthProvider>
        <AppInner />
      </StudentAuthProvider>
    </ErrorBoundary>
  );
}
