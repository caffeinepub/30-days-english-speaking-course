import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookMarked,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock,
  Lightbulb,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { type Story, stories } from "../data/stories";

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "oklch(0.94 0.10 155)", text: "oklch(0.36 0.18 155)" },
  Elementary: { bg: "oklch(0.94 0.10 80)", text: "oklch(0.45 0.20 80)" },
  Intermediate: { bg: "oklch(0.93 0.10 258)", text: "oklch(0.44 0.22 258)" },
};

function StoryCard({ story, onOpen }: { story: Story; onOpen: () => void }) {
  const lc = LEVEL_COLORS[story.level] ?? LEVEL_COLORS.Beginner;
  return (
    <motion.button
      type="button"
      data-ocid={`stories.${story.id}.card`}
      onClick={onOpen}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="text-left p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow w-full"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-4xl">{story.emoji}</span>
        <Badge
          className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border-0"
          style={{ background: lc.bg, color: lc.text }}
        >
          {story.level}
        </Badge>
      </div>
      <h3
        className="font-display text-lg font-bold text-foreground mb-0.5"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {story.title}
      </h3>
      <p
        className="text-sm text-muted-foreground mb-3"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {story.titleHindi}
      </p>
      <div className="flex items-center gap-3 flex-wrap">
        <span
          className="flex items-center gap-1 text-xs font-medium"
          style={{
            color: "oklch(0.50 0.08 258)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <BookMarked className="w-3 h-3" />
          {story.topic}
        </span>
        <span
          className="flex items-center gap-1 text-xs font-medium"
          style={{
            color: "oklch(0.55 0.05 258)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <Clock className="w-3 h-3" />
          {story.readingTime}
        </span>
      </div>
    </motion.button>
  );
}

function StoryDetail({ story, onBack }: { story: Story; onBack: () => void }) {
  const [showHindi, setShowHindi] = useState<Record<number, boolean>>({});
  const [vocabOpen, setVocabOpen] = useState(false);
  const lc = LEVEL_COLORS[story.level] ?? LEVEL_COLORS.Beginner;

  const toggleHindi = (i: number) =>
    setShowHindi((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.25 }}
      className="max-w-3xl mx-auto px-4 py-8"
    >
      {/* Back */}
      <Button
        variant="ghost"
        data-ocid="stories.back.button"
        onClick={onBack}
        className="mb-6 -ml-2 flex items-center gap-2 text-sm font-semibold"
        style={{
          color: "oklch(0.44 0.18 258)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Stories
      </Button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-5xl">{story.emoji}</span>
          <div>
            <Badge
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full border-0 mb-1"
              style={{ background: lc.bg, color: lc.text }}
            >
              {story.level}
            </Badge>
            <h1
              className="font-display text-2xl md:text-3xl font-extrabold text-foreground leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {story.title}
            </h1>
            <p
              className="text-base font-medium"
              style={{
                color: "oklch(0.50 0.06 258)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {story.titleHindi}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-2">
          <span
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{
              color: "oklch(0.45 0.08 258)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <BookMarked className="w-4 h-4" />
            {story.topic} / {story.topicHindi}
          </span>
          <span
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{
              color: "oklch(0.50 0.05 258)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <Clock className="w-4 h-4" />
            {story.readingTime} read
          </span>
        </div>
        <p
          className="text-xs mt-3 italic"
          style={{
            color: "oklch(0.60 0.04 258)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Tap "Show Hindi" below any paragraph to see the translation.
        </p>
      </div>

      {/* Story paragraphs */}
      <div className="space-y-5 mb-10">
        {story.paragraphs.map((para, i) => (
          <div
            key={para.english.slice(0, 30)}
            className="rounded-2xl border bg-card p-5 shadow-xs"
          >
            <p
              className="text-base leading-relaxed text-foreground mb-3"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {para.english}
            </p>
            <button
              type="button"
              data-ocid={`stories.para_${i + 1}.toggle`}
              onClick={() => toggleHindi(i)}
              className="text-xs font-semibold flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{
                color: "oklch(0.44 0.18 258)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {showHindi[i] ? (
                <>
                  <ChevronUp className="w-3 h-3" /> Hide Hindi
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" /> Show Hindi / हिन्दी देखें
                </>
              )}
            </button>
            <AnimatePresence>
              {showHindi[i] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm leading-relaxed mt-3 pt-3 border-t border-border overflow-hidden"
                  style={{
                    color: "oklch(0.42 0.08 258)",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {para.hindi}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Vocabulary */}
      <div className="rounded-2xl border bg-card shadow-xs mb-8 overflow-hidden">
        <button
          type="button"
          data-ocid="stories.vocab.toggle"
          onClick={() => setVocabOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 font-bold text-foreground hover:bg-muted/30 transition-colors"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          <span className="flex items-center gap-2">
            <BookOpen
              className="w-5 h-5"
              style={{ color: "oklch(0.44 0.18 258)" }}
            />
            Vocabulary ({story.vocabulary.length} words)
          </span>
          {vocabOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        <AnimatePresence>
          {vocabOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {story.vocabulary.map((v) => (
                  <div
                    key={v.word}
                    className="flex items-start gap-2 p-3 rounded-xl"
                    style={{ background: "oklch(0.97 0.02 258)" }}
                  >
                    <span
                      className="font-bold text-sm shrink-0"
                      style={{
                        color: "oklch(0.44 0.18 258)",
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {v.word}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: "oklch(0.40 0.06 258)",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      — {v.meaning}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Moral */}
      <div
        className="rounded-2xl p-6 flex gap-4"
        style={{
          background: "oklch(0.94 0.10 80)",
          border: "1px solid oklch(0.85 0.14 80)",
        }}
      >
        <Lightbulb
          className="w-6 h-6 shrink-0 mt-0.5"
          style={{ color: "oklch(0.45 0.20 80)" }}
        />
        <div>
          <p
            className="font-bold text-sm mb-1"
            style={{
              color: "oklch(0.28 0.10 80)",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Moral of the Story
          </p>
          <p
            className="text-sm leading-relaxed font-medium"
            style={{
              color: "oklch(0.32 0.10 80)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {story.moralEnglish}
          </p>
          <p
            className="text-sm leading-relaxed mt-1"
            style={{
              color: "oklch(0.40 0.08 80)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {story.moralHindi}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StoriesPage() {
  const [selected, setSelected] = useState<Story | null>(null);

  if (selected) {
    return (
      <AnimatePresence mode="wait">
        <StoryDetail
          key={selected.id}
          story={selected}
          onBack={() => setSelected(null)}
        />
      </AnimatePresence>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          style={{
            background: "oklch(0.93 0.10 258)",
            color: "oklch(0.38 0.20 258)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <BookOpen className="w-4 h-4" />
          Reading Practice
        </div>
        <h1
          className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          English Stories
        </h1>
        <p
          className="text-muted-foreground text-lg max-w-xl mx-auto"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Read bilingual stories in English and Hindi. Build your vocabulary and
          improve your reading confidence, one story at a time.
        </p>
      </motion.div>

      {/* Level legend */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.entries(LEVEL_COLORS).map(([level, lc]) => (
          <span
            key={level}
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: lc.bg,
              color: lc.text,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {level}
          </span>
        ))}
      </div>

      {/* Story Grid */}
      <div
        data-ocid="stories.list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {stories.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 * i,
              type: "spring",
              stiffness: 200,
              damping: 22,
            }}
          >
            <StoryCard story={story} onOpen={() => setSelected(story)} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
