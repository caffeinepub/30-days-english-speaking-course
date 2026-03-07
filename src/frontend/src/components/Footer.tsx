import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground font-body">
        <div className="flex items-center gap-1.5">
          <span>© 2026. Built with</span>
          <Heart size={14} className="text-destructive fill-current" />
          <span>using</span>
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-600 transition-colors"
          >
            caffeine.ai
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Your 30-day journey to confident English speaking.
        </p>
      </div>
    </footer>
  );
}
