import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BookMarked,
  BookOpen,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { courseData } from "../data/courseData";

interface Props {
  day: number;
  onBack: () => void;
}

const sectionColors = [
  { color: "oklch(0.42 0.18 28)", bg: "oklch(0.96 0.07 28)" },
  { color: "oklch(0.38 0.16 175)", bg: "oklch(0.94 0.07 175)" },
  { color: "oklch(0.35 0.16 258)", bg: "oklch(0.93 0.07 258)" },
  { color: "oklch(0.42 0.18 320)", bg: "oklch(0.95 0.06 320)" },
  { color: "oklch(0.44 0.18 78)", bg: "oklch(0.96 0.07 78)" },
  { color: "oklch(0.40 0.18 200)", bg: "oklch(0.94 0.07 200)" },
];

function getDayColor(day: number) {
  return sectionColors[(day - 1) % sectionColors.length];
}

export default function DayDetailPage({ day, onBack }: Props) {
  const lesson = courseData[day - 1];

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground font-body text-lg">
          Day not found.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    );
  }

  const { color, bg } = getDayColor(day);

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <div
        className="relative overflow-hidden py-12 px-4"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, oklch(0.22 0.12 258) 60%, oklch(0.18 0.08 258) 100%)`,
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div
          className="absolute top-6 right-8 w-40 h-40 rounded-full opacity-20"
          style={{ background: bg }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full opacity-15"
          style={{ background: "oklch(0.85 0.18 78)" }}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Back button */}
          <motion.button
            type="button"
            data-ocid="day_detail.back.button"
            onClick={onBack}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -3 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: "oklch(1 0 0 / 12%)",
              color: "white",
              backdropFilter: "blur(8px)",
              border: "1px solid oklch(1 0 0 / 20%)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Day badge */}
            <div
              className="inline-flex items-center justify-center px-5 py-1.5 rounded-full font-display text-sm font-extrabold mb-4 shadow-sm"
              style={{
                background: "oklch(0.85 0.18 78)",
                color: "oklch(0.22 0.12 78)",
              }}
            >
              Day {lesson.day} of 30
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
              {lesson.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: "oklch(1 0 0 / 15%)", color: "white" }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                {lesson.topic}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "oklch(0.85 0.18 78 / 30%)",
                  color: "oklch(0.90 0.12 78)",
                }}
              >
                {lesson.vocabulary.length} vocabulary words
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "oklch(1 0 0 / 10%)",
                  color: "oklch(0.85 0.04 200)",
                }}
              >
                {lesson.sentences.length} practice sentences
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* Grammar Concept */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: bg, color }}
            >
              <BookMarked className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Grammar Concept
            </h2>
            <Badge
              className="ml-auto font-body text-xs font-semibold"
              style={{ background: bg, color, border: "none" }}
            >
              Core Grammar
            </Badge>
          </div>

          <div
            className="relative rounded-2xl p-6 overflow-hidden"
            style={{ background: bg }}
          >
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
              style={{ background: color }}
            />
            <p className="font-body text-sm leading-relaxed text-foreground pl-2">
              {lesson.grammarConcept}
            </p>
          </div>
        </motion.section>

        {/* Vocabulary */}
        <motion.section
          data-ocid="day_detail.vocabulary.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: bg, color }}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Vocabulary
            </h2>
            <Badge
              className="ml-auto font-body text-xs font-semibold"
              style={{ background: bg, color, border: "none" }}
            >
              {lesson.vocabulary.length} Words
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lesson.vocabulary.map((item, idx) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + idx * 0.05 }}
                className="group relative rounded-xl border bg-card p-4 overflow-hidden hover:shadow-sm transition-shadow"
                style={{
                  borderColor: `${color.replace("oklch(", "").replace(")", "")} / 18%)`,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-full translate-x-6 -translate-y-6 opacity-30"
                  style={{ background: bg }}
                />
                <div className="relative">
                  <div
                    className="font-display text-base font-extrabold mb-1"
                    style={{ color }}
                  >
                    {item.word}
                  </div>
                  <div className="font-body text-sm text-foreground mb-1 leading-snug">
                    {item.meaning}
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    हिंदी:{" "}
                    <span className="font-semibold text-foreground">
                      {item.hindi}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Practice Sentences */}
        <motion.section
          data-ocid="day_detail.sentences.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: bg, color }}
            >
              <MessageCircle className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Practice Sentences
            </h2>
            <Badge
              className="ml-auto font-body text-xs font-semibold"
              style={{ background: bg, color, border: "none" }}
            >
              English + Hindi
            </Badge>
          </div>

          <div className="space-y-3">
            {lesson.sentences.map((item, idx) => (
              <motion.div
                key={item.english}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + idx * 0.06 }}
                className="relative rounded-xl border bg-card overflow-hidden"
                style={{
                  borderColor: `${color.replace("oklch(", "").replace(")", "")} / 15%)`,
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ background: color }}
                />
                <div className="pl-5 pr-4 py-4">
                  {/* Sentence number */}
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mb-2"
                    style={{ background: bg, color }}
                  >
                    {idx + 1}
                  </span>
                  {/* English */}
                  <p className="font-body text-sm font-semibold text-foreground mb-1.5 leading-relaxed">
                    {item.english}
                  </p>
                  {/* Hindi */}
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    <span
                      className="inline-block px-2 py-0.5 rounded-md mr-1.5 text-xs font-medium"
                      style={{ background: bg, color }}
                    >
                      हिंदी
                    </span>
                    {item.hindi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Daily Tip */}
        <motion.section
          data-ocid="day_detail.tip.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{
                background: "oklch(0.96 0.07 78)",
                color: "oklch(0.44 0.18 78)",
              }}
            >
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Daily Tip
            </h2>
            <Badge
              className="ml-auto font-body text-xs font-semibold"
              style={{
                background: "oklch(0.96 0.07 78)",
                color: "oklch(0.44 0.18 78)",
                border: "none",
              }}
            >
              Teacher's Advice
            </Badge>
          </div>

          <div
            className="relative rounded-2xl p-6 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.96 0.07 78) 0%, oklch(0.97 0.05 80) 100%)",
              border: "1px solid oklch(0.85 0.1 78 / 40%)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
              style={{ background: "oklch(0.44 0.18 78)" }}
            />
            <div className="flex gap-4 items-start pl-2">
              <div className="text-2xl mt-0.5 flex-shrink-0">💡</div>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "oklch(0.25 0.1 75)" }}
              >
                {lesson.tip}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Navigation: Prev / Next Day */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
          className="flex items-center justify-between gap-4 pt-4 border-t border-border"
        >
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All 30 Days
          </button>

          <div className="text-center">
            <div className="font-display text-base font-bold text-foreground">
              Day {lesson.day}
            </div>
            <div className="font-body text-xs text-muted-foreground">
              {lesson.topic}
            </div>
          </div>

          {day < 30 ? (
            <div className="flex items-center gap-1.5">
              <span className="font-body text-xs text-muted-foreground hidden sm:block">
                Day {day + 1}
              </span>
            </div>
          ) : (
            <div
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ background: "oklch(0.44 0.18 78)" }}
            >
              🎓 Course Complete!
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
