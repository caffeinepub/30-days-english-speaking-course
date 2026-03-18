import { r as reactExports, j as jsxRuntimeExports, m as motion, V as Volume2 } from "./index-C_yiHTPo.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D52MZkno.js";
import { v as vowelSounds, c as consonantSounds, b as blends, d as digraphs } from "./grammarData-CJXbWVMo.js";
import "./index-DP9vAh2Q.js";
import "./index-DhDrOttj.js";
import "./utils-Bmita3Ip.js";
function PhonicsPage() {
  const [activeTab, setActiveTab] = reactExports.useState("vowels");
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
                background: "oklch(0.96 0.05 160)",
                color: "oklch(0.52 0.2 160)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-7 h-7" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-extrabold text-foreground", children: "Phonics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-0.5", children: "Letter sounds, blends, and digraphs for perfect pronunciation" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-8 h-auto p-1 gap-1 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "vowels", className: "px-5 py-2 font-semibold", children: "🔤 Vowel Sounds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "consonants", className: "px-5 py-2 font-semibold", children: "📝 Consonant Sounds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "blends", className: "px-5 py-2 font-semibold", children: "🔗 Blends" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "digraphs", className: "px-5 py-2 font-semibold", children: "✨ Digraphs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "vowels", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: "Vowel Sounds",
            subtitle: "The 5 basic vowel sounds in English",
            color: "oklch(0.52 0.2 160)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", children: vowelSounds.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhonicsCard,
          {
            letters: item.letters,
            example: item.example,
            color: item.color,
            index: i,
            type: "vowel"
          },
          item.letters
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "consonants", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: "Consonant Sounds",
            subtitle: "21 consonant letters and their sounds",
            color: "oklch(0.52 0.2 160)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3", children: consonantSounds.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhonicsCard,
          {
            letters: item.letters,
            example: item.example,
            color: item.color,
            index: i,
            type: "consonant"
          },
          item.letters
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "blends", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: "Consonant Blends",
            subtitle: "Two-letter combinations — both sounds are heard",
            color: "oklch(0.52 0.2 160)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3", children: blends.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhonicsCard,
          {
            letters: item.letters,
            example: item.example,
            color: item.color,
            index: i,
            type: "blend"
          },
          item.letters
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "digraphs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            title: "Digraphs",
            subtitle: "Two letters that make one unique sound",
            color: "oklch(0.52 0.2 160)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5", children: digraphs.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.06 },
            className: "rounded-2xl border bg-card shadow-card p-5 flex items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center w-16 h-16 rounded-xl shrink-0 font-display font-extrabold text-3xl text-white",
                  style: { background: item.color },
                  children: item.letters
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg text-foreground capitalize", children: item.example }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm font-body", children: item.note })
              ] })
            ]
          },
          item.letters
        )) })
      ] })
    ] })
  ] });
}
function SectionHeader({
  title,
  subtitle,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "mb-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-1", style: { color }, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: subtitle })
      ]
    }
  );
}
function PhonicsCard({
  letters,
  example,
  color,
  index,
  type
}) {
  const size = type === "vowel" ? "w-full aspect-square" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: {
        delay: index * 0.03,
        type: "spring",
        stiffness: 300,
        damping: 20
      },
      whileHover: { y: -3, scale: 1.04 },
      className: `rounded-xl border bg-card shadow-card text-center p-3 cursor-default transition-shadow hover:shadow-card-hover ${size}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "font-display font-extrabold text-2xl md:text-3xl mb-2 mx-auto flex items-center justify-center rounded-lg",
            style: {
              color,
              background: `${color.replace("oklch(", "").replace(")", "")} / 10%`,
              height: type === "vowel" ? "56px" : "48px"
            },
            children: letters.toUpperCase()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-xs font-semibold text-center font-body capitalize",
            style: { color: "oklch(0.45 0.04 265)" },
            children: example
          }
        )
      ]
    }
  );
}
export {
  PhonicsPage as default
};
