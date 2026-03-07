import { Button } from "@/components/ui/button";
import { BookOpen, Loader2, Lock, Mic } from "lucide-react";
import { motion } from "motion/react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

export default function LoginGatePage() {
  const { login, loginStatus } = useInternetIdentity();
  const isLoggingIn = loginStatus === "logging-in";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden gradient-hero wave-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.42 0.12 210) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-72 h-72 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.18 70) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-[8%] w-10 h-10 rounded-full opacity-30"
          style={{ background: "oklch(0.42 0.12 210 / 40%)" }}
        />
        <div
          className="absolute top-[20%] right-[12%] w-6 h-6 rounded-full opacity-25"
          style={{ background: "oklch(0.78 0.18 70 / 50%)" }}
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.2, 0.64, 1] }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: "oklch(1 0 0 / 92%)",
            backdropFilter: "blur(16px)",
            border: "1px solid oklch(0.42 0.12 210 / 15%)",
          }}
        >
          {/* Top accent strip */}
          <div
            className="h-1.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.42 0.12 210) 0%, oklch(0.62 0.14 195) 50%, oklch(0.78 0.18 70) 100%)",
            }}
          />

          <div className="px-8 py-10 flex flex-col items-center text-center">
            {/* Icon cluster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.45,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative mb-6"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.12 210) 0%, oklch(0.5 0.14 195) 100%)",
                }}
              >
                <BookOpen className="w-9 h-9 text-white" strokeWidth={1.8} />
              </div>
              {/* Mic badge */}
              <div
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-white"
                style={{ background: "oklch(0.78 0.18 70)" }}
              >
                <Mic className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <h1
                className="text-2xl font-bold leading-tight mb-1"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: "oklch(0.18 0.04 230)",
                }}
              >
                30 Days English
              </h1>
              <h2
                className="text-lg font-semibold mb-4"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: "oklch(0.42 0.12 210)",
                }}
              >
                Speaking Course
              </h2>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="w-16 h-0.5 mb-6 rounded-full"
              style={{ background: "oklch(0.88 0.02 210)" }}
            />

            {/* Lock icon + message */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col items-center gap-3 mb-8"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.94 0.015 210)" }}
              >
                <Lock
                  className="w-5 h-5"
                  style={{ color: "oklch(0.52 0.04 220)" }}
                />
              </div>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{
                  color: "oklch(0.42 0.05 225)",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                This course is private. Please log in to continue.
              </p>
            </motion.div>

            {/* Login button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-full"
            >
              {isLoggingIn ? (
                <div
                  data-ocid="login_gate.loading_state"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold"
                  style={{
                    background: "oklch(0.94 0.015 210)",
                    color: "oklch(0.52 0.04 220)",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Connecting…
                </div>
              ) : (
                <Button
                  data-ocid="login_gate.primary_button"
                  onClick={login}
                  disabled={isLoggingIn}
                  className="w-full py-3 text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.12 210) 0%, oklch(0.5 0.14 195) 100%)",
                    color: "white",
                    fontFamily: "'Nunito', sans-serif",
                    border: "none",
                  }}
                >
                  Log in to Access Course
                </Button>
              )}
            </motion.div>

            {/* Subtle hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="mt-5 text-xs"
              style={{
                color: "oklch(0.62 0.03 220)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Secure login via Internet Identity
            </motion.p>
          </div>
        </div>

        {/* Feature badges below card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-6 flex items-center justify-center gap-3 flex-wrap"
        >
          {["30 Daily Lessons", "Speaking Practice", "Track Progress"].map(
            (label) => (
              <span
                key={label}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: "oklch(1 0 0 / 70%)",
                  color: "oklch(0.35 0.08 215)",
                  border: "1px solid oklch(0.42 0.12 210 / 20%)",
                  fontFamily: "'Nunito', sans-serif",
                  backdropFilter: "blur(8px)",
                }}
              >
                {label}
              </span>
            ),
          )}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.4 }}
        className="absolute bottom-5 left-0 right-0 text-center"
      >
        <p
          className="text-xs"
          style={{
            color: "oklch(0.42 0.06 215 / 70%)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Built with love using caffeine.ai
          </a>
        </p>
      </motion.footer>
    </div>
  );
}
