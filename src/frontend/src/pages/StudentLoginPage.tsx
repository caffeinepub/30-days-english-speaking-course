import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  BookOpen,
  Eye,
  EyeOff,
  Facebook,
  GraduationCap,
  Mail,
  Phone,
  RefreshCw,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import AvatarPicker from "../components/AvatarPicker";
import OtpInput from "../components/OtpInput";
import {
  type LoginMethod,
  hashPassword,
  useStudentAuth,
} from "../hooks/useStudentAuth";

// ─── Types ─────────────────────────────────────────────────────────────────

type TopTab = "signin" | "register";
type MethodTab = LoginMethod;
type RegisterStep = 1 | 2 | 3;

// ─── Constants ─────────────────────────────────────────────────────────────

const DEMO_OTP = "123456";
const OTP_RESEND_SECONDS = 60;

const METHOD_TABS: { id: MethodTab; label: string; icon: React.ReactNode }[] = [
  { id: "mobile", label: "Mobile", icon: <Phone className="w-4 h-4" /> },
  { id: "email", label: "Gmail", icon: <Mail className="w-4 h-4" /> },
  { id: "facebook", label: "Facebook", icon: <Facebook className="w-4 h-4" /> },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

const BG_STYLE = {
  background:
    "linear-gradient(135deg, oklch(0.18 0.08 258) 0%, oklch(0.22 0.10 280) 50%, oklch(0.16 0.06 230) 100%)",
} as const;

const CARD_STYLE = {
  background: "oklch(1 0 0 / 97%)",
  border: "1px solid oklch(0.88 0.04 258 / 30%)",
} as const;

const LABEL_STYLE = {
  color: "oklch(0.35 0.06 258)",
  fontFamily: "'Outfit', sans-serif",
} as const;

const INPUT_STYLE = {
  fontFamily: "'Outfit', sans-serif",
} as const;

function methodColor(method: MethodTab): string {
  if (method === "mobile") return "oklch(0.52 0.24 160)";
  if (method === "email") return "oklch(0.55 0.26 28)";
  return "oklch(0.44 0.22 258)";
}

function methodBtnGradient(method: MethodTab): string {
  if (method === "mobile")
    return "linear-gradient(135deg, oklch(0.36 0.18 155) 0%, oklch(0.52 0.24 160) 100%)";
  if (method === "email")
    return "linear-gradient(135deg, oklch(0.55 0.26 28) 0%, oklch(0.62 0.22 45) 100%)";
  return "linear-gradient(135deg, oklch(0.44 0.22 258) 0%, oklch(0.38 0.20 258) 100%)";
}

function validateIdentifier(method: MethodTab, val: string): string {
  if (!val.trim()) {
    if (method === "mobile") return "Please enter your mobile number.";
    if (method === "email") return "Please enter your email address.";
    return "Please enter your Facebook name or username.";
  }
  if (method === "mobile" && !/^\+?[0-9\s\-]{7,15}$/.test(val.trim()))
    return "Please enter a valid mobile number.";
  if (method === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()))
    return "Please enter a valid email address.";
  return "";
}

// ─── Step Dots ──────────────────────────────────────────────────────────────

function StepDots({
  total,
  current,
  method,
}: {
  total: number;
  current: number;
  method: MethodTab;
}) {
  const color = methodColor(method);
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {Array.from({ length: total }, (_, i) => `dot-${i}`).map((keyId, i) => (
        <div
          key={keyId}
          className="rounded-full transition-all"
          style={{
            width: current === i + 1 ? 24 : 8,
            height: 8,
            background:
              current === i + 1
                ? color
                : i + 1 < current
                  ? `${color}80`
                  : "oklch(0.88 0.04 258 / 40%)",
          }}
        />
      ))}
    </div>
  );
}

// ─── Progress Bar ───────────────────────────────────────────────────────────

function StepProgress({
  step,
  total,
  method,
}: {
  step: number;
  total: number;
  method: MethodTab;
}) {
  const pct = ((step - 1) / (total - 1)) * 100;
  return (
    <div
      className="w-full h-1 rounded-full mb-0"
      style={{ background: "oklch(0.92 0.02 258)" }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: methodBtnGradient(method) }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── Password Input ──────────────────────────────────────────────────────────

function PasswordInput({
  id,
  value,
  onChange,
  placeholder,
  ocid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  ocid: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        id={id}
        data-ocid={ocid}
        type={show ? "text" : "password"}
        placeholder={placeholder ?? "Password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pr-10 rounded-xl border-border"
        style={INPUT_STYLE}
        autoComplete="off"
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShow((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}

// ─── OTP Timer ───────────────────────────────────────────────────────────────

function OtpTimer({
  onResend,
  method,
}: {
  onResend: () => void;
  method: MethodTab;
}) {
  const [secs, setSecs] = useState(OTP_RESEND_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setSecs(OTP_RESEND_SECONDS);
    timerRef.current = setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
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
    }, 1000);
    onResend();
  };

  if (secs > 0) {
    return (
      <p
        className="text-center text-xs"
        style={{
          color: "oklch(0.55 0.05 258)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Resend OTP in{" "}
        <span style={{ color: methodColor(method), fontWeight: 700 }}>
          {secs}s
        </span>
      </p>
    );
  }

  return (
    <button
      type="button"
      data-ocid="login.otp.resend_button"
      onClick={handleResend}
      className="flex items-center gap-1 mx-auto text-xs font-semibold transition-opacity hover:opacity-75"
      style={{ color: methodColor(method), fontFamily: "'Outfit', sans-serif" }}
    >
      <RefreshCw className="w-3 h-3" />
      Resend OTP
    </button>
  );
}

// ─── Switch Tab Prompt ────────────────────────────────────────────────────────

function SwitchTabPrompt({
  message,
  actionLabel,
  onAction,
  ocid,
}: {
  message: string;
  actionLabel: string;
  onAction: () => void;
  ocid: string;
}) {
  return (
    <p
      className="text-xs text-center mt-3"
      style={{
        color: "oklch(0.52 0.05 258)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {message}{" "}
      <button
        type="button"
        data-ocid={ocid}
        onClick={onAction}
        className="font-bold underline underline-offset-2 transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 rounded-sm"
        style={{ color: "oklch(0.28 0.12 258)" }}
      >
        {actionLabel}
      </button>
    </p>
  );
}

// ─── Sign In Panel ──────────────────────────────────────────────────────────

function SignInPanel({ onSwitchTab }: { onSwitchTab: () => void }) {
  const { login, isRegistered } = useStudentAuth();
  const [method, setMethod] = useState<MethodTab>("mobile");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleMethodChange = (m: MethodTab) => {
    setMethod(m);
    setIdentifier("");
    setPassword("");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!identifier.trim()) {
      setError("Please enter your identifier.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (!isRegistered(identifier.trim())) {
      setError("No account found. Please create one first.");
      return;
    }

    const ph = hashPassword(identifier.trim(), password);
    const ok = login(identifier.trim(), ph);
    if (!ok) {
      setError("Incorrect password. Please try again.");
    }
  };

  const placeholders: Record<MethodTab, string> = {
    mobile: "Mobile number (e.g. +91 9876543210)",
    email: "Gmail or email address",
    facebook: "Facebook name or @username",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Method sub-tabs */}
      <div
        className="flex rounded-xl p-1 gap-1"
        style={{ background: "oklch(0.95 0.02 258)" }}
      >
        {METHOD_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            data-ocid={`login.${t.id}.tab`}
            onClick={() => handleMethodChange(t.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: method === t.id ? "white" : "transparent",
              color:
                method === t.id ? methodColor(t.id) : "oklch(0.50 0.05 258)",
              boxShadow:
                method === t.id ? "0 1px 4px oklch(0 0 0 / 12%)" : "none",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Identifier */}
      <div>
        <label
          htmlFor="signin-id"
          className="block text-xs font-semibold mb-1.5"
          style={LABEL_STYLE}
        >
          {method === "mobile"
            ? "Mobile Number"
            : method === "email"
              ? "Email Address"
              : "Facebook Name / Username"}
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {method === "mobile" ? (
              <Phone
                className="w-4 h-4"
                style={{ color: methodColor("mobile") }}
              />
            ) : method === "email" ? (
              <Mail
                className="w-4 h-4"
                style={{ color: methodColor("email") }}
              />
            ) : (
              <Facebook
                className="w-4 h-4"
                style={{ color: methodColor("facebook") }}
              />
            )}
          </span>
          <Input
            id="signin-id"
            data-ocid="login.identifier.input"
            type={
              method === "email"
                ? "email"
                : method === "mobile"
                  ? "tel"
                  : "text"
            }
            placeholder={placeholders[method]}
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              setError("");
            }}
            className="pl-9 rounded-xl border-border"
            style={INPUT_STYLE}
            autoComplete="username"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="signin-pw"
          className="block text-xs font-semibold mb-1.5"
          style={LABEL_STYLE}
        >
          Password
        </label>
        <PasswordInput
          id="signin-pw"
          value={password}
          onChange={(v) => {
            setPassword(v);
            setError("");
          }}
          placeholder="Enter your password"
          ocid="login.password.input"
        />
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            data-ocid="login.error_state"
            className="text-xs font-semibold px-3 py-2 rounded-lg"
            style={{
              background: "oklch(0.97 0.04 25)",
              color: "oklch(0.52 0.22 25)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        data-ocid="login.signin.submit_button"
        className="w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90"
        style={{
          background: methodBtnGradient(method),
          color: "white",
          border: "none",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <span className="flex items-center justify-center gap-2">
          {method === "mobile" ? (
            <Phone className="w-4 h-4" />
          ) : method === "email" ? (
            <Mail className="w-4 h-4" />
          ) : (
            <Facebook className="w-4 h-4" />
          )}
          Sign In
        </span>
      </Button>

      {/* Switch to Register */}
      <SwitchTabPrompt
        message="Don't have an account?"
        actionLabel="Create Account"
        onAction={onSwitchTab}
        ocid="login.switch_to_register.button"
      />
    </form>
  );
}

// ─── Register Panel ──────────────────────────────────────────────────────────

function RegisterPanel({ onSwitchTab }: { onSwitchTab: () => void }) {
  const { register, isRegistered } = useStudentAuth();

  const [step, setStep] = useState<RegisterStep>(1);
  const [method, setMethod] = useState<MethodTab>("mobile");

  // Step 1
  const [identifier, setIdentifier] = useState("");
  const [step1Error, setStep1Error] = useState("");

  // Step 2
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpKey, setOtpKey] = useState(0); // for timer reset

  // Step 3
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("avatar-1");
  const [grade, setGrade] = useState("");
  const [step3Error, setStep3Error] = useState("");

  const totalSteps = method === "facebook" ? 2 : 3;

  const handleMethodChange = (m: MethodTab) => {
    setMethod(m);
    setIdentifier("");
    setOtp("");
    setStep1Error("");
    setOtpError("");
    if (step !== 1) setStep(1);
  };

  // Step 1 → next
  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateIdentifier(method, identifier);
    if (err) {
      setStep1Error(err);
      return;
    }
    if (isRegistered(identifier.trim())) {
      setStep1Error(
        "An account with this identifier already exists. Please sign in.",
      );
      return;
    }
    if (method === "facebook") {
      setStep(3);
    } else {
      setStep(2);
    }
    setStep1Error("");
  };

  // Step 2 → verify OTP
  const handleVerifyOtp = (e: React.FormEvent) => {
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

  // Step 3 → create account
  const handleCreateAccount = (e: React.FormEvent) => {
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

    const ph = hashPassword(identifier.trim(), password);
    register({
      name: name.trim(),
      identifier: identifier.trim(),
      method,
      passwordHash: ph,
      avatar,
      grade: grade.trim(),
      otpVerified: method !== "facebook",
      createdAt: new Date().toISOString(),
    });
    toast.success("Account created! Welcome to The Learning Hub 🎓", {
      description: `Hello, ${name.trim()}! Your learning journey starts now.`,
    });
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(method === "facebook" ? 1 : 2);
  };

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 40 }),
  };

  return (
    <div>
      {/* Progress bar */}
      <StepProgress step={step} total={totalSteps} method={method} />

      {/* Step dots */}
      <div className="mt-3">
        <StepDots
          total={totalSteps}
          current={method === "facebook" && step === 3 ? 2 : step}
          method={method}
        />
      </div>

      <AnimatePresence mode="wait" custom={1}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <form onSubmit={handleStep1} className="space-y-4">
              <h3
                className="text-base font-bold text-center mb-2"
                style={{
                  color: "oklch(0.20 0.08 258)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                Create Your Account
              </h3>

              {/* Method sub-tabs */}
              <div
                className="flex rounded-xl p-1 gap-1"
                style={{ background: "oklch(0.95 0.02 258)" }}
              >
                {METHOD_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    data-ocid={`login.${t.id}.tab`}
                    onClick={() => handleMethodChange(t.id)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      background: method === t.id ? "white" : "transparent",
                      color:
                        method === t.id
                          ? methodColor(t.id)
                          : "oklch(0.50 0.05 258)",
                      boxShadow:
                        method === t.id
                          ? "0 1px 4px oklch(0 0 0 / 12%)"
                          : "none",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {t.icon}
                    <span className="hidden sm:inline">{t.label}</span>
                  </button>
                ))}
              </div>

              <div>
                <label
                  htmlFor="reg-id"
                  className="block text-xs font-semibold mb-1.5"
                  style={LABEL_STYLE}
                >
                  {method === "mobile"
                    ? "Mobile Number"
                    : method === "email"
                      ? "Email Address"
                      : "Facebook Name / Username"}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    {method === "mobile" ? (
                      <Phone
                        className="w-4 h-4"
                        style={{ color: methodColor("mobile") }}
                      />
                    ) : method === "email" ? (
                      <Mail
                        className="w-4 h-4"
                        style={{ color: methodColor("email") }}
                      />
                    ) : (
                      <Facebook
                        className="w-4 h-4"
                        style={{ color: methodColor("facebook") }}
                      />
                    )}
                  </span>
                  <Input
                    id="reg-id"
                    data-ocid="login.identifier.input"
                    type={
                      method === "email"
                        ? "email"
                        : method === "mobile"
                          ? "tel"
                          : "text"
                    }
                    placeholder={
                      method === "mobile"
                        ? "e.g. +91 9876543210"
                        : method === "email"
                          ? "your@email.com"
                          : "Facebook name or @username"
                    }
                    value={identifier}
                    onChange={(e) => {
                      setIdentifier(e.target.value);
                      setStep1Error("");
                    }}
                    className="pl-9 rounded-xl border-border"
                    style={INPUT_STYLE}
                    autoComplete="username"
                  />
                </div>
              </div>

              <AnimatePresence>
                {step1Error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    data-ocid="login.error_state"
                    className="text-xs font-semibold px-3 py-2 rounded-lg"
                    style={{
                      background: "oklch(0.97 0.04 25)",
                      color: "oklch(0.52 0.22 25)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {step1Error}
                  </motion.p>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                data-ocid="login.step1.submit_button"
                className="w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90"
                style={{
                  background: methodBtnGradient(method),
                  color: "white",
                  border: "none",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {method === "facebook" ? "Continue" : "Send OTP"}
              </Button>

              {/* Switch to Sign In — only on step 1 */}
              <SwitchTabPrompt
                message="Already have an account?"
                actionLabel="Sign In"
                onAction={onSwitchTab}
                ocid="login.switch_to_signin.button"
              />
            </form>
          </motion.div>
        )}

        {step === 2 && method !== "facebook" && (
          <motion.div
            key="step2"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <button
                  type="button"
                  data-ocid="login.back.button"
                  onClick={handleBack}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft
                    className="w-4 h-4"
                    style={{ color: "oklch(0.50 0.05 258)" }}
                  />
                </button>
                <h3
                  className="text-base font-bold"
                  style={{
                    color: "oklch(0.20 0.08 258)",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Verify OTP
                </h3>
              </div>

              <p
                className="text-xs text-center"
                style={{
                  color: "oklch(0.50 0.05 258)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Enter the 6-digit OTP sent to{" "}
                <span style={{ color: methodColor(method), fontWeight: 700 }}>
                  {identifier}
                </span>
              </p>

              {/* Demo OTP box */}
              <div
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold"
                style={{
                  background: "oklch(0.96 0.06 78 / 60%)",
                  border: "1px dashed oklch(0.55 0.26 78 / 50%)",
                  color: "oklch(0.40 0.18 78)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                <span className="text-base">🔑</span>
                Demo OTP:{" "}
                <span
                  className="tracking-widest text-lg"
                  style={{ color: "oklch(0.35 0.20 28)" }}
                >
                  123456
                </span>
              </div>

              <OtpInput
                key={otpKey}
                value={otp}
                onChange={(v) => {
                  setOtp(v);
                  setOtpError("");
                }}
              />

              <AnimatePresence>
                {otpError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    data-ocid="login.error_state"
                    className="text-xs font-semibold px-3 py-2 rounded-lg text-center"
                    style={{
                      background: "oklch(0.97 0.04 25)",
                      color: "oklch(0.52 0.22 25)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {otpError}
                  </motion.p>
                )}
              </AnimatePresence>

              <OtpTimer
                key={otpKey}
                onResend={() => {
                  setOtp("");
                  setOtpKey((k) => k + 1);
                  toast.success("OTP resent! Demo OTP is still 123456");
                }}
                method={method}
              />

              <Button
                type="submit"
                data-ocid="login.otp.verify_button"
                className="w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90"
                style={{
                  background: methodBtnGradient(method),
                  color: "white",
                  border: "none",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Verify OTP
              </Button>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <form onSubmit={handleCreateAccount} className="space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <button
                  type="button"
                  data-ocid="login.back.button"
                  onClick={handleBack}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft
                    className="w-4 h-4"
                    style={{ color: "oklch(0.50 0.05 258)" }}
                  />
                </button>
                <h3
                  className="text-base font-bold"
                  style={{
                    color: "oklch(0.20 0.08 258)",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Complete Your Profile
                </h3>
              </div>

              {/* Avatar picker */}
              <div>
                <p
                  className="text-xs font-semibold mb-2 text-center"
                  style={LABEL_STYLE}
                >
                  Choose Your Avatar
                </p>
                <AvatarPicker selected={avatar} onSelect={setAvatar} />
              </div>

              {/* Full name */}
              <div>
                <label
                  htmlFor="reg-name"
                  className="block text-xs font-semibold mb-1.5"
                  style={LABEL_STYLE}
                >
                  Full Name
                </label>
                <Input
                  id="reg-name"
                  data-ocid="login.name.input"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setStep3Error("");
                  }}
                  className="rounded-xl border-border"
                  style={INPUT_STYLE}
                  autoComplete="name"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="reg-pw"
                  className="block text-xs font-semibold mb-1.5"
                  style={LABEL_STYLE}
                >
                  Password{" "}
                  <span style={{ color: "oklch(0.60 0.05 258)" }}>
                    (min 8 characters)
                  </span>
                </label>
                <PasswordInput
                  id="reg-pw"
                  value={password}
                  onChange={(v) => {
                    setPassword(v);
                    setStep3Error("");
                  }}
                  placeholder="Create a strong password"
                  ocid="login.newpassword.input"
                />
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="reg-cpw"
                  className="block text-xs font-semibold mb-1.5"
                  style={LABEL_STYLE}
                >
                  Confirm Password
                </label>
                <PasswordInput
                  id="reg-cpw"
                  value={confirmPassword}
                  onChange={(v) => {
                    setConfirmPassword(v);
                    setStep3Error("");
                  }}
                  placeholder="Repeat your password"
                  ocid="login.confirmpassword.input"
                />
                {/* Password match indicator */}
                {confirmPassword.length > 0 && (
                  <p
                    className="text-xs mt-1"
                    style={{
                      color:
                        confirmPassword === password
                          ? "oklch(0.50 0.20 155)"
                          : "oklch(0.52 0.22 25)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {confirmPassword === password
                      ? "✓ Passwords match"
                      : "✗ Passwords do not match"}
                  </p>
                )}
              </div>

              {/* Grade/Class (optional) */}
              <div>
                <label
                  htmlFor="reg-grade"
                  className="block text-xs font-semibold mb-1.5"
                  style={LABEL_STYLE}
                >
                  Grade / Class{" "}
                  <span
                    style={{ color: "oklch(0.60 0.05 258)", fontWeight: 400 }}
                  >
                    (optional)
                  </span>
                </label>
                <Input
                  id="reg-grade"
                  data-ocid="login.grade.input"
                  type="text"
                  placeholder="e.g. Class 10, Grade 5"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="rounded-xl border-border"
                  style={INPUT_STYLE}
                />
              </div>

              <AnimatePresence>
                {step3Error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    data-ocid="login.error_state"
                    className="text-xs font-semibold px-3 py-2 rounded-lg"
                    style={{
                      background: "oklch(0.97 0.04 25)",
                      color: "oklch(0.52 0.22 25)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {step3Error}
                  </motion.p>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                data-ocid="login.register.submit_button"
                className="w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:opacity-90"
                style={{
                  background: methodBtnGradient(method),
                  color: "white",
                  border: "none",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                🎓 Create Account
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function StudentLoginPage() {
  const [topTab, setTopTab] = useState<TopTab>("signin");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-10"
      style={BG_STYLE}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-[-100px] right-[-80px] w-96 h-96 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.26 80) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-80px] left-[-60px] w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.52 0.24 160) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-[-40px] w-64 h-64 rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.44 0.22 258) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.1, 0.64, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={CARD_STYLE}
        >
          {/* Top gradient strip */}
          <div
            className="h-1.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.52 0.24 160) 0%, oklch(0.55 0.26 80) 40%, oklch(0.44 0.22 258) 100%)",
            }}
          />

          <div className="px-7 pt-6 pb-7">
            {/* Logo + title */}
            <div className="flex flex-col items-center text-center mb-6">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 220 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-3"
                style={{ background: "oklch(0.28 0.12 258)" }}
              >
                <GraduationCap className="w-7 h-7 text-white" />
              </motion.div>
              <h1
                className="text-xl font-extrabold leading-tight mb-0.5"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: "oklch(0.18 0.06 258)",
                }}
              >
                The Learning Hub
              </h1>
              <p
                className="text-xs"
                style={{
                  color: "oklch(0.50 0.05 258)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Your English learning journey starts here
              </p>
            </div>

            {/* Top-level tabs: Sign In / Create Account */}
            <div
              className="flex rounded-xl p-1 gap-1 mb-5"
              style={{ background: "oklch(0.95 0.02 258)" }}
            >
              <button
                type="button"
                data-ocid="login.signin.tab"
                onClick={() => setTopTab("signin")}
                className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all"
                style={{
                  background: topTab === "signin" ? "white" : "transparent",
                  color:
                    topTab === "signin"
                      ? "oklch(0.28 0.12 258)"
                      : "oklch(0.50 0.05 258)",
                  boxShadow:
                    topTab === "signin"
                      ? "0 1px 4px oklch(0 0 0 / 12%)"
                      : "none",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                data-ocid="login.register.tab"
                onClick={() => setTopTab("register")}
                className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all"
                style={{
                  background: topTab === "register" ? "white" : "transparent",
                  color:
                    topTab === "register"
                      ? "oklch(0.28 0.12 258)"
                      : "oklch(0.50 0.05 258)",
                  boxShadow:
                    topTab === "register"
                      ? "0 1px 4px oklch(0 0 0 / 12%)"
                      : "none",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Create Account
              </button>
            </div>

            {/* Panel content */}
            <AnimatePresence mode="wait">
              {topTab === "signin" ? (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22 }}
                >
                  <SignInPanel onSwitchTab={() => setTopTab("register")} />
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <RegisterPanel onSwitchTab={() => setTopTab("signin")} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Feature badges */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["30 Daily Lessons", "Grammar Topics", "Stories", "Quiz"].map(
                (label) => (
                  <span
                    key={label}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(0.95 0.03 258)",
                      color: "oklch(0.35 0.08 258)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs mt-4"
          style={{
            color: "oklch(0.75 0.04 258)",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          <BookOpen className="w-3 h-3 inline mr-1" />
          Your progress is saved on this device
        </motion.p>
      </motion.div>
    </div>
  );
}
