import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";
import { motion } from "motion/react";

const COLOR = "oklch(0.55 0.26 45)";
const BG_COLOR = "oklch(0.96 0.1 45)";

interface InfinitiveExample {
  english: string;
  hindi: string;
  note?: string;
}

interface InfinitiveUse {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  definition: string;
  hindiDef: string;
  structure: string;
  examples: InfinitiveExample[];
}

const infinitiveUses: InfinitiveUse[] = [
  {
    id: "noun",
    title: "Noun Infinitive",
    subtitle: "Subject / Object of a sentence",
    color: "oklch(0.55 0.26 45)",
    bgColor: "oklch(0.96 0.1 45)",
    definition:
      "When 'to + base verb' acts as a noun — it can be the subject, object, or complement of a sentence.",
    hindiDef:
      "जब 'to + मूल क्रिया' एक संज्ञा की तरह काम करे — वाक्य में कर्ता, कर्म या पूरक के रूप में।",
    structure: "To + Base Verb (acts as noun)",
    examples: [
      {
        english: "To learn is important.",
        hindi: "Seekhna zaroori hai.",
        note: "Subject",
      },
      {
        english: "I love to read books.",
        hindi: "Mujhe kitaabein padhna pasand hai.",
        note: "Object",
      },
      {
        english: "My goal is to win.",
        hindi: "Mera lakshya jeeetna hai.",
        note: "Complement",
      },
      {
        english: "To travel is my dream.",
        hindi: "Safar karna mera sapna hai.",
        note: "Subject",
      },
      {
        english: "She wants to dance.",
        hindi: "Woh naachna chahti hai.",
        note: "Object",
      },
      {
        english: "He decided to leave.",
        hindi: "Usne jaane ka faisla kiya.",
        note: "Object",
      },
      {
        english: "I began to understand.",
        hindi: "Main samajhna shuru kiya.",
        note: "Object",
      },
      {
        english: "To succeed requires effort.",
        hindi: "Safal hona mehnat maangta hai.",
        note: "Subject",
      },
    ],
  },
  {
    id: "adjective",
    title: "Adjective Infinitive",
    subtitle: "Modifies a noun or pronoun",
    color: "oklch(0.50 0.24 160)",
    bgColor: "oklch(0.94 0.1 160)",
    definition:
      "When 'to + base verb' describes a noun — it tells us more about the noun by answering 'which?' or 'what kind of?'",
    hindiDef:
      "जब 'to + मूल क्रिया' किसी संज्ञा का वर्णन करे — यह बताता है कि संज्ञा 'कौन सा' या 'किस प्रकार का' है।",
    structure: "Noun + To + Base Verb (describes the noun)",
    examples: [
      {
        english: "I have a book to read.",
        hindi: "Mere paas padhne ke liye ek kitaab hai.",
        note: "Modifies 'book'",
      },
      {
        english: "She needs a place to stay.",
        hindi: "Use rehne ke liye jagah chahiye.",
        note: "Modifies 'place'",
      },
      {
        english: "He has a lot of work to do.",
        hindi: "Uske paas karne ke liye bahut kaam hai.",
        note: "Modifies 'work'",
      },
      {
        english: "We need water to drink.",
        hindi: "Hume peene ke liye paani chahiye.",
        note: "Modifies 'water'",
      },
      {
        english: "This is the time to act.",
        hindi: "Karne ka waqt abhi hai.",
        note: "Modifies 'time'",
      },
      {
        english: "Give me something to eat.",
        hindi: "Mujhe khaane ke liye kuch do.",
        note: "Modifies 'something'",
      },
      {
        english: "She is the first to arrive.",
        hindi: "Woh sabse pehle aane wali thi.",
        note: "Modifies 'first'",
      },
      {
        english: "I need a pen to write.",
        hindi: "Mujhe likhne ke liye ek pen chahiye.",
        note: "Modifies 'pen'",
      },
    ],
  },
  {
    id: "adverb",
    title: "Adverb Infinitive",
    subtitle: "Modifies verb, adjective, or another adverb",
    color: "oklch(0.52 0.26 200)",
    bgColor: "oklch(0.94 0.1 200)",
    definition:
      "When 'to + base verb' tells us WHY an action is done (purpose), or describes how adjectives and other adverbs feel.",
    hindiDef:
      "जब 'to + मूल क्रिया' बताए कि कार्य क्यों किया गया (उद्देश्य), या विशेषण और क्रियाविशेषण का वर्णन करे।",
    structure: "Verb/Adjective + To + Base Verb (shows purpose or reason)",
    examples: [
      {
        english: "She went to buy vegetables.",
        hindi: "Woh sabzi khareedne gayi.",
        note: "Purpose",
      },
      {
        english: "I am happy to help you.",
        hindi: "Main aapki madad karke khush hoon.",
        note: "Modifies adjective",
      },
      {
        english: "He studied hard to pass.",
        hindi: "Woh pass hone ke liye khoob padha.",
        note: "Purpose",
      },
      {
        english: "She was surprised to see me.",
        hindi: "Woh mujhe dekhkar hairaan thi.",
        note: "Modifies adjective",
      },
      {
        english: "I woke up early to exercise.",
        hindi: "Main vyayam karne ke liye jaldi uth gaya.",
        note: "Purpose",
      },
      {
        english: "He is tall enough to reach.",
        hindi: "Woh pahunchne ke liye kaafi lamba hai.",
        note: "Modifies adverb",
      },
      {
        english: "We saved money to travel.",
        hindi: "Humne safar karne ke liye paise bachaye.",
        note: "Purpose",
      },
      {
        english: "I am sorry to bother you.",
        hindi: "Mujhe aapko takleef dene ke liye khed hai.",
        note: "Modifies adjective",
      },
    ],
  },
];

export default function InfinitivePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
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
          <Zap className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Infinitive Verbs
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            To + Base Verb — three uses with Hindi translations
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
          An <strong>infinitive</strong> is the base form of a verb preceded by{" "}
          <strong className="font-mono">'to'</strong>. It can function as a{" "}
          <strong>noun</strong>, <strong>adjective</strong>, or{" "}
          <strong>adverb</strong> in a sentence.
        </p>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.52 0.06 265)" }}
        >
          <strong>Infinitive</strong> क्रिया का मूल रूप है जिससे पहले{" "}
          <strong>'to'</strong> लगाया जाता है। यह वाक्य में <strong>संज्ञा</strong>,{" "}
          <strong>विशेषण</strong>, या <strong>क्रियाविशेषण</strong> के रूप में काम कर
          सकता है।
        </p>
        <div
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg"
          style={{ background: BG_COLOR, color: COLOR }}
        >
          to + base verb
        </div>
        <span className="ml-3 font-body text-sm text-muted-foreground">
          e.g., to go, to eat, to learn, to speak
        </span>
      </motion.div>

      {/* Three Types Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Tabs defaultValue="noun">
          <TabsList
            className="mb-8 p-1 gap-1 flex-wrap h-auto"
            data-ocid="infinitive.tab"
          >
            <TabsTrigger value="noun" className="px-5 py-2.5 font-semibold">
              📘 Noun Infinitive
            </TabsTrigger>
            <TabsTrigger
              value="adjective"
              className="px-5 py-2.5 font-semibold"
            >
              🔍 Adjective Infinitive
            </TabsTrigger>
            <TabsTrigger value="adverb" className="px-5 py-2.5 font-semibold">
              ⚡ Adverb Infinitive
            </TabsTrigger>
          </TabsList>

          {infinitiveUses.map((use) => (
            <TabsContent key={use.id} value={use.id}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Type Header */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: use.bgColor }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2
                      className="font-display text-2xl font-bold"
                      style={{ color: use.color }}
                    >
                      {use.title}
                    </h2>
                    <Badge
                      className="font-semibold text-xs"
                      style={{
                        background: "white",
                        color: use.color,
                        borderColor: "transparent",
                      }}
                    >
                      {use.subtitle}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: use.color }}
                      >
                        Structure / Banawat
                      </div>
                      <div className="font-mono text-sm font-semibold text-foreground">
                        {use.structure}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Definition / Paribhasha
                      </div>
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {use.definition}
                      </p>
                      <p
                        className="font-body text-xs italic mt-1"
                        style={{ color: "oklch(0.52 0.06 265)" }}
                      >
                        {use.hindiDef}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Examples / Udaharan
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {use.examples.map((ex, exIdx) => (
                      <motion.div
                        key={ex.english}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: exIdx * 0.05 }}
                        className="rounded-xl p-4 bg-card border shadow-sm"
                        style={{ borderLeft: `3px solid ${use.color}` }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5"
                            style={{ background: use.color }}
                          >
                            {exIdx + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-body text-sm font-semibold text-foreground leading-relaxed">
                              {ex.english}
                            </div>
                            <div
                              className="font-body text-xs italic mt-0.5"
                              style={{ color: "oklch(0.52 0.06 265)" }}
                            >
                              {ex.hindi}
                            </div>
                            {ex.note && (
                              <Badge
                                className="mt-1.5 text-xs font-semibold"
                                style={{
                                  background: use.bgColor,
                                  color: use.color,
                                  borderColor: "transparent",
                                }}
                              >
                                {ex.note}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      {/* Summary Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-2xl border bg-card shadow-card overflow-hidden"
      >
        <div
          className="px-6 py-4 font-display text-sm font-bold uppercase tracking-widest"
          style={{ background: BG_COLOR, color: COLOR }}
        >
          Summary / Saransh
        </div>
        <div className="p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {infinitiveUses.map((use) => (
              <div
                key={use.id}
                className="rounded-xl p-4"
                style={{ background: use.bgColor }}
              >
                <div
                  className="font-display text-sm font-bold mb-1"
                  style={{ color: use.color }}
                >
                  {use.title}
                </div>
                <div className="font-body text-xs text-foreground leading-relaxed">
                  {use.subtitle}
                </div>
                <div
                  className="font-mono text-xs mt-2 font-semibold"
                  style={{ color: use.color }}
                >
                  {use.examples[0].english}
                </div>
                <div
                  className="font-body text-xs italic mt-0.5"
                  style={{ color: "oklch(0.52 0.06 265)" }}
                >
                  {use.examples[0].hindi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
