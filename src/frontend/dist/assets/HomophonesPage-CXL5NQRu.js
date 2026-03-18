import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, a as Link } from "./index-C_yiHTPo.js";
import { I as Input } from "./input-BAz4eoqN.js";
import { h as homophones } from "./grammarData-CJXbWVMo.js";
import "./utils-Bmita3Ip.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const cardColors = [
  {
    bg: "oklch(0.97 0.04 28)",
    text: "oklch(0.45 0.18 28)",
    border: "oklch(0.55 0.22 28 / 20%)"
  },
  {
    bg: "oklch(0.96 0.05 160)",
    text: "oklch(0.38 0.16 160)",
    border: "oklch(0.52 0.2 160 / 20%)"
  },
  {
    bg: "oklch(0.95 0.06 265)",
    text: "oklch(0.4 0.18 265)",
    border: "oklch(0.48 0.22 265 / 20%)"
  },
  {
    bg: "oklch(0.96 0.05 310)",
    text: "oklch(0.42 0.16 310)",
    border: "oklch(0.55 0.2 310 / 20%)"
  },
  {
    bg: "oklch(0.97 0.05 80)",
    text: "oklch(0.42 0.18 80)",
    border: "oklch(0.58 0.22 80 / 20%)"
  }
];
function HomophonesPage() {
  const [search, setSearch] = reactExports.useState("");
  const filtered = search.trim() ? homophones.filter(
    (h) => h.words.some(
      (w) => w.word.toLowerCase().includes(search.toLowerCase()) || w.meaning.toLowerCase().includes(search.toLowerCase())
    )
  ) : homophones;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-center gap-4 mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-center justify-center w-14 h-14 rounded-2xl",
              style: {
                background: "oklch(0.96 0.05 310)",
                color: "oklch(0.55 0.2 310)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-7 h-7" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-extrabold text-foreground", children: "Homophones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-0.5", children: "Words that sound alike but have different meanings" })
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
        className: "relative mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4",
              style: { color: "oklch(0.55 0.2 310)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              "data-ocid": "homophones.search_input",
              placeholder: "Search words or meanings...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-10 h-11 text-base"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.15 },
        className: "mb-6 text-sm text-muted-foreground font-body",
        children: [
          "Showing",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "oklch(0.55 0.2 310)" }, children: [
            filtered.length,
            " pair",
            filtered.length !== 1 ? "s" : ""
          ] }),
          " ",
          search ? "matching your search" : "of homophones"
        ]
      }
    ),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "homophones.empty_state", className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-foreground mb-2", children: "No results found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground font-body", children: "Try a different search term." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: filtered.map((set, i) => {
      const scheme = cardColors[i % cardColors.length];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": `homophones.item.${i + 1}`,
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.04 },
          className: "rounded-2xl border bg-card shadow-card overflow-hidden",
          style: { borderColor: scheme.border },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-4 py-3 flex flex-wrap gap-2 items-center",
                style: { background: scheme.bg },
                children: [
                  set.words.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-extrabold text-base",
                      style: { color: scheme.text },
                      children: w.word
                    },
                    w.word
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-auto", children: [
                    set.words.length,
                    " forms"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: set.words.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-display font-bold text-base",
                    style: { color: scheme.text },
                    children: [
                      '"',
                      w.word,
                      '"'
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body italic", children: w.meaning })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm text-foreground leading-relaxed pl-2",
                  style: { borderLeft: `2px solid ${scheme.border}` },
                  children: w.example
                }
              )
            ] }, w.word)) })
          ]
        },
        set.id
      );
    }) })
  ] });
}
export {
  HomophonesPage as default
};
