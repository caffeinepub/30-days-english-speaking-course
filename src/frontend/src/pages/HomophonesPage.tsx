import { Input } from "@/components/ui/input";
import { Link, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { homophones } from "../data/grammarData";

const cardColors = [
  {
    bg: "oklch(0.97 0.04 28)",
    text: "oklch(0.45 0.18 28)",
    border: "oklch(0.55 0.22 28 / 20%)",
  },
  {
    bg: "oklch(0.96 0.05 160)",
    text: "oklch(0.38 0.16 160)",
    border: "oklch(0.52 0.2 160 / 20%)",
  },
  {
    bg: "oklch(0.95 0.06 265)",
    text: "oklch(0.4 0.18 265)",
    border: "oklch(0.48 0.22 265 / 20%)",
  },
  {
    bg: "oklch(0.96 0.05 310)",
    text: "oklch(0.42 0.16 310)",
    border: "oklch(0.55 0.2 310 / 20%)",
  },
  {
    bg: "oklch(0.97 0.05 80)",
    text: "oklch(0.42 0.18 80)",
    border: "oklch(0.58 0.22 80 / 20%)",
  },
];

export default function HomophonesPage() {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? homophones.filter((h) =>
        h.words.some(
          (w) =>
            w.word.toLowerCase().includes(search.toLowerCase()) ||
            w.meaning.toLowerCase().includes(search.toLowerCase()),
        ),
      )
    : homophones;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-6"
      >
        <div
          className="flex items-center justify-center w-14 h-14 rounded-2xl"
          style={{
            background: "oklch(0.96 0.05 310)",
            color: "oklch(0.55 0.2 310)",
          }}
        >
          <Link className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Homophones
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            Words that sound alike but have different meanings
          </p>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative mb-8"
      >
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: "oklch(0.55 0.2 310)" }}
        />
        <Input
          data-ocid="homophones.search_input"
          placeholder="Search words or meanings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11 text-base"
        />
      </motion.div>

      {/* Count badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-6 text-sm text-muted-foreground font-body"
      >
        Showing{" "}
        <strong style={{ color: "oklch(0.55 0.2 310)" }}>
          {filtered.length} pair{filtered.length !== 1 ? "s" : ""}
        </strong>{" "}
        {search ? "matching your search" : "of homophones"}
      </motion.div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div data-ocid="homophones.empty_state" className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <div className="font-display text-xl font-bold text-foreground mb-2">
            No results found
          </div>
          <div className="text-muted-foreground font-body">
            Try a different search term.
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((set, i) => {
            const scheme = cardColors[i % cardColors.length];

            return (
              <motion.div
                key={set.id}
                data-ocid={`homophones.item.${i + 1}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border bg-card shadow-card overflow-hidden"
                style={{ borderColor: scheme.border }}
              >
                {/* Word header strip */}
                <div
                  className="px-4 py-3 flex flex-wrap gap-2 items-center"
                  style={{ background: scheme.bg }}
                >
                  {set.words.map((w) => (
                    <span
                      key={w.word}
                      className="font-display font-extrabold text-base"
                      style={{ color: scheme.text }}
                    >
                      {w.word}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-auto">
                    {set.words.length} forms
                  </span>
                </div>

                {/* Word definitions */}
                <div className="divide-y divide-border">
                  {set.words.map((w) => (
                    <div key={w.word} className="px-4 py-3">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          className="font-display font-bold text-base"
                          style={{ color: scheme.text }}
                        >
                          "{w.word}"
                        </span>
                        <span className="text-xs text-muted-foreground font-body italic">
                          {w.meaning}
                        </span>
                      </div>
                      <p
                        className="font-body text-sm text-foreground leading-relaxed pl-2"
                        style={{ borderLeft: `2px solid ${scheme.border}` }}
                      >
                        {w.example}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
