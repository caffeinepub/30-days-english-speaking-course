import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, MessageCircle, Send, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useStudentAuth } from "../hooks/useStudentAuth";
import type { StudentProfile } from "../hooks/useStudentAuth";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  fromIdentifier: string;
  toIdentifier: string;
  text: string;
  timestamp: number;
}

const CHAT_KEY = "tlh_chat_messages";

// Avatar emojis mapped from avatar ids
const AVATAR_EMOJIS: Record<string, string> = {
  "avatar-1": "🧑",
  "avatar-2": "👩",
  "avatar-3": "👦",
  "avatar-4": "👧",
  "avatar-5": "🧒",
  "avatar-6": "👨",
  "avatar-7": "🧓",
  "avatar-8": "👴",
};

function getAvatarEmoji(avatar: string): string {
  return AVATAR_EMOJIS[avatar] ?? "🧑";
}

// Stable "online" indicator – seeded by identifier for consistency
function isOnline(identifier: string): boolean {
  let hash = 0;
  for (let i = 0; i < identifier.length; i++) {
    hash = ((hash << 5) - hash + identifier.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % 3 !== 0; // ~67% chance online
}

function loadMessages(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(CHAT_KEY);
    return raw ? (JSON.parse(raw) as ChatMessage[]) : [];
  } catch {
    return [];
  }
}

function saveMessages(msgs: ChatMessage[]): void {
  localStorage.setItem(CHAT_KEY, JSON.stringify(msgs));
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  if (d.toDateString() === today.toDateString()) return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ─── Student List Item ────────────────────────────────────────────────────────

interface StudentItemProps {
  profile: StudentProfile;
  isActive: boolean;
  lastMessage: ChatMessage | null;
  unreadCount: number;
  onClick: () => void;
  index: number;
}

function StudentItem({
  profile,
  isActive,
  lastMessage,
  unreadCount,
  onClick,
  index,
}: StudentItemProps) {
  const online = isOnline(profile.identifier);
  const ocidIndex = index + 1;

  return (
    <motion.button
      type="button"
      data-ocid={`chat.student.item.${ocidIndex}`}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all relative"
      style={{
        background: isActive ? "oklch(0.28 0.12 258 / 10%)" : "transparent",
        borderLeft: isActive
          ? "3px solid oklch(0.28 0.12 258)"
          : "3px solid transparent",
      }}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-xl font-bold shadow-sm"
          style={{
            background: isActive
              ? "oklch(0.28 0.12 258 / 15%)"
              : "oklch(0.94 0.05 258)",
          }}
        >
          {getAvatarEmoji(profile.avatar)}
        </div>
        <div
          className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
          style={{
            background: online ? "oklch(0.65 0.22 145)" : "oklch(0.75 0 0)",
            borderColor: "oklch(1 0 0)",
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span
            className="font-semibold text-sm truncate"
            style={{
              color: isActive ? "oklch(0.28 0.12 258)" : "oklch(0.20 0.05 258)",
              fontFamily: "var(--font-display)",
            }}
          >
            {profile.name}
          </span>
          {lastMessage && (
            <span
              className="text-xs shrink-0"
              style={{ color: "oklch(0.60 0.04 258)" }}
            >
              {formatTime(lastMessage.timestamp)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mt-0.5 gap-2">
          <span
            className="text-xs truncate"
            style={{ color: "oklch(0.55 0.04 258)" }}
          >
            {lastMessage ? lastMessage.text : online ? "Online" : "Offline"}
          </span>
          {unreadCount > 0 && (
            <span
              className="shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
              style={{ background: "oklch(0.28 0.12 258)" }}
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}

// ─── Chat View ────────────────────────────────────────────────────────────────

interface ChatViewProps {
  peer: StudentProfile;
  currentIdentifier: string;
  onBack: () => void;
}

function ChatView({ peer, currentIdentifier, onBack }: ChatViewProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const all = loadMessages();
    return all.filter(
      (m) =>
        (m.fromIdentifier === currentIdentifier &&
          m.toIdentifier === peer.identifier) ||
        (m.fromIdentifier === peer.identifier &&
          m.toIdentifier === currentIdentifier),
    );
  });
  const [text, setText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const online = isOnline(peer.identifier);

  // Reload messages when peer changes
  useEffect(() => {
    const all = loadMessages();
    const thread = all.filter(
      (m) =>
        (m.fromIdentifier === currentIdentifier &&
          m.toIdentifier === peer.identifier) ||
        (m.fromIdentifier === peer.identifier &&
          m.toIdentifier === currentIdentifier),
    );
    setMessages(thread);
  }, [peer.identifier, currentIdentifier]);

  // Auto-scroll to bottom
  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll triggers on message length change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const msg: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      fromIdentifier: currentIdentifier,
      toIdentifier: peer.identifier,
      text: trimmed,
      timestamp: Date.now(),
    };
    const all = loadMessages();
    const updated = [...all, msg];
    saveMessages(updated);
    setMessages((prev) => [...prev, msg]);
    setText("");
  }, [text, currentIdentifier, peer.identifier]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Group messages by date
  const grouped = useMemo(() => {
    const groups: { date: string; msgs: ChatMessage[] }[] = [];
    for (const msg of messages) {
      const dateStr = formatDate(msg.timestamp);
      const last = groups[groups.length - 1];
      if (last && last.date === dateStr) {
        last.msgs.push(msg);
      } else {
        groups.push({ date: dateStr, msgs: [msg] });
      }
    }
    return groups;
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div
        className="flex items-center gap-3 px-4 py-3.5 border-b shrink-0"
        style={{
          background: "oklch(0.99 0.005 258)",
          borderColor: "oklch(0.90 0.04 258)",
        }}
      >
        <button
          type="button"
          onClick={onBack}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:bg-muted"
          style={{ color: "oklch(0.28 0.12 258)" }}
          aria-label="Back to student list"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="relative">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
            style={{ background: "oklch(0.93 0.08 258)" }}
          >
            {getAvatarEmoji(peer.avatar)}
          </div>
          <div
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
            style={{
              background: online ? "oklch(0.65 0.22 145)" : "oklch(0.75 0 0)",
            }}
          />
        </div>

        <div>
          <div
            className="font-bold text-sm leading-tight"
            style={{
              color: "oklch(0.20 0.05 258)",
              fontFamily: "var(--font-display)",
            }}
          >
            {peer.name}
          </div>
          <div
            className="text-xs"
            style={{
              color: online ? "oklch(0.55 0.18 145)" : "oklch(0.60 0.04 258)",
            }}
          >
            {online ? "Online" : "Offline"} · {peer.grade || "Student"}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4"
        data-ocid="chat.messages.list"
      >
        {grouped.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 py-12">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "oklch(0.93 0.08 258)" }}
            >
              {getAvatarEmoji(peer.avatar)}
            </div>
            <p
              className="text-sm font-semibold text-center"
              style={{ color: "oklch(0.40 0.06 258)" }}
            >
              Say hello to {peer.name}!
            </p>
            <p
              className="text-xs text-center"
              style={{ color: "oklch(0.60 0.04 258)" }}
            >
              Start the conversation below.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {grouped.map((group) => (
              <div key={group.date}>
                {/* Date separator */}
                <div className="flex items-center gap-3 my-4">
                  <div
                    className="flex-1 h-px"
                    style={{ background: "oklch(0.90 0.04 258)" }}
                  />
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(0.93 0.06 258)",
                      color: "oklch(0.45 0.08 258)",
                    }}
                  >
                    {group.date}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "oklch(0.90 0.04 258)" }}
                  />
                </div>

                <div className="space-y-2">
                  {group.msgs.map((msg) => {
                    const isMine = msg.fromIdentifier === currentIdentifier;
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            isMine ? "rounded-tr-sm" : "rounded-tl-sm"
                          }`}
                          style={
                            isMine
                              ? {
                                  background: "oklch(0.28 0.12 258)",
                                  color: "white",
                                }
                              : {
                                  background: "oklch(0.95 0.04 258)",
                                  color: "oklch(0.20 0.05 258)",
                                }
                          }
                        >
                          <p style={{ fontFamily: "var(--font-body)" }}>
                            {msg.text}
                          </p>
                          <div
                            className={`text-xs mt-1 ${isMine ? "text-right" : "text-left"}`}
                            style={{
                              color: isMine
                                ? "oklch(0.85 0.06 258)"
                                : "oklch(0.60 0.04 258)",
                            }}
                          >
                            {formatTime(msg.timestamp)}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-t shrink-0"
        style={{
          background: "oklch(0.99 0.005 258)",
          borderColor: "oklch(0.90 0.04 258)",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          data-ocid="chat.message_input"
          placeholder={`Message ${peer.name}…`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
          style={{
            background: "oklch(0.95 0.05 258)",
            color: "oklch(0.20 0.05 258)",
            border: "1.5px solid oklch(0.88 0.06 258)",
            fontFamily: "var(--font-body)",
          }}
        />
        <button
          type="button"
          data-ocid="chat.send_button"
          onClick={sendMessage}
          disabled={!text.trim()}
          className="flex items-center justify-center w-10 h-10 rounded-xl transition-all hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          style={{
            background: "oklch(0.28 0.12 258)",
            color: "white",
          }}
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Main ChatPage ────────────────────────────────────────────────────────────

export default function ChatPage() {
  const { student, getAllProfiles } = useStudentAuth();
  const [selectedPeer, setSelectedPeer] = useState<StudentProfile | null>(null);

  const allProfiles = getAllProfiles();
  const otherStudents = allProfiles.filter(
    (p) => p.identifier !== student?.identifier,
  );

  const allMessages = loadMessages();

  // Get last message for each peer
  function getLastMessage(peer: StudentProfile): ChatMessage | null {
    const thread = allMessages.filter(
      (m) =>
        (m.fromIdentifier === student?.identifier &&
          m.toIdentifier === peer.identifier) ||
        (m.fromIdentifier === peer.identifier &&
          m.toIdentifier === student?.identifier),
    );
    return thread.length > 0
      ? thread.sort((a, b) => b.timestamp - a.timestamp)[0]
      : null;
  }

  function getUnreadCount(peer: StudentProfile): number {
    return allMessages.filter(
      (m) =>
        m.fromIdentifier === peer.identifier &&
        m.toIdentifier === student?.identifier,
    ).length;
  }

  // Sort students: those with messages first, then alphabetically
  const sortedStudents = [...otherStudents].sort((a, b) => {
    const lastA = getLastMessage(a);
    const lastB = getLastMessage(b);
    if (lastA && lastB) return lastB.timestamp - lastA.timestamp;
    if (lastA) return -1;
    if (lastB) return 1;
    return a.name.localeCompare(b.name);
  });

  const showMobileList = !selectedPeer;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl overflow-hidden shadow-card border"
        style={{
          borderColor: "oklch(0.88 0.06 258)",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Page Header */}
        <div
          className="flex items-center gap-3 px-6 py-4 border-b shrink-0"
          style={{
            background: "oklch(0.28 0.12 258)",
            borderColor: "oklch(0.35 0.12 258)",
          }}
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <h1
            className="font-bold text-lg text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Student Chat
          </h1>
          {otherStudents.length > 0 && (
            <span
              className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: "oklch(1 0 0 / 15%)",
                color: "white",
              }}
            >
              {otherStudents.length} student
              {otherStudents.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Layout: sidebar + chat */}
        <div className="flex flex-1 min-h-0" style={{ height: "560px" }}>
          {/* Sidebar — always visible on desktop, hidden on mobile when chat open */}
          <div
            className={`flex flex-col border-r ${showMobileList ? "flex" : "hidden"} md:flex`}
            style={{
              width: "280px",
              minWidth: "220px",
              maxWidth: "320px",
              borderColor: "oklch(0.90 0.04 258)",
              background: "oklch(0.99 0.005 258)",
              flexShrink: 0,
            }}
          >
            {/* Search / header */}
            <div
              className="px-4 py-3 border-b"
              style={{ borderColor: "oklch(0.90 0.04 258)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.55 0.06 258)" }}
              >
                Classmates
              </p>
            </div>

            {/* Student list */}
            <ScrollArea className="flex-1">
              {otherStudents.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center py-16 px-6 gap-3 text-center"
                  data-ocid="chat.empty_state"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.93 0.08 258)" }}
                  >
                    <User
                      className="w-6 h-6"
                      style={{ color: "oklch(0.45 0.10 258)" }}
                    />
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.40 0.06 258)" }}
                  >
                    No other students yet
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.62 0.04 258)" }}
                  >
                    Once other students register, they'll appear here for chat.
                  </p>
                </div>
              ) : (
                <div data-ocid="chat.student_list">
                  {sortedStudents.map((peer, i) => (
                    <StudentItem
                      key={peer.identifier}
                      profile={peer}
                      isActive={selectedPeer?.identifier === peer.identifier}
                      lastMessage={getLastMessage(peer)}
                      unreadCount={getUnreadCount(peer)}
                      onClick={() => setSelectedPeer(peer)}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Chat area */}
          <div
            className={`flex-1 flex flex-col min-w-0 ${showMobileList ? "hidden" : "flex"} md:flex`}
            style={{ background: "oklch(0.97 0.01 258)" }}
          >
            <AnimatePresence mode="wait">
              {selectedPeer && student ? (
                <motion.div
                  key={selectedPeer.identifier}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="h-full flex flex-col"
                >
                  <ChatView
                    peer={selectedPeer}
                    currentIdentifier={student.identifier}
                    onBack={() => setSelectedPeer(null)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.93 0.08 258)" }}
                  >
                    <MessageCircle
                      className="w-9 h-9"
                      style={{ color: "oklch(0.28 0.12 258)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold text-lg"
                      style={{
                        color: "oklch(0.28 0.12 258)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      Select a classmate
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "oklch(0.55 0.06 258)" }}
                    >
                      Choose a student from the list to start chatting.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
