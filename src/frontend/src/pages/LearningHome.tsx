import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Layers,
  Link,
  PlayCircle,
  Star,
  Trophy,
  Volume2,
  Waves,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";

export type Section =
  | "home"
  | "tenses"
  | "phonics"
  | "auxiliaries"
  | "homophones"
  | "vowels"
  | "quiz";

interface Module {
  id: Section;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: string;
  color: string;
  bgColor: string;
  dataOcid: string;
}

const modules: Module[] = [
  {
    id: "tenses",
    title: "Tenses",
    description:
      "Master all 12 English tenses with formulas, rules, and examples.",
    icon: <BookOpen className="w-7 h-7" />,
    count: "12 Tenses",
    color: "oklch(0.55 0.26 28)",
    bgColor: "oklch(0.96 0.1 28)",
    dataOcid: "home.tenses.card",
  },
  {
    id: "phonics",
    title: "Phonics",
    description:
      "Learn letter sounds, blends, and digraphs for perfect pronunciation.",
    icon: <Volume2 className="w-7 h-7" />,
    count: "46 Sounds",
    color: "oklch(0.50 0.24 160)",
    bgColor: "oklch(0.94 0.1 160)",
    dataOcid: "home.phonics.card",
  },
  {
    id: "auxiliaries",
    title: "Auxiliaries",
    description: "Primary and modal auxiliaries explained with clear examples.",
    icon: <Layers className="w-7 h-7" />,
    count: "13 Auxiliaries",
    color: "oklch(0.50 0.28 265)",
    bgColor: "oklch(0.93 0.1 265)",
    dataOcid: "home.auxiliaries.card",
  },
  {
    id: "homophones",
    title: "Homophones",
    description:
      "Never confuse words that sound alike — learn every pair with examples.",
    icon: <Link className="w-7 h-7" />,
    count: "20 Pairs",
    color: "oklch(0.54 0.26 310)",
    bgColor: "oklch(0.95 0.1 310)",
    dataOcid: "home.homophones.card",
  },
  {
    id: "vowels",
    title: "Vowels",
    description:
      "Long and short vowel sounds with pictures to help you remember.",
    icon: <Waves className="w-7 h-7" />,
    count: "10 Vowel Sounds",
    color: "oklch(0.58 0.26 80)",
    bgColor: "oklch(0.96 0.1 80)",
    dataOcid: "home.vowels.card",
  },
  {
    id: "quiz",
    title: "Quiz",
    description:
      "Test your knowledge across all topics with interactive multiple-choice questions.",
    icon: <Trophy className="w-7 h-7" />,
    count: "50+ Questions",
    color: "oklch(0.52 0.24 295)",
    bgColor: "oklch(0.95 0.08 295)",
    dataOcid: "home.quiz.card",
  },
];

const stats = [
  { value: "12", label: "Tenses Covered" },
  { value: "46", label: "Phonics Sounds" },
  { value: "20", label: "Homophone Pairs" },
  { value: "50+", label: "Quiz Questions" },
];

interface Props {
  onNavigate: (section: Section) => void;
}

export default function LearningHome({ onNavigate }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-28 px-4">
        {/* Dot grid decoration */}
        <div className="absolute inset-0 dot-grid opacity-20" />

        {/* Floating decorative circles */}
        <div
          className="absolute top-10 right-10 w-36 h-36 rounded-full opacity-30"
          style={{ background: "oklch(0.92 0.22 80)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-52 h-52 rounded-full opacity-20"
          style={{ background: "oklch(0.88 0.22 160)" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full opacity-20"
          style={{ background: "oklch(0.9 0.22 310)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(1 0 0 / 12%)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Star
              className="w-4 h-4 fill-current"
              style={{ color: "oklch(0.85 0.2 80)" }}
            />
            <span>Your Complete English Grammar Guide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6"
          >
            Learning
            <span className="block" style={{ color: "oklch(0.92 0.24 80)" }}>
              Point
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "oklch(0.9 0.03 260)" }}
          >
            Master English grammar the modern way. All tenses, phonics,
            auxiliaries, homophones, and vowels — beautifully organized for
            quick learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => onNavigate("tenses")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "oklch(0.88 0.26 80)",
                color: "oklch(0.18 0.06 80)",
              }}
            >
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("phonics")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95"
              style={{
                background: "oklch(1 0 0 / 12%)",
                color: "white",
                backdropFilter: "blur(8px)",
                border: "1px solid oklch(1 0 0 / 20%)",
              }}
            >
              <GraduationCap className="w-5 h-5" />
              Explore Phonics
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-card border-b border-border shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-extrabold text-foreground">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-body mt-0.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Module Cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your Topic
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Click any module to dive in. Each section is designed for fast,
              engaging learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.button
                key={mod.id}
                data-ocid={mod.dataOcid}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.08,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate(mod.id)}
                className="relative group text-left p-6 rounded-2xl border bg-card shadow-card hover:shadow-card-hover transition-shadow overflow-hidden"
                style={{
                  borderColor: `${mod.color.replace("oklch(", "oklch(").split(")")[0]} / 20%)`,
                }}
              >
                {/* Background gradient swatch */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full translate-x-12 -translate-y-12 opacity-50"
                  style={{ background: mod.bgColor }}
                />

                <div
                  className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                  style={{ background: mod.bgColor, color: mod.color }}
                >
                  {mod.icon}
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {mod.title}
                    </h3>
                    <span
                      className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: mod.bgColor, color: mod.color }}
                    >
                      {mod.count}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {mod.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: mod.color }}
                  >
                    Open Module
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channel QR Code Poster */}
      <section className="py-14 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 120,
            damping: 18,
          }}
          data-ocid="home.youtube.card"
          className="max-w-2xl mx-auto"
        >
          {/* Poster Card */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: "oklch(0.12 0.04 20)",
            }}
          >
            {/* Top accent bar with YouTube red */}
            <div
              className="h-2 w-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.50 0.24 25), oklch(0.40 0.28 20), oklch(0.50 0.24 25))",
              }}
            />

            {/* Background decorative circles */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3"
              style={{ background: "oklch(0.55 0.28 25)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3"
              style={{ background: "oklch(0.45 0.2 20)" }}
            />

            <div className="relative px-8 py-10 flex flex-col items-center gap-6 text-white text-center">
              {/* YouTube badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full font-semibold text-sm shadow-lg"
                style={{ background: "oklch(0.50 0.24 25)", color: "white" }}
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span>YouTube Channel</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="font-display text-2xl md:text-3xl font-extrabold leading-tight"
              >
                Subscribe to Our{" "}
                <span style={{ color: "oklch(0.70 0.22 25)" }}>
                  YouTube Channel
                </span>
              </motion.h2>

              {/* Subtext */}
              <p
                className="font-body text-base max-w-sm leading-relaxed"
                style={{ color: "oklch(0.80 0.04 20)" }}
              >
                Scan the QR code to visit our channel and watch free English
                lessons — anytime, anywhere.
              </p>

              {/* QR Code Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
                className="relative"
              >
                {/* Glow effect behind QR */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-40 scale-110"
                  style={{ background: "oklch(0.50 0.24 25)" }}
                />
                {/* White card frame */}
                <div
                  className="relative p-4 rounded-2xl shadow-2xl"
                  style={{ background: "white" }}
                >
                  <img
                    src="/assets/uploads/WhatsApp-Image-2026-02-20-at-15.31.39-1-07-03-26-1.jpeg"
                    alt="YouTube Channel QR Code — scan to subscribe"
                    className="w-52 h-52 object-contain rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Scan instruction */}
              <div
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "oklch(0.75 0.08 20)" }}
              >
                <PlayCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "oklch(0.70 0.22 25)" }}
                />
                <span>
                  Point your camera at the QR code to open the channel
                </span>
              </div>

              {/* Subscribe button */}
              <motion.a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-ocid="home.youtube.button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg transition-shadow hover:shadow-xl"
                style={{
                  background: "oklch(0.50 0.24 25)",
                  color: "white",
                }}
              >
                <Youtube className="w-5 h-5 fill-white" />
                Subscribe on YouTube
              </motion.a>
            </div>

            {/* Bottom accent */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.50 0.24 25), transparent)",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Motivational Banner */}
      <section className="py-12 px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl gradient-hero relative overflow-hidden p-10 text-center text-white"
        >
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Learn English with Confidence
            </h3>
            <p className="text-white/80 font-body text-base max-w-xl mx-auto">
              Every rule, every example, and every picture — all in one place.
              Built for the new generation of English learners.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
