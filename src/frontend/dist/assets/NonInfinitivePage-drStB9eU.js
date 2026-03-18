import { r as reactExports, j as jsxRuntimeExports, m as motion, F as Flame, A as AnimatePresence } from "./index-C_yiHTPo.js";
import { B as Badge } from "./badge-DpgT5v1f.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D52MZkno.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-CywryjPJ.js";
import "./index-DhDrOttj.js";
import "./index-UppKNKoW.js";
import "./utils-Bmita3Ip.js";
import "./index-DP9vAh2Q.js";
const COLOR = "oklch(0.54 0.26 15)";
const BG_COLOR = "oklch(0.95 0.1 15)";
const nonInfRules = [
  {
    id: "modal",
    title: "After Modal Auxiliaries",
    subtitle: "can, will, shall, may, must, should, would, could, might, ought to",
    color: "oklch(0.54 0.26 15)",
    bgColor: "oklch(0.95 0.1 15)",
    rule: "After modal auxiliary verbs (can, will, shall, may, must, should, would, could, might), always use the bare infinitive — WITHOUT 'to'.",
    hindiRule: "Modal auxiliary verbs (can, will, shall, may, must आदि) के बाद हमेशा bare infinitive — 'to' के बिना — उपयोग होती है।",
    structure: "Modal Verb + Base Verb (no 'to')",
    examples: [
      {
        english: "She can speak English.",
        hindi: "Woh English bol sakti hai.",
        highlight: "can speak"
      },
      {
        english: "You must study hard.",
        hindi: "Tumhe khoob padhna chahiye.",
        highlight: "must study"
      },
      {
        english: "He will come tomorrow.",
        hindi: "Woh kal aayega.",
        highlight: "will come"
      },
      {
        english: "I should apologize.",
        hindi: "Mujhe maafi maangni chahiye.",
        highlight: "should apologize"
      },
      {
        english: "They may leave early.",
        hindi: "Woh jaldi ja sakte hain.",
        highlight: "may leave"
      },
      {
        english: "You could try harder.",
        hindi: "Tum aur mehnat kar sakte the.",
        highlight: "could try"
      },
      {
        english: "It might rain today.",
        hindi: "Aaj baarish ho sakti hai.",
        highlight: "might rain"
      },
      {
        english: "She would help if asked.",
        hindi: "Woh maange jaane par madad karti.",
        highlight: "would help"
      }
    ]
  },
  {
    id: "let-make",
    title: "After Let / Make / Have",
    subtitle: "Causative verbs — force or allow someone to do something",
    color: "oklch(0.50 0.24 160)",
    bgColor: "oklch(0.94 0.1 160)",
    rule: "After causative verbs 'let', 'make', and 'have', use the bare infinitive. These verbs express causing or allowing an action.",
    hindiRule: "Causative verbs 'let', 'make', और 'have' के बाद bare infinitive उपयोग होती है। ये verbs किसी को कुछ करवाने या करने देने को दर्शाते हैं।",
    structure: "Let / Make / Have + Object + Base Verb",
    examples: [
      { english: "Let me go.", hindi: "Mujhe jaane do.", highlight: "let go" },
      {
        english: "She made him cry.",
        hindi: "Usne use rula diya.",
        highlight: "made cry"
      },
      {
        english: "I had the mechanic fix my car.",
        hindi: "Maine mechanic se apni gaadi theek karwayi.",
        highlight: "had fix"
      },
      {
        english: "Don't let the cat out.",
        hindi: "Billi ko bahar mat jaane do.",
        highlight: "let out"
      },
      {
        english: "The teacher made us repeat.",
        hindi: "Teacher ne humse dobara karwaya.",
        highlight: "made repeat"
      },
      {
        english: "He let me borrow his pen.",
        hindi: "Usne mujhe apna pen lene diya.",
        highlight: "let borrow"
      },
      {
        english: "She had her students present.",
        hindi: "Usne apne students ko present karwaya.",
        highlight: "had present"
      },
      {
        english: "Don't make me wait.",
        hindi: "Mujhe intezaar mat karwao.",
        highlight: "make wait"
      }
    ]
  },
  {
    id: "help",
    title: "After Help",
    subtitle: "Help can take both infinitive and bare infinitive",
    color: "oklch(0.55 0.26 45)",
    bgColor: "oklch(0.96 0.1 45)",
    rule: "After 'help', you can use either the bare infinitive OR the to-infinitive. Both are correct. The bare infinitive is more common in spoken English.",
    hindiRule: "'help' के बाद bare infinitive या to-infinitive दोनों सही हैं। spoken English में bare infinitive अधिक प्रयोग होती है।",
    structure: "Help + Object + (to) + Base Verb",
    examples: [
      {
        english: "She helped me carry the bags.",
        hindi: "Usne mujhe bags uthane mein madad ki.",
        highlight: "helped carry"
      },
      {
        english: "Can you help me find it?",
        hindi: "Kya tum mujhe dhundhne mein madad kar sakte ho?",
        highlight: "help find"
      },
      {
        english: "He helped them understand.",
        hindi: "Usne unhe samajhne mein madad ki.",
        highlight: "helped understand"
      },
      {
        english: "This guide helps students learn.",
        hindi: "Yeh guide students ko seekhne mein madad karta hai.",
        highlight: "helps learn"
      },
      {
        english: "She helped him write the letter.",
        hindi: "Usne use patra likhne mein madad ki.",
        highlight: "helped write"
      }
    ]
  },
  {
    id: "do-did",
    title: "After Do / Did (Emphatic)",
    subtitle: "For emphasis and negation",
    color: "oklch(0.50 0.28 265)",
    bgColor: "oklch(0.93 0.1 265)",
    rule: "In emphatic statements, negative sentences, and questions using 'do' or 'did', always use the bare infinitive after them.",
    hindiRule: "Emphatic statements, negative sentences, और 'do' या 'did' वाले प्रश्नों में हमेशा bare infinitive उपयोग होती है।",
    structure: "Do / Does / Did + Subject + Base Verb",
    examples: [
      {
        english: "I do like tea.",
        hindi: "Main sach mein chai pasand karta hoon.",
        highlight: "do like"
      },
      {
        english: "She does speak well.",
        hindi: "Woh sach mein acchi tarah bolti hai.",
        highlight: "does speak"
      },
      {
        english: "Did he go to school?",
        hindi: "Kya woh school gaya?",
        highlight: "did go"
      },
      {
        english: "I didn't understand.",
        hindi: "Main samjha nahi.",
        highlight: "didn't understand"
      },
      {
        english: "Do you know him?",
        hindi: "Kya tum use jaante ho?",
        highlight: "do know"
      },
      {
        english: "She did finish the work.",
        hindi: "Usne kaam zaroor khatam kiya.",
        highlight: "did finish"
      },
      {
        english: "Does he play cricket?",
        hindi: "Kya woh cricket khelta hai?",
        highlight: "does play"
      },
      {
        english: "They didn't come yesterday.",
        hindi: "Woh kal nahi aaye.",
        highlight: "didn't come"
      }
    ]
  },
  {
    id: "perception",
    title: "After Perception Verbs",
    subtitle: "see, hear, watch, feel, notice, observe",
    color: "oklch(0.52 0.26 200)",
    bgColor: "oklch(0.94 0.1 200)",
    rule: "After perception verbs (see, hear, watch, feel, notice), use the bare infinitive when referring to the complete action.",
    hindiRule: "Perception verbs (see, hear, watch, feel, notice) के बाद पूरी क्रिया के लिए bare infinitive उपयोग होती है।",
    structure: "Perception Verb + Object + Base Verb",
    examples: [
      {
        english: "I saw him run away.",
        hindi: "Maine usse bhaagta dekha.",
        highlight: "saw run"
      },
      {
        english: "She heard the baby cry.",
        hindi: "Usne shishu ko rote suna.",
        highlight: "heard cry"
      },
      {
        english: "We watched them dance.",
        hindi: "Humne unhe naachte dekha.",
        highlight: "watched dance"
      },
      {
        english: "He felt the ground shake.",
        hindi: "Usne zameen hilte mehsoos ki.",
        highlight: "felt shake"
      },
      {
        english: "I noticed him leave.",
        hindi: "Maine use jaate dekha.",
        highlight: "noticed leave"
      },
      {
        english: "She observed them work.",
        hindi: "Usne unhe kaam karte dekha.",
        highlight: "observed work"
      }
    ]
  }
];
function NonInfCard({ rule, index, expandedId, onToggle }) {
  const isExpanded = expandedId === rule.id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.97 },
      transition: { delay: index * 0.07 },
      className: "rounded-2xl border bg-card shadow-card overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onToggle(rule.id),
            className: "w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-3 h-12 rounded-full shrink-0",
                    style: { background: rule.color }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg md:text-xl font-bold text-foreground", children: rule.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        className: "text-xs font-semibold hidden sm:inline-flex",
                        style: {
                          background: rule.bgColor,
                          color: rule.color,
                          borderColor: "transparent"
                        },
                        children: [
                          "Rule ",
                          index + 1
                        ]
                      }
                    )
                  ] }),
                  !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-1 max-w-[260px] truncate", children: rule.subtitle })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors",
                  style: {
                    background: isExpanded ? `${rule.color.replace("oklch(", "").replace(")", "")} / 15%)` : "oklch(0.93 0.01 265)",
                    color: isExpanded ? rule.color : "oklch(0.5 0.05 265)"
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
                      background: `${rule.color.replace("oklch(", "").replace(")", "")} / 8%)`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-xs font-bold uppercase tracking-widest mb-2",
                          style: { color: rule.color },
                          children: "Structure / Banawat"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm font-semibold text-foreground", children: rule.structure })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4 bg-muted/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2", children: "Rule / Niyam" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm text-foreground leading-relaxed", children: rule.rule }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "font-body text-xs italic mt-2",
                      style: { color: "oklch(0.52 0.06 265)" },
                      children: rule.hindiRule
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3", children: "Examples / Udaharan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: rule.examples.map((ex, exIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3 rounded-lg px-4 py-3",
                    style: {
                      background: exIdx % 2 === 0 ? "oklch(0.97 0.01 265)" : "white",
                      borderLeft: `3px solid ${rule.color}`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5",
                          style: { background: rule.color },
                          children: exIdx + 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-sm md:text-base text-foreground font-semibold leading-relaxed", children: [
                          ex.english,
                          ex.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: "ml-2 text-xs font-mono font-semibold align-middle",
                              style: {
                                background: rule.bgColor,
                                color: rule.color,
                                borderColor: "transparent"
                              },
                              children: ex.highlight
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "font-body text-xs italic mt-0.5",
                            style: { color: "oklch(0.52 0.06 265)" },
                            children: ex.hindi
                          }
                        )
                      ] })
                    ]
                  },
                  ex.english
                )) })
              ] })
            ] })
          }
        ) })
      ]
    },
    rule.id
  );
}
function NonInfinitivePage() {
  const [expandedId, setExpandedId] = reactExports.useState("modal");
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const filtered = activeTab === "all" ? nonInfRules : nonInfRules.filter((r) => r.id === activeTab);
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
              style: { background: BG_COLOR, color: COLOR },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-7 h-7" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-extrabold text-foreground", children: "Non-Infinitive (Bare Infinitive)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-0.5", children: "Base verb WITHOUT 'to' — 5 usage rules with Hindi translations" })
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
        className: "rounded-2xl border bg-card shadow-card p-6 mb-8",
        style: { borderLeft: `4px solid ${COLOR}` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs font-bold uppercase tracking-widest mb-2",
              style: { color: COLOR },
              children: "Definition / Paribhasha"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-base text-foreground leading-relaxed mb-2", children: [
            "A ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "bare infinitive" }),
            " (also called non-infinitive) is the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "base form of a verb used WITHOUT 'to'" }),
            ". It appears after modal auxiliaries, causative verbs, and perception verbs."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-sm italic",
              style: { color: "oklch(0.52 0.06 265)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bare Infinitive" }),
                " (गैर-infinitive) क्रिया का वह मूल रूप है जो ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'to' के बिना" }),
                " उपयोग होता है। यह modal auxiliaries, causative verbs, और perception verbs के बाद आता है।"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: { background: "oklch(0.96 0.08 265)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2", children: "✅ Infinitive (WITH 'to')" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm font-semibold text-foreground", children: [
                    "She wants",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.50 0.24 160)" }, children: "to sing" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "font-body text-xs italic mt-1",
                      style: { color: "oklch(0.52 0.06 265)" },
                      children: "Woh gaana chahti hai."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4", style: { background: BG_COLOR }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-xs font-bold uppercase tracking-widest mb-2",
                  style: { color: COLOR },
                  children: "⚡ Bare Infinitive (WITHOUT 'to')"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm font-semibold text-foreground", children: [
                "She can ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: COLOR }, children: "sing" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-body text-xs italic mt-1",
                  style: { color: "oklch(0.52 0.06 265)" },
                  children: "Woh gaa sakti hai."
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 },
        className: "mb-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Tabs,
          {
            value: activeTab,
            onValueChange: (v) => setActiveTab(v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsList,
                {
                  className: "h-auto p-1 gap-1 flex-wrap",
                  "data-ocid": "non_infinitive.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "all",
                        className: "px-4 py-2 font-semibold text-sm",
                        children: "All Rules"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "modal",
                        className: "px-4 py-2 font-semibold text-sm",
                        children: "🔵 Modals"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "let-make",
                        className: "px-4 py-2 font-semibold text-sm",
                        children: "🟢 Let/Make/Have"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "help",
                        className: "px-4 py-2 font-semibold text-sm",
                        children: "🟡 Help"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "do-did",
                        className: "px-4 py-2 font-semibold text-sm",
                        children: "🟣 Do/Did"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "perception",
                        className: "px-4 py-2 font-semibold text-sm",
                        children: "👁 Perception"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: activeTab, forceMount: true, className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((rule, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      NonInfCard,
      {
        rule,
        index: i,
        expandedId,
        onToggle: (id) => setExpandedId(expandedId === id ? null : id)
      },
      rule.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-10 rounded-2xl p-6",
        style: { background: BG_COLOR },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs font-bold uppercase tracking-widest mb-4",
              style: { color: COLOR },
              children: "Quick Reference — When to Use Bare Infinitive / Sankhipt Sandarbh"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
            {
              verb: "can / could",
              example: "She can drive.",
              hindi: "Woh gaadi chala sakti hai."
            },
            {
              verb: "will / would",
              example: "He will call.",
              hindi: "Woh call karega."
            },
            {
              verb: "must / should",
              example: "You must rest.",
              hindi: "Tumhe aaram karna chahiye."
            },
            {
              verb: "let / make",
              example: "Let him go.",
              hindi: "Use jaane do."
            },
            {
              verb: "do / did",
              example: "Did she come?",
              hindi: "Kya woh aayi?"
            },
            {
              verb: "see / hear",
              example: "I saw him run.",
              hindi: "Maine use bhaagta dekha."
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "font-mono text-xs font-bold mb-1",
                style: { color: COLOR },
                children: [
                  "After: ",
                  item.verb
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm text-foreground font-semibold", children: item.example }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-body text-xs italic mt-0.5",
                style: { color: "oklch(0.52 0.06 265)" },
                children: item.hindi
              }
            )
          ] }, item.verb)) })
        ]
      }
    )
  ] });
}
export {
  NonInfinitivePage as default
};
