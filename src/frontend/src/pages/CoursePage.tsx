import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { courseData } from "../data/courseData";

interface Props {
  onBack: () => void;
  onSelectDay: (day: number) => void;
}

// Color palette cycling through the 30 days
const dayColors = [
  { color: "oklch(0.42 0.18 28)", bg: "oklch(0.96 0.07 28)" }, // warm red-orange
  { color: "oklch(0.38 0.16 175)", bg: "oklch(0.94 0.07 175)" }, // teal
  { color: "oklch(0.35 0.16 258)", bg: "oklch(0.93 0.07 258)" }, // navy
  { color: "oklch(0.42 0.18 320)", bg: "oklch(0.95 0.06 320)" }, // burgundy-pink
  { color: "oklch(0.44 0.18 78)", bg: "oklch(0.96 0.07 78)" }, // gold
  { color: "oklch(0.40 0.18 200)", bg: "oklch(0.94 0.07 200)" }, // cyan
];

function getDayColor(day: number) {
  return dayColors[(day - 1) % dayColors.length];
}

// Week groupings
const weeks = [
  {
    label: "Week 1",
    subtitle: "Greetings & Simple Present",
    days: [1, 2, 3, 4, 5],
    color: "oklch(0.42 0.18 28)",
  },
  {
    label: "Week 2",
    subtitle: "Daily Routines & Questions",
    days: [6, 7, 8, 9, 10],
    color: "oklch(0.38 0.16 175)",
  },
  {
    label: "Week 3",
    subtitle: "Past Tenses & Storytelling",
    days: [11, 12, 13, 14, 15],
    color: "oklch(0.35 0.16 258)",
  },
  {
    label: "Week 4",
    subtitle: "Future & Modal Verbs",
    days: [16, 17, 18, 19, 20],
    color: "oklch(0.42 0.18 320)",
  },
  {
    label: "Week 5",
    subtitle: "Conditionals & Opinions",
    days: [21, 22, 23, 24, 25],
    color: "oklch(0.44 0.18 78)",
  },
  {
    label: "Week 6",
    subtitle: "Advanced & Fluency",
    days: [26, 27, 28, 29, 30],
    color: "oklch(0.40 0.18 200)",
  },
];

export default function CoursePage({ onBack, onSelectDay }: Props) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative overflow-hidden py-14 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.12 258) 0%, oklch(0.28 0.16 195) 50%, oklch(0.32 0.14 160) 100%)",
        }}
      >
        {/* Dot grid decoration */}
        <div className="absolute inset-0 dot-grid opacity-20" />
        {/* Floating circles */}
        <div
          className="absolute top-8 right-12 w-48 h-48 rounded-full opacity-20"
          style={{ background: "oklch(0.55 0.16 80)" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-15"
          style={{ background: "oklch(0.45 0.2 310)" }}
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Back button */}
          <motion.button
            type="button"
            data-ocid="course.back.button"
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
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-end gap-6"
          >
            <div className="flex-1">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  background: "oklch(0.85 0.18 78)",
                  color: "oklch(0.22 0.12 78)",
                }}
              >
                <Star className="w-3 h-3 fill-current" />
                Complete Course
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                30 Days English
                <span
                  className="block"
                  style={{ color: "oklch(0.85 0.18 78)" }}
                >
                  Speaking Course
                </span>
              </h1>
              <p
                className="font-body text-lg leading-relaxed max-w-xl"
                style={{ color: "oklch(0.88 0.04 200)" }}
              >
                A complete, structured journey from beginner to confident
                English speaker. Each day builds on the last — step by step,
                tense by tense.
                <br />
                <span style={{ color: "oklch(0.80 0.06 80)" }}>
                  (एक पूरी यात्रा — हर दिन एक नया कदम।)
                </span>
              </p>
            </div>

            {/* Progress banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
              className="flex-shrink-0 rounded-2xl p-6 text-center min-w-[180px]"
              style={{
                background: "oklch(1 0 0 / 10%)",
                backdropFilter: "blur(12px)",
                border: "1px solid oklch(1 0 0 / 20%)",
              }}
            >
              <Calendar className="w-8 h-8 mx-auto mb-2 text-white opacity-80" />
              <div className="font-display text-4xl font-extrabold text-white mb-1">
                30
              </div>
              <div className="font-body text-sm font-semibold text-white/70 uppercase tracking-widest">
                Days
              </div>
              <div
                className="mt-3 font-body text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: "oklch(0.85 0.18 78)",
                  color: "oklch(0.22 0.12 78)",
                }}
              >
                Complete Journey
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-card border-b border-border shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { value: "30", label: "Daily Lessons" },
              { value: "150", label: "Vocabulary Words" },
              { value: "150", label: "Practice Sentences" },
              { value: "6", label: "Grammar Levels" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
              >
                <div className="font-display text-2xl font-extrabold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground font-body mt-0.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Course by Weeks */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {weeks.map((week, wIdx) => (
          <motion.div
            key={week.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + wIdx * 0.08 }}
          >
            {/* Week header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl font-display text-base font-extrabold text-white shadow-sm"
                style={{ background: week.color }}
              >
                {wIdx + 1}
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  {week.label}
                </h2>
                <p className="text-sm text-muted-foreground font-body">
                  {week.subtitle}
                </p>
              </div>
              <div
                className="ml-auto h-px flex-1 max-w-xs"
                style={{
                  background: `${week.color.replace("oklch(", "").replace(")", "")} / 25%)`,
                }}
              />
            </div>

            {/* Day cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {week.days.map((dayNum) => {
                const day = courseData[dayNum - 1];
                const { color, bg } = getDayColor(dayNum);

                return (
                  <motion.button
                    key={dayNum}
                    type="button"
                    data-ocid={`course.day.card.${dayNum}`}
                    onClick={() => onSelectDay(dayNum)}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative text-left p-5 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    style={{
                      borderColor: `${color.replace("oklch(", "").replace(")", "")} / 18%)`,
                    }}
                  >
                    {/* BG swatch */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-full translate-x-8 -translate-y-8 opacity-60"
                      style={{ background: bg }}
                    />

                    {/* Day badge */}
                    <div
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 font-display text-sm font-extrabold shadow-sm"
                      style={{ background: bg, color }}
                    >
                      {dayNum}
                    </div>

                    <div className="relative">
                      <div className="font-display text-sm font-bold text-foreground leading-tight mb-1.5 line-clamp-2">
                        {day.title}
                      </div>
                      <div
                        className="font-body text-xs font-medium mb-2.5 line-clamp-1"
                        style={{ color }}
                      >
                        {day.topic}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <BookOpen className="w-3 h-3 flex-shrink-0" />
                        <span className="line-clamp-1">
                          {day.vocabulary.length} words
                        </span>
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom motivational banner */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl gradient-hero relative overflow-hidden p-10 text-center text-white"
        >
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-display text-2xl font-bold mb-2">
              Start with Day 1 — End with Confidence!
            </h3>
            <p className="font-body text-white/80 text-base max-w-lg mx-auto">
              Click any day card to begin your lesson. Each lesson takes 15–20
              minutes. Consistency is the key — one day at a time!
              <br />
              <span className="text-white/60 text-sm">
                (एक-एक दिन करके आगे बढ़ें — निरंतरता ही सफलता की कुंजी है।)
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
