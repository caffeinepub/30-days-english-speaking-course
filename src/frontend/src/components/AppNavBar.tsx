import {
  BookOpen,
  GraduationCap,
  Home,
  Layers,
  Link,
  Menu,
  Trophy,
  Volume2,
  Waves,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Section } from "../pages/LearningHome";

interface NavItem {
  id: Section;
  label: string;
  icon: React.ReactNode;
  color: string;
  dataOcid: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="w-4 h-4" />,
    color: "oklch(0.50 0.28 300)",
    dataOcid: "nav.home.link",
  },
  {
    id: "tenses",
    label: "Tenses",
    icon: <BookOpen className="w-4 h-4" />,
    color: "oklch(0.55 0.26 28)",
    dataOcid: "nav.tenses.link",
  },
  {
    id: "phonics",
    label: "Phonics",
    icon: <Volume2 className="w-4 h-4" />,
    color: "oklch(0.50 0.24 160)",
    dataOcid: "nav.phonics.link",
  },
  {
    id: "auxiliaries",
    label: "Auxiliaries",
    icon: <Layers className="w-4 h-4" />,
    color: "oklch(0.50 0.28 265)",
    dataOcid: "nav.auxiliaries.link",
  },
  {
    id: "homophones",
    label: "Homophones",
    icon: <Link className="w-4 h-4" />,
    color: "oklch(0.54 0.26 310)",
    dataOcid: "nav.homophones.link",
  },
  {
    id: "vowels",
    label: "Vowels",
    icon: <Waves className="w-4 h-4" />,
    color: "oklch(0.58 0.26 80)",
    dataOcid: "nav.vowels.link",
  },
  {
    id: "quiz",
    label: "Quiz",
    icon: <Trophy className="w-4 h-4" />,
    color: "oklch(0.52 0.24 295)",
    dataOcid: "nav.quiz.link",
  },
];

interface Props {
  active: Section;
  onNavigate: (section: Section) => void;
}

export default function AppNavBar({ active, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: Section) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16 gap-6">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNav("home")}
              className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.50 0.28 300)" }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-lg text-foreground leading-none">
                Learning
                <span style={{ color: "oklch(0.58 0.26 80)" }}>Point</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 flex-1">
              {navItems.slice(1).map((item) => (
                <button
                  type="button"
                  key={item.id}
                  data-ocid={item.dataOcid}
                  onClick={() => handleNav(item.id)}
                  className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    color:
                      active === item.id ? item.color : "oklch(0.45 0.05 265)",
                    background:
                      active === item.id
                        ? `${item.color.replace("oklch(", "").replace(")", "")} / 10%)`
                        : "transparent",
                  }}
                >
                  {item.icon}
                  {item.label}
                  {active === item.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: `${item.color.replace("oklch(", "").replace(")", "")} / 10%)`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Home link in desktop */}
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={() => handleNav("home")}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                color:
                  active === "home"
                    ? "oklch(0.50 0.28 300)"
                    : "oklch(0.45 0.05 265)",
                background:
                  active === "home" ? "oklch(0.93 0.1 300)" : "transparent",
              }}
            >
              <Home className="w-4 h-4" />
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-lg border border-border"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-foreground/20 z-40 md:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-card border-l border-border z-50 md:hidden p-6 flex flex-col"
            >
              {/* Brand */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.50 0.28 300)" }}
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-display font-extrabold text-lg text-foreground">
                    Learning
                    <span style={{ color: "oklch(0.58 0.26 80)" }}>Point</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="space-y-1.5 flex-1">
                {navItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    data-ocid={item.dataOcid}
                    onClick={() => handleNav(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all"
                    style={{
                      color:
                        active === item.id
                          ? item.color
                          : "oklch(0.35 0.05 265)",
                      background:
                        active === item.id
                          ? `${item.color.replace("oklch(", "").replace(")", "")} / 10%)`
                          : "transparent",
                    }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
