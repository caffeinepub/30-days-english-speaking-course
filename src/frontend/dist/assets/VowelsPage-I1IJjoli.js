import { j as jsxRuntimeExports, m as motion, W as Waves } from "./index-DyKKhg34.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-Ybm3u4ES.js";
import { s as shortVowels, l as longVowels } from "./grammarData-CJXbWVMo.js";
import "./index-DJCGVwBG.js";
function VowelsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-center gap-4 mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-center justify-center w-14 h-14 rounded-2xl",
              style: {
                background: "oklch(0.97 0.05 80)",
                color: "oklch(0.58 0.22 80)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Waves, { className: "w-7 h-7" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-extrabold text-foreground", children: "Vowel Sounds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-0.5", children: "Long and short vowels with pictures for easy memory" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "grid sm:grid-cols-2 gap-4 mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4 border flex items-start gap-3",
              style: {
                background: "oklch(0.97 0.04 28)",
                borderColor: "oklch(0.55 0.22 28 / 20%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔊" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: "Short Vowels" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body text-muted-foreground mt-0.5", children: 'Quick, clipped sounds. The vowel says its "short" sound — like /æ/ in cat.' })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4 border flex items-start gap-3",
              style: {
                background: "oklch(0.97 0.05 80)",
                borderColor: "oklch(0.58 0.22 80 / 20%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🎵" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: "Long Vowels" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body text-muted-foreground mt-0.5", children: "The vowel says its own name — like /eɪ/ in cake. Usually longer in duration." })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "short", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-8 p-1 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "short",
            className: "px-6 py-2.5 font-semibold",
            "data-ocid": "vowels.short.tab",
            children: "🔊 Short Vowels"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "long",
            className: "px-6 py-2.5 font-semibold",
            "data-ocid": "vowels.long.tab",
            children: "🎵 Long Vowels"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "short", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-display text-2xl font-bold mb-1",
                  style: { color: "oklch(0.55 0.22 28)" },
                  children: "Short Vowel Sounds"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "The 5 short vowel sounds — /æ/ /ɛ/ /ɪ/ /ɒ/ /ʌ/" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: shortVowels.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(VowelCard, { vowel: v, index: i }, v.letter)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "long", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-display text-2xl font-bold mb-1",
                  style: { color: "oklch(0.58 0.22 80)" },
                  children: "Long Vowel Sounds"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "The 5 long vowel sounds — /eɪ/ /iː/ /aɪ/ /oʊ/ /juː/" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: longVowels.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(VowelCard, { vowel: v, index: i }, v.letter)) })
      ] })
    ] })
  ] });
}
function VowelCard({ vowel, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: index * 0.08,
        type: "spring",
        stiffness: 200,
        damping: 20
      },
      whileHover: { y: -4 },
      className: "rounded-2xl border bg-card shadow-card overflow-hidden",
      style: {
        borderColor: `${vowel.color.replace("oklch(", "").replace(")", "")} / 20%)`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-5 pt-5 pb-4 flex items-center gap-4",
            style: { background: vowel.bgColor },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-4xl text-white shadow-lg",
                  style: { background: vowel.color },
                  children: vowel.letter
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-mono text-2xl font-bold",
                    style: { color: vowel.color },
                    children: vowel.sound
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold text-foreground", children: [
                  "as in ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: vowel.keyword })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-40 overflow-hidden bg-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: vowel.image,
            alt: vowel.keyword,
            className: "h-full w-full object-contain p-3",
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3", children: "Example Words" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: vowel.words.map((word) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-3 py-1 rounded-full text-sm font-semibold font-body",
              style: {
                background: vowel.bgColor,
                color: vowel.color
              },
              children: word
            },
            word
          )) })
        ] })
      ]
    }
  );
}
export {
  VowelsPage as default
};
