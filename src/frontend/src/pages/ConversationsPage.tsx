import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Heart, MessageCircle, PartyPopper } from "lucide-react";
import { motion } from "motion/react";

interface Dialogue {
  english: string;
  hindi: string;
}

const schoolDialogues: Dialogue[] = [
  {
    english: "Good morning, teacher!",
    hindi: "Shubh prabhat, sir!",
  },
  {
    english: "May I come in, please?",
    hindi: "Kya main andar aa sakta hoon?",
  },
  {
    english: "I didn't understand this lesson.",
    hindi: "Mujhe yeh paath samajh nahi aaya.",
  },
  {
    english: "Can you explain it again?",
    hindi: "Kya aap ise dobara samjha sakte hain?",
  },
  {
    english: "What is the homework for today?",
    hindi: "Aaj ka ghar ka kaam kya hai?",
  },
  {
    english: "I forgot my notebook at home.",
    hindi: "Main apni copy ghar bhool aaya.",
  },
  {
    english: "Can I borrow your pen?",
    hindi: "Kya main aapka pen le sakta hoon?",
  },
  {
    english: "When is the next test?",
    hindi: "Agla test kab hai?",
  },
  {
    english: "I scored 90 marks in the exam.",
    hindi: "Maine pariksha mein 90 ank prapt kiye.",
  },
  {
    english: "Let's study together after school.",
    hindi: "School ke baad milkar padhaai karein.",
  },
  {
    english: "She is the best student in our class.",
    hindi: "Woh hamare class ki sabse achhi student hai.",
  },
  {
    english: "The library is open till 5 PM.",
    hindi: "Pustakalaya shaam 5 baje tak khula hai.",
  },
  {
    english: "Please be quiet in class.",
    hindi: "Kaksha mein shant rahein.",
  },
  {
    english: "I want to join the science club.",
    hindi: "Main science club mein join karna chahta hoon.",
  },
  {
    english: "Thank you for helping me, sir.",
    hindi: "Meri madad ke liye dhanyavaad, sir.",
  },
];

const partyDialogues: Dialogue[] = [
  {
    english: "Welcome! We are so glad you came.",
    hindi: "Swaagat hai! Hum bahut khush hain ki aap aaye.",
  },
  {
    english: "Happy Birthday! Many happy returns of the day.",
    hindi: "Janamdin mubarak! Bahut bahut badhaai.",
  },
  {
    english: "The decorations look amazing!",
    hindi: "Sajaahat bahut sundar lag rahi hai!",
  },
  {
    english: "What would you like to eat or drink?",
    hindi: "Aap kya khaana ya peena pasand karenge?",
  },
  {
    english: "Let me introduce you to my friends.",
    hindi: "Main aapko apne doston se milwata hoon.",
  },
  {
    english: "Can we take a photo together?",
    hindi: "Kya hum ek saath photo le sakte hain?",
  },
  {
    english: "The music is so good tonight!",
    hindi: "Aaj raat ka sangeet bahut achha hai!",
  },
  {
    english: "I am having such a great time!",
    hindi: "Mujhe bahut mazaa aa raha hai!",
  },
  {
    english: "The food is absolutely delicious!",
    hindi: "Khaana bilkul lajawaab hai!",
  },
  {
    english: "Thank you for inviting me.",
    hindi: "Mujhe invite karne ke liye shukriya.",
  },
  {
    english: "Let's dance together!",
    hindi: "Chalein, milkar naachte hain!",
  },
  {
    english: "See you at the next party!",
    hindi: "Agli party mein milenge!",
  },
];

const weddingDialogues: Dialogue[] = [
  {
    english: "Congratulations on your wedding!",
    hindi: "Shaadi ki bahut bahut badhaai!",
  },
  {
    english: "The bride looks absolutely beautiful.",
    hindi: "Dulhan bilkul sundar lag rahi hai.",
  },
  {
    english: "The groom looks so handsome.",
    hindi: "Dulha bahut sundar dikh raha hai.",
  },
  {
    english: "May God bless you both with happiness.",
    hindi: "Bhagwan aap dono ko sukhi rakhe.",
  },
  {
    english: "The wedding venue is so grand!",
    hindi: "Shaadi ka sthal bahut bhaavyashali hai!",
  },
  {
    english: "I love the wedding decorations.",
    hindi: "Mujhe shaadi ki sajaahat bahut pasand hai.",
  },
  {
    english: "When did you arrive for the wedding?",
    hindi: "Aap shaadi ke liye kab aaye?",
  },
  {
    english: "The food at this wedding is outstanding.",
    hindi: "Is shaadi ka khaana lajawaab hai.",
  },
  {
    english: "The bride and groom make a lovely couple.",
    hindi: "Dulha-dulhan ek sundar jodi hain.",
  },
  {
    english: "Wishing you a lifetime of happiness.",
    hindi: "Aapko jeevanabhar ki khushiyaan milein.",
  },
  {
    english: "Please give our blessings to the couple.",
    hindi: "Jodi ko hamaari aashirvaad dijiye.",
  },
  {
    english: "This is the most beautiful wedding I've seen.",
    hindi: "Yeh sabse sundar shaadi hai jo maine dekhi.",
  },
];

interface DialogueCardProps {
  dialogue: Dialogue;
  index: number;
  accentColor: string;
  accentBg: string;
}

function DialogueCard({
  dialogue,
  index,
  accentColor,
  accentBg,
}: DialogueCardProps) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      data-ocid={`conversations.item.${index + 1}`}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="flex items-start gap-4 p-4 rounded-xl border border-border transition-shadow hover:shadow-md"
      style={{
        background: isEven ? "oklch(1 0 0)" : "oklch(0.97 0.012 75)",
      }}
    >
      {/* Number badge */}
      <div
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm"
        style={{ background: accentColor }}
      >
        {index + 1}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className="font-display text-base font-bold leading-snug mb-1"
          style={{ color: "oklch(0.15 0.04 255)" }}
        >
          {dialogue.english}
        </p>
        <p
          className="font-body text-sm italic leading-relaxed"
          style={{ color: "oklch(0.52 0.08 255)" }}
        >
          {dialogue.hindi}
        </p>
      </div>

      {/* Language badge */}
      <div
        className="shrink-0 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
        style={{ background: accentBg, color: accentColor }}
      >
        EN / HI
      </div>
    </motion.div>
  );
}

interface ScenarioTabProps {
  dialogues: Dialogue[];
  accentColor: string;
  accentBg: string;
}

function ScenarioTab({ dialogues, accentColor, accentBg }: ScenarioTabProps) {
  return (
    <div className="space-y-3 mt-6">
      {dialogues.map((dialogue, i) => (
        <DialogueCard
          key={dialogue.english}
          dialogue={dialogue}
          index={i}
          accentColor={accentColor}
          accentBg={accentBg}
        />
      ))}
    </div>
  );
}

export default function ConversationsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Page Header */}
      <div
        className="relative overflow-hidden py-12 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.12 258) 0%, oklch(0.30 0.18 320) 45%, oklch(0.40 0.16 40) 100%)",
        }}
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-20" />

        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-15 translate-x-1/3 -translate-y-1/3"
          style={{ background: "oklch(0.88 0.20 78)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 -translate-x-1/4 translate-y-1/4"
          style={{ background: "oklch(0.70 0.18 195)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 shadow-lg"
            style={{
              background: "oklch(1 0 0 / 15%)",
              backdropFilter: "blur(8px)",
            }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-3"
          >
            Daily Conversations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.88 0.04 260)" }}
          >
            Real-life English phrases with Hindi translations — for school,
            parties &amp; weddings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-5 flex-wrap"
          >
            {[
              { label: "15 School Phrases", color: "oklch(0.42 0.18 28)" },
              { label: "12 Party Phrases", color: "oklch(0.42 0.18 320)" },
              { label: "12 Wedding Phrases", color: "oklch(0.38 0.16 175)" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                style={{
                  background: "oklch(1 0 0 / 15%)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <Tabs defaultValue="school">
          <TabsList className="w-full grid grid-cols-3 h-14 rounded-xl p-1.5 border border-border bg-card shadow-sm">
            <TabsTrigger
              value="school"
              data-ocid="conversations.school.tab"
              className="flex items-center gap-2 rounded-lg text-sm font-semibold data-[state=active]:shadow-sm transition-all"
              style={{
                color: "oklch(0.42 0.18 28)",
              }}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">School</span>
            </TabsTrigger>
            <TabsTrigger
              value="party"
              data-ocid="conversations.party.tab"
              className="flex items-center gap-2 rounded-lg text-sm font-semibold data-[state=active]:shadow-sm transition-all"
              style={{
                color: "oklch(0.42 0.18 320)",
              }}
            >
              <PartyPopper className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Party</span>
            </TabsTrigger>
            <TabsTrigger
              value="wedding"
              data-ocid="conversations.wedding.tab"
              className="flex items-center gap-2 rounded-lg text-sm font-semibold data-[state=active]:shadow-sm transition-all"
              style={{
                color: "oklch(0.38 0.16 175)",
              }}
            >
              <Heart className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Wedding</span>
            </TabsTrigger>
          </TabsList>

          {/* School Tab */}
          <TabsContent value="school">
            {/* Tab Header */}
            <div
              className="mt-5 p-4 rounded-xl flex items-center gap-3 border"
              style={{
                background: "oklch(0.96 0.06 28)",
                borderColor: "oklch(0.42 0.18 28 / 25%)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.42 0.18 28)", color: "white" }}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2
                  className="font-display text-base font-bold"
                  style={{ color: "oklch(0.42 0.18 28)" }}
                >
                  School Conversations
                </h2>
                <p className="font-body text-xs text-muted-foreground">
                  15 everyday phrases for students and teachers
                </p>
              </div>
              <Badge
                className="ml-auto shrink-0 font-semibold"
                style={{ background: "oklch(0.42 0.18 28)", color: "white" }}
              >
                15 Phrases
              </Badge>
            </div>
            <ScenarioTab
              dialogues={schoolDialogues}
              accentColor="oklch(0.42 0.18 28)"
              accentBg="oklch(0.96 0.06 28)"
            />
          </TabsContent>

          {/* Party Tab */}
          <TabsContent value="party">
            <div
              className="mt-5 p-4 rounded-xl flex items-center gap-3 border"
              style={{
                background: "oklch(0.95 0.06 320)",
                borderColor: "oklch(0.42 0.18 320 / 25%)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.42 0.18 320)", color: "white" }}
              >
                <PartyPopper className="w-5 h-5" />
              </div>
              <div>
                <h2
                  className="font-display text-base font-bold"
                  style={{ color: "oklch(0.42 0.18 320)" }}
                >
                  Party Conversations
                </h2>
                <p className="font-body text-xs text-muted-foreground">
                  12 fun phrases for celebrations and gatherings
                </p>
              </div>
              <Badge
                className="ml-auto shrink-0 font-semibold"
                style={{ background: "oklch(0.42 0.18 320)", color: "white" }}
              >
                12 Phrases
              </Badge>
            </div>
            <ScenarioTab
              dialogues={partyDialogues}
              accentColor="oklch(0.42 0.18 320)"
              accentBg="oklch(0.95 0.06 320)"
            />
          </TabsContent>

          {/* Wedding Tab */}
          <TabsContent value="wedding">
            <div
              className="mt-5 p-4 rounded-xl flex items-center gap-3 border"
              style={{
                background: "oklch(0.94 0.07 175)",
                borderColor: "oklch(0.38 0.16 175 / 25%)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.38 0.16 175)", color: "white" }}
              >
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h2
                  className="font-display text-base font-bold"
                  style={{ color: "oklch(0.38 0.16 175)" }}
                >
                  Wedding Conversations
                </h2>
                <p className="font-body text-xs text-muted-foreground">
                  12 elegant phrases for wedding ceremonies
                </p>
              </div>
              <Badge
                className="ml-auto shrink-0 font-semibold"
                style={{ background: "oklch(0.38 0.16 175)", color: "white" }}
              >
                12 Phrases
              </Badge>
            </div>
            <ScenarioTab
              dialogues={weddingDialogues}
              accentColor="oklch(0.38 0.16 175)"
              accentBg="oklch(0.94 0.07 175)"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
