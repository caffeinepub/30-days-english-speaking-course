import { j as jsxRuntimeExports, m as motion, M as MessageCircle, G as GraduationCap, H as Heart } from "./index-D77MT00_.js";
import { B as Badge } from "./badge-CMDgqIgI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CyzQOt3o.js";
import { P as PartyPopper } from "./party-popper-BmEAH6FF.js";
import "./index-CAW-hU4h.js";
import "./utils-Bmita3Ip.js";
import "./index-DnInn6oj.js";
const schoolDialogues = [
  {
    english: "Good morning, teacher!",
    hindi: "Shubh prabhat, sir!"
  },
  {
    english: "May I come in, please?",
    hindi: "Kya main andar aa sakta hoon?"
  },
  {
    english: "I didn't understand this lesson.",
    hindi: "Mujhe yeh paath samajh nahi aaya."
  },
  {
    english: "Can you explain it again?",
    hindi: "Kya aap ise dobara samjha sakte hain?"
  },
  {
    english: "What is the homework for today?",
    hindi: "Aaj ka ghar ka kaam kya hai?"
  },
  {
    english: "I forgot my notebook at home.",
    hindi: "Main apni copy ghar bhool aaya."
  },
  {
    english: "Can I borrow your pen?",
    hindi: "Kya main aapka pen le sakta hoon?"
  },
  {
    english: "When is the next test?",
    hindi: "Agla test kab hai?"
  },
  {
    english: "I scored 90 marks in the exam.",
    hindi: "Maine pariksha mein 90 ank prapt kiye."
  },
  {
    english: "Let's study together after school.",
    hindi: "School ke baad milkar padhaai karein."
  },
  {
    english: "She is the best student in our class.",
    hindi: "Woh hamare class ki sabse achhi student hai."
  },
  {
    english: "The library is open till 5 PM.",
    hindi: "Pustakalaya shaam 5 baje tak khula hai."
  },
  {
    english: "Please be quiet in class.",
    hindi: "Kaksha mein shant rahein."
  },
  {
    english: "I want to join the science club.",
    hindi: "Main science club mein join karna chahta hoon."
  },
  {
    english: "Thank you for helping me, sir.",
    hindi: "Meri madad ke liye dhanyavaad, sir."
  }
];
const partyDialogues = [
  {
    english: "Welcome! We are so glad you came.",
    hindi: "Swaagat hai! Hum bahut khush hain ki aap aaye."
  },
  {
    english: "Happy Birthday! Many happy returns of the day.",
    hindi: "Janamdin mubarak! Bahut bahut badhaai."
  },
  {
    english: "The decorations look amazing!",
    hindi: "Sajaahat bahut sundar lag rahi hai!"
  },
  {
    english: "What would you like to eat or drink?",
    hindi: "Aap kya khaana ya peena pasand karenge?"
  },
  {
    english: "Let me introduce you to my friends.",
    hindi: "Main aapko apne doston se milwata hoon."
  },
  {
    english: "Can we take a photo together?",
    hindi: "Kya hum ek saath photo le sakte hain?"
  },
  {
    english: "The music is so good tonight!",
    hindi: "Aaj raat ka sangeet bahut achha hai!"
  },
  {
    english: "I am having such a great time!",
    hindi: "Mujhe bahut mazaa aa raha hai!"
  },
  {
    english: "The food is absolutely delicious!",
    hindi: "Khaana bilkul lajawaab hai!"
  },
  {
    english: "Thank you for inviting me.",
    hindi: "Mujhe invite karne ke liye shukriya."
  },
  {
    english: "Let's dance together!",
    hindi: "Chalein, milkar naachte hain!"
  },
  {
    english: "See you at the next party!",
    hindi: "Agli party mein milenge!"
  }
];
const weddingDialogues = [
  {
    english: "Congratulations on your wedding!",
    hindi: "Shaadi ki bahut bahut badhaai!"
  },
  {
    english: "The bride looks absolutely beautiful.",
    hindi: "Dulhan bilkul sundar lag rahi hai."
  },
  {
    english: "The groom looks so handsome.",
    hindi: "Dulha bahut sundar dikh raha hai."
  },
  {
    english: "May God bless you both with happiness.",
    hindi: "Bhagwan aap dono ko sukhi rakhe."
  },
  {
    english: "The wedding venue is so grand!",
    hindi: "Shaadi ka sthal bahut bhaavyashali hai!"
  },
  {
    english: "I love the wedding decorations.",
    hindi: "Mujhe shaadi ki sajaahat bahut pasand hai."
  },
  {
    english: "When did you arrive for the wedding?",
    hindi: "Aap shaadi ke liye kab aaye?"
  },
  {
    english: "The food at this wedding is outstanding.",
    hindi: "Is shaadi ka khaana lajawaab hai."
  },
  {
    english: "The bride and groom make a lovely couple.",
    hindi: "Dulha-dulhan ek sundar jodi hain."
  },
  {
    english: "Wishing you a lifetime of happiness.",
    hindi: "Aapko jeevanabhar ki khushiyaan milein."
  },
  {
    english: "Please give our blessings to the couple.",
    hindi: "Jodi ko hamaari aashirvaad dijiye."
  },
  {
    english: "This is the most beautiful wedding I've seen.",
    hindi: "Yeh sabse sundar shaadi hai jo maine dekhi."
  }
];
function DialogueCard({
  dialogue,
  index,
  accentColor,
  accentBg
}) {
  const isEven = index % 2 === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `conversations.item.${index + 1}`,
      initial: { opacity: 0, x: -12 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.04, duration: 0.35 },
      className: "flex items-start gap-4 p-4 rounded-xl border border-border transition-shadow hover:shadow-md",
      style: {
        background: isEven ? "oklch(1 0 0)" : "oklch(0.97 0.012 75)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm",
            style: { background: accentColor },
            children: index + 1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-base font-bold leading-snug mb-1",
              style: { color: "oklch(0.15 0.04 255)" },
              children: dialogue.english
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic leading-relaxed",
              style: { color: "oklch(0.52 0.08 255)" },
              children: dialogue.hindi
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "shrink-0 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold",
            style: { background: accentBg, color: accentColor },
            children: "EN / HI"
          }
        )
      ]
    }
  );
}
function ScenarioTab({ dialogues, accentColor, accentBg }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mt-6", children: dialogues.map((dialogue, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogueCard,
    {
      dialogue,
      index: i,
      accentColor,
      accentBg
    },
    dialogue.english
  )) });
}
function ConversationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden py-12 px-4",
        style: {
          background: "linear-gradient(135deg, oklch(0.22 0.12 258) 0%, oklch(0.30 0.18 320) 45%, oklch(0.40 0.16 40) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-grid opacity-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-64 h-64 rounded-full opacity-15 translate-x-1/3 -translate-y-1/3",
              style: { background: "oklch(0.88 0.20 78)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 -translate-x-1/4 translate-y-1/4",
              style: { background: "oklch(0.70 0.18 195)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto text-center text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 shadow-lg",
                style: {
                  background: "oklch(1 0 0 / 15%)",
                  backdropFilter: "blur(8px)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-8 h-8 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.1 },
                className: "font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-3",
                children: "Daily Conversations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.2 },
                className: "font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed",
                style: { color: "oklch(0.88 0.04 260)" },
                children: "Real-life English phrases with Hindi translations — for school, parties & weddings."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.3 },
                className: "flex items-center justify-center gap-3 mt-5 flex-wrap",
                children: [
                  { label: "15 School Phrases", color: "oklch(0.42 0.18 28)" },
                  { label: "12 Party Phrases", color: "oklch(0.42 0.18 320)" },
                  { label: "12 Wedding Phrases", color: "oklch(0.38 0.16 175)" }
                ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1.5 rounded-full text-xs font-semibold text-white",
                    style: {
                      background: "oklch(1 0 0 / 15%)",
                      backdropFilter: "blur(8px)"
                    },
                    children: tag.label
                  },
                  tag.label
                ))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "school", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full grid grid-cols-3 h-14 rounded-xl p-1.5 border border-border bg-card shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "school",
            "data-ocid": "conversations.school.tab",
            className: "flex items-center gap-2 rounded-lg text-sm font-semibold data-[state=active]:shadow-sm transition-all",
            style: {
              color: "oklch(0.42 0.18 28)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-4 h-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "School" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "party",
            "data-ocid": "conversations.party.tab",
            className: "flex items-center gap-2 rounded-lg text-sm font-semibold data-[state=active]:shadow-sm transition-all",
            style: {
              color: "oklch(0.42 0.18 320)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "w-4 h-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Party" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "wedding",
            "data-ocid": "conversations.wedding.tab",
            className: "flex items-center gap-2 rounded-lg text-sm font-semibold data-[state=active]:shadow-sm transition-all",
            style: {
              color: "oklch(0.38 0.16 175)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Wedding" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "school", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-5 p-4 rounded-xl flex items-center gap-3 border",
            style: {
              background: "oklch(0.96 0.06 28)",
              borderColor: "oklch(0.42 0.18 28 / 25%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                  style: { background: "oklch(0.42 0.18 28)", color: "white" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-base font-bold",
                    style: { color: "oklch(0.42 0.18 28)" },
                    children: "School Conversations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "15 everyday phrases for students and teachers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "ml-auto shrink-0 font-semibold",
                  style: { background: "oklch(0.42 0.18 28)", color: "white" },
                  children: "15 Phrases"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScenarioTab,
          {
            dialogues: schoolDialogues,
            accentColor: "oklch(0.42 0.18 28)",
            accentBg: "oklch(0.96 0.06 28)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "party", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-5 p-4 rounded-xl flex items-center gap-3 border",
            style: {
              background: "oklch(0.95 0.06 320)",
              borderColor: "oklch(0.42 0.18 320 / 25%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                  style: { background: "oklch(0.42 0.18 320)", color: "white" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-base font-bold",
                    style: { color: "oklch(0.42 0.18 320)" },
                    children: "Party Conversations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "12 fun phrases for celebrations and gatherings" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "ml-auto shrink-0 font-semibold",
                  style: { background: "oklch(0.42 0.18 320)", color: "white" },
                  children: "12 Phrases"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScenarioTab,
          {
            dialogues: partyDialogues,
            accentColor: "oklch(0.42 0.18 320)",
            accentBg: "oklch(0.95 0.06 320)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "wedding", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-5 p-4 rounded-xl flex items-center gap-3 border",
            style: {
              background: "oklch(0.94 0.07 175)",
              borderColor: "oklch(0.38 0.16 175 / 25%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                  style: { background: "oklch(0.38 0.16 175)", color: "white" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-base font-bold",
                    style: { color: "oklch(0.38 0.16 175)" },
                    children: "Wedding Conversations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "12 elegant phrases for wedding ceremonies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "ml-auto shrink-0 font-semibold",
                  style: { background: "oklch(0.38 0.16 175)", color: "white" },
                  children: "12 Phrases"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScenarioTab,
          {
            dialogues: weddingDialogues,
            accentColor: "oklch(0.38 0.16 175)",
            accentBg: "oklch(0.94 0.07 175)"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  ConversationsPage as default
};
