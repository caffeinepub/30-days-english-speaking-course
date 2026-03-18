import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Home,
  MapPin,
  PartyPopper,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface Phrase {
  en: string;
  hi: string;
}

interface Category {
  id: string;
  label: string;
  labelHi: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  phrases: Phrase[];
}

const categories: Category[] = [
  {
    id: "outside",
    label: "Outside",
    labelHi: "बाहर",
    icon: <MapPin className="w-4 h-4" />,
    color: "oklch(0.50 0.26 200)",
    bgColor: "oklch(0.93 0.08 200)",
    phrases: [
      {
        en: "Excuse me, can you help me?",
        hi: "Maafi karein, kya aap meri madad kar sakte hain?",
      },
      {
        en: "Where is the nearest bus stop?",
        hi: "Sabse kareeb bus stand kahan hai?",
      },
      { en: "How much does this cost?", hi: "Iska kya daam hai?" },
      {
        en: "I am lost. Can you show me the way?",
        hi: "Main raasta bhool gaya hoon. Kya aap raasta dikhayenge?",
      },
      { en: "Please keep the change.", hi: "Baki paise rakh lijiye." },
      { en: "Is this seat taken?", hi: "Kya yeh jagah kisi ki hai?" },
      {
        en: "Can I get a receipt, please?",
        hi: "Kya mujhe receipt mil sakti hai?",
      },
      {
        en: "I need a taxi to the station.",
        hi: "Mujhe station tak taxi chahiye.",
      },
      {
        en: "What time does the market close?",
        hi: "Bazaar kab band hota hai?",
      },
      {
        en: "Sorry, I did not mean to bump into you.",
        hi: "Maafi chahta hoon, galti se dhakka lag gaya.",
      },
      { en: "Please lower your voice.", hi: "Kripaya thoda dheeray bolein." },
      {
        en: "Can I use your phone for a minute?",
        hi: "Kya main ek minute ke liye aapka phone use kar sakta hoon?",
      },
    ],
  },
  {
    id: "party",
    label: "Party",
    labelHi: "पार्टी",
    icon: <PartyPopper className="w-4 h-4" />,
    color: "oklch(0.42 0.18 320)",
    bgColor: "oklch(0.94 0.07 320)",
    phrases: [
      { en: "Happy Birthday!", hi: "Janamdin mubarak!" },
      {
        en: "You look amazing tonight!",
        hi: "Aap aaj raat bahut achhe lag rahe hain!",
      },
      { en: "Let's take a selfie!", hi: "Chalein ek selfie lete hain!" },
      { en: "What song is this?", hi: "Yeh kaun sa gaana hai?" },
      { en: "I love the vibe here!", hi: "Yahan ka mahol bahut achha hai!" },
      {
        en: "Can I have one more slice of cake?",
        hi: "Kya mujhe ek aur cake ka tukda mil sakta hai?",
      },
      { en: "Who organized this party?", hi: "Yeh party kisne organize ki?" },
      { en: "See you on the dance floor!", hi: "Dance floor pe milte hain!" },
      { en: "This party is lit!", hi: "Yeh party zabardast hai!" },
      { en: "I'm having the best time!", hi: "Mujhe bahut mazaa aa raha hai!" },
      {
        en: "Can you pass me a drink?",
        hi: "Kya aap mujhe ek drink de sakte hain?",
      },
      {
        en: "Let's plan another party soon!",
        hi: "Jaldi hi ek aur party plan karte hain!",
      },
    ],
  },
  {
    id: "school",
    label: "School",
    labelHi: "स्कूल",
    icon: <GraduationCap className="w-4 h-4" />,
    color: "oklch(0.42 0.18 28)",
    bgColor: "oklch(0.95 0.08 28)",
    phrases: [
      { en: "Good morning, teacher!", hi: "Shubh prabhat, sir!" },
      { en: "May I come in, please?", hi: "Kya main andar aa sakta hoon?" },
      {
        en: "I didn't understand this topic.",
        hi: "Mujhe yeh topic samajh nahi aaya.",
      },
      {
        en: "Can you repeat that, please?",
        hi: "Kya aap dobara bol sakte hain?",
      },
      { en: "What is today's homework?", hi: "Aaj ka ghar ka kaam kya hai?" },
      { en: "I forgot my notebook.", hi: "Main apni notebook bhool gaya." },
      {
        en: "May I go to the washroom?",
        hi: "Kya main washroom ja sakta hoon?",
      },
      { en: "When is the next exam?", hi: "Agla exam kab hai?" },
      { en: "I scored full marks!", hi: "Maine poore ank prapt kiye!" },
      { en: "Can I sit here?", hi: "Kya main yahaan baith sakta hoon?" },
      { en: "Let's study together.", hi: "Milkar padhaai karte hain." },
      {
        en: "The teacher is very helpful.",
        hi: "Shikshak bahut sahayak hain.",
      },
    ],
  },
  {
    id: "friends",
    label: "Friends",
    labelHi: "दोस्त",
    icon: <Users className="w-4 h-4" />,
    color: "oklch(0.50 0.24 160)",
    bgColor: "oklch(0.93 0.08 160)",
    phrases: [
      { en: "What's up, buddy?", hi: "Kya chal raha hai, yaar?" },
      { en: "Let's hang out this weekend.", hi: "Is weekend milte hain." },
      { en: "You are the best!", hi: "Tum sabse best ho!" },
      {
        en: "I miss you so much!",
        hi: "Mujhe tumhari bahut yaad aa rahi hai!",
      },
      {
        en: "We should do this more often.",
        hi: "Hume yeh zyada baar karna chahiye.",
      },
      { en: "Stop pulling my leg!", hi: "Mera mazaak mat udao!" },
      {
        en: "I am always there for you.",
        hi: "Main hamesha tumhare liye hoon.",
      },
      { en: "Let's grab some food.", hi: "Chalein kuch khaate hain." },
      { en: "You are so funny!", hi: "Tum bahut funny ho!" },
      { en: "Tell me everything!", hi: "Mujhe sab batao!" },
      { en: "We have been friends forever.", hi: "Hum hamesha se dost hain." },
      {
        en: "Group trip planning time!",
        hi: "Group trip plan karne ka waqt aa gaya!",
      },
    ],
  },
  {
    id: "home",
    label: "Home",
    labelHi: "घर",
    icon: <Home className="w-4 h-4" />,
    color: "oklch(0.52 0.22 55)",
    bgColor: "oklch(0.95 0.09 55)",
    phrases: [
      {
        en: "Good morning, how did you sleep?",
        hi: "Shubh prabhat, neend kaisi rahi?",
      },
      {
        en: "What would you like for breakfast?",
        hi: "Nashte mein kya lenge?",
      },
      { en: "Please pass the salt.", hi: "Namak dena please." },
      {
        en: "Can you help me set the table?",
        hi: "Kya aap khaane ki mez lagane mein madad kar sakte hain?",
      },
      {
        en: "I'll be home by 8 PM.",
        hi: "Main shaam 8 baje tak ghar aa jaunga.",
      },
      { en: "Have you taken your medicine?", hi: "Kya aapne dawai li?" },
      { en: "Let's watch a movie tonight.", hi: "Aaj raat movie dekhte hain." },
      { en: "Please turn off the lights.", hi: "Lights band kar do please." },
      { en: "Where are my keys?", hi: "Meri chaabi kahan hai?" },
      { en: "I love you, mom!", hi: "Main tumse pyaar karta hoon, maa!" },
      {
        en: "Can we go for a walk?",
        hi: "Kya hum sair ke liye ja sakte hain?",
      },
      { en: "Dinner is ready!", hi: "Khaana taiyaar hai!" },
    ],
  },
  {
    id: "office",
    label: "Office",
    labelHi: "ऑफिस",
    icon: <Briefcase className="w-4 h-4" />,
    color: "oklch(0.45 0.20 270)",
    bgColor: "oklch(0.93 0.07 270)",
    phrases: [
      { en: "Good morning, sir.", hi: "Shubh prabhat, sir." },
      {
        en: "I have a meeting at 10 AM.",
        hi: "Meri subah 10 baje meeting hai.",
      },
      {
        en: "Can you send me that file?",
        hi: "Kya aap mujhe woh file bhej sakte hain?",
      },
      {
        en: "I'll complete it by tomorrow.",
        hi: "Main ise kal tak pura kar dunga.",
      },
      {
        en: "Please check your email.",
        hi: "Kripaya apna email check karein.",
      },
      { en: "How much is this shirt?", hi: "Yeh shirt kitne ki hai?" },
      {
        en: "Can I get a discount?",
        hi: "Kya mujhe koi chhoot mil sakti hai?",
      },
      {
        en: "Do you have this in another color?",
        hi: "Kya yeh doosre rang mein milega?",
      },
      {
        en: "The deadline is approaching.",
        hi: "Deadline nazdeek aa rahi hai.",
      },
      { en: "Let's schedule a call.", hi: "Ek call schedule karte hain." },
      { en: "I need it urgently.", hi: "Mujhe yeh jaldi chahiye." },
      {
        en: "Thank you for your business.",
        hi: "Aapke saath kaam karke achha laga.",
      },
    ],
  },
];

export default function PhrasesPage() {
  const [activeTab, setActiveTab] = useState("outside");

  const current = categories.find((c) => c.id === activeTab) ?? categories[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div
        className="relative overflow-hidden py-10 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 258) 0%, oklch(0.32 0.14 258) 60%, oklch(0.28 0.18 200) 100%)",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: "oklch(1 0 0 / 12%)" }}
          >
            <span>💬</span>
            <span>Daily Phrases</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-3xl md:text-5xl font-extrabold mb-3"
          >
            Daily Phrases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="font-body text-base md:text-lg mb-6 max-w-xl mx-auto"
            style={{ color: "oklch(0.88 0.04 258)" }}
          >
            Everyday English sentences for every situation — in English and
            Hindi.
          </motion.p>
          {/* Count badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "oklch(1 0 0 / 14%)",
                  color: "white",
                }}
              >
                {cat.icon}
                {cat.phrases.length} {cat.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        className="sticky top-0 z-10 border-b border-border"
        style={{
          background: "oklch(1 0 0 / 95%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-1.5" data-ocid="phrases.tab">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: isActive ? cat.color : "transparent",
                    color: isActive ? "white" : "oklch(0.45 0.06 258)",
                    boxShadow: isActive ? `0 2px 8px ${cat.color}55` : "none",
                  }}
                >
                  {cat.icon}
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.slice(0, 3)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: current.bgColor, color: current.color }}
            >
              {current.icon}
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                {current.label}
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                {current.labelHi} — {current.phrases.length} phrases
              </p>
            </div>
            <Badge
              className="ml-auto text-sm px-3 py-1"
              style={{
                background: current.bgColor,
                color: current.color,
                border: "none",
              }}
            >
              {current.phrases.length} Phrases
            </Badge>
          </div>

          {/* Phrase Cards */}
          <div className="grid gap-3">
            {current.phrases.map((phrase, idx) => (
              <motion.div
                key={`${activeTab}-${phrase.en}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                data-ocid={`phrases.item.${idx + 1}`}
                className="flex gap-4 p-4 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderColor: `${current.color.replace("oklch(", "oklch(").split(")")[0]} / 15%)`,
                }}
              >
                {/* Number */}
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: current.bgColor, color: current.color }}
                >
                  {idx + 1}
                </div>

                <div className="flex-1 min-w-0 space-y-2">
                  {/* English */}
                  <div className="flex items-start gap-2">
                    <span
                      className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide"
                      style={{
                        background: current.bgColor,
                        color: current.color,
                      }}
                    >
                      EN
                    </span>
                    <p className="font-body text-sm font-semibold text-foreground leading-relaxed">
                      {phrase.en}
                    </p>
                  </div>
                  {/* Hindi */}
                  <div className="flex items-start gap-2">
                    <span
                      className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide"
                      style={{
                        background: "oklch(0.94 0.04 75)",
                        color: "oklch(0.45 0.12 55)",
                      }}
                    >
                      HI
                    </span>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "oklch(0.50 0.06 258)" }}
                    >
                      {phrase.hi}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
