import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, m as motion, G as GraduationCap, A as AnimatePresence, B as BookOpen, u as useStudentAuth, f as ue, h as hashPassword } from "./index-C_yiHTPo.js";
import { B as Button } from "./button-D2tF0n0S.js";
import { I as Input } from "./input-BAz4eoqN.js";
import { A as ArrowLeft } from "./arrow-left-D7J-peA0.js";
import "./index-DhDrOttj.js";
import "./index-UppKNKoW.js";
import "./utils-Bmita3Ip.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
const AVATARS = [
  {
    id: "avatar-1",
    emoji: "🎓",
    bg: "oklch(0.35 0.16 258)",
    ring: "oklch(0.55 0.20 258)",
    label: "Graduate"
  },
  {
    id: "avatar-2",
    emoji: "📚",
    bg: "oklch(0.40 0.18 28)",
    ring: "oklch(0.60 0.22 28)",
    label: "Books"
  },
  {
    id: "avatar-3",
    emoji: "✏️",
    bg: "oklch(0.45 0.18 175)",
    ring: "oklch(0.62 0.20 175)",
    label: "Pencil"
  },
  {
    id: "avatar-4",
    emoji: "🌟",
    bg: "oklch(0.50 0.20 78)",
    ring: "oklch(0.68 0.22 78)",
    label: "Star"
  },
  {
    id: "avatar-5",
    emoji: "💡",
    bg: "oklch(0.48 0.19 50)",
    ring: "oklch(0.65 0.21 50)",
    label: "Idea"
  },
  {
    id: "avatar-6",
    emoji: "🔬",
    bg: "oklch(0.38 0.16 155)",
    ring: "oklch(0.56 0.18 155)",
    label: "Science"
  },
  {
    id: "avatar-7",
    emoji: "🎯",
    bg: "oklch(0.42 0.20 320)",
    ring: "oklch(0.60 0.22 320)",
    label: "Target"
  },
  {
    id: "avatar-8",
    emoji: "🏆",
    bg: "oklch(0.46 0.18 60)",
    ring: "oklch(0.64 0.20 60)",
    label: "Trophy"
  }
];
function AvatarPicker({
  selected,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: AVATARS.map((av) => {
    const isSelected = selected === av.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `Select ${av.label} avatar`,
        "aria-pressed": isSelected,
        onClick: () => onSelect(av.id),
        className: "w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all focus-visible:outline-none focus-visible:ring-2",
        style: {
          background: av.bg,
          boxShadow: isSelected ? `0 0 0 3px white, 0 0 0 5px ${av.ring}` : "0 2px 6px oklch(0 0 0 / 20%)",
          transform: isSelected ? "scale(1.15)" : "scale(1)",
          transition: "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease"
        },
        children: av.emoji
      },
      av.id
    );
  }) });
}
function OtpInput({
  value,
  onChange,
  length = 6
}) {
  const inputRefs = reactExports.useRef([]);
  const digits = value.split("").concat(Array(length).fill("")).slice(0, length);
  const handleChange = (idx, char) => {
    var _a;
    const digit = char.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[idx] = digit;
    onChange(newDigits.join("").replace(/\s/g, ""));
    if (digit && idx < length - 1) {
      (_a = inputRefs.current[idx + 1]) == null ? void 0 : _a.focus();
    }
  };
  const handleKeyDown = (idx, e) => {
    var _a, _b, _c;
    if (e.key === "Backspace") {
      if (digits[idx]) {
        const newDigits = [...digits];
        newDigits[idx] = "";
        onChange(newDigits.join("").replace(/\s/g, ""));
      } else if (idx > 0) {
        (_a = inputRefs.current[idx - 1]) == null ? void 0 : _a.focus();
        const newDigits = [...digits];
        newDigits[idx - 1] = "";
        onChange(newDigits.join("").replace(/\s/g, ""));
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      (_b = inputRefs.current[idx - 1]) == null ? void 0 : _b.focus();
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      (_c = inputRefs.current[idx + 1]) == null ? void 0 : _c.focus();
    }
  };
  const handlePaste = (e) => {
    var _a;
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    onChange(pasted.padEnd(0, ""));
    const focusIdx = Math.min(pasted.length, length - 1);
    (_a = inputRefs.current[focusIdx]) == null ? void 0 : _a.focus();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": "login.otp.input",
      className: "flex gap-2 justify-center",
      onPaste: handlePaste,
      children: Array.from({ length }, (_, idx) => `otp-${idx}`).map((keyId, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: (el) => {
            inputRefs.current[idx] = el;
          },
          type: "text",
          inputMode: "numeric",
          pattern: "[0-9]*",
          maxLength: 1,
          value: digits[idx] || "",
          onChange: (e) => handleChange(idx, e.target.value),
          onKeyDown: (e) => handleKeyDown(idx, e),
          onFocus: (e) => e.target.select(),
          "aria-label": `OTP digit ${idx + 1}`,
          className: "w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none transition-all",
          style: {
            background: "oklch(0.97 0.012 75)",
            borderColor: digits[idx] ? "oklch(0.55 0.26 80)" : "oklch(0.85 0.04 258 / 50%)",
            color: "oklch(0.18 0.06 258)",
            boxShadow: digits[idx] ? "0 0 0 3px oklch(0.55 0.26 80 / 20%)" : "none",
            fontFamily: "'Bricolage Grotesque', sans-serif"
          }
        },
        keyId
      ))
    }
  );
}
const DEMO_OTP = "123456";
const OTP_RESEND_SECONDS = 60;
const BG_STYLE = {
  background: "linear-gradient(135deg, oklch(0.18 0.08 258) 0%, oklch(0.22 0.10 280) 50%, oklch(0.16 0.06 230) 100%)"
};
const CARD_STYLE = {
  background: "oklch(1 0 0 / 97%)",
  border: "1px solid oklch(0.88 0.04 258 / 30%)"
};
const LABEL_STYLE = {
  color: "oklch(0.35 0.06 258)",
  fontFamily: "'Outfit', sans-serif"
};
const INPUT_STYLE = {
  fontFamily: "'Outfit', sans-serif"
};
const ACCENT_COLOR = "oklch(0.52 0.24 160)";
const ACCENT_GRADIENT = "linear-gradient(135deg, oklch(0.36 0.18 155) 0%, oklch(0.52 0.24 160) 100%)";
function validateMobile(val) {
  if (!val.trim()) return "Please enter your mobile number.";
  if (!/^\+?[0-9\s\-]{7,15}$/.test(val.trim()))
    return "Please enter a valid mobile number.";
  return "";
}
function StepDots({ total, current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mb-4", children: Array.from({ length: total }, (_, i) => `dot-${i}`).map((keyId, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-full transition-all",
      style: {
        width: current === i + 1 ? 24 : 8,
        height: 8,
        background: current === i + 1 ? ACCENT_COLOR : i + 1 < current ? `${ACCENT_COLOR}80` : "oklch(0.88 0.04 258 / 40%)"
      }
    },
    keyId
  )) });
}
function StepProgress({ step, total }) {
  const pct = (step - 1) / (total - 1) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "w-full h-1 rounded-full mb-0",
      style: { background: "oklch(0.92 0.02 258)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "h-full rounded-full",
          style: { background: ACCENT_GRADIENT },
          animate: { width: `${pct}%` },
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      )
    }
  );
}
function PasswordInput({
  id,
  value,
  onChange,
  placeholder,
  ocid
}) {
  const [show, setShow] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id,
        "data-ocid": ocid,
        type: show ? "text" : "password",
        placeholder: placeholder ?? "Password",
        value,
        onChange: (e) => onChange(e.target.value),
        className: "pr-10 rounded-xl border-border",
        style: INPUT_STYLE,
        autoComplete: "off"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        onClick: () => setShow((s) => !s),
        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
        "aria-label": show ? "Hide password" : "Show password",
        children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
      }
    )
  ] });
}
function OtpTimer({ onResend }) {
  const [secs, setSecs] = reactExports.useState(OTP_RESEND_SECONDS);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setSecs(OTP_RESEND_SECONDS);
    timerRef.current = setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1e3);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const handleResend = () => {
    setSecs(OTP_RESEND_SECONDS);
    timerRef.current = setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1e3);
    onResend();
  };
  if (secs > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "text-center text-xs",
        style: {
          color: "oklch(0.55 0.05 258)",
          fontFamily: "'Outfit', sans-serif"
        },
        children: [
          "Resend OTP in",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: ACCENT_COLOR, fontWeight: 700 }, children: [
            secs,
            "s"
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": "login.otp.resend_button",
      onClick: handleResend,
      className: "flex items-center gap-1 mx-auto text-xs font-semibold transition-opacity hover:opacity-75",
      style: { color: ACCENT_COLOR, fontFamily: "'Outfit', sans-serif" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3" }),
        "Resend OTP"
      ]
    }
  );
}
function SwitchTabPrompt({
  message,
  actionLabel,
  onAction,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "p",
    {
      className: "text-xs text-center mt-3",
      style: {
        color: "oklch(0.52 0.05 258)",
        fontFamily: "'Outfit', sans-serif"
      },
      children: [
        message,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": ocid,
            onClick: onAction,
            className: "font-bold underline underline-offset-2 transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 rounded-sm",
            style: { color: "oklch(0.28 0.12 258)" },
            children: actionLabel
          }
        )
      ]
    }
  );
}
function SignInPanel({ onSwitchTab }) {
  const { login, isRegistered } = useStudentAuth();
  const [mobile, setMobile] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!mobile.trim()) {
      setError("Please enter your mobile number.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    if (!isRegistered(mobile.trim())) {
      setError("No account found. Please create one first.");
      return;
    }
    const ph = hashPassword(mobile.trim(), password);
    const ok = login(mobile.trim(), ph);
    if (!ok) {
      setError("Incorrect password. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: "signin-mobile",
          className: "block text-xs font-semibold mb-1.5",
          style: LABEL_STYLE,
          children: "Mobile Number"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4", style: { color: ACCENT_COLOR } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "signin-mobile",
            "data-ocid": "login.identifier.input",
            type: "tel",
            placeholder: "e.g. +91 9876543210",
            value: mobile,
            onChange: (e) => {
              setMobile(e.target.value);
              setError("");
            },
            className: "pl-9 rounded-xl border-border",
            style: INPUT_STYLE,
            autoComplete: "tel"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: "signin-pw",
          className: "block text-xs font-semibold mb-1.5",
          style: LABEL_STYLE,
          children: "Password"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PasswordInput,
        {
          id: "signin-pw",
          value: password,
          onChange: (v) => {
            setPassword(v);
            setError("");
          },
          placeholder: "Enter your password",
          ocid: "login.password.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        "data-ocid": "login.error_state",
        className: "text-xs font-semibold px-3 py-2 rounded-lg",
        style: {
          background: "oklch(0.97 0.04 25)",
          color: "oklch(0.52 0.22 25)",
          fontFamily: "'Outfit', sans-serif"
        },
        children: error
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        type: "submit",
        "data-ocid": "login.signin.submit_button",
        className: "w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90",
        style: {
          background: ACCENT_GRADIENT,
          color: "white",
          border: "none",
          fontFamily: "'Outfit', sans-serif"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
          "Sign In"
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchTabPrompt,
      {
        message: "Don't have an account?",
        actionLabel: "Create Account",
        onAction: onSwitchTab,
        ocid: "login.switch_to_register.button"
      }
    )
  ] });
}
function RegisterPanel({ onSwitchTab }) {
  const { register, isRegistered } = useStudentAuth();
  const [step, setStep] = reactExports.useState(1);
  const [mobile, setMobile] = reactExports.useState("");
  const [step1Error, setStep1Error] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [otpError, setOtpError] = reactExports.useState("");
  const [otpKey, setOtpKey] = reactExports.useState(0);
  const [name, setName] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [avatar, setAvatar] = reactExports.useState("avatar-1");
  const [grade, setGrade] = reactExports.useState("");
  const [step3Error, setStep3Error] = reactExports.useState("");
  const totalSteps = 3;
  const handleStep1 = (e) => {
    e.preventDefault();
    const err = validateMobile(mobile);
    if (err) {
      setStep1Error(err);
      return;
    }
    if (isRegistered(mobile.trim())) {
      setStep1Error(
        "An account with this number already exists. Please sign in."
      );
      return;
    }
    setStep1Error("");
    setStep(2);
  };
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setOtpError("Please enter all 6 digits.");
      return;
    }
    if (otp !== DEMO_OTP) {
      setOtpError("Incorrect OTP. (Demo OTP: 123456)");
      return;
    }
    setOtpError("");
    setStep(3);
  };
  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setStep3Error("Please enter your full name.");
      return;
    }
    if (password.length < 8) {
      setStep3Error("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setStep3Error("Passwords do not match.");
      return;
    }
    if (!avatar) {
      setStep3Error("Please select an avatar.");
      return;
    }
    const ph = hashPassword(mobile.trim(), password);
    register({
      name: name.trim(),
      identifier: mobile.trim(),
      method: "mobile",
      passwordHash: ph,
      avatar,
      grade: grade.trim(),
      otpVerified: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    ue.success("Account created! Welcome to The Learning Hub 🎓", {
      description: `Hello, ${name.trim()}! Your learning journey starts now.`
    });
  };
  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };
  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: -dir * 40 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepProgress, { step, total: totalSteps }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepDots, { total: totalSteps, current: step }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", custom: 1, children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          custom: 1,
          variants: slideVariants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: { duration: 0.25, ease: "easeInOut" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleStep1, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-base font-bold text-center mb-2",
                style: {
                  color: "oklch(0.20 0.08 258)",
                  fontFamily: "'Bricolage Grotesque', sans-serif"
                },
                children: "Create Your Account"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "reg-mobile",
                  className: "block text-xs font-semibold mb-1.5",
                  style: LABEL_STYLE,
                  children: "Mobile Number"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Phone,
                  {
                    className: "w-4 h-4",
                    style: { color: ACCENT_COLOR }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "reg-mobile",
                    "data-ocid": "login.identifier.input",
                    type: "tel",
                    placeholder: "e.g. +91 9876543210",
                    value: mobile,
                    onChange: (e) => {
                      setMobile(e.target.value);
                      setStep1Error("");
                    },
                    className: "pl-9 rounded-xl border-border",
                    style: INPUT_STYLE,
                    autoComplete: "tel"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: step1Error && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: -4 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                "data-ocid": "login.error_state",
                className: "text-xs font-semibold px-3 py-2 rounded-lg",
                style: {
                  background: "oklch(0.97 0.04 25)",
                  color: "oklch(0.52 0.22 25)",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: step1Error
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "login.step1.submit_button",
                className: "w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90",
                style: {
                  background: ACCENT_GRADIENT,
                  color: "white",
                  border: "none",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: "Send OTP"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SwitchTabPrompt,
              {
                message: "Already have an account?",
                actionLabel: "Sign In",
                onAction: onSwitchTab,
                ocid: "login.switch_to_signin.button"
              }
            )
          ] })
        },
        "step1"
      ),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          custom: 1,
          variants: slideVariants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: { duration: 0.25, ease: "easeInOut" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleVerifyOtp, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "login.back.button",
                  onClick: handleBack,
                  className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                  "aria-label": "Go back",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowLeft,
                    {
                      className: "w-4 h-4",
                      style: { color: "oklch(0.50 0.05 258)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-base font-bold",
                  style: {
                    color: "oklch(0.20 0.08 258)",
                    fontFamily: "'Bricolage Grotesque', sans-serif"
                  },
                  children: "Verify OTP"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-xs text-center",
                style: {
                  color: "oklch(0.50 0.05 258)",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: [
                  "Enter the 6-digit OTP sent to",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: ACCENT_COLOR, fontWeight: 700 }, children: mobile })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold",
                style: {
                  background: "oklch(0.96 0.06 78 / 60%)",
                  border: "1px dashed oklch(0.55 0.26 78 / 50%)",
                  color: "oklch(0.40 0.18 78)",
                  fontFamily: "'Bricolage Grotesque', sans-serif"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🔑" }),
                  "Demo OTP:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "tracking-widest text-lg",
                      style: { color: "oklch(0.35 0.20 28)" },
                      children: "123456"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OtpInput,
              {
                value: otp,
                onChange: (v) => {
                  setOtp(v);
                  setOtpError("");
                }
              },
              otpKey
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: otpError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: -4 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                "data-ocid": "login.error_state",
                className: "text-xs font-semibold px-3 py-2 rounded-lg text-center",
                style: {
                  background: "oklch(0.97 0.04 25)",
                  color: "oklch(0.52 0.22 25)",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: otpError
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OtpTimer,
              {
                onResend: () => {
                  setOtp("");
                  setOtpKey((k) => k + 1);
                  ue.success("OTP resent! Demo OTP is still 123456");
                }
              },
              otpKey
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "login.otp.verify_button",
                className: "w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90",
                style: {
                  background: ACCENT_GRADIENT,
                  color: "white",
                  border: "none",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: "Verify OTP"
              }
            )
          ] })
        },
        "step2"
      ),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          custom: 1,
          variants: slideVariants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: { duration: 0.25, ease: "easeInOut" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreateAccount, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "login.back.button",
                  onClick: handleBack,
                  className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                  "aria-label": "Go back",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowLeft,
                    {
                      className: "w-4 h-4",
                      style: { color: "oklch(0.50 0.05 258)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-base font-bold",
                  style: {
                    color: "oklch(0.20 0.08 258)",
                    fontFamily: "'Bricolage Grotesque', sans-serif"
                  },
                  children: "Complete Your Profile"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-semibold mb-2 text-center",
                  style: LABEL_STYLE,
                  children: "Choose Your Avatar"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarPicker, { selected: avatar, onSelect: setAvatar })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "reg-name",
                  className: "block text-xs font-semibold mb-1.5",
                  style: LABEL_STYLE,
                  children: "Full Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "reg-name",
                  "data-ocid": "login.name.input",
                  type: "text",
                  placeholder: "Enter your full name",
                  value: name,
                  onChange: (e) => {
                    setName(e.target.value);
                    setStep3Error("");
                  },
                  className: "rounded-xl border-border",
                  style: INPUT_STYLE,
                  autoComplete: "name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "reg-pw",
                  className: "block text-xs font-semibold mb-1.5",
                  style: LABEL_STYLE,
                  children: [
                    "Password",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.60 0.05 258)" }, children: "(min 8 characters)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PasswordInput,
                {
                  id: "reg-pw",
                  value: password,
                  onChange: (v) => {
                    setPassword(v);
                    setStep3Error("");
                  },
                  placeholder: "Create a strong password",
                  ocid: "login.newpassword.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "reg-cpw",
                  className: "block text-xs font-semibold mb-1.5",
                  style: LABEL_STYLE,
                  children: "Confirm Password"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PasswordInput,
                {
                  id: "reg-cpw",
                  value: confirmPassword,
                  onChange: (v) => {
                    setConfirmPassword(v);
                    setStep3Error("");
                  },
                  placeholder: "Repeat your password",
                  ocid: "login.confirmpassword.input"
                }
              ),
              confirmPassword.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs mt-1",
                  style: {
                    color: confirmPassword === password ? "oklch(0.50 0.20 155)" : "oklch(0.52 0.22 25)",
                    fontFamily: "'Outfit', sans-serif"
                  },
                  children: confirmPassword === password ? "✓ Passwords match" : "✗ Passwords do not match"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "reg-grade",
                  className: "block text-xs font-semibold mb-1.5",
                  style: LABEL_STYLE,
                  children: [
                    "Grade / Class",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: { color: "oklch(0.60 0.05 258)", fontWeight: 400 },
                        children: "(optional)"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "reg-grade",
                  "data-ocid": "login.grade.input",
                  type: "text",
                  placeholder: "e.g. Class 10, Grade 5",
                  value: grade,
                  onChange: (e) => setGrade(e.target.value),
                  className: "rounded-xl border-border",
                  style: INPUT_STYLE
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: step3Error && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: -4 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                "data-ocid": "login.error_state",
                className: "text-xs font-semibold px-3 py-2 rounded-lg",
                style: {
                  background: "oklch(0.97 0.04 25)",
                  color: "oklch(0.52 0.22 25)",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: step3Error
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "login.register.submit_button",
                className: "w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90",
                style: {
                  background: ACCENT_GRADIENT,
                  color: "white",
                  border: "none",
                  fontFamily: "'Outfit', sans-serif"
                },
                children: "🎓 Create Account"
              }
            )
          ] })
        },
        "step3"
      )
    ] })
  ] });
}
function StudentLoginPage() {
  const [topTab, setTopTab] = reactExports.useState("signin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-10",
      style: BG_STYLE,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", "aria-hidden": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-[-100px] right-[-80px] w-96 h-96 rounded-full opacity-15",
              style: {
                background: "radial-gradient(circle, oklch(0.55 0.26 80) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-[-80px] left-[-60px] w-80 h-80 rounded-full opacity-10",
              style: {
                background: "radial-gradient(circle, oklch(0.52 0.24 160) 0%, transparent 70%)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 36, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.5, ease: [0.34, 1.1, 0.64, 1] },
            className: "relative z-10 w-full max-w-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-3xl overflow-hidden shadow-2xl",
                  style: CARD_STYLE,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-1.5 w-full",
                        style: {
                          background: "linear-gradient(90deg, oklch(0.36 0.18 155) 0%, oklch(0.52 0.24 160) 100%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-7 pt-6 pb-7", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { scale: 0.7, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { delay: 0.1, type: "spring", stiffness: 220 },
                            className: "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-3",
                            style: { background: "oklch(0.28 0.12 258)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-7 h-7 text-white" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h1",
                          {
                            className: "text-xl font-extrabold leading-tight mb-0.5",
                            style: {
                              fontFamily: "'Bricolage Grotesque', sans-serif",
                              color: "oklch(0.18 0.06 258)"
                            },
                            children: "The Learning Hub"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs",
                            style: {
                              color: "oklch(0.50 0.05 258)",
                              fontFamily: "'Outfit', sans-serif"
                            },
                            children: "Your English learning journey starts here"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex rounded-xl p-1 gap-1 mb-5",
                          style: { background: "oklch(0.95 0.02 258)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                "data-ocid": "login.signin.tab",
                                onClick: () => setTopTab("signin"),
                                className: "flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all",
                                style: {
                                  background: topTab === "signin" ? "white" : "transparent",
                                  color: topTab === "signin" ? "oklch(0.28 0.12 258)" : "oklch(0.50 0.05 258)",
                                  boxShadow: topTab === "signin" ? "0 1px 4px oklch(0 0 0 / 12%)" : "none",
                                  fontFamily: "'Outfit', sans-serif"
                                },
                                children: "Sign In"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                "data-ocid": "login.register.tab",
                                onClick: () => setTopTab("register"),
                                className: "flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all",
                                style: {
                                  background: topTab === "register" ? "white" : "transparent",
                                  color: topTab === "register" ? "oklch(0.28 0.12 258)" : "oklch(0.50 0.05 258)",
                                  boxShadow: topTab === "register" ? "0 1px 4px oklch(0 0 0 / 12%)" : "none",
                                  fontFamily: "'Outfit', sans-serif"
                                },
                                children: "Create Account"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: topTab === "signin" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: { duration: 0.22 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SignInPanel, { onSwitchTab: () => setTopTab("register") })
                        },
                        "signin"
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -20 },
                          transition: { duration: 0.22 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterPanel, { onSwitchTab: () => setTopTab("signin") })
                        },
                        "register"
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap justify-center gap-2", children: ["30 Daily Lessons", "Grammar Topics", "Stories", "Quiz"].map(
                        (label) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs font-medium px-3 py-1 rounded-full",
                            style: {
                              background: "oklch(0.95 0.03 258)",
                              color: "oklch(0.35 0.08 258)",
                              fontFamily: "'Outfit', sans-serif"
                            },
                            children: label
                          },
                          label
                        )
                      ) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.6 },
                  className: "text-center text-xs mt-4",
                  style: {
                    color: "oklch(0.75 0.04 258)",
                    fontFamily: "'Outfit', sans-serif"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3 inline mr-1" }),
                    "Your progress is saved on this device"
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  StudentLoginPage as default
};
