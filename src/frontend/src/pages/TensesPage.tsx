import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { tenses } from "../data/grammarData";

type TimeGroup = "all" | "present" | "past" | "future";

const groupColors: Record<
  TimeGroup,
  { bg: string; text: string; label: string }
> = {
  all: {
    bg: "oklch(0.92 0.02 265)",
    text: "oklch(0.25 0.12 265)",
    label: "All Tenses",
  },
  present: {
    bg: "oklch(0.97 0.04 28)",
    text: "oklch(0.45 0.18 28)",
    label: "Present",
  },
  past: {
    bg: "oklch(0.96 0.05 160)",
    text: "oklch(0.4 0.16 160)",
    label: "Past",
  },
  future: {
    bg: "oklch(0.95 0.06 265)",
    text: "oklch(0.4 0.18 265)",
    label: "Future",
  },
};

export default function TensesPage() {
  const [activeGroup, setActiveGroup] = useState<TimeGroup>("all");
  const [expandedId, setExpandedId] = useState<string | null>("present-simple");

  const filtered =
    activeGroup === "all"
      ? tenses
      : tenses.filter((t) => t.timeGroup === activeGroup);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div
          className="flex items-center justify-center w-14 h-14 rounded-2xl"
          style={{
            background: "oklch(0.97 0.04 28)",
            color: "oklch(0.55 0.22 28)",
          }}
        >
          <BookOpen className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            English Tenses
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            All 12 tenses with formulas, rules, and examples
          </p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Tabs
          value={activeGroup}
          onValueChange={(v) => setActiveGroup(v as TimeGroup)}
        >
          <TabsList
            className="h-auto p-1 gap-1 flex-wrap"
            data-ocid="tenses.tab"
          >
            {(["all", "present", "past", "future"] as TimeGroup[]).map((g) => (
              <TabsTrigger
                key={g}
                value={g}
                className="px-5 py-2 rounded-lg font-semibold text-sm capitalize"
              >
                {groupColors[g].label}
                <span className="ml-2 text-xs opacity-70">
                  (
                  {g === "all"
                    ? tenses.length
                    : tenses.filter((t) => t.timeGroup === g).length}
                  )
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Tense Cards */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((tense, i) => {
            const isExpanded = expandedId === tense.id;

            return (
              <motion.div
                key={tense.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border bg-card shadow-card overflow-hidden"
              >
                {/* Card Header */}
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : tense.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Color indicator */}
                    <div
                      className="w-3 h-10 rounded-full shrink-0"
                      style={{ background: tense.color }}
                    />
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                        {tense.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          className="text-xs font-mono font-semibold capitalize"
                          style={{
                            background: groupColors[tense.timeGroup].bg,
                            color: groupColors[tense.timeGroup].text,
                            borderColor: "transparent",
                          }}
                        >
                          {tense.timeGroup}
                        </Badge>
                        {!isExpanded && (
                          <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px] sm:max-w-none">
                            {tense.formula}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
                    style={{
                      background: isExpanded
                        ? tense.color.replace(")", " / 15%)")
                        : "oklch(0.93 0.01 265)",
                      color: isExpanded ? tense.color : "oklch(0.5 0.05 265)",
                    }}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border">
                        <div className="grid md:grid-cols-2 gap-5 mt-5">
                          {/* Formula */}
                          <div
                            className="rounded-xl p-4"
                            style={{
                              background: tense.color.replace(")", " / 8%)"),
                            }}
                          >
                            <div
                              className="text-xs font-bold uppercase tracking-widest mb-2"
                              style={{ color: tense.color }}
                            >
                              Formula / Structure
                            </div>
                            <div className="font-mono text-sm md:text-base font-semibold text-foreground">
                              {tense.formula}
                            </div>
                          </div>

                          {/* Rule */}
                          <div className="rounded-xl p-4 bg-muted/60">
                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                              Usage Rule
                            </div>
                            <div className="font-body text-sm md:text-base text-foreground leading-relaxed">
                              {tense.rule}
                            </div>
                          </div>
                        </div>

                        {/* Examples */}
                        <div className="mt-5">
                          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                            Example Sentences
                          </div>
                          <div className="space-y-2.5">
                            {tense.examples.map((ex, exIdx) => (
                              <div
                                key={ex}
                                className="flex items-start gap-3 rounded-lg px-4 py-3"
                                style={{
                                  background:
                                    exIdx % 2 === 0
                                      ? "oklch(0.97 0.01 265)"
                                      : "white",
                                  borderLeft: `3px solid ${tense.color}`,
                                }}
                              >
                                <span
                                  className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5"
                                  style={{ background: tense.color }}
                                >
                                  {exIdx + 1}
                                </span>
                                <span className="font-body text-sm md:text-base text-foreground leading-relaxed">
                                  {ex}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
