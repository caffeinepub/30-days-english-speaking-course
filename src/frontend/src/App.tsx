import { useState } from "react";

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
import AuxiliariesPage from "./pages/AuxiliariesPage";
import HomophonesPage from "./pages/HomophonesPage";
import LearningHome, { type Section } from "./pages/LearningHome";
import PhonicsPage from "./pages/PhonicsPage";
import QuizPage from "./pages/QuizPage";
import TensesPage from "./pages/TensesPage";
import VowelsPage from "./pages/VowelsPage";

export default function App() {
  const [section, setSection] = useState<Section>("home");

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
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <AppFooter />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
