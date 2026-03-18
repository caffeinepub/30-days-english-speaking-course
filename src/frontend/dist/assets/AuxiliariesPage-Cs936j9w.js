import { j as jsxRuntimeExports, m as motion, L as Layers } from "./index-C_yiHTPo.js";
import { B as Badge } from "./badge-DpgT5v1f.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D52MZkno.js";
import { p as primaryAuxiliaries, m as modalAuxiliaries } from "./grammarData-CJXbWVMo.js";
import "./index-DhDrOttj.js";
import "./index-UppKNKoW.js";
import "./utils-Bmita3Ip.js";
import "./index-DP9vAh2Q.js";
function AuxiliariesPage() {
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
                background: "oklch(0.95 0.06 265)",
                color: "oklch(0.48 0.22 265)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-7 h-7" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-extrabold text-foreground", children: "Auxiliary Verbs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-0.5", children: "Primary and modal auxiliaries explained with examples" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-8 p-1 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "primary",
            className: "px-6 py-2.5 font-semibold",
            "data-ocid": "auxiliaries.primary.tab",
            children: "🔑 Primary Auxiliaries"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "modal",
            className: "px-6 py-2.5 font-semibold",
            "data-ocid": "auxiliaries.modal.tab",
            children: "✨ Modal Auxiliaries"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "primary", children: [
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
                  style: { color: "oklch(0.48 0.22 265)" },
                  children: "Primary Auxiliaries"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "BE, HAVE, and DO — the building blocks of English grammar" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-1 gap-6", children: primaryAuxiliaries.map((aux, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1 },
            className: "rounded-2xl border bg-card shadow-card overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-6 py-5 flex items-center justify-between",
                  style: {
                    background: aux.color.replace(")", " / 8%)")
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-14 h-14 rounded-xl flex items-center justify-center font-display font-extrabold text-2xl text-white",
                        style: { background: aux.color },
                        children: aux.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-lg font-bold text-foreground", children: [
                        "Primary Auxiliary:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: aux.color }, children: aux.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm font-body mt-0.5", children: aux.usage })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3", children: "All Forms" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: aux.forms.map((form) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-sm font-mono font-semibold px-3 py-1",
                      style: {
                        background: aux.color.replace(")", " / 12%)"),
                        color: aux.color,
                        borderColor: "transparent"
                      },
                      children: form
                    },
                    form
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3", children: "Example Sentences" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: aux.examples.map((ex, exIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-3 rounded-lg px-4 py-3 bg-muted/40",
                      style: { borderLeft: `3px solid ${aux.color}` },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5",
                            style: { background: aux.color },
                            children: exIdx + 1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm md:text-base text-foreground", children: ex })
                      ]
                    },
                    ex
                  )) })
                ] })
              ] })
            ]
          },
          aux.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "modal", children: [
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
                  style: { color: "oklch(0.48 0.22 265)" },
                  children: "Modal Auxiliary Verbs"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "10 modal verbs — each with a specific meaning and use" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: modalAuxiliaries.map((modal, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.06 },
            className: "rounded-2xl border bg-card shadow-card p-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-4 py-2 rounded-xl font-display font-extrabold text-lg text-white",
                    style: { background: modal.color },
                    children: modal.modal
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground font-body", children: modal.usage })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: modal.examples.map((ex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "rounded-lg px-4 py-2.5 text-sm font-body text-foreground",
                  style: {
                    background: "oklch(0.97 0.01 265)",
                    borderLeft: `3px solid ${modal.color}`
                  },
                  children: ex
                },
                ex
              )) })
            ]
          },
          modal.modal
        )) })
      ] })
    ] })
  ] });
}
export {
  AuxiliariesPage as default
};
