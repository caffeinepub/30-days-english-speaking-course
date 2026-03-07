import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  blends,
  consonantSounds,
  digraphs,
  vowelSounds,
} from "../data/grammarData";

export default function PhonicsPage() {
  const [activeTab, setActiveTab] = useState("vowels");

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
            background: "oklch(0.96 0.05 160)",
            color: "oklch(0.52 0.2 160)",
          }}
        >
          <Volume2 className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Phonics
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            Letter sounds, blends, and digraphs for perfect pronunciation
          </p>
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8 h-auto p-1 gap-1 flex-wrap">
          <TabsTrigger value="vowels" className="px-5 py-2 font-semibold">
            🔤 Vowel Sounds
          </TabsTrigger>
          <TabsTrigger value="consonants" className="px-5 py-2 font-semibold">
            📝 Consonant Sounds
          </TabsTrigger>
          <TabsTrigger value="blends" className="px-5 py-2 font-semibold">
            🔗 Blends
          </TabsTrigger>
          <TabsTrigger value="digraphs" className="px-5 py-2 font-semibold">
            ✨ Digraphs
          </TabsTrigger>
        </TabsList>

        {/* Vowel Sounds */}
        <TabsContent value="vowels">
          <SectionHeader
            title="Vowel Sounds"
            subtitle="The 5 basic vowel sounds in English"
            color="oklch(0.52 0.2 160)"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {vowelSounds.map((item, i) => (
              <PhonicsCard
                key={item.letters}
                letters={item.letters}
                example={item.example}
                color={item.color}
                index={i}
                type="vowel"
              />
            ))}
          </div>
        </TabsContent>

        {/* Consonant Sounds */}
        <TabsContent value="consonants">
          <SectionHeader
            title="Consonant Sounds"
            subtitle="21 consonant letters and their sounds"
            color="oklch(0.52 0.2 160)"
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {consonantSounds.map((item, i) => (
              <PhonicsCard
                key={item.letters}
                letters={item.letters}
                example={item.example}
                color={item.color}
                index={i}
                type="consonant"
              />
            ))}
          </div>
        </TabsContent>

        {/* Blends */}
        <TabsContent value="blends">
          <SectionHeader
            title="Consonant Blends"
            subtitle="Two-letter combinations — both sounds are heard"
            color="oklch(0.52 0.2 160)"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {blends.map((item, i) => (
              <PhonicsCard
                key={item.letters}
                letters={item.letters}
                example={item.example}
                color={item.color}
                index={i}
                type="blend"
              />
            ))}
          </div>
        </TabsContent>

        {/* Digraphs */}
        <TabsContent value="digraphs">
          <SectionHeader
            title="Digraphs"
            subtitle="Two letters that make one unique sound"
            color="oklch(0.52 0.2 160)"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {digraphs.map((item, i) => (
              <motion.div
                key={item.letters}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border bg-card shadow-card p-5 flex items-center gap-4"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-xl shrink-0 font-display font-extrabold text-3xl text-white"
                  style={{ background: item.color }}
                >
                  {item.letters}
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-foreground capitalize">
                    {item.example}
                  </div>
                  <div className="text-muted-foreground text-sm font-body">
                    {item.note}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  color,
}: { title: string; subtitle: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <h2 className="font-display text-2xl font-bold mb-1" style={{ color }}>
        {title}
      </h2>
      <p className="text-muted-foreground font-body text-sm">{subtitle}</p>
    </motion.div>
  );
}

function PhonicsCard({
  letters,
  example,
  color,
  index,
  type,
}: {
  letters: string;
  example: string;
  color: string;
  index: number;
  type: "vowel" | "consonant" | "blend";
}) {
  const size = type === "vowel" ? "w-full aspect-square" : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.03,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ y: -3, scale: 1.04 }}
      className={`rounded-xl border bg-card shadow-card text-center p-3 cursor-default transition-shadow hover:shadow-card-hover ${size}`}
    >
      <div
        className="font-display font-extrabold text-2xl md:text-3xl mb-2 mx-auto flex items-center justify-center rounded-lg"
        style={{
          color,
          background: `${color.replace("oklch(", "").replace(")", "")} / 10%`,
          height: type === "vowel" ? "56px" : "48px",
        }}
      >
        {letters.toUpperCase()}
      </div>
      <div
        className="text-xs font-semibold text-center font-body capitalize"
        style={{ color: "oklch(0.45 0.04 265)" }}
      >
        {example}
      </div>
    </motion.div>
  );
}
