import { Suspense, lazy, useState } from "react";

// Legacy type export — kept for backward compatibility with unused old pages
export type AppPage =
  | { name: "home" }
  | { name: "dashboard" }
  | { name: "lesson"; dayOrder: number }
  | { name: "admin" };
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import AppFooter from "./components/AppFooter";
import AppNavBar from "./components/AppNavBar";
import { useStudentAuth } from "./hooks/useStudentAuth";
import type { Section } from "./pages/LearningHome";

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
const QuizPage = lazy(() => import("./pages/QuizPage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const StudentLoginPage = lazy(() => import("./pages/StudentLoginPage"));
const TensesPage = lazy(() => import("./pages/TensesPage"));
const VowelsPage = lazy(() => import("./pages/VowelsPage"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
  </div>
);

export default function App() {
  const { isLoggedIn } = useStudentAuth();
  const [section, setSection] = useState<Section>("home");
  const [selectedCourseDay, setSelectedCourseDay] = useState<number>(1);

  // Show login page if not authenticated
  if (!isLoggedIn) {
    return (
      <Suspense fallback={<PageLoader />}>
        <StudentLoginPage />
      </Suspense>
    );
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
