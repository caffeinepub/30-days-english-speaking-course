interface Avatar {
  id: string;
  emoji: string;
  bg: string;
  ring: string;
  label: string;
}

const AVATARS: Avatar[] = [
  {
    id: "avatar-1",
    emoji: "🎓",
    bg: "oklch(0.35 0.16 258)",
    ring: "oklch(0.55 0.20 258)",
    label: "Graduate",
  },
  {
    id: "avatar-2",
    emoji: "📚",
    bg: "oklch(0.40 0.18 28)",
    ring: "oklch(0.60 0.22 28)",
    label: "Books",
  },
  {
    id: "avatar-3",
    emoji: "✏️",
    bg: "oklch(0.45 0.18 175)",
    ring: "oklch(0.62 0.20 175)",
    label: "Pencil",
  },
  {
    id: "avatar-4",
    emoji: "🌟",
    bg: "oklch(0.50 0.20 78)",
    ring: "oklch(0.68 0.22 78)",
    label: "Star",
  },
  {
    id: "avatar-5",
    emoji: "💡",
    bg: "oklch(0.48 0.19 50)",
    ring: "oklch(0.65 0.21 50)",
    label: "Idea",
  },
  {
    id: "avatar-6",
    emoji: "🔬",
    bg: "oklch(0.38 0.16 155)",
    ring: "oklch(0.56 0.18 155)",
    label: "Science",
  },
  {
    id: "avatar-7",
    emoji: "🎯",
    bg: "oklch(0.42 0.20 320)",
    ring: "oklch(0.60 0.22 320)",
    label: "Target",
  },
  {
    id: "avatar-8",
    emoji: "🏆",
    bg: "oklch(0.46 0.18 60)",
    ring: "oklch(0.64 0.20 60)",
    label: "Trophy",
  },
];

interface AvatarPickerProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function AvatarPicker({
  selected,
  onSelect,
}: AvatarPickerProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {AVATARS.map((av) => {
        const isSelected = selected === av.id;
        return (
          <button
            key={av.id}
            type="button"
            aria-label={`Select ${av.label} avatar`}
            aria-pressed={isSelected}
            onClick={() => onSelect(av.id)}
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all focus-visible:outline-none focus-visible:ring-2"
            style={{
              background: av.bg,
              boxShadow: isSelected
                ? `0 0 0 3px white, 0 0 0 5px ${av.ring}`
                : "0 2px 6px oklch(0 0 0 / 20%)",
              transform: isSelected ? "scale(1.15)" : "scale(1)",
              transition:
                "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease",
            }}
          >
            {av.emoji}
          </button>
        );
      })}
    </div>
  );
}

export { AVATARS };
