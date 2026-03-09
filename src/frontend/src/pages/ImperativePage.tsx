import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const COLOR = "oklch(0.52 0.26 200)";
const BG_COLOR = "oklch(0.94 0.1 200)";

interface ImperativeExample {
  english: string;
  hindi: string;
}

interface ImperativeType {
  id: string;
  type: "positive" | "negative" | "polite";
  label: string;
  badge: string;
  structure: string;
  rule: string;
  color: string;
  bgColor: string;
  examples: ImperativeExample[];
}

const imperativeTypes: ImperativeType[] = [
  {
    id: "positive",
    type: "positive",
    label: "Positive Imperative",
    badge: "Command",
    structure: "Base Verb + (Object/Complement)",
    rule: "Used to give direct instructions, orders, or commands. The subject 'you' is always implied but not stated.",
    color: "oklch(0.50 0.24 160)",
    bgColor: "oklch(0.94 0.1 160)",
    examples: [
      { english: "Open the door.", hindi: "Darwaza kholo." },
      { english: "Sit down, please.", hindi: "Baith jao." },
      { english: "Read this book.", hindi: "Yeh kitab pado." },
      { english: "Come here.", hindi: "Idhar aao." },
      { english: "Write your name.", hindi: "Apna naam likho." },
      { english: "Listen carefully.", hindi: "Dhyan se suno." },
      { english: "Stand up.", hindi: "Khade ho jao." },
      { english: "Clean your room.", hindi: "Apna kamra saaf karo." },
      { english: "Drink water.", hindi: "Paani piyo." },
      { english: "Do your homework.", hindi: "Apna griha karya karo." },
    ],
  },
  {
    id: "negative",
    type: "negative",
    label: "Negative Imperative",
    badge: "Prohibition",
    structure: "Do not / Don't + Base Verb",
    rule: "Used to forbid, prohibit, or warn someone not to do something. 'Do not' is formal; 'Don't' is informal.",
    color: "oklch(0.50 0.24 25)",
    bgColor: "oklch(0.96 0.1 25)",
    examples: [
      { english: "Don't shout.", hindi: "Chillao mat." },
      {
        english: "Do not run in the corridor.",
        hindi: "Corridor mein mat daudo.",
      },
      { english: "Don't touch that.", hindi: "Use mat chhuo." },
      { english: "Do not lie.", hindi: "Jhooth mat bolo." },
      { english: "Don't waste food.", hindi: "Khana barbaad mat karo." },
      { english: "Do not be late.", hindi: "Deri mat karo." },
      { english: "Don't forget your keys.", hindi: "Apni chabi mat bhoolo." },
      {
        english: "Do not talk during the exam.",
        hindi: "Pariksha ke dauran baat mat karo.",
      },
      { english: "Don't play with fire.", hindi: "Aag se mat khelo." },
      { english: "Do not open the window.", hindi: "Khidki mat kholo." },
    ],
  },
  {
    id: "polite",
    type: "polite",
    label: "Polite Imperative",
    badge: "Request",
    structure: "Please + Base Verb / Base Verb + please",
    rule: "Used to make polite requests. Adding 'please' makes the command respectful and courteous.",
    color: "oklch(0.52 0.26 200)",
    bgColor: "oklch(0.94 0.1 200)",
    examples: [
      { english: "Please sit down.", hindi: "Kripya baith jaiye." },
      { english: "Please help me.", hindi: "Kripya meri madad karein." },
      { english: "Please be quiet.", hindi: "Kripya shant rahiye." },
      {
        english: "Close the door, please.",
        hindi: "Darwaza band kar dijiye, please.",
      },
      { english: "Please wait here.", hindi: "Kripya yahan intezaar karein." },
      {
        english: "Bring a glass of water, please.",
        hindi: "Ek gilas paani laiye, please.",
      },
      { english: "Please speak slowly.", hindi: "Kripya dheere boliye." },
      { english: "Please repeat that.", hindi: "Kripya woh dobara boliye." },
      {
        english: "Pass the salt, please.",
        hindi: "Namak pass karein, please.",
      },
      {
        english: "Please turn off the lights.",
        hindi: "Kripya lights band kar dijiye.",
      },
    ],
  },
];

interface CardProps {
  type: ImperativeType;
  index: number;
  expandedId: string | null;
  onToggle: (id: string) => void;
}

function ImperativeCard({ type, index, expandedId, onToggle }: CardProps) {
  const isExpanded = expandedId === type.id;

  return (
    <motion.div
      key={type.id}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ delay: index * 0.07 }}
      className="rounded-2xl border bg-card shadow-card overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onToggle(type.id)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-3 h-12 rounded-full shrink-0"
            style={{ background: type.color }}
          />
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                {type.label}
              </h3>
              <Badge
                className="text-xs font-semibold"
                style={{
                  background: type.bgColor,
                  color: type.color,
                  borderColor: "transparent",
                }}
              >
                {type.badge}
              </Badge>
            </div>
            {!isExpanded && (
              <p className="font-mono text-xs text-muted-foreground mt-1 truncate max-w-[260px]">
                {type.structure}
              </p>
            )}
          </div>
        </div>
        <div
          className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
          style={{
            background: isExpanded
              ? `${type.color.replace("oklch(", "").replace(")", "")} / 15%)`
              : "oklch(0.93 0.01 265)",
            color: isExpanded ? type.color : "oklch(0.5 0.05 265)",
          }}
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

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
                {/* Structure */}
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: `${type.color.replace("oklch(", "").replace(")", "")} / 8%)`,
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: type.color }}
                  >
                    Structure / Banawat
                  </div>
                  <div className="font-mono text-sm md:text-base font-semibold text-foreground">
                    {type.structure}
                  </div>
                </div>

                {/* Rule */}
                <div className="rounded-xl p-4 bg-muted/60">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Usage Rule / Niyam
                  </div>
                  <div className="font-body text-sm md:text-base text-foreground leading-relaxed">
                    {type.rule}
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className="mt-5">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Examples / Udaharan
                </div>
                <div className="space-y-2.5">
                  {type.examples.map((ex, exIdx) => (
                    <div
                      key={ex.english}
                      className="flex items-start gap-3 rounded-lg px-4 py-3"
                      style={{
                        background:
                          exIdx % 2 === 0 ? "oklch(0.97 0.01 265)" : "white",
                        borderLeft: `3px solid ${type.color}`,
                      }}
                    >
                      <span
                        className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5"
                        style={{ background: type.color }}
                      >
                        {exIdx + 1}
                      </span>
                      <div>
                        <div className="font-body text-sm md:text-base text-foreground font-semibold leading-relaxed">
                          {ex.english}
                        </div>
                        <div
                          className="font-body text-xs mt-0.5 italic"
                          style={{ color: "oklch(0.52 0.06 265)" }}
                        >
                          {ex.hindi}
                        </div>
                      </div>
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
}

export default function ImperativePage() {
  const [expandedId, setExpandedId] = useState<string | null>("positive");
  const [activeTab, setActiveTab] = useState<
    "all" | "positive" | "negative" | "polite"
  >("all");

  const filtered =
    activeTab === "all"
      ? imperativeTypes
      : imperativeTypes.filter((t) => t.type === activeTab);

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
          style={{ background: BG_COLOR, color: COLOR }}
        >
          <MessageSquare className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Imperative Sentences
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            Commands, requests, and prohibitions — with Hindi translations
          </p>
        </div>
      </motion.div>

      {/* Definition Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border bg-card shadow-card p-6 mb-8"
        style={{ borderLeft: `4px solid ${COLOR}` }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: COLOR }}
        >
          Definition / Paribhasha
        </div>
        <p className="font-body text-base text-foreground leading-relaxed mb-2">
          An <strong>imperative sentence</strong> gives a command, makes a
          request, or expresses a wish. The subject <strong>'You'</strong> is
          always implied but usually not written.
        </p>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.52 0.06 265)" }}
        >
          एक <strong>आदेशात्मक वाक्य</strong> आदेश देता है, अनुरोध करता है, या इच्छा व्यक्त
          करता है। कर्ता <strong>'You'</strong> हमेशा निहित होता है लेकिन आमतौर पर
          नहीं लिखा जाता।
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-8"
      >
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as typeof activeTab)}
        >
          <TabsList
            className="h-auto p-1 gap-1 flex-wrap"
            data-ocid="imperative.tab"
          >
            {(["all", "positive", "negative", "polite"] as const).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="px-5 py-2 rounded-lg font-semibold text-sm capitalize"
              >
                {tab === "all"
                  ? "All Types"
                  : tab === "positive"
                    ? "✅ Positive"
                    : tab === "negative"
                      ? "🚫 Negative"
                      : "🙏 Polite"}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab} forceMount className="mt-0">
            <div />
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Cards */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((type, i) => (
            <ImperativeCard
              key={type.id}
              type={type}
              index={i}
              expandedId={expandedId}
              onToggle={(id) => setExpandedId(expandedId === id ? null : id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Quick Reference */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-10 rounded-2xl p-6"
        style={{ background: BG_COLOR }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: COLOR }}
        >
          Quick Reference / Sankhipt Sandarbh
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Positive",
              formula: "Base Verb + ...",
              example: "Open the window.",
              hindi: "Khidki kholo.",
            },
            {
              label: "Negative",
              formula: "Don't + Base Verb",
              example: "Don't run here.",
              hindi: "Yahan mat daudo.",
            },
            {
              label: "Polite",
              formula: "Please + Base Verb",
              example: "Please come in.",
              hindi: "Andar aiye.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="font-display text-sm font-bold text-foreground mb-1">
                {item.label}
              </div>
              <div className="font-mono text-xs text-muted-foreground mb-2">
                {item.formula}
              </div>
              <div className="font-body text-sm text-foreground font-semibold">
                {item.example}
              </div>
              <div
                className="font-body text-xs italic mt-0.5"
                style={{ color: "oklch(0.52 0.06 265)" }}
              >
                {item.hindi}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
