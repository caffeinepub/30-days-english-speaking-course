export interface QuizQuestion {
  id: number;
  topic: "tenses" | "phonics" | "auxiliaries" | "homophones" | "vowels";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ===== TENSES (15 questions) =====
  {
    id: 1,
    topic: "tenses",
    question:
      "Which tense uses the formula: Subject + V1 (s/es for he/she/it)?",
    options: [
      "Present Continuous",
      "Present Simple",
      "Past Simple",
      "Present Perfect",
    ],
    correctIndex: 1,
    explanation:
      "Present Simple uses V1 (base form). For he/she/it, we add -s or -es (e.g. 'She reads books every day.').",
  },
  {
    id: 2,
    topic: "tenses",
    question:
      "Fill in the blank: 'She ___ a novel right now.' (Present Continuous)",
    options: ["reads", "read", "is reading", "has read"],
    correctIndex: 2,
    explanation:
      "Present Continuous = Subject + is/am/are + V-ing. 'She is reading' shows an action happening right now.",
  },
  {
    id: 3,
    topic: "tenses",
    question: "Which sentence is in the Past Simple tense?",
    options: [
      "He is going to school.",
      "He has gone to school.",
      "He went to school last Monday.",
      "He was going to school.",
    ],
    correctIndex: 2,
    explanation:
      "Past Simple uses V2 (past form) for completed actions at a specific time. 'Went' is the past form of 'go'.",
  },
  {
    id: 4,
    topic: "tenses",
    question: "The formula 'Subject + has/have + V3' describes which tense?",
    options: [
      "Past Perfect",
      "Present Perfect",
      "Future Perfect",
      "Present Perfect Continuous",
    ],
    correctIndex: 1,
    explanation:
      "Present Perfect = Subject + has/have + V3 (past participle). It connects past actions to the present.",
  },
  {
    id: 5,
    topic: "tenses",
    question: "'They will be playing when you arrive.' — What tense is this?",
    options: [
      "Future Simple",
      "Future Perfect",
      "Future Continuous",
      "Present Continuous",
    ],
    correctIndex: 2,
    explanation:
      "Future Continuous = Subject + will + be + V-ing. It describes an action in progress at a future moment.",
  },
  {
    id: 6,
    topic: "tenses",
    question: "Choose the correct Past Perfect sentence:",
    options: [
      "She had read the book before the test.",
      "She was reading the book.",
      "She reads the book every night.",
      "She will read the book tomorrow.",
    ],
    correctIndex: 0,
    explanation:
      "Past Perfect = Subject + had + V3. It shows an action completed BEFORE another past action.",
  },
  {
    id: 7,
    topic: "tenses",
    question:
      "Fill in the blank: 'He ___ to the gym daily.' (Past habit — was + V-ing)",
    options: ["has gone", "was going", "went", "goes"],
    correctIndex: 1,
    explanation:
      "Past Continuous (was/were + V-ing) describes ongoing actions in the past. 'Was going' fits past habit context.",
  },
  {
    id: 8,
    topic: "tenses",
    question: "Which tense would you use for: 'a promise about the future'?",
    options: [
      "Past Simple",
      "Present Perfect",
      "Future Simple (will)",
      "Future Perfect",
    ],
    correctIndex: 2,
    explanation:
      "Future Simple (will + V1) is used for future decisions, promises, and predictions made at the moment of speaking.",
  },
  {
    id: 9,
    topic: "tenses",
    question: "'She has been reading for an hour.' — What tense is used?",
    options: [
      "Present Perfect",
      "Present Continuous",
      "Present Perfect Continuous",
      "Past Perfect Continuous",
    ],
    correctIndex: 2,
    explanation:
      "Present Perfect Continuous = has/have + been + V-ing. It shows an ongoing action that started in the past and continues now.",
  },
  {
    id: 10,
    topic: "tenses",
    question: "Identify the tense: 'They had been playing when the storm hit.'",
    options: [
      "Past Continuous",
      "Past Perfect",
      "Past Perfect Continuous",
      "Present Perfect Continuous",
    ],
    correctIndex: 2,
    explanation:
      "Past Perfect Continuous = had + been + V-ing. It describes an ongoing action that was happening before a past event.",
  },
  {
    id: 11,
    topic: "tenses",
    question: "Which is the correct Future Perfect formula?",
    options: [
      "Subject + will + V1",
      "Subject + will + be + V-ing",
      "Subject + will + have + V3",
      "Subject + had + V3",
    ],
    correctIndex: 2,
    explanation:
      "Future Perfect = Subject + will + have + V3. It describes actions completed before a specific future point.",
  },
  {
    id: 12,
    topic: "tenses",
    question:
      "'She reads books every evening.' — This sentence is in which tense?",
    options: [
      "Present Continuous",
      "Present Simple",
      "Past Simple",
      "Future Simple",
    ],
    correctIndex: 1,
    explanation:
      "Present Simple expresses habits, routines, and general truths. 'Reads every evening' is a regular habit.",
  },
  {
    id: 13,
    topic: "tenses",
    question:
      "How many tenses are there in the English language (as covered in Learning Point)?",
    options: ["8", "10", "12", "16"],
    correctIndex: 2,
    explanation:
      "There are 12 main English tenses: 4 present, 4 past, and 4 future — each with simple, continuous, perfect, and perfect continuous forms.",
  },
  {
    id: 14,
    topic: "tenses",
    question:
      "Fill in the blank: 'She will have been reading for two hours ___.'",
    options: ["yesterday", "right now", "by 8 PM", "last night"],
    correctIndex: 2,
    explanation:
      "Future Perfect Continuous describes ongoing actions up to a specific future point — 'by 8 PM' is a future time marker.",
  },
  {
    id: 15,
    topic: "tenses",
    question: "Which pair shows Past Simple and Past Continuous correctly?",
    options: [
      "She read / She was reading",
      "She reads / She is reading",
      "She has read / She has been reading",
      "She had read / She had been reading",
    ],
    correctIndex: 0,
    explanation:
      "Past Simple uses V2 ('read' past form), Past Continuous uses was/were + V-ing ('was reading').",
  },

  // ===== PHONICS (10 questions) =====
  {
    id: 16,
    topic: "phonics",
    question:
      "Which of these is a consonant DIGRAPH (two letters making one sound)?",
    options: ["bl", "st", "sh", "cr"],
    correctIndex: 2,
    explanation:
      "'sh' is a digraph — two consonants that make a single new sound, as in 'ship'. 'bl', 'st', and 'cr' are blends.",
  },
  {
    id: 17,
    topic: "phonics",
    question: "What sound does the digraph 'ph' make?",
    options: [
      "/p/ as in 'pen'",
      "/f/ as in 'fish'",
      "/b/ as in 'ball'",
      "/v/ as in 'van'",
    ],
    correctIndex: 1,
    explanation:
      "The digraph 'ph' makes the /f/ sound, as in 'phone', 'photo', and 'elephant'.",
  },
  {
    id: 18,
    topic: "phonics",
    question: "Which word contains the consonant blend 'tr'?",
    options: ["thin", "track", "shout", "clock"],
    correctIndex: 1,
    explanation:
      "'Track' starts with the blend 'tr' — a blend is two consonants pronounced together while keeping both sounds.",
  },
  {
    id: 19,
    topic: "phonics",
    question: "The letters 'ch' in the word 'chair' form a:",
    options: ["Blend", "Vowel sound", "Digraph", "Single consonant"],
    correctIndex: 2,
    explanation:
      "'ch' is a digraph — two letters that together produce one sound /tʃ/ as in 'chair', 'cheese', and 'chicken'.",
  },
  {
    id: 20,
    topic: "phonics",
    question: "Which of these is a consonant BLEND?",
    options: ["ng", "th", "ck", "br"],
    correctIndex: 3,
    explanation:
      "'br' is a blend (as in 'brown') — both consonant sounds are heard. 'ng', 'th', and 'ck' are digraphs.",
  },
  {
    id: 21,
    topic: "phonics",
    question: "How many vowel sounds are there in the English alphabet?",
    options: ["3", "5", "7", "10"],
    correctIndex: 1,
    explanation:
      "There are 5 vowel letters: A, E, I, O, U — though they can make many different sounds in different words.",
  },
  {
    id: 22,
    topic: "phonics",
    question: "What does the digraph 'ng' sound like?",
    options: [
      "Two separate sounds /n/ + /g/",
      "A nasal /ng/ sound as in 'ring'",
      "Silent, like in 'gnat'",
      "A hard /g/ as in 'go'",
    ],
    correctIndex: 1,
    explanation:
      "'ng' makes a nasal /ŋ/ sound, as in 'ring', 'sing', and 'long'. The two letters combine into one unique sound.",
  },
  {
    id: 23,
    topic: "phonics",
    question: "Which word uses the blend 'fl'?",
    options: ["phone", "thought", "flag", "clock"],
    correctIndex: 2,
    explanation:
      "'Flag' starts with the blend 'fl' — both the /f/ and /l/ sounds are pronounced together.",
  },
  {
    id: 24,
    topic: "phonics",
    question: "What is a 'digraph'?",
    options: [
      "Two vowels that make separate sounds",
      "A single letter with two sounds",
      "Two letters that together make one unique sound",
      "A word with two syllables",
    ],
    correctIndex: 2,
    explanation:
      "A digraph is two letters (consonants or vowels) that combine to produce one sound different from either letter alone.",
  },
  {
    id: 25,
    topic: "phonics",
    question: "The blend 'sp' appears in which word?",
    options: ["shop", "spoon", "phone", "chair"],
    correctIndex: 1,
    explanation:
      "'Spoon' starts with the blend 'sp' — both the /s/ and /p/ sounds are heard. A blend keeps both original sounds.",
  },

  // ===== AUXILIARIES (10 questions) =====
  {
    id: 26,
    topic: "auxiliaries",
    question: "Which is NOT a primary auxiliary verb?",
    options: ["be", "have", "do", "can"],
    correctIndex: 3,
    explanation:
      "The three primary auxiliaries are BE, HAVE, and DO. 'Can' is a modal auxiliary — it expresses ability or permission.",
  },
  {
    id: 27,
    topic: "auxiliaries",
    question: "'Do you like tea?' — What is the role of 'do' here?",
    options: [
      "Main verb",
      "Modal auxiliary",
      "Primary auxiliary forming a question",
      "Linking verb",
    ],
    correctIndex: 2,
    explanation:
      "'Do' is a primary auxiliary used to form questions and negatives in Present Simple. It has no meaning alone here.",
  },
  {
    id: 28,
    topic: "auxiliaries",
    question: "Which modal expresses ADVICE or duty?",
    options: ["can", "will", "should", "may"],
    correctIndex: 2,
    explanation:
      "'Should' is used to give advice or express obligation. Example: 'You should study harder.'",
  },
  {
    id: 29,
    topic: "auxiliaries",
    question: "'She can swim very well.' — What does 'can' express?",
    options: ["Necessity", "Ability", "Weak possibility", "Formal permission"],
    correctIndex: 1,
    explanation:
      "'Can' expresses present ability — the person has the skill or power to do something.",
  },
  {
    id: 30,
    topic: "auxiliaries",
    question: "Which is the correct negative form of 'She has gone'?",
    options: [
      "She hasn't gone",
      "She doesn't gone",
      "She isn't gone",
      "She hadn't go",
    ],
    correctIndex: 0,
    explanation:
      "The auxiliary 'have' forms the negative by adding 'not': has → hasn't. 'She hasn't gone' is correct.",
  },
  {
    id: 31,
    topic: "auxiliaries",
    question: "What is the past form of the modal 'can'?",
    options: ["canned", "could", "will", "shall"],
    correctIndex: 1,
    explanation:
      "'Could' is the past form of 'can'. It is used for past ability or polite requests: 'He could run fast as a child.'",
  },
  {
    id: 32,
    topic: "auxiliaries",
    question: "'You must submit it today.' — What does 'must' express?",
    options: [
      "Advice",
      "Polite request",
      "Weak possibility",
      "Necessity / strong obligation",
    ],
    correctIndex: 3,
    explanation:
      "'Must' expresses necessity or strong obligation — the action is required or very important.",
  },
  {
    id: 33,
    topic: "auxiliaries",
    question: "Which auxiliary is used to form the PASSIVE VOICE?",
    options: ["DO", "HAVE", "BE", "CAN"],
    correctIndex: 2,
    explanation:
      "BE (am/is/are/was/were) is used to form the passive voice: 'The letter was written by him.'",
  },
  {
    id: 34,
    topic: "auxiliaries",
    question: "'Would you like some tea?' — What does 'would' express here?",
    options: [
      "Past ability",
      "Polite request or offer",
      "Strong obligation",
      "Future certainty",
    ],
    correctIndex: 1,
    explanation:
      "'Would' is used for polite requests and offers. 'Would you like...?' is a very common polite expression.",
  },
  {
    id: 35,
    topic: "auxiliaries",
    question: "Which modal expresses FORMAL PERMISSION?",
    options: ["must", "might", "may", "should"],
    correctIndex: 2,
    explanation:
      "'May' is used for formal permission: 'May I come in, please?' It is more formal than 'can'.",
  },

  // ===== HOMOPHONES (10 questions) =====
  {
    id: 36,
    topic: "homophones",
    question: "'___ house is very big.' — Which word fits (belonging to them)?",
    options: ["There", "They're", "Their", "Thier"],
    correctIndex: 2,
    explanation:
      "'Their' shows possession — belonging to them. 'There' is a place, 'they're' = they are.",
  },
  {
    id: 37,
    topic: "homophones",
    question: "'___ very welcome here.' — Which word fits (you are)?",
    options: ["Your", "You're", "Yore", "Yor"],
    correctIndex: 1,
    explanation:
      "'You're' = 'you are' (contraction). 'Your' shows possession — it belongs to you.",
  },
  {
    id: 38,
    topic: "homophones",
    question:
      "'I can ___ beautiful music.' — Which word fits (to perceive sound)?",
    options: ["here", "heer", "hear", "hare"],
    correctIndex: 2,
    explanation:
      "'Hear' means to perceive sound with your ears. 'Here' refers to a place: 'Come here.'",
  },
  {
    id: 39,
    topic: "homophones",
    question: "Which word means 'a blooming plant part'?",
    options: ["flour", "flower", "flore", "fleur"],
    correctIndex: 1,
    explanation:
      "'Flower' is the blooming part of a plant. 'Flour' is the powder used for baking bread and cakes.",
  },
  {
    id: 40,
    topic: "homophones",
    question: "'___ your full name here.' — Which word fits (to form letters)?",
    options: ["Right", "Write", "Rite", "Wright"],
    correctIndex: 1,
    explanation:
      "'Write' means to form letters or words. 'Right' means correct or a direction.",
  },
  {
    id: 41,
    topic: "homophones",
    question: "'I have ___ cats at home.' — Which word fits (the number 2)?",
    options: ["to", "too", "two", "tow"],
    correctIndex: 2,
    explanation:
      "'Two' is the number 2. 'To' is a preposition of direction, 'too' means also or excessively.",
  },
  {
    id: 42,
    topic: "homophones",
    question: "'___ raining heavily outside.' — Which word fits (it is)?",
    options: ["Its", "It's", "Its'", "Itts"],
    correctIndex: 1,
    explanation:
      "'It's' = 'it is' (contraction). 'Its' shows possession — belonging to it: 'The cat lost its tail.'",
  },
  {
    id: 43,
    topic: "homophones",
    question: "Which word means 'freedom from conflict'?",
    options: ["piece", "peace", "peese", "pease"],
    correctIndex: 1,
    explanation:
      "'Peace' means freedom from conflict and war. 'Piece' means a part or portion of something.",
  },
  {
    id: 44,
    topic: "homophones",
    question:
      "'She felt very ___ after illness.' — Which word fits (lacking strength)?",
    options: ["week", "weak", "weke", "weake"],
    correctIndex: 1,
    explanation:
      "'Weak' means lacking strength. 'Week' means seven days: 'I visit him every week.'",
  },
  {
    id: 45,
    topic: "homophones",
    question: "'My ___ is tall and clever.' — Which word fits (a male child)?",
    options: ["sun", "son", "sum", "sen"],
    correctIndex: 1,
    explanation:
      "'Son' means a male child. 'Sun' is the star at the center of our solar system.",
  },

  // ===== VOWELS (8 questions) =====
  {
    id: 46,
    topic: "vowels",
    question: "The word 'cat' contains which vowel sound?",
    options: [
      "Long A /eɪ/ as in cake",
      "Short A /æ/ as in apple",
      "Long E /iː/ as in eagle",
      "Short E /ɛ/ as in egg",
    ],
    correctIndex: 1,
    explanation:
      "'Cat' has a short A sound /æ/. The vowel is short because the word follows the CVC (consonant-vowel-consonant) pattern.",
  },
  {
    id: 47,
    topic: "vowels",
    question: "Which word has the LONG vowel sound /eɪ/?",
    options: ["apple", "ant", "cake", "cat"],
    correctIndex: 2,
    explanation:
      "'Cake' has the long A sound /eɪ/. Long vowels say their own name. Other long A words: name, game, plate.",
  },
  {
    id: 48,
    topic: "vowels",
    question: "The word 'kite' contains which sound?",
    options: [
      "Short I /ɪ/ as in igloo",
      "Long I /aɪ/ as in kite",
      "Short E /ɛ/ as in egg",
      "Long E /iː/ as in eagle",
    ],
    correctIndex: 1,
    explanation:
      "'Kite' has the long I sound /aɪ/. The silent 'e' at the end makes the vowel say its name.",
  },
  {
    id: 49,
    topic: "vowels",
    question: "Which word has the SHORT vowel sound /ɒ/?",
    options: ["rose", "home", "hot", "rope"],
    correctIndex: 2,
    explanation:
      "'Hot' has the short O sound /ɒ/. Other short O words: pot, dog, orange. Long O words: rose, home, rope.",
  },
  {
    id: 50,
    topic: "vowels",
    question: "'Eagle' is the keyword for which long vowel sound?",
    options: ["Long A /eɪ/", "Long E /iː/", "Long I /aɪ/", "Long O /oʊ/"],
    correctIndex: 1,
    explanation:
      "'Eagle' represents the long E sound /iː/. Other long E words: eat, feet, tree, sheep.",
  },
  {
    id: 51,
    topic: "vowels",
    question: "Which set of words all have the SHORT U sound /ʌ/?",
    options: [
      "cute, cube, mule",
      "cup, bus, run",
      "use, blue, true",
      "uni, unit, union",
    ],
    correctIndex: 1,
    explanation:
      "'Cup', 'bus', and 'run' all have the short U sound /ʌ/. Short U words follow the CVC or CCVC pattern.",
  },
  {
    id: 52,
    topic: "vowels",
    question: "How does a 'silent e' at the end of a word affect the vowel?",
    options: [
      "It makes the vowel silent",
      "It makes the vowel short",
      "It makes the vowel long (say its name)",
      "It has no effect",
    ],
    correctIndex: 2,
    explanation:
      "A silent 'e' at the end of a word (magic e) makes the vowel before it long — it says its name. Example: bit → bite, cap → cape.",
  },
  {
    id: 53,
    topic: "vowels",
    question: "Which word has the LONG O sound /oʊ/?",
    options: ["orange", "hot", "pot", "rose"],
    correctIndex: 3,
    explanation:
      "'Rose' has the long O sound /oʊ/. Other long O words: home, note, rope, bone. Short O words: hot, pot, dog.",
  },
];
