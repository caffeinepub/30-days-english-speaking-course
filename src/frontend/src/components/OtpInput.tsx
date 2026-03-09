import { useRef } from "react";

interface OtpInputProps {
  value: string;
  onChange: (val: string) => void;
  length?: number;
}

export default function OtpInput({
  value,
  onChange,
  length = 6,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = value
    .split("")
    .concat(Array(length).fill(""))
    .slice(0, length);

  const handleChange = (idx: number, char: string) => {
    const digit = char.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[idx] = digit;
    onChange(newDigits.join("").replace(/\s/g, ""));
    if (digit && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (digits[idx]) {
        const newDigits = [...digits];
        newDigits[idx] = "";
        onChange(newDigits.join("").replace(/\s/g, ""));
      } else if (idx > 0) {
        inputRefs.current[idx - 1]?.focus();
        const newDigits = [...digits];
        newDigits[idx - 1] = "";
        onChange(newDigits.join("").replace(/\s/g, ""));
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);
    onChange(pasted.padEnd(0, ""));
    const focusIdx = Math.min(pasted.length, length - 1);
    inputRefs.current[focusIdx]?.focus();
  };

  return (
    <div
      data-ocid="login.otp.input"
      className="flex gap-2 justify-center"
      onPaste={handlePaste}
    >
      {Array.from({ length }, (_, idx) => `otp-${idx}`).map((keyId, idx) => (
        <input
          key={keyId}
          ref={(el) => {
            inputRefs.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digits[idx] || ""}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          onFocus={(e) => e.target.select()}
          aria-label={`OTP digit ${idx + 1}`}
          className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none transition-all"
          style={{
            background: "oklch(0.97 0.012 75)",
            borderColor: digits[idx]
              ? "oklch(0.55 0.26 80)"
              : "oklch(0.85 0.04 258 / 50%)",
            color: "oklch(0.18 0.06 258)",
            boxShadow: digits[idx]
              ? "0 0 0 3px oklch(0.55 0.26 80 / 20%)"
              : "none",
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        />
      ))}
    </div>
  );
}
