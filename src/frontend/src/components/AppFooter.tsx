import { Heart } from "lucide-react";
import { memo } from "react";

function AppFooterComponent() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border bg-card py-6 px-4 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground font-body">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-foreground">
            LearningPoint
          </span>
          <span>— Your English Grammar Guide</span>
        </div>
        <div className="flex items-center gap-1">
          <span>© {year}. Built with</span>
          <Heart
            className="w-3.5 h-3.5 fill-current"
            style={{ color: "oklch(0.55 0.22 28)" }}
          />
          <span>using</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.48 0.22 265)" }}
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
export default memo(AppFooterComponent);
