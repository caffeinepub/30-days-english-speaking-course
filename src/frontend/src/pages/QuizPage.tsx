import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Brain,
  CheckCircle,
  ChevronRight,
  Layers,
  Link,
  RotateCcw,
  Star,
  Trophy,
  Volume2,
  Waves,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { type QuizQuestion, quizQuestions } from "../data/quizData";

type Topic = "all" | QuizQuestion["topic"];

interface TopicConfig {
  id: Topic;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const topicConfigs: TopicConfig[] = [
  {
    id: "all",
    label: "All Topics",
    icon: <Brain className="w-4 h-4" />,
    color: "oklch(0.50 0.28 300)",
    bgColor: "oklch(0.94 0.08 300)",
  },
  {
    id: "tenses",
    label: "Tenses",
    icon: <BookOpen className="w-4 h-4" />,
    color: "oklch(0.55 0.26 28)",
    bgColor: "oklch(0.96 0.08 28)",
  },
  {
    id: "phonics",
    label: "Phonics",
    icon: <Volume2 className="w-4 h-4" />,
    color: "oklch(0.50 0.24 160)",
    bgColor: "oklch(0.94 0.08 160)",
  },
  {
    id: "auxiliaries",
    label: "Auxiliaries",
    icon: <Layers className="w-4 h-4" />,
    color: "oklch(0.50 0.28 265)",
    bgColor: "oklch(0.93 0.09 265)",
  },
  {
    id: "homophones",
    label: "Homophones",
    icon: <Link className="w-4 h-4" />,
    color: "oklch(0.54 0.26 310)",
    bgColor: "oklch(0.95 0.08 310)",
  },
  {
    id: "vowels",
    label: "Vowels",
    icon: <Waves className="w-4 h-4" />,
    color: "oklch(0.58 0.26 80)",
    bgColor: "oklch(0.96 0.08 80)",
  },
];

const ANSWER_LABELS = ["A", "B", "C", "D"];

function getTopicConfig(topic: Topic): TopicConfig {
  return topicConfigs.find((t) => t.id === topic) ?? topicConfigs[0];
}

function getStars(score: number, total: number): number {
  const pct = total > 0 ? score / total : 0;
  if (pct >= 0.8) return 3;
  if (pct >= 0.5) return 2;
  return 1;
}

function getEncouragingMessage(score: number, total: number): string {
  const pct = total > 0 ? score / total : 0;
  if (pct === 1) return "Perfect score! You're a grammar superstar! 🌟";
  if (pct >= 0.8) return "Excellent work! You really know your stuff! 🎉";
  if (pct >= 0.6) return "Great job! Keep practicing to get even better! 💪";
  if (pct >= 0.4) return "Good effort! Review the topics and try again! 📚";
  return "Keep learning! Every attempt makes you stronger! 🌱";
}

// Shuffle array (Fisher-Yates)
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getQuestions(topic: Topic): QuizQuestion[] {
  const filtered =
    topic === "all"
      ? quizQuestions
      : quizQuestions.filter((q) => q.topic === topic);
  // Cap at 10 questions for a good quiz experience
  return shuffle(filtered).slice(0, Math.min(10, filtered.length));
}

export default function QuizPage() {
  const [selectedTopic, setSelectedTopic] = useState<Topic>("all");
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(1);

  const topicConfig = useMemo(
    () => getTopicConfig(selectedTopic),
    [selectedTopic],
  );

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const score = useMemo(
    () =>
      answers.reduce((acc, ans, i) => {
        const q = questions[i];
        return acc + (q && ans === q.correctIndex ? 1 : 0);
      }, 0),
    [answers, questions],
  );

  const handleStartQuiz = (topic: Topic) => {
    const qs = getQuestions(topic);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setQuizStarted(true);
    setDirection(1);
  };

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setDirection(1);

    if (currentIndex + 1 >= questions.length) {
      setShowResults(true);
    } else {
      setSelectedAnswer(null);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRetry = () => {
    handleStartQuiz(selectedTopic);
  };

  const handleChooseTopic = () => {
    setQuizStarted(false);
    setShowResults(false);
    setSelectedAnswer(null);
    setAnswers([]);
    setCurrentIndex(0);
  };

  const getAnswerStyle = (optionIndex: number) => {
    if (!isAnswered) {
      return {
        background: "oklch(0.98 0.01 265)",
        borderColor: "oklch(0.88 0.025 265)",
        color: "oklch(0.18 0.04 260)",
      };
    }
    if (optionIndex === currentQuestion.correctIndex) {
      return {
        background: "oklch(0.96 0.08 145)",
        borderColor: "oklch(0.55 0.22 145)",
        color: "oklch(0.28 0.12 145)",
      };
    }
    if (optionIndex === selectedAnswer) {
      return {
        background: "oklch(0.96 0.08 28)",
        borderColor: "oklch(0.55 0.22 28)",
        color: "oklch(0.28 0.12 28)",
      };
    }
    return {
      background: "oklch(0.96 0.005 265)",
      borderColor: "oklch(0.9 0.01 265)",
      color: "oklch(0.5 0.03 265)",
    };
  };

  const progressPercent =
    questions.length > 0
      ? ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100
      : 0;

  // ===================== TOPIC SELECTOR =====================
  if (!quizStarted) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg"
              style={{ background: "oklch(0.50 0.28 300)" }}
            >
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-3">
              Quiz Time!
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto">
              Test what you've learned. Pick a topic and challenge yourself with
              10 questions.
            </p>
          </motion.div>

          {/* Topic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topicConfigs.map((topic, i) => (
              <motion.button
                key={topic.id}
                data-ocid="quiz.topic.tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.07,
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedTopic(topic.id);
                  handleStartQuiz(topic.id);
                }}
                className="relative group text-left p-6 rounded-2xl border-2 bg-card shadow-sm hover:shadow-md transition-all overflow-hidden"
                style={{
                  borderColor: `${topic.color.replace("oklch(", "").slice(0, -1)} / 20%)`,
                }}
              >
                {/* BG circle */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full translate-x-10 -translate-y-10 opacity-40"
                  style={{ background: topic.bgColor }}
                />
                <div
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ background: topic.bgColor, color: topic.color }}
                >
                  {topic.icon}
                </div>
                <h3 className="relative font-display text-xl font-bold text-foreground mb-1">
                  {topic.label}
                </h3>
                <p className="relative text-sm font-body text-muted-foreground mb-3">
                  {topic.id === "all"
                    ? "10 random questions from all topics"
                    : `10 questions on ${topic.label.toLowerCase()}`}
                </p>
                <div
                  className="relative inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: topic.color }}
                >
                  Start Quiz
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ===================== RESULTS SCREEN =====================
  if (showResults) {
    const stars = getStars(score, questions.length);
    const pct = Math.round((score / questions.length) * 100);
    const message = getEncouragingMessage(score, questions.length);

    return (
      <div className="min-h-screen py-12 px-4 flex items-start justify-center">
        <div className="max-w-2xl w-full">
          <motion.div
            data-ocid="quiz.results.panel"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-card rounded-3xl border-2 overflow-hidden shadow-xl p-8 md:p-12 text-center"
            style={{
              borderColor: `${topicConfig.color.replace("oklch(", "").slice(0, -1)} / 25%)`,
            }}
          >
            {/* BG decoration */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${topicConfig.bgColor}, transparent 70%)`,
              }}
            />

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative flex justify-center gap-2 mb-6"
            >
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.3 + s * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                >
                  <Star
                    className="w-10 h-10"
                    fill={
                      s <= stars
                        ? "oklch(0.82 0.22 80)"
                        : "oklch(0.88 0.02 265)"
                    }
                    stroke={
                      s <= stars
                        ? "oklch(0.68 0.22 80)"
                        : "oklch(0.75 0.02 265)"
                    }
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="relative mb-4"
            >
              <div
                className="font-display text-7xl md:text-8xl font-extrabold mb-1"
                style={{ color: topicConfig.color }}
              >
                {score}
                <span className="text-4xl md:text-5xl text-muted-foreground">
                  /{questions.length}
                </span>
              </div>
              <div
                className="inline-block font-semibold text-2xl px-4 py-1 rounded-full"
                style={{
                  background: topicConfig.bgColor,
                  color: topicConfig.color,
                }}
              >
                {pct}%
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative font-body text-lg text-muted-foreground mb-10 max-w-sm mx-auto"
            >
              {message}
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button
                type="button"
                data-ocid="quiz.retry.button"
                onClick={handleRetry}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-md text-white"
                style={{ background: topicConfig.color }}
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
              <button
                type="button"
                data-ocid="quiz.topic_select.button"
                onClick={handleChooseTopic}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 border-2"
                style={{
                  borderColor: `${topicConfig.color.replace("oklch(", "").slice(0, -1)} / 30%)`,
                  color: topicConfig.color,
                  background: topicConfig.bgColor,
                }}
              >
                <Trophy className="w-4 h-4" />
                Choose Another Topic
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ===================== ACTIVE QUIZ =====================
  if (!currentQuestion) return null;

  const questionTopicConfig = getTopicConfig(currentQuestion.topic);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <button
            type="button"
            data-ocid="quiz.topic_select.button"
            onClick={handleChooseTopic}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Change Topic
          </button>
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: topicConfig.bgColor,
              color: topicConfig.color,
            }}
          >
            {topicConfig.icon}
            {topicConfig.label}
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          data-ocid="quiz.progress.section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground mb-2.5">
            <span>
              Question{" "}
              <span
                style={{ color: topicConfig.color }}
                className="font-extrabold"
              >
                {currentIndex + 1}
              </span>{" "}
              of {questions.length}
            </span>
            <span>
              {
                answers.filter((a, i) => {
                  const q = questions[i];
                  return q && a === q.correctIndex;
                }).length
              }{" "}
              correct so far
            </span>
          </div>
          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: topicConfig.color }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="bg-card rounded-3xl border-2 p-8 shadow-lg mb-6"
            style={{
              borderColor: `${questionTopicConfig.color.replace("oklch(", "").slice(0, -1)} / 15%)`,
            }}
          >
            {/* Topic badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{
                background: questionTopicConfig.bgColor,
                color: questionTopicConfig.color,
              }}
            >
              {questionTopicConfig.icon}
              {currentQuestion.topic.charAt(0).toUpperCase() +
                currentQuestion.topic.slice(1)}
            </div>

            {/* Question text */}
            <p className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-8">
              {currentQuestion.question}
            </p>

            {/* Answer options — 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuestion.options.map((option, i) => {
                const style = getAnswerStyle(i);
                const isCorrect =
                  isAnswered && i === currentQuestion.correctIndex;
                const isWrong =
                  isAnswered &&
                  i === selectedAnswer &&
                  i !== currentQuestion.correctIndex;

                return (
                  <motion.button
                    key={option}
                    data-ocid={`quiz.answer.button.${i + 1}`}
                    type="button"
                    onClick={() => handleSelectAnswer(i)}
                    disabled={isAnswered}
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                    animate={
                      isCorrect
                        ? { scale: [1, 1.03, 1] }
                        : isWrong
                          ? { x: [0, -6, 6, -4, 4, 0] }
                          : {}
                    }
                    transition={isCorrect || isWrong ? { duration: 0.35 } : {}}
                    className="relative flex items-start gap-3 p-4 rounded-2xl border-2 text-left font-semibold text-sm transition-colors disabled:cursor-default"
                    style={{
                      background: style.background,
                      borderColor: style.borderColor,
                      color: style.color,
                    }}
                  >
                    {/* Letter label */}
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-extrabold"
                      style={{
                        background: isAnswered
                          ? i === currentQuestion.correctIndex
                            ? "oklch(0.55 0.22 145)"
                            : i === selectedAnswer
                              ? "oklch(0.55 0.22 28)"
                              : "oklch(0.82 0.02 265)"
                          : questionTopicConfig.color,
                        color: "white",
                      }}
                    >
                      {ANSWER_LABELS[i]}
                    </span>
                    <span className="flex-1 pt-0.5 font-body">{option}</span>

                    {/* Correct/wrong icon */}
                    {isAnswered && i === currentQuestion.correctIndex && (
                      <CheckCircle
                        className="shrink-0 w-5 h-5 mt-0.5"
                        style={{ color: "oklch(0.55 0.22 145)" }}
                      />
                    )}
                    {isWrong && (
                      <XCircle
                        className="shrink-0 w-5 h-5 mt-0.5"
                        style={{ color: "oklch(0.55 0.22 28)" }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className="p-4 rounded-2xl border-2"
                    style={{
                      background:
                        selectedAnswer === currentQuestion.correctIndex
                          ? "oklch(0.96 0.07 145)"
                          : "oklch(0.96 0.06 28)",
                      borderColor:
                        selectedAnswer === currentQuestion.correctIndex
                          ? "oklch(0.55 0.18 145 / 30%)"
                          : "oklch(0.55 0.18 28 / 30%)",
                    }}
                  >
                    <div className="flex items-start gap-2.5">
                      {selectedAnswer === currentQuestion.correctIndex ? (
                        <CheckCircle
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: "oklch(0.45 0.2 145)" }}
                        />
                      ) : (
                        <XCircle
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: "oklch(0.45 0.2 28)" }}
                        />
                      )}
                      <div>
                        <p
                          className="font-semibold text-sm mb-0.5"
                          style={{
                            color:
                              selectedAnswer === currentQuestion.correctIndex
                                ? "oklch(0.35 0.16 145)"
                                : "oklch(0.35 0.16 28)",
                          }}
                        >
                          {selectedAnswer === currentQuestion.correctIndex
                            ? "Correct! ✓"
                            : "Not quite!"}
                        </p>
                        <p
                          className="font-body text-sm leading-relaxed"
                          style={{
                            color:
                              selectedAnswer === currentQuestion.correctIndex
                                ? "oklch(0.35 0.12 145)"
                                : "oklch(0.35 0.12 28)",
                          }}
                        >
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex justify-end"
            >
              <button
                type="button"
                data-ocid="quiz.next.button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 text-white"
                style={{ background: topicConfig.color }}
              >
                {currentIndex + 1 >= questions.length
                  ? "See Results"
                  : "Next Question"}
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
