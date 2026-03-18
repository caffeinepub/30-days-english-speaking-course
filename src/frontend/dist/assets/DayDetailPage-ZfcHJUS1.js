import { j as jsxRuntimeExports, A as ArrowLeft, m as motion, B as BookOpen, M as MessageCircle } from "./index-DyKKhg34.js";
import { B as Badge } from "./badge-B7a-ckwu.js";
import { c as courseData } from "./courseData-DUEt6I2u.js";
import { B as BookMarked, L as Lightbulb } from "./lightbulb-C2aIU7Y5.js";
const sectionColors = [
  { color: "oklch(0.42 0.18 28)", bg: "oklch(0.96 0.07 28)" },
  { color: "oklch(0.38 0.16 175)", bg: "oklch(0.94 0.07 175)" },
  { color: "oklch(0.35 0.16 258)", bg: "oklch(0.93 0.07 258)" },
  { color: "oklch(0.42 0.18 320)", bg: "oklch(0.95 0.06 320)" },
  { color: "oklch(0.44 0.18 78)", bg: "oklch(0.96 0.07 78)" },
  { color: "oklch(0.40 0.18 200)", bg: "oklch(0.94 0.07 200)" }
];
function getDayColor(day) {
  return sectionColors[(day - 1) % sectionColors.length];
}
function DayDetailPage({ day, onBack }) {
  const lesson = courseData[day - 1];
  if (!lesson) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-lg", children: "Day not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back"
          ]
        }
      )
    ] });
  }
  const { color, bg } = getDayColor(day);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden py-12 px-4",
        style: {
          background: `linear-gradient(135deg, ${color} 0%, oklch(0.22 0.12 258) 60%, oklch(0.18 0.08 258) 100%)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-grid opacity-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-6 right-8 w-40 h-40 rounded-full opacity-20",
              style: { background: bg }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-8 -left-8 w-56 h-56 rounded-full opacity-15",
              style: { background: "oklch(0.85 0.18 78)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                type: "button",
                "data-ocid": "day_detail.back.button",
                onClick: onBack,
                initial: { opacity: 0, x: -12 },
                animate: { opacity: 1, x: 0 },
                whileHover: { x: -3 },
                className: "inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                style: {
                  background: "oklch(1 0 0 / 12%)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                  border: "1px solid oklch(1 0 0 / 20%)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                  "Back to Course"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "inline-flex items-center justify-center px-5 py-1.5 rounded-full font-display text-sm font-extrabold mb-4 shadow-sm",
                      style: {
                        background: "oklch(0.85 0.18 78)",
                        color: "oklch(0.22 0.12 78)"
                      },
                      children: [
                        "Day ",
                        lesson.day,
                        " of 30"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3", children: lesson.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold",
                        style: { background: "oklch(1 0 0 / 15%)", color: "white" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" }),
                          lesson.topic
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
                        style: {
                          background: "oklch(0.85 0.18 78 / 30%)",
                          color: "oklch(0.90 0.12 78)"
                        },
                        children: [
                          lesson.vocabulary.length,
                          " vocabulary words"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
                        style: {
                          background: "oklch(1 0 0 / 10%)",
                          color: "oklch(0.85 0.04 200)"
                        },
                        children: [
                          lesson.sentences.length,
                          " practice sentences"
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-10 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center w-10 h-10 rounded-xl",
                  style: { background: bg, color },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Grammar Concept" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "ml-auto font-body text-xs font-semibold",
                  style: { background: bg, color, border: "none" },
                  children: "Core Grammar"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-2xl p-6 overflow-hidden",
                style: { background: bg },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 left-0 w-1 h-full rounded-l-2xl",
                      style: { background: color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm leading-relaxed text-foreground pl-2", children: lesson.grammarConcept })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          "data-ocid": "day_detail.vocabulary.panel",
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.22 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center w-10 h-10 rounded-xl",
                  style: { background: bg, color },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Vocabulary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  className: "ml-auto font-body text-xs font-semibold",
                  style: { background: bg, color, border: "none" },
                  children: [
                    lesson.vocabulary.length,
                    " Words"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: lesson.vocabulary.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.25 + idx * 0.05 },
                className: "group relative rounded-xl border bg-card p-4 overflow-hidden hover:shadow-sm transition-shadow",
                style: {
                  borderColor: `${color.replace("oklch(", "").replace(")", "")} / 18%)`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 right-0 w-16 h-16 rounded-full translate-x-6 -translate-y-6 opacity-30",
                      style: { background: bg }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "font-display text-base font-extrabold mb-1",
                        style: { color },
                        children: item.word
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm text-foreground mb-1 leading-snug", children: item.meaning }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-xs text-muted-foreground", children: [
                      "हिंदी:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: item.hindi })
                    ] })
                  ] })
                ]
              },
              item.word
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          "data-ocid": "day_detail.sentences.panel",
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center w-10 h-10 rounded-xl",
                  style: { background: bg, color },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Practice Sentences" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "ml-auto font-body text-xs font-semibold",
                  style: { background: bg, color, border: "none" },
                  children: "English + Hindi"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: lesson.sentences.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -12 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.32 + idx * 0.06 },
                className: "relative rounded-xl border bg-card overflow-hidden",
                style: {
                  borderColor: `${color.replace("oklch(", "").replace(")", "")} / 15%)`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute left-0 top-0 bottom-0 w-1",
                      style: { background: color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-5 pr-4 py-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mb-2",
                        style: { background: bg, color },
                        children: idx + 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground mb-1.5 leading-relaxed", children: item.english }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block px-2 py-0.5 rounded-md mr-1.5 text-xs font-medium",
                          style: { background: bg, color },
                          children: "हिंदी"
                        }
                      ),
                      item.hindi
                    ] })
                  ] })
                ]
              },
              item.english
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          "data-ocid": "day_detail.tip.panel",
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.38 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center w-10 h-10 rounded-xl",
                  style: {
                    background: "oklch(0.96 0.07 78)",
                    color: "oklch(0.44 0.18 78)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Daily Tip" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "ml-auto font-body text-xs font-semibold",
                  style: {
                    background: "oklch(0.96 0.07 78)",
                    color: "oklch(0.44 0.18 78)",
                    border: "none"
                  },
                  children: "Teacher's Advice"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-2xl p-6 overflow-hidden",
                style: {
                  background: "linear-gradient(135deg, oklch(0.96 0.07 78) 0%, oklch(0.97 0.05 80) 100%)",
                  border: "1px solid oklch(0.85 0.1 78 / 40%)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 left-0 w-1 h-full rounded-l-2xl",
                      style: { background: "oklch(0.44 0.18 78)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start pl-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mt-0.5 flex-shrink-0", children: "💡" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-sm leading-relaxed",
                        style: { color: "oklch(0.25 0.1 75)" },
                        children: lesson.tip
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.44 },
          className: "flex items-center justify-between gap-4 pt-4 border-t border-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onBack,
                className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                  "All 30 Days"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold text-foreground", children: [
                "Day ",
                lesson.day
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: lesson.topic })
            ] }),
            day < 30 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground hidden sm:block", children: [
              "Day ",
              day + 1
            ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-4 py-2 rounded-xl text-sm font-semibold text-white",
                style: { background: "oklch(0.44 0.18 78)" },
                children: "🎓 Course Complete!"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  DayDetailPage as default
};
