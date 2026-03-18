import { r as reactExports, j as jsxRuntimeExports, m as motion, B as BookOpen, A as AnimatePresence } from "./index-D77MT00_.js";
import { B as Badge } from "./badge-CMDgqIgI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-CyzQOt3o.js";
import { t as tenses } from "./grammarData-CJXbWVMo.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-C4GvLCfr.js";
import "./index-CAW-hU4h.js";
import "./utils-Bmita3Ip.js";
import "./index-DnInn6oj.js";
const groupColors = {
  all: {
    bg: "oklch(0.92 0.02 265)",
    text: "oklch(0.25 0.12 265)",
    label: "All Tenses"
  },
  present: {
    bg: "oklch(0.97 0.04 28)",
    text: "oklch(0.45 0.18 28)",
    label: "Present"
  },
  past: {
    bg: "oklch(0.96 0.05 160)",
    text: "oklch(0.4 0.16 160)",
    label: "Past"
  },
  future: {
    bg: "oklch(0.95 0.06 265)",
    text: "oklch(0.4 0.18 265)",
    label: "Future"
  }
};
function TensesPage() {
  const [activeGroup, setActiveGroup] = reactExports.useState("all");
  const [expandedId, setExpandedId] = reactExports.useState("present-simple");
  const filtered = activeGroup === "all" ? tenses : tenses.filter((t) => t.timeGroup === activeGroup);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-10", children: [
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
                background: "oklch(0.97 0.04 28)",
                color: "oklch(0.55 0.22 28)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-extrabold text-foreground", children: "English Tenses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-0.5", children: "All 12 tenses with formulas, rules, and examples" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "mb-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tabs,
          {
            value: activeGroup,
            onValueChange: (v) => setActiveGroup(v),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsList,
              {
                className: "h-auto p-1 gap-1 flex-wrap",
                "data-ocid": "tenses.tab",
                children: ["all", "present", "past", "future"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: g,
                    className: "px-5 py-2 rounded-lg font-semibold text-sm capitalize",
                    children: [
                      groupColors[g].label,
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs opacity-70", children: [
                        "(",
                        g === "all" ? tenses.length : tenses.filter((t) => t.timeGroup === g).length,
                        ")"
                      ] })
                    ]
                  },
                  g
                ))
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((tense, i) => {
      const isExpanded = expandedId === tense.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, scale: 0.97 },
          transition: { delay: i * 0.04 },
          className: "rounded-2xl border bg-card shadow-card overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setExpandedId(isExpanded ? null : tense.id),
                className: "w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-3 h-10 rounded-full shrink-0",
                        style: { background: tense.color }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg md:text-xl font-bold text-foreground", children: tense.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            className: "text-xs font-mono font-semibold capitalize",
                            style: {
                              background: groupColors[tense.timeGroup].bg,
                              color: groupColors[tense.timeGroup].text,
                              borderColor: "transparent"
                            },
                            children: tense.timeGroup
                          }
                        ),
                        !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono truncate max-w-[200px] sm:max-w-none", children: tense.formula })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors",
                      style: {
                        background: isExpanded ? tense.color.replace(")", " / 15%)") : "oklch(0.93 0.01 265)",
                        color: isExpanded ? tense.color : "oklch(0.5 0.05 265)"
                      },
                      children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.25 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5 mt-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-xl p-4",
                        style: {
                          background: tense.color.replace(")", " / 8%)")
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs font-bold uppercase tracking-widest mb-2",
                              style: { color: tense.color },
                              children: "Formula / Structure"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm md:text-base font-semibold text-foreground", children: tense.formula })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4 bg-muted/60", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2", children: "Usage Rule" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm md:text-base text-foreground leading-relaxed", children: tense.rule })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3", children: "Example Sentences" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: tense.examples.map((ex, exIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-3 rounded-lg px-4 py-3",
                        style: {
                          background: exIdx % 2 === 0 ? "oklch(0.97 0.01 265)" : "white",
                          borderLeft: `3px solid ${tense.color}`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5",
                              style: { background: tense.color },
                              children: exIdx + 1
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm md:text-base text-foreground leading-relaxed", children: ex })
                        ]
                      },
                      ex
                    )) })
                  ] })
                ] })
              }
            ) })
          ]
        },
        tense.id
      );
    }) }) })
  ] });
}
export {
  TensesPage as default
};
