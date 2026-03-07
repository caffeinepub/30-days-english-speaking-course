import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves } from "lucide-react";
import { motion } from "motion/react";
import { longVowels, shortVowels } from "../data/grammarData";

export default function VowelsPage() {
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
          style={{
            background: "oklch(0.97 0.05 80)",
            color: "oklch(0.58 0.22 80)",
          }}
        >
          <Waves className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Vowel Sounds
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            Long and short vowels with pictures for easy memory
          </p>
        </div>
      </motion.div>

      {/* Intro info cards */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid sm:grid-cols-2 gap-4 mb-8"
      >
        <div
          className="rounded-xl p-4 border flex items-start gap-3"
          style={{
            background: "oklch(0.97 0.04 28)",
            borderColor: "oklch(0.55 0.22 28 / 20%)",
          }}
        >
          <span className="text-2xl">🔊</span>
          <div>
            <div className="font-display font-bold text-foreground">
              Short Vowels
            </div>
            <p className="text-sm font-body text-muted-foreground mt-0.5">
              Quick, clipped sounds. The vowel says its "short" sound — like /æ/
              in cat.
            </p>
          </div>
        </div>
        <div
          className="rounded-xl p-4 border flex items-start gap-3"
          style={{
            background: "oklch(0.97 0.05 80)",
            borderColor: "oklch(0.58 0.22 80 / 20%)",
          }}
        >
          <span className="text-2xl">🎵</span>
          <div>
            <div className="font-display font-bold text-foreground">
              Long Vowels
            </div>
            <p className="text-sm font-body text-muted-foreground mt-0.5">
              The vowel says its own name — like /eɪ/ in cake. Usually longer in
              duration.
            </p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="short">
        <TabsList className="mb-8 p-1 gap-1">
          <TabsTrigger
            value="short"
            className="px-6 py-2.5 font-semibold"
            data-ocid="vowels.short.tab"
          >
            🔊 Short Vowels
          </TabsTrigger>
          <TabsTrigger
            value="long"
            className="px-6 py-2.5 font-semibold"
            data-ocid="vowels.long.tab"
          >
            🎵 Long Vowels
          </TabsTrigger>
        </TabsList>

        <TabsContent value="short">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <h2
              className="font-display text-2xl font-bold mb-1"
              style={{ color: "oklch(0.55 0.22 28)" }}
            >
              Short Vowel Sounds
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              The 5 short vowel sounds — /æ/ /ɛ/ /ɪ/ /ɒ/ /ʌ/
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortVowels.map((v, i) => (
              <VowelCard key={v.letter} vowel={v} index={i} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="long">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <h2
              className="font-display text-2xl font-bold mb-1"
              style={{ color: "oklch(0.58 0.22 80)" }}
            >
              Long Vowel Sounds
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              The 5 long vowel sounds — /eɪ/ /iː/ /aɪ/ /oʊ/ /juː/
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {longVowels.map((v, i) => (
              <VowelCard key={v.letter} vowel={v} index={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

import type { VowelCard as VowelCardType } from "../data/grammarData";

function VowelCard({ vowel, index }: { vowel: VowelCardType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border bg-card shadow-card overflow-hidden"
      style={{
        borderColor: `${vowel.color.replace("oklch(", "").replace(")", "")} / 20%)`,
      }}
    >
      {/* Letter + Sound Header */}
      <div
        className="px-5 pt-5 pb-4 flex items-center gap-4"
        style={{ background: vowel.bgColor }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-4xl text-white shadow-lg"
          style={{ background: vowel.color }}
        >
          {vowel.letter}
        </div>
        <div>
          <div
            className="font-mono text-2xl font-bold"
            style={{ color: vowel.color }}
          >
            {vowel.sound}
          </div>
          <div className="font-display text-base font-bold text-foreground">
            as in <em>{vowel.keyword}</em>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-white flex items-center justify-center">
        <img
          src={vowel.image}
          alt={vowel.keyword}
          className="h-full w-full object-contain p-3"
          loading="lazy"
        />
      </div>

      {/* Word list */}
      <div className="px-5 py-4">
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Example Words
        </div>
        <div className="flex flex-wrap gap-2">
          {vowel.words.map((word) => (
            <span
              key={word}
              className="px-3 py-1 rounded-full text-sm font-semibold font-body"
              style={{
                background: vowel.bgColor,
                color: vowel.color,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
