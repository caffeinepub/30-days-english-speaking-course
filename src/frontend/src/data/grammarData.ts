// ===== TENSES DATA =====
export interface Tense {
  id: string;
  name: string;
  timeGroup: "present" | "past" | "future";
  formula: string;
  rule: string;
  examples: string[];
  color: string;
}

export const tenses: Tense[] = [
  {
    id: "present-simple",
    name: "Present Simple",
    timeGroup: "present",
    formula: "Subject + V1 (s/es for he/she/it)",
    rule: "Used for habits, routines, general truths, and permanent situations.",
    examples: [
      "She reads books every evening.",
      "He goes to school by bus.",
      "They play football on Sundays.",
    ],
    color: "oklch(0.55 0.22 28)",
  },
  {
    id: "present-continuous",
    name: "Present Continuous",
    timeGroup: "present",
    formula: "Subject + is/am/are + V-ing",
    rule: "Used for actions happening right now or temporary situations.",
    examples: [
      "She is reading a novel right now.",
      "He is going to school.",
      "They are playing in the garden.",
    ],
    color: "oklch(0.52 0.2 50)",
  },
  {
    id: "present-perfect",
    name: "Present Perfect",
    timeGroup: "present",
    formula: "Subject + has/have + V3 (Past Participle)",
    rule: "Used for past actions with present relevance or results.",
    examples: [
      "She has read the whole book.",
      "He has gone to school already.",
      "They have played football today.",
    ],
    color: "oklch(0.5 0.18 70)",
  },
  {
    id: "present-perfect-continuous",
    name: "Present Perfect Continuous",
    timeGroup: "present",
    formula: "Subject + has/have + been + V-ing",
    rule: "Used for ongoing actions that started in the past and continue to the present.",
    examples: [
      "She has been reading for an hour.",
      "He has been going to the gym.",
      "They have been playing since morning.",
    ],
    color: "oklch(0.48 0.16 90)",
  },
  {
    id: "past-simple",
    name: "Past Simple",
    timeGroup: "past",
    formula: "Subject + V2 (Past form)",
    rule: "Used for completed actions at a specific time in the past.",
    examples: [
      "She read the book yesterday.",
      "He went to school last Monday.",
      "They played football in the park.",
    ],
    color: "oklch(0.52 0.2 160)",
  },
  {
    id: "past-continuous",
    name: "Past Continuous",
    timeGroup: "past",
    formula: "Subject + was/were + V-ing",
    rule: "Used for actions that were in progress at a specific moment in the past.",
    examples: [
      "She was reading when I called.",
      "He was going to school early.",
      "They were playing all afternoon.",
    ],
    color: "oklch(0.5 0.18 175)",
  },
  {
    id: "past-perfect",
    name: "Past Perfect",
    timeGroup: "past",
    formula: "Subject + had + V3 (Past Participle)",
    rule: "Used for actions completed before another action in the past.",
    examples: [
      "She had read the book before the test.",
      "He had gone to school before noon.",
      "They had played football before it rained.",
    ],
    color: "oklch(0.48 0.16 190)",
  },
  {
    id: "past-perfect-continuous",
    name: "Past Perfect Continuous",
    timeGroup: "past",
    formula: "Subject + had + been + V-ing",
    rule: "Used for ongoing actions that continued up to a point in the past.",
    examples: [
      "She had been reading for hours.",
      "He had been going to the gym daily.",
      "They had been playing when the storm hit.",
    ],
    color: "oklch(0.45 0.14 205)",
  },
  {
    id: "future-simple",
    name: "Future Simple",
    timeGroup: "future",
    formula: "Subject + will + V1 (Base form)",
    rule: "Used for future decisions, predictions, promises, and spontaneous actions.",
    examples: [
      "She will read the whole series.",
      "He will go to school tomorrow.",
      "They will play in the finals.",
    ],
    color: "oklch(0.48 0.22 265)",
  },
  {
    id: "future-continuous",
    name: "Future Continuous",
    timeGroup: "future",
    formula: "Subject + will + be + V-ing",
    rule: "Used for actions that will be in progress at a specific time in the future.",
    examples: [
      "She will be reading at 8 PM.",
      "He will be going to school then.",
      "They will be playing when you arrive.",
    ],
    color: "oklch(0.5 0.2 280)",
  },
  {
    id: "future-perfect",
    name: "Future Perfect",
    timeGroup: "future",
    formula: "Subject + will + have + V3 (Past Participle)",
    rule: "Used for actions that will be completed before a specific future point.",
    examples: [
      "She will have read all the books.",
      "He will have gone to school.",
      "They will have played three matches.",
    ],
    color: "oklch(0.52 0.22 295)",
  },
  {
    id: "future-perfect-continuous",
    name: "Future Perfect Continuous",
    timeGroup: "future",
    formula: "Subject + will + have + been + V-ing",
    rule: "Used for ongoing actions up to a specific point in the future.",
    examples: [
      "She will have been reading for two hours.",
      "He will have been going for a month.",
      "They will have been playing for an hour.",
    ],
    color: "oklch(0.55 0.24 310)",
  },
];

// ===== PHONICS DATA =====
export interface PhonicsItem {
  letters: string;
  example: string;
  color: string;
}

export const vowelSounds: PhonicsItem[] = [
  { letters: "a", example: "apple", color: "oklch(0.55 0.22 28)" },
  { letters: "e", example: "egg", color: "oklch(0.52 0.2 160)" },
  { letters: "i", example: "igloo", color: "oklch(0.48 0.22 265)" },
  { letters: "o", example: "orange", color: "oklch(0.55 0.2 310)" },
  { letters: "u", example: "umbrella", color: "oklch(0.58 0.22 80)" },
];

export const consonantSounds: PhonicsItem[] = [
  { letters: "b", example: "ball", color: "oklch(0.5 0.15 28)" },
  { letters: "c", example: "cat", color: "oklch(0.52 0.15 50)" },
  { letters: "d", example: "dog", color: "oklch(0.5 0.15 70)" },
  { letters: "f", example: "fish", color: "oklch(0.52 0.15 90)" },
  { letters: "g", example: "goat", color: "oklch(0.5 0.15 120)" },
  { letters: "h", example: "hat", color: "oklch(0.52 0.15 145)" },
  { letters: "j", example: "jar", color: "oklch(0.5 0.15 160)" },
  { letters: "k", example: "kite", color: "oklch(0.52 0.15 185)" },
  { letters: "l", example: "lion", color: "oklch(0.5 0.15 200)" },
  { letters: "m", example: "moon", color: "oklch(0.52 0.15 220)" },
  { letters: "n", example: "nest", color: "oklch(0.5 0.15 240)" },
  { letters: "p", example: "pen", color: "oklch(0.52 0.15 260)" },
  { letters: "q", example: "queen", color: "oklch(0.5 0.15 285)" },
  { letters: "r", example: "ring", color: "oklch(0.52 0.15 310)" },
  { letters: "s", example: "sun", color: "oklch(0.5 0.15 330)" },
  { letters: "t", example: "tiger", color: "oklch(0.52 0.15 350)" },
  { letters: "v", example: "van", color: "oklch(0.5 0.15 15)" },
  { letters: "w", example: "water", color: "oklch(0.52 0.15 40)" },
  { letters: "x", example: "x-ray", color: "oklch(0.5 0.15 60)" },
  { letters: "y", example: "yarn", color: "oklch(0.52 0.15 80)" },
  { letters: "z", example: "zebra", color: "oklch(0.5 0.15 100)" },
];

export const blends: PhonicsItem[] = [
  { letters: "bl", example: "blue", color: "oklch(0.5 0.18 250)" },
  { letters: "br", example: "brown", color: "oklch(0.48 0.16 50)" },
  { letters: "cl", example: "clap", color: "oklch(0.52 0.18 170)" },
  { letters: "cr", example: "crab", color: "oklch(0.5 0.18 28)" },
  { letters: "dr", example: "drum", color: "oklch(0.52 0.18 310)" },
  { letters: "fl", example: "flag", color: "oklch(0.5 0.18 28)" },
  { letters: "fr", example: "frog", color: "oklch(0.52 0.18 150)" },
  { letters: "gl", example: "glass", color: "oklch(0.5 0.18 200)" },
  { letters: "gr", example: "green", color: "oklch(0.52 0.18 145)" },
  { letters: "pl", example: "play", color: "oklch(0.5 0.18 265)" },
  { letters: "pr", example: "pray", color: "oklch(0.52 0.18 280)" },
  { letters: "sl", example: "slip", color: "oklch(0.5 0.18 220)" },
  { letters: "sm", example: "smell", color: "oklch(0.52 0.18 185)" },
  { letters: "sn", example: "snow", color: "oklch(0.5 0.18 230)" },
  { letters: "sp", example: "spoon", color: "oklch(0.52 0.18 190)" },
  { letters: "st", example: "star", color: "oklch(0.5 0.18 80)" },
  { letters: "sw", example: "swim", color: "oklch(0.52 0.18 215)" },
  { letters: "tr", example: "tree", color: "oklch(0.5 0.18 150)" },
];

export const digraphs: Array<{
  letters: string;
  example: string;
  note: string;
  color: string;
}> = [
  {
    letters: "ch",
    example: "chair",
    note: "as in chair",
    color: "oklch(0.55 0.22 28)",
  },
  {
    letters: "sh",
    example: "ship",
    note: "as in ship",
    color: "oklch(0.52 0.2 160)",
  },
  {
    letters: "th",
    example: "think / the",
    note: "voiced & unvoiced",
    color: "oklch(0.48 0.22 265)",
  },
  {
    letters: "ph",
    example: "phone",
    note: "sounds like /f/",
    color: "oklch(0.55 0.2 310)",
  },
  {
    letters: "wh",
    example: "wheel",
    note: "as in wheel",
    color: "oklch(0.58 0.22 80)",
  },
  {
    letters: "ng",
    example: "ring",
    note: "nasal /ng/ sound",
    color: "oklch(0.52 0.2 190)",
  },
  {
    letters: "ck",
    example: "clock",
    note: "hard /k/ sound",
    color: "oklch(0.5 0.18 240)",
  },
];

// ===== AUXILIARIES DATA =====
export interface AuxiliaryGroup {
  name: string;
  forms: string[];
  usage: string;
  examples: string[];
  color: string;
}

export interface ModalAuxiliary {
  modal: string;
  usage: string;
  examples: string[];
  color: string;
}

export const primaryAuxiliaries: AuxiliaryGroup[] = [
  {
    name: "BE",
    forms: ["am", "is", "are", "was", "were", "been", "being"],
    usage: "Forms continuous tenses and passive voice constructions.",
    examples: [
      "She is sleeping right now.",
      "They were working all night.",
      "The book was written by him.",
    ],
    color: "oklch(0.48 0.22 265)",
  },
  {
    name: "HAVE",
    forms: ["have", "has", "had"],
    usage: "Forms perfect tenses to show completed actions.",
    examples: [
      "I have eaten my lunch.",
      "She has gone to the market.",
      "They had finished the project.",
    ],
    color: "oklch(0.52 0.2 160)",
  },
  {
    name: "DO",
    forms: ["do", "does", "did"],
    usage: "Forms questions, negatives, and adds emphasis to statements.",
    examples: [
      "Do you like green tea?",
      "She does not know the answer.",
      "He did finish the exam on time.",
    ],
    color: "oklch(0.55 0.22 28)",
  },
];

export const modalAuxiliaries: ModalAuxiliary[] = [
  {
    modal: "CAN",
    usage: "Ability or permission in present",
    examples: ["She can swim very well.", "Can I go outside now?"],
    color: "oklch(0.55 0.22 28)",
  },
  {
    modal: "COULD",
    usage: "Past ability or polite requests",
    examples: ["He could run very fast.", "Could you please help me?"],
    color: "oklch(0.52 0.2 50)",
  },
  {
    modal: "WILL",
    usage: "Future actions or certainty",
    examples: ["I will come to the party.", "She will pass the exam."],
    color: "oklch(0.5 0.18 80)",
  },
  {
    modal: "WOULD",
    usage: "Past habit or polite requests",
    examples: ["He would go there daily.", "Would you like some tea?"],
    color: "oklch(0.52 0.2 145)",
  },
  {
    modal: "SHALL",
    usage: "Formal future or offers",
    examples: ["I shall return tomorrow.", "Shall we begin the meeting?"],
    color: "oklch(0.52 0.2 160)",
  },
  {
    modal: "SHOULD",
    usage: "Advice or duty/obligation",
    examples: ["You should rest tonight.", "He should study harder."],
    color: "oklch(0.5 0.18 190)",
  },
  {
    modal: "MAY",
    usage: "Possibility or formal permission",
    examples: ["It may rain this evening.", "May I come in, please?"],
    color: "oklch(0.48 0.22 265)",
  },
  {
    modal: "MIGHT",
    usage: "Weak or uncertain possibility",
    examples: ["She might come to the party.", "It might be true."],
    color: "oklch(0.5 0.2 280)",
  },
  {
    modal: "MUST",
    usage: "Necessity or strong obligation",
    examples: ["You must submit it today.", "He must be very tired."],
    color: "oklch(0.52 0.22 295)",
  },
  {
    modal: "OUGHT TO",
    usage: "Moral duty or expectation",
    examples: ["You ought to respect your elders.", "She ought to apologize."],
    color: "oklch(0.55 0.2 310)",
  },
];

// ===== HOMOPHONES DATA =====
export interface HomophoneSet {
  id: number;
  words: Array<{ word: string; meaning: string; example: string }>;
}

export const homophones: HomophoneSet[] = [
  {
    id: 1,
    words: [
      {
        word: "to",
        meaning: "preposition (direction)",
        example: "I go to school every day.",
      },
      {
        word: "too",
        meaning: "also / excessively",
        example: "I am tired too.",
      },
      {
        word: "two",
        meaning: "the number 2",
        example: "I have two cats at home.",
      },
    ],
  },
  {
    id: 2,
    words: [
      {
        word: "their",
        meaning: "belonging to them",
        example: "Their house is very big.",
      },
      {
        word: "there",
        meaning: "a place / location",
        example: "Go there and wait for me.",
      },
      {
        word: "they're",
        meaning: "they are (contraction)",
        example: "They're coming to the party.",
      },
    ],
  },
  {
    id: 3,
    words: [
      {
        word: "your",
        meaning: "belonging to you",
        example: "Your bag is on the table.",
      },
      {
        word: "you're",
        meaning: "you are (contraction)",
        example: "You're very welcome here.",
      },
    ],
  },
  {
    id: 4,
    words: [
      {
        word: "its",
        meaning: "belonging to it",
        example: "The cat lost its tail.",
      },
      {
        word: "it's",
        meaning: "it is (contraction)",
        example: "It's raining heavily outside.",
      },
    ],
  },
  {
    id: 5,
    words: [
      {
        word: "here",
        meaning: "in this place",
        example: "Come here right now.",
      },
      {
        word: "hear",
        meaning: "to perceive sound",
        example: "I can hear beautiful music.",
      },
    ],
  },
  {
    id: 6,
    words: [
      {
        word: "sea",
        meaning: "large body of salt water",
        example: "The sea is a brilliant blue.",
      },
      {
        word: "see",
        meaning: "to perceive with eyes",
        example: "I can see you clearly.",
      },
    ],
  },
  {
    id: 7,
    words: [
      {
        word: "sun",
        meaning: "the star at the center of our solar system",
        example: "The sun is very hot today.",
      },
      {
        word: "son",
        meaning: "a male child",
        example: "My son is tall and clever.",
      },
    ],
  },
  {
    id: 8,
    words: [
      {
        word: "flower",
        meaning: "a blooming plant part",
        example: "She gave me a beautiful flower.",
      },
      {
        word: "flour",
        meaning: "powder used for baking",
        example: "Add flour to the dough.",
      },
    ],
  },
  {
    id: 9,
    words: [
      {
        word: "right",
        meaning: "correct / direction",
        example: "Turn right at the signal.",
      },
      {
        word: "write",
        meaning: "to form letters",
        example: "Write your full name here.",
      },
    ],
  },
  {
    id: 10,
    words: [
      {
        word: "know",
        meaning: "to have knowledge",
        example: "I know the correct answer.",
      },
      {
        word: "no",
        meaning: "negative / none",
        example: "There is no water in the tank.",
      },
    ],
  },
  {
    id: 11,
    words: [
      {
        word: "meet",
        meaning: "to encounter someone",
        example: "We will meet tomorrow morning.",
      },
      {
        word: "meat",
        meaning: "animal flesh as food",
        example: "He eats meat every day.",
      },
    ],
  },
  {
    id: 12,
    words: [
      {
        word: "week",
        meaning: "seven days",
        example: "I visit him every week.",
      },
      {
        word: "weak",
        meaning: "lacking strength",
        example: "She felt very weak after illness.",
      },
    ],
  },
  {
    id: 13,
    words: [
      {
        word: "pair",
        meaning: "a set of two",
        example: "I bought a pair of shoes.",
      },
      {
        word: "pear",
        meaning: "a sweet fruit",
        example: "She ate a ripe pear.",
      },
    ],
  },
  {
    id: 14,
    words: [
      {
        word: "bare",
        meaning: "uncovered / naked",
        example: "He walked on bare feet.",
      },
      {
        word: "bear",
        meaning: "a large wild animal",
        example: "A bear was seen in the forest.",
      },
    ],
  },
  {
    id: 15,
    words: [
      {
        word: "hair",
        meaning: "strands growing on the head",
        example: "Her hair is long and shiny.",
      },
      {
        word: "hare",
        meaning: "a fast rabbit-like animal",
        example: "A hare ran across the field.",
      },
    ],
  },
  {
    id: 16,
    words: [
      {
        word: "mail",
        meaning: "letters or email messages",
        example: "I sent the mail this morning.",
      },
      {
        word: "male",
        meaning: "the masculine gender",
        example: "He is a male doctor.",
      },
    ],
  },
  {
    id: 17,
    words: [
      {
        word: "tale",
        meaning: "a story",
        example: "Tell me an exciting tale.",
      },
      {
        word: "tail",
        meaning: "the rear body part of an animal",
        example: "The dog wagged its tail happily.",
      },
    ],
  },
  {
    id: 18,
    words: [
      {
        word: "sale",
        meaning: "selling at discounted price",
        example: "There is a big sale today.",
      },
      {
        word: "sail",
        meaning: "to travel on water by wind",
        example: "The ship will sail at dawn.",
      },
    ],
  },
  {
    id: 19,
    words: [
      {
        word: "hole",
        meaning: "an opening or cavity",
        example: "There is a hole in the road.",
      },
      {
        word: "whole",
        meaning: "complete / entire",
        example: "I ate the whole pizza!",
      },
    ],
  },
  {
    id: 20,
    words: [
      {
        word: "peace",
        meaning: "freedom from conflict",
        example: "We all need peace in the world.",
      },
      {
        word: "piece",
        meaning: "a part or portion",
        example: "Give me a piece of cake, please.",
      },
    ],
  },
];

// ===== VOWELS DATA =====
export interface VowelCard {
  letter: string;
  sound: string;
  keyword: string;
  words: string[];
  image: string;
  color: string;
  bgColor: string;
}

export const shortVowels: VowelCard[] = [
  {
    letter: "A",
    sound: "/æ/",
    keyword: "Apple",
    words: ["apple", "ant", "cat", "bat", "hat"],
    image: "/assets/generated/apple-short-a.dim_200x200.png",
    color: "oklch(0.55 0.22 28)",
    bgColor: "oklch(0.97 0.04 28)",
  },
  {
    letter: "E",
    sound: "/ɛ/",
    keyword: "Egg",
    words: ["egg", "bed", "red", "hen", "pen"],
    image: "/assets/generated/egg-short-e.dim_200x200.png",
    color: "oklch(0.52 0.2 160)",
    bgColor: "oklch(0.96 0.05 160)",
  },
  {
    letter: "I",
    sound: "/ɪ/",
    keyword: "Igloo",
    words: ["igloo", "ink", "pig", "sit", "hit"],
    image: "/assets/generated/igloo-short-i.dim_200x200.png",
    color: "oklch(0.48 0.22 265)",
    bgColor: "oklch(0.95 0.06 265)",
  },
  {
    letter: "O",
    sound: "/ɒ/",
    keyword: "Orange",
    words: ["orange", "ox", "hot", "pot", "dog"],
    image: "/assets/generated/orange-short-o.dim_200x200.png",
    color: "oklch(0.55 0.2 310)",
    bgColor: "oklch(0.96 0.05 310)",
  },
  {
    letter: "U",
    sound: "/ʌ/",
    keyword: "Umbrella",
    words: ["umbrella", "up", "cup", "bus", "run"],
    image: "/assets/generated/umbrella-short-u.dim_200x200.png",
    color: "oklch(0.58 0.22 80)",
    bgColor: "oklch(0.97 0.05 80)",
  },
];

export const longVowels: VowelCard[] = [
  {
    letter: "A",
    sound: "/eɪ/",
    keyword: "Cake",
    words: ["cake", "name", "game", "plate", "snake"],
    image: "/assets/generated/cake-long-a.dim_200x200.png",
    color: "oklch(0.55 0.22 28)",
    bgColor: "oklch(0.97 0.04 28)",
  },
  {
    letter: "E",
    sound: "/iː/",
    keyword: "Eagle",
    words: ["eagle", "eat", "feet", "tree", "sheep"],
    image: "/assets/generated/eagle-long-e.dim_200x200.png",
    color: "oklch(0.52 0.2 160)",
    bgColor: "oklch(0.96 0.05 160)",
  },
  {
    letter: "I",
    sound: "/aɪ/",
    keyword: "Kite",
    words: ["kite", "ice", "bike", "like", "time"],
    image: "/assets/generated/kite-long-i.dim_200x200.png",
    color: "oklch(0.48 0.22 265)",
    bgColor: "oklch(0.95 0.06 265)",
  },
  {
    letter: "O",
    sound: "/oʊ/",
    keyword: "Rose",
    words: ["rose", "home", "note", "rope", "bone"],
    image: "/assets/generated/rose-long-o.dim_200x200.png",
    color: "oklch(0.55 0.2 310)",
    bgColor: "oklch(0.96 0.05 310)",
  },
  {
    letter: "U",
    sound: "/juː/",
    keyword: "Unicorn",
    words: ["unicorn", "use", "cute", "cube", "mule"],
    image: "/assets/generated/unicorn-long-u.dim_200x200.png",
    color: "oklch(0.58 0.22 80)",
    bgColor: "oklch(0.97 0.05 80)",
  },
];
