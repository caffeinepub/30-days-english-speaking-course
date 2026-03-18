const courseData = [
  // === Day 1-5: Basic Greetings, Introductions, Simple Present ===
  {
    day: 1,
    title: "Hello World!",
    topic: "Basic Greetings",
    grammarConcept: "Simple Present Tense (Verb 'to be'): Used to state facts and introduce yourself. Structure: I am / You are / He is / She is / We are / They are.",
    vocabulary: [
      { word: "Hello", meaning: "A greeting", hindi: "नमस्ते" },
      {
        word: "Good morning",
        meaning: "Greeting in the morning",
        hindi: "सुप्रभात"
      },
      { word: "Goodbye", meaning: "Farewell", hindi: "अलविदा" },
      { word: "Please", meaning: "Polite request word", hindi: "कृपया" },
      {
        word: "Thank you",
        meaning: "Expression of gratitude",
        hindi: "धन्यवाद"
      }
    ],
    sentences: [
      { english: "Hello! My name is Rahul.", hindi: "नमस्ते! मेरा नाम राहुल है।" },
      { english: "Good morning! How are you?", hindi: "सुप्रभात! आप कैसे हैं?" },
      { english: "I am fine, thank you.", hindi: "मैं ठीक हूँ, धन्यवाद।" },
      { english: "Nice to meet you!", hindi: "आपसे मिलकर खुशी हुई!" },
      { english: "Goodbye! See you tomorrow.", hindi: "अलविदा! कल मिलते हैं।" }
    ],
    tip: "Practice greetings every morning in front of a mirror. Say 'Hello' with a smile — confidence comes with repetition! (हर सुबह आईने के सामने अभिनास करें।)"
  },
  {
    day: 2,
    title: "Who Am I?",
    topic: "Self Introduction",
    grammarConcept: "Simple Present Tense with 'I am / My name is': Use this to introduce yourself. Pattern: 'I am [name]. I am from [place]. I am [age] years old.'",
    vocabulary: [
      { word: "Name", meaning: "What you are called", hindi: "नाम" },
      { word: "Age", meaning: "How old you are", hindi: "उम्र" },
      { word: "Country", meaning: "Nation you belong to", hindi: "देश" },
      { word: "City", meaning: "Town you live in", hindi: "शहर" },
      {
        word: "Student",
        meaning: "Person who studies",
        hindi: "छात्र / विद्यार्थी"
      }
    ],
    sentences: [
      { english: "My name is Priya.", hindi: "मेरा नाम प्रिया है।" },
      { english: "I am from India.", hindi: "मैं भारत से हूँ।" },
      { english: "I am twenty years old.", hindi: "मैं बीस साल का/की हूँ।" },
      { english: "I am a student.", hindi: "मैं एक छात्र/छात्रा हूँ।" },
      { english: "I live in Delhi.", hindi: "मैं दिल्ली में रहता/रहती हूँ।" }
    ],
    tip: "Write your introduction on paper and read it aloud five times. Each time, add one new detail about yourself. (अपना परिचय लिखें और पाँच बार जोर से पढ़ें।)"
  },
  {
    day: 3,
    title: "My Family",
    topic: "Family Members & Relationships",
    grammarConcept: "Possessive Pronouns (My, Your, His, Her, Our, Their): Used to show belonging. Example: 'This is my mother.' / 'Her brother is tall.'",
    vocabulary: [
      { word: "Mother", meaning: "Female parent", hindi: "माँ / माता" },
      { word: "Father", meaning: "Male parent", hindi: "पिता / बाप" },
      { word: "Brother", meaning: "Male sibling", hindi: "भाई" },
      { word: "Sister", meaning: "Female sibling", hindi: "बहन" },
      { word: "Family", meaning: "Group of related people", hindi: "परिवार" }
    ],
    sentences: [
      { english: "My mother is a teacher.", hindi: "मेरी माँ एक शिक्षिका हैं।" },
      { english: "His father is a doctor.", hindi: "उसके पिता एक डॉक्टर हैं।" },
      { english: "She has two brothers.", hindi: "उसके दो भाई हैं।" },
      { english: "Our family is very happy.", hindi: "हमारा परिवार बहुत खुश है।" },
      {
        english: "Her sister lives in Mumbai.",
        hindi: "उसकी बहन मुंबई में रहती है।"
      }
    ],
    tip: "Make a family tree in English. Write everyone's name and relationship in English. This helps you remember words faster. (English में एक family tree बनाएं।)"
  },
  {
    day: 4,
    title: "Colors & Numbers",
    topic: "Describing Things",
    grammarConcept: "Adjectives in Simple Present: Adjectives come before nouns. Structure: 'The [adjective] [noun] is/are...' Example: 'The red car is fast.' / 'Three blue books are on the table.'",
    vocabulary: [
      { word: "Red", meaning: "Color of blood / rose", hindi: "लाल" },
      { word: "Blue", meaning: "Color of sky / sea", hindi: "नीला" },
      { word: "Beautiful", meaning: "Very pleasing to look at", hindi: "सुंदर" },
      { word: "Big", meaning: "Large in size", hindi: "बड़ा" },
      { word: "Small", meaning: "Little in size", hindi: "छोटा" }
    ],
    sentences: [
      { english: "The sky is blue.", hindi: "आकाश नीला है।" },
      { english: "She has a red dress.", hindi: "उसके पास एक लाल कपड़ा है।" },
      { english: "This is a big house.", hindi: "यह एक बड़ा घर है।" },
      { english: "The flower is beautiful.", hindi: "फूल सुंदर है।" },
      {
        english: "I have three small books.",
        hindi: "मेरे पास तीन छोटी किताबें हैं।"
      }
    ],
    tip: "Look around your room and describe five objects in English with color and size. 'The brown table is big.' (अपने कमरे की 5 चीज़ें English में describe करें।)"
  },
  {
    day: 5,
    title: "What Do You Do?",
    topic: "Jobs & Professions",
    grammarConcept: "Simple Present Tense (Regular Verbs): For he/she/it, add -s or -es. Pattern: 'He works / She teaches / It runs.' For I/You/We/They: no change. 'I work / They teach.'",
    vocabulary: [
      { word: "Work", meaning: "Do a job / be employed", hindi: "काम करना" },
      { word: "Teach", meaning: "Give lessons / educate", hindi: "पढ़ाना" },
      { word: "Doctor", meaning: "Medical professional", hindi: "डॉक्टर" },
      { word: "Engineer", meaning: "Technical professional", hindi: "इंजीनियर" },
      { word: "Farmer", meaning: "Person who grows crops", hindi: "किसान" }
    ],
    sentences: [
      {
        english: "She works in a hospital.",
        hindi: "वह एक अस्पताल में काम करती है।"
      },
      { english: "He teaches mathematics.", hindi: "वह गणित पढ़ाता है।" },
      { english: "My uncle is a farmer.", hindi: "मेरे चाचा एक किसान हैं।" },
      { english: "They work together.", hindi: "वे एक साथ काम करते हैं।" },
      {
        english: "I want to be an engineer.",
        hindi: "मैं इंजीनियर बनना चाहता/चाहती हूँ।"
      }
    ],
    tip: "Every evening, write three sentences about what you did today. Start with 'Today I...' This builds your Simple Present habit. (हर शाम 3 वाक्य लिखें।)"
  },
  // === Day 6-10: Daily Routines, Present Continuous, Asking Questions ===
  {
    day: 6,
    title: "My Daily Routine",
    topic: "Daily Activities",
    grammarConcept: "Simple Present for Routines: Use adverbs of frequency — always, usually, often, sometimes, never. Example: 'I always wake up at 6 AM.' / 'She never eats junk food.'",
    vocabulary: [
      { word: "Wake up", meaning: "Stop sleeping / get up", hindi: "उठना" },
      { word: "Breakfast", meaning: "First meal of the day", hindi: "नाश्ता" },
      {
        word: "Exercise",
        meaning: "Physical activity for health",
        hindi: "व्यायाम"
      },
      { word: "Sleep", meaning: "Rest at night", hindi: "सोना" },
      { word: "Always", meaning: "Every time without fail", hindi: "हमेशा" }
    ],
    sentences: [
      {
        english: "I always wake up at six in the morning.",
        hindi: "मैं हमेशा सुबह छह बजे उठता/उठती हूँ।"
      },
      {
        english: "She usually eats breakfast at seven.",
        hindi: "वह आमतौर पर सात बजे नाश्ता करती है।"
      },
      {
        english: "He often exercises in the park.",
        hindi: "वह अक्सर पार्क में व्यायाम करता है।"
      },
      {
        english: "They sometimes go for a walk.",
        hindi: "वे कभी-कभी टहलने जाते हैं।"
      },
      {
        english: "I never skip my meals.",
        hindi: "मैं कभी भी खाना नहीं छोड़ता/छोड़ती।"
      }
    ],
    tip: "Write your daily routine in English as a timetable. Use time expressions: 'At 6 AM', 'At noon', 'In the evening'. (अपनी daily routine को English में time-table की तरह लिखें।)"
  },
  {
    day: 7,
    title: "What Is Happening?",
    topic: "Present Continuous Tense",
    grammarConcept: "Present Continuous (am/is/are + verb-ing): Used for actions happening right now. Structure: Subject + am/is/are + [verb + ing]. Example: 'I am reading.' / 'They are playing cricket.' Negative: 'She is not sleeping.'",
    vocabulary: [
      {
        word: "Running",
        meaning: "Moving fast on foot",
        hindi: "दौड़ रहा/रही है"
      },
      {
        word: "Cooking",
        meaning: "Preparing food by heating",
        hindi: "खाना बना रहा/रही है"
      },
      {
        word: "Watching",
        meaning: "Looking at something",
        hindi: "देख रहा/रही है"
      },
      {
        word: "Talking",
        meaning: "Speaking to someone",
        hindi: "बात कर रहा/रही है"
      },
      {
        word: "Reading",
        meaning: "Looking at and understanding text",
        hindi: "पढ़ रहा/रही है"
      }
    ],
    sentences: [
      {
        english: "I am reading an English book right now.",
        hindi: "मैं अभी एक अंग्रेज़ी किताब पढ़ रहा/रही हूँ।"
      },
      {
        english: "She is cooking dinner in the kitchen.",
        hindi: "वह रसोई में रात का खाना बना रही है।"
      },
      {
        english: "The children are playing in the garden.",
        hindi: "बच्चे बगीचे में खेल रहे हैं।"
      },
      { english: "He is not watching TV.", hindi: "वह टीवी नहीं देख रहा।" },
      {
        english: "We are learning English together.",
        hindi: "हम एक साथ अंग्रेज़ी सीख रहे हैं।"
      }
    ],
    tip: "Look around right now and make 5 sentences about what you see happening. 'The fan is running. My sister is studying.' (अभी जो हो रहा है उस पर 5 वाक्य बनाएं।)"
  },
  {
    day: 8,
    title: "Ask Me Anything!",
    topic: "Asking Yes/No Questions",
    grammarConcept: "Yes/No Questions with 'do/does' and 'am/is/are': Flip the subject and auxiliary. 'You are happy' → 'Are you happy?' / 'She eats rice' → 'Does she eat rice?' Answer: Yes, she does. / No, she doesn't.",
    vocabulary: [
      {
        word: "Do",
        meaning: "Auxiliary verb for questions (I/You/We/They)",
        hindi: "करना (प्रश्न के लिए)"
      },
      {
        word: "Does",
        meaning: "Auxiliary verb for questions (He/She/It)",
        hindi: "करता/करती है (प्रश्न के लिए)"
      },
      {
        word: "Really",
        meaning: "Used to emphasize or show surprise",
        hindi: "सच में / वास्तव में"
      },
      { word: "Often", meaning: "Frequently / many times", hindi: "अक्सर" },
      {
        word: "Enjoy",
        meaning: "Take pleasure from something",
        hindi: "आनंद लेना"
      }
    ],
    sentences: [
      { english: "Do you speak English?", hindi: "क्या आप अंग्रेज़ी बोलते हैं?" },
      {
        english: "Does she live in this city?",
        hindi: "क्या वह इस शहर में रहती है?"
      },
      {
        english: "Are they coming to the party?",
        hindi: "क्या वे पार्टी में आ रहे हैं?"
      },
      { english: "Is he your friend?", hindi: "क्या वह आपका दोस्त है?" },
      {
        english: "Do you enjoy learning English?",
        hindi: "क्या आपको अंग्रेज़ी सीखना अच्छा लगता है?"
      }
    ],
    tip: "Play a game with a friend: one person asks a yes/no question, the other answers. Take turns! This is the fastest way to learn question patterns. (दोस्त के साथ yes/no question game खेलें।)"
  },
  {
    day: 9,
    title: "Who, What, Where?",
    topic: "WH-Questions",
    grammarConcept: "WH-Questions: What (क्या), Who (कौन), Where (कहाँ), When (कब), Why (क्यों), How (कैसे). Structure: WH word + auxiliary (do/does/is/are) + subject + verb? Example: 'Where do you live?' / 'Why is she crying?'",
    vocabulary: [
      { word: "Where", meaning: "Asking about place / location", hindi: "कहाँ" },
      { word: "When", meaning: "Asking about time", hindi: "कब" },
      { word: "Why", meaning: "Asking for reason / cause", hindi: "क्यों" },
      { word: "How", meaning: "Asking about manner / way", hindi: "कैसे" },
      { word: "What", meaning: "Asking about things or actions", hindi: "क्या" }
    ],
    sentences: [
      { english: "What is your name?", hindi: "आपका नाम क्या है?" },
      { english: "Where do you study?", hindi: "आप कहाँ पढ़ते हैं?" },
      { english: "When does the train arrive?", hindi: "ट्रेन कब आती है?" },
      { english: "Why are you crying?", hindi: "आप क्यों रो रहे हैं?" },
      { english: "How do you go to school?", hindi: "आप स्कूल कैसे जाते हैं?" }
    ],
    tip: "Write five WH-questions about your own life and answer them in English. This is exactly how real conversations begin! (अपनी ज़िंदगी के बारे में 5 WH-questions लिखें।)"
  },
  {
    day: 10,
    title: "At the Market",
    topic: "Shopping & Numbers",
    grammarConcept: "Using 'How much / How many': 'How much' for uncountable nouns (water, money, rice). 'How many' for countable nouns (apples, books, chairs). Example: 'How much does it cost?' / 'How many apples do you want?'",
    vocabulary: [
      { word: "Buy", meaning: "Pay money for something", hindi: "खरीदना" },
      { word: "Sell", meaning: "Give in exchange for money", hindi: "बेचना" },
      {
        word: "Price",
        meaning: "Amount of money for something",
        hindi: "कीमत / दाम"
      },
      { word: "Cheap", meaning: "Low in price / affordable", hindi: "सस्ता" },
      { word: "Expensive", meaning: "High in price / costly", hindi: "महंगा" }
    ],
    sentences: [
      {
        english: "How much does this shirt cost?",
        hindi: "इस शर्ट की कीमत कितनी है?"
      },
      {
        english: "How many oranges do you want?",
        hindi: "आप कितने संतरे चाहते हैं?"
      },
      {
        english: "This is too expensive for me.",
        hindi: "यह मेरे लिए बहुत महंगा है।"
      },
      {
        english: "Can I get a cheaper option?",
        hindi: "क्या मुझे कोई सस्ता विकल्प मिल सकता है?"
      },
      {
        english: "I want to buy five kilos of rice.",
        hindi: "मैं पाँच किलो चावल खरीदना चाहता/चाहती हूँ।"
      }
    ],
    tip: "Next time you shop, try to say the items and prices in English — even if just in your mind. 'Five tomatoes, twenty rupees.' This is real-world practice! (अगली बार shopping करते वक्त English में सोचें।)"
  },
  // === Day 11-15: Past Tense, Telling Stories, Time Expressions ===
  {
    day: 11,
    title: "Yesterday's Story",
    topic: "Simple Past Tense",
    grammarConcept: "Simple Past Tense: Used for completed actions in the past. Regular verbs: add -ed. 'walk → walked', 'talk → talked'. Irregular verbs: change form. 'go → went', 'eat → ate', 'see → saw'. Negative: 'did not + base verb'. 'I did not go.'",
    vocabulary: [
      {
        word: "Yesterday",
        meaning: "The day before today",
        hindi: "कल (बीता हुआ)"
      },
      { word: "Went", meaning: "Past form of 'go'", hindi: "गया / गई" },
      { word: "Ate", meaning: "Past form of 'eat'", hindi: "खाया / खाई" },
      { word: "Talked", meaning: "Past form of 'talk'", hindi: "बात की" },
      {
        word: "Visited",
        meaning: "Past form of 'visit' — went to see",
        hindi: "मिलने गया/गई"
      }
    ],
    sentences: [
      { english: "I went to school yesterday.", hindi: "मैं कल स्कूल गया/गई।" },
      {
        english: "She ate a mango for lunch.",
        hindi: "उसने दोपहर के खाने में आम खाया।"
      },
      {
        english: "They visited their grandparents last Sunday.",
        hindi: "उन्होंने पिछले रविवार को अपने दादा-दादी से मुलाकात की।"
      },
      {
        english: "He did not come to class today.",
        hindi: "वह आज क्लास में नहीं आया।"
      },
      {
        english: "We talked for two hours on the phone.",
        hindi: "हमने फोन पर दो घंटे बात की।"
      }
    ],
    tip: "Keep a diary. Every night, write 3 things you did today in past tense. 'Today I ate chapati. I talked to my friend. I studied English.' (रोज़ रात diary में past tense में लिखें।)"
  },
  {
    day: 12,
    title: "My Childhood",
    topic: "Past Tense Irregular Verbs",
    grammarConcept: "Common Irregular Past Verbs: go→went, come→came, see→saw, give→gave, take→took, make→made, know→knew, think→thought, feel→felt, buy→bought. These must be memorized — there is no rule pattern.",
    vocabulary: [
      {
        word: "Childhood",
        meaning: "Time when you were a child",
        hindi: "बचपन"
      },
      {
        word: "Remember",
        meaning: "Recall from memory",
        hindi: "याद करना / याद होना"
      },
      {
        word: "Used to",
        meaning: "Past habit that no longer continues",
        hindi: "पहले करता/करती था"
      },
      {
        word: "Grew up",
        meaning: "Past form of 'grow up' — become adult",
        hindi: "बड़ा हुआ / बड़ी हुई"
      },
      { word: "Favourite", meaning: "Most liked thing", hindi: "पसंदीदा" }
    ],
    sentences: [
      {
        english: "I grew up in a small village.",
        hindi: "मैं एक छोटे से गाँव में बड़ा/बड़ी हुआ/हुई।"
      },
      {
        english: "My favourite game was cricket.",
        hindi: "मेरा पसंदीदा खेल क्रिकेट था।"
      },
      {
        english: "I used to play with my friends every evening.",
        hindi: "मैं हर शाम अपने दोस्तों के साथ खेलता/खेलती था।"
      },
      {
        english: "She gave me her old books.",
        hindi: "उसने मुझे अपनी पुरानी किताबें दीं।"
      },
      {
        english: "I felt very happy as a child.",
        hindi: "मैं बचपन में बहुत खुश था/थी।"
      }
    ],
    tip: "Make a list of 10 irregular verbs with their past forms and Hindi meanings. Test yourself tomorrow. Repeat this every week until you remember all of them. (10 irregular verbs की list बनाएं।)"
  },
  {
    day: 13,
    title: "Tell Me a Story",
    topic: "Narrating Events in the Past",
    grammarConcept: "Story Linking Words (Sequencers): Use these to connect past events: First, Then, After that, Next, Finally, Suddenly, Meanwhile, Eventually. Example: 'First, I went to the market. Then, I bought vegetables. Finally, I cooked dinner.'",
    vocabulary: [
      {
        word: "First",
        meaning: "Before anything else / at the beginning",
        hindi: "पहले"
      },
      {
        word: "Then",
        meaning: "After that / next in sequence",
        hindi: "फिर / उसके बाद"
      },
      {
        word: "Finally",
        meaning: "At the end / at last",
        hindi: "आखिरकार / अंत में"
      },
      {
        word: "Suddenly",
        meaning: "Unexpectedly / without warning",
        hindi: "अचानक"
      },
      {
        word: "Realized",
        meaning: "Past form of 'realize' — became aware",
        hindi: "महसूस किया / समझा"
      }
    ],
    sentences: [
      {
        english: "First, I woke up late and missed the bus.",
        hindi: "पहले, मैं देर से उठा और बस छूट गई।"
      },
      {
        english: "Then, I decided to walk to school.",
        hindi: "फिर, मैंने स्कूल पैदल जाने का फैसला किया।"
      },
      {
        english: "Suddenly, it started to rain heavily.",
        hindi: "अचानक, ज़ोरदार बारिश शुरू हो गई।"
      },
      {
        english: "Finally, my friend gave me a ride.",
        hindi: "आखिरकार, मेरे दोस्त ने मुझे लिफ्ट दी।"
      },
      {
        english: "I realized it was a memorable day!",
        hindi: "मुझे समझ आया कि यह एक यादगार दिन था!"
      }
    ],
    tip: "Tell a simple past story using at least 5 linking words. This is how native speakers make their stories flow naturally. Record yourself and listen back! (5 linking words का इस्तेमाल करके एक story सुनाएं।)"
  },
  {
    day: 14,
    title: "Before & After",
    topic: "Past Perfect Tense",
    grammarConcept: "Past Perfect (had + past participle): Used when one past action happened before another past action. 'I had already eaten when she arrived.' The earlier action uses past perfect. Structure: Subject + had + [verb3]. Negative: 'He had not finished.'",
    vocabulary: [
      {
        word: "Already",
        meaning: "Before a particular time / by now",
        hindi: "पहले से ही / पहले ही"
      },
      {
        word: "By the time",
        meaning: "Before a specific moment",
        hindi: "जब तक"
      },
      {
        word: "Just",
        meaning: "Very recently / a short time ago",
        hindi: "अभी-अभी"
      },
      { word: "Before", meaning: "Earlier than / prior to", hindi: "पहले" },
      { word: "Finished", meaning: "Completed / done", hindi: "समाप्त किया" }
    ],
    sentences: [
      {
        english: "I had already eaten when she arrived.",
        hindi: "जब वह आई, मैं पहले ही खाना खा चुका/चुकी था।"
      },
      {
        english: "By the time he came, they had left.",
        hindi: "जब तक वह आया, वे जा चुके थे।"
      },
      {
        english: "She had never seen snow before.",
        hindi: "उसने पहले कभी बर्फ नहीं देखी थी।"
      },
      {
        english: "He had just finished his homework.",
        hindi: "उसने अभी-अभी अपना गृहकार्य पूरा किया था।"
      },
      {
        english: "We had not met before that day.",
        hindi: "उस दिन से पहले हम कभी नहीं मिले थे।"
      }
    ],
    tip: "Think of a day when two things happened in sequence. Write the story using past perfect for the earlier event. This tense shows logical order of events. (दो events में से पहले वाले के लिए past perfect use करें।)"
  },
  {
    day: 15,
    title: "Time Expressions",
    topic: "Talking About Time in English",
    grammarConcept: "Time Expressions: Past — yesterday, last week/month/year, ago (two days ago, a week ago). Present — now, today, at the moment, currently. Future — tomorrow, next week/month, soon, in [time] (in two days). Match the tense with the time expression!",
    vocabulary: [
      {
        word: "Ago",
        meaning: "Before the present time",
        hindi: "पहले (जैसे: 2 घंटे पहले)"
      },
      {
        word: "Recently",
        meaning: "Not long ago / a short time back",
        hindi: "हाल ही में"
      },
      {
        word: "Since",
        meaning: "From a point in the past until now",
        hindi: "से (जब से)"
      },
      { word: "For", meaning: "Duration of time", hindi: "के लिए (समय के लिए)" },
      {
        word: "Currently",
        meaning: "At the present time / now",
        hindi: "अभी / फ़िलहाल"
      }
    ],
    sentences: [
      {
        english: "I studied English two years ago.",
        hindi: "मैंने दो साल पहले अंग्रेज़ी पढ़ी।"
      },
      {
        english: "She has lived here since 2020.",
        hindi: "वह 2020 से यहाँ रह रही है।"
      },
      {
        english: "He has been working for five hours.",
        hindi: "वह पाँच घंटे से काम कर रहा है।"
      },
      {
        english: "I recently bought a new phone.",
        hindi: "मैंने हाल ही में एक नया फोन खरीदा।"
      },
      {
        english: "She is currently studying in university.",
        hindi: "वह अभी विश्वविद्यालय में पढ़ रही है।"
      }
    ],
    tip: "Time expressions are the key to using tenses correctly. Make flashcards: write the time expression on one side and the correct tense on the other. (Time expression flashcards बनाएं।)"
  },
  // === Day 16-20: Future Tense, Making Plans, Modal Verbs ===
  {
    day: 16,
    title: "Tomorrow's Plan",
    topic: "Simple Future Tense (Will)",
    grammarConcept: "Simple Future with 'will': Use 'will + base verb' for decisions, promises, and predictions. 'I will help you.' / 'It will rain tomorrow.' Negative: 'will not' (won't). Question: 'Will you come?' Short answer: 'Yes, I will.' / 'No, I won't.'",
    vocabulary: [
      {
        word: "Promise",
        meaning: "A commitment to do something",
        hindi: "वादा"
      },
      {
        word: "Probably",
        meaning: "Very likely / almost certainly",
        hindi: "शायद / संभवतः"
      },
      { word: "Decision", meaning: "A choice you make", hindi: "फैसला / निर्णय" },
      {
        word: "Prediction",
        meaning: "A guess about the future",
        hindi: "भविष्यवाणी"
      },
      {
        word: "Definitely",
        meaning: "Without any doubt / certainly",
        hindi: "निश्चित रूप से"
      }
    ],
    sentences: [
      {
        english: "I will call you tonight.",
        hindi: "मैं आज रात आपको फोन करूँगा/करूँगी।"
      },
      {
        english: "It will probably rain this evening.",
        hindi: "आज शाम शायद बारिश होगी।"
      },
      {
        english: "She will definitely come to the wedding.",
        hindi: "वह निश्चित रूप से शादी में आएगी।"
      },
      {
        english: "Will you help me with this problem?",
        hindi: "क्या आप इस समस्या में मेरी मदद करेंगे?"
      },
      {
        english: "I won't be late, I promise!",
        hindi: "मैं देर नहीं करूँगा/करूँगी, वादा है!"
      }
    ],
    tip: "Write three promises to yourself in English using 'will'. 'I will practice English every day.' These commitments keep you motivated! (अपने आप से 3 English promises लिखें।)"
  },
  {
    day: 17,
    title: "Let's Make Plans",
    topic: "Future with 'Going to'",
    grammarConcept: "Future with 'be going to': Use 'am/is/are + going to + base verb' for plans and intentions already decided, or for things you can see will happen. 'I am going to visit Delhi next week.' (planned) vs. 'Look at those clouds — it is going to rain.' (evidence-based prediction).",
    vocabulary: [
      {
        word: "Plan",
        meaning: "An intention to do something in the future",
        hindi: "योजना / plan"
      },
      {
        word: "Intention",
        meaning: "What you mean to do / goal",
        hindi: "इरादा"
      },
      { word: "Trip", meaning: "A journey / short travel", hindi: "यात्रा" },
      { word: "Organise", meaning: "Arrange / set up", hindi: "आयोजन करना" },
      {
        word: "Cancel",
        meaning: "Call off / not continue as planned",
        hindi: "रद्द करना"
      }
    ],
    sentences: [
      {
        english: "I am going to visit my aunt next Sunday.",
        hindi: "मैं अगले रविवार को अपनी मौसी से मिलने जाने वाला/वाली हूँ।"
      },
      {
        english: "She is going to start a new course.",
        hindi: "वह एक नया course शुरू करने वाली है।"
      },
      {
        english: "We are going to organise a party.",
        hindi: "हम एक पार्टी आयोजित करने वाले हैं।"
      },
      {
        english: "Look at the traffic — we are going to be late!",
        hindi: "ट्रैफिक देखो — हमें देर हो जाएगी!"
      },
      {
        english: "Are you going to cancel the trip?",
        hindi: "क्या आप यात्रा रद्द करने वाले हैं?"
      }
    ],
    tip: "Plan your next week in English using 'going to'. 'On Monday, I am going to study. On Tuesday, I am going to...' Share it with a friend for accountability! (अगले हफ्ते की planning English में करें।)"
  },
  {
    day: 18,
    title: "Can You Do It?",
    topic: "Modal Verbs — Can, Could, May",
    grammarConcept: "Modal Verbs: Can (ability/permission — present), Could (ability/permission — past/polite), May (permission/possibility). Structure: Subject + modal + base verb (no -s, no -ed). 'She can swim.' / 'Could you help me?' / 'May I come in?'",
    vocabulary: [
      {
        word: "Ability",
        meaning: "Skill or power to do something",
        hindi: "योग्यता / क्षमता"
      },
      {
        word: "Permission",
        meaning: "Being allowed to do something",
        hindi: "अनुमति / इजाज़त"
      },
      {
        word: "Politely",
        meaning: "In a respectful / courteous manner",
        hindi: "विनम्रतापूर्वक"
      },
      { word: "Swim", meaning: "Move through water", hindi: "तैरना" },
      {
        word: "Speak",
        meaning: "Say words / communicate verbally",
        hindi: "बोलना"
      }
    ],
    sentences: [
      {
        english: "She can speak three languages.",
        hindi: "वह तीन भाषाएँ बोल सकती है।"
      },
      {
        english: "Could you please pass the salt?",
        hindi: "क्या आप कृपया नमक दे सकते हैं?"
      },
      {
        english: "May I use your phone?",
        hindi: "क्या मैं आपका फोन इस्तेमाल कर सकता/सकती हूँ?"
      },
      {
        english: "I cannot swim, but I want to learn.",
        hindi: "मैं तैर नहीं सकता/सकती, लेकिन मैं सीखना चाहता/चाहती हूँ।"
      },
      {
        english: "Could you speak more slowly, please?",
        hindi: "क्या आप धीरे-धीरे बोल सकते हैं, कृपया?"
      }
    ],
    tip: "Use 'Could you...' instead of 'Can you...' for polite requests. This small change makes you sound much more professional and educated! (Polite requests के लिए 'Could you' use करें।)"
  },
  {
    day: 19,
    title: "Should & Must",
    topic: "Modal Verbs — Should, Must, Have to",
    grammarConcept: "Should (advice/recommendation), Must (strong obligation/necessity), Have to (external obligation). 'You should exercise daily.' (advice) / 'You must carry your ID.' (rule) / 'I have to wake up early.' (obligation). Should not = bad idea. Must not = forbidden!",
    vocabulary: [
      {
        word: "Advice",
        meaning: "Recommendation about what to do",
        hindi: "सलाह"
      },
      {
        word: "Obligation",
        meaning: "A duty / something you must do",
        hindi: "जिम्मेदारी / दायित्व"
      },
      {
        word: "Necessary",
        meaning: "Essential / must be done",
        hindi: "ज़रूरी / आवश्यक"
      },
      {
        word: "Rule",
        meaning: "A regulation that must be followed",
        hindi: "नियम"
      },
      {
        word: "Recommend",
        meaning: "Suggest as a good choice",
        hindi: "सुझाव देना"
      }
    ],
    sentences: [
      {
        english: "You should drink eight glasses of water daily.",
        hindi: "आपको रोज़ आठ गिलास पानी पीना चाहिए।"
      },
      {
        english: "Students must not use phones in class.",
        hindi: "छात्रों को क्लास में फोन नहीं इस्तेमाल करना चाहिए।"
      },
      {
        english: "I have to submit my project by Friday.",
        hindi: "मुझे शुक्रवार तक अपना project जमा करना है।"
      },
      {
        english: "She must be very tired after the journey.",
        hindi: "यात्रा के बाद वह बहुत थकी हुई होगी।"
      },
      {
        english: "You should not skip breakfast.",
        hindi: "आपको नाश्ता नहीं छोड़ना चाहिए।"
      }
    ],
    tip: "Notice the difference: 'should' gives advice (you choose), 'must' is a rule or strong need (no choice). Using the right one shows you understand English deeply! (Should और Must का फर्क समझें।)"
  },
  {
    day: 20,
    title: "Might & Would",
    topic: "Modal Verbs — Might, Would",
    grammarConcept: "Might (possibility — less certain than 'may'), Would (conditional / polite requests). 'I might come tomorrow.' (maybe 50%) vs. 'May I come?' (asking permission). 'Would you like some tea?' (polite offer) / 'I would love to help.' (conditional willingness).",
    vocabulary: [
      {
        word: "Possibility",
        meaning: "Something that might happen",
        hindi: "संभावना"
      },
      {
        word: "Prefer",
        meaning: "Like better / choose over others",
        hindi: "पसंद करना / तरजीह देना"
      },
      {
        word: "Offer",
        meaning: "Present something for someone to take",
        hindi: "प्रस्ताव / पेशकश"
      },
      {
        word: "Uncertain",
        meaning: "Not sure / not definite",
        hindi: "अनिश्चित"
      },
      { word: "Perhaps", meaning: "Maybe / possibly", hindi: "शायद / संभव है" }
    ],
    sentences: [
      {
        english: "I might visit London next year.",
        hindi: "मैं अगले साल लंदन जा सकता/सकती हूँ।"
      },
      {
        english: "Would you like a cup of tea?",
        hindi: "क्या आप एक कप चाय लेंगे?"
      },
      {
        english: "She might not come to the meeting.",
        hindi: "वह शायद मीटिंग में नहीं आएगी।"
      },
      {
        english: "I would prefer to sit by the window.",
        hindi: "मैं खिड़की के पास बैठना पसंद करूँगा/करूँगी।"
      },
      {
        english: "Would you mind closing the door?",
        hindi: "क्या आप दरवाज़ा बंद करने का कष्ट करेंगे?"
      }
    ],
    tip: "'Would you mind...' is one of the most polite phrases in English. It literally asks 'would it bother you?' — always use this when making a slightly inconvenient request. ('Would you mind' बहुत polite phrase है।)"
  },
  // === Day 21-25: Conditionals, Opinions, Comparatives/Superlatives ===
  {
    day: 21,
    title: "If This, Then That",
    topic: "Zero & First Conditional",
    grammarConcept: "Zero Conditional (universal truths): If + Simple Present, Simple Present. 'If you heat water, it boils.' First Conditional (real future possibility): If + Simple Present, will + base verb. 'If it rains, I will stay home.' The 'if-clause' sets the condition.",
    vocabulary: [
      {
        word: "Condition",
        meaning: "A requirement / something that must happen first",
        hindi: "शर्त"
      },
      {
        word: "Result",
        meaning: "What happens because of something else",
        hindi: "परिणाम"
      },
      { word: "Unless", meaning: "Except if / if not", hindi: "जब तक नहीं" },
      { word: "Provided", meaning: "On the condition that", hindi: "बशर्ते" },
      {
        word: "Consequence",
        meaning: "Effect / outcome of an action",
        hindi: "परिणाम / नतीजा"
      }
    ],
    sentences: [
      {
        english: "If you mix red and blue, you get purple.",
        hindi: "अगर आप लाल और नीला मिलाते हैं, तो बैंगनी बनता है।"
      },
      {
        english: "If it rains tomorrow, we will not go to the park.",
        hindi: "अगर कल बारिश हुई, तो हम पार्क नहीं जाएंगे।"
      },
      {
        english: "If she studies hard, she will pass the exam.",
        hindi: "अगर वह मेहनत से पढ़ेगी, तो परीक्षा पास करेगी।"
      },
      {
        english: "Unless you hurry, you will miss the train.",
        hindi: "जब तक आप जल्दी नहीं करते, आप ट्रेन चूक जाएंगे।"
      },
      {
        english: "If I have time, I will call you.",
        hindi: "अगर मेरे पास समय हुआ, तो मैं आपको फोन करूँगा/करूँगी।"
      }
    ],
    tip: "Practice 'If... will...' with everyday situations. 'If I wake up early, I will exercise.' This tense structure is used in 80% of planning conversations! (रोज़मर्रा की situations पर 'If...will' sentences बनाएं।)"
  },
  {
    day: 22,
    title: "Dream Scenarios",
    topic: "Second Conditional (Unreal Situations)",
    grammarConcept: "Second Conditional (hypothetical / unreal present or future): If + Simple Past, would + base verb. 'If I were rich, I would travel the world.' (I am not rich — this is imaginary.) Note: Use 'were' not 'was' in formal English for all subjects. 'If I were you...'",
    vocabulary: [
      {
        word: "Imaginary",
        meaning: "Not real / only in the mind",
        hindi: "काल्पनिक / मन में"
      },
      {
        word: "Hypothetical",
        meaning: "Supposed / not real / 'what if'",
        hindi: "काल्पनिक परिस्थिति"
      },
      {
        word: "Wish",
        meaning: "Desire for something different",
        hindi: "इच्छा / काश"
      },
      { word: "Dream", meaning: "A strong desire / aspiration", hindi: "सपना" },
      {
        word: "Wealthy",
        meaning: "Very rich / having lots of money",
        hindi: "धनी / अमीर"
      }
    ],
    sentences: [
      {
        english: "If I were the Prime Minister, I would build more schools.",
        hindi: "अगर मैं प्रधानमंत्री होता/होती, तो मैं और स्कूल बनाता/बनाती।"
      },
      {
        english: "If she had more time, she would learn music.",
        hindi: "अगर उसके पास ज़्यादा समय होता, तो वह संगीत सीखती।"
      },
      {
        english: "If I were you, I would apologise.",
        hindi: "अगर मैं आपकी जगह होता/होती, तो माफी माँगता/माँगती।"
      },
      {
        english: "What would you do if you won a million rupees?",
        hindi: "अगर आपको दस लाख रुपये मिलते तो आप क्या करते?"
      },
      {
        english: "If we lived near the sea, we would swim every day.",
        hindi: "अगर हम समुद्र के पास रहते, तो हम हर दिन तैरते।"
      }
    ],
    tip: "The second conditional is perfect for 'what if' games. Ask friends: 'What would you do if you could fly?' This is a fun way to practice complex grammar naturally! ('What if' games खेलें।)"
  },
  {
    day: 23,
    title: "Sharing Opinions",
    topic: "Expressing Opinions & Agreeing/Disagreeing",
    grammarConcept: "Opinion phrases: 'In my opinion...', 'I think / I believe / I feel that...', 'It seems to me that...'. Agreeing: 'I agree / Exactly / That's right / Absolutely.' Disagreeing politely: 'I disagree / I'm not sure about that / Actually, I think...' Always give a reason after your opinion!",
    vocabulary: [
      {
        word: "Opinion",
        meaning: "Your personal view / belief on something",
        hindi: "राय / विचार"
      },
      {
        word: "Agree",
        meaning: "Have the same view as someone",
        hindi: "सहमत होना"
      },
      {
        word: "Disagree",
        meaning: "Have a different view",
        hindi: "असहमत होना"
      },
      {
        word: "Politely",
        meaning: "In a respectful / courteous way",
        hindi: "विनम्रतापूर्वक"
      },
      {
        word: "However",
        meaning: "On the other hand / but",
        hindi: "हालाँकि / परंतु"
      }
    ],
    sentences: [
      {
        english: "In my opinion, English is the most useful language.",
        hindi: "मेरी राय में, अंग्रेज़ी सबसे उपयोगी भाषा है।"
      },
      {
        english: "I think we should invest in education.",
        hindi: "मुझे लगता है हमें शिक्षा में निवेश करना चाहिए।"
      },
      {
        english: "I agree with you completely!",
        hindi: "मैं आपसे पूरी तरह सहमत हूँ!"
      },
      {
        english: "I see your point, however, I disagree.",
        hindi: "मैं आपकी बात समझता/समझती हूँ, लेकिन मैं असहमत हूँ।"
      },
      {
        english: "That's an interesting perspective!",
        hindi: "यह एक दिलचस्प नज़रिया है!"
      }
    ],
    tip: "Practice giving your opinion about current events, movies, or food. The formula is simple: 'I think... because...' Two words that build confident conversation! (हर topic पर 'I think... because...' से opinion दें।)"
  },
  {
    day: 24,
    title: "Better, Best, Biggest!",
    topic: "Comparatives & Superlatives",
    grammarConcept: "Comparatives (comparing 2 things): short adjectives add -er + 'than'. 'faster than', 'taller than'. Long adjectives: 'more + adjective + than'. 'more beautiful than'. Superlatives (best in a group): 'the + adjective + est'. 'the fastest'. Or: 'the most + adjective'. 'the most intelligent'. Irregular: good→better→best, bad→worse→worst.",
    vocabulary: [
      {
        word: "Taller",
        meaning: "More tall (comparative)",
        hindi: "ज़्यादा लंबा"
      },
      {
        word: "Most",
        meaning: "Superlative marker for long adjectives",
        hindi: "सबसे (ज़्यादा)"
      },
      {
        word: "Intelligent",
        meaning: "Smart / having high mental ability",
        hindi: "बुद्धिमान / चतुर"
      },
      { word: "Faster", meaning: "More fast (comparative)", hindi: "ज़्यादा तेज़" },
      { word: "Best", meaning: "Superlative of 'good'", hindi: "सबसे अच्छा" }
    ],
    sentences: [
      {
        english: "The Ganga is longer than the Yamuna.",
        hindi: "गंगा यमुना से लंबी है।"
      },
      {
        english: "She is more intelligent than her brother.",
        hindi: "वह अपने भाई से ज़्यादा बुद्धिमान है।"
      },
      {
        english: "The Himalayas are the tallest mountains in the world.",
        hindi: "हिमालय दुनिया के सबसे ऊँचे पहाड़ हैं।"
      },
      {
        english: "This is the most delicious food I have ever eaten.",
        hindi: "यह सबसे स्वादिष्ट खाना है जो मैंने कभी खाया।"
      },
      {
        english: "He ran faster than everyone else.",
        hindi: "वह बाकी सबसे तेज़ दौड़ा।"
      }
    ],
    tip: "Create your own comparison sentences about things around you: your house, city, friends. 'My city is bigger than your city.' Natural practice makes comparatives automatic! (अपने आस-पास की चीज़ों की comparison करें।)"
  },
  {
    day: 25,
    title: "How Long? How Often?",
    topic: "Present Perfect Tense",
    grammarConcept: "Present Perfect (have/has + past participle): Connects past to present. Used with: 'for' (duration) and 'since' (starting point), 'ever/never', 'just', 'already', 'yet'. 'I have lived here for 5 years.' (started past, still true now.) / 'Have you ever tried sushi?' Negative: 'She has not arrived yet.'",
    vocabulary: [
      {
        word: "Ever",
        meaning: "At any time (used in questions)",
        hindi: "कभी भी"
      },
      { word: "Never", meaning: "Not at any time", hindi: "कभी नहीं" },
      {
        word: "Yet",
        meaning: "Up to now (negatives and questions)",
        hindi: "अभी तक"
      },
      {
        word: "Already",
        meaning: "By now / before expected time",
        hindi: "पहले से ही"
      },
      {
        word: "Experience",
        meaning: "Something you have done / lived through",
        hindi: "अनुभव"
      }
    ],
    sentences: [
      {
        english: "I have studied English for three years.",
        hindi: "मैं तीन सालों से अंग्रेज़ी पढ़ रहा/रही हूँ।"
      },
      {
        english: "Have you ever visited the Taj Mahal?",
        hindi: "क्या आपने कभी ताज महल देखा है?"
      },
      {
        english: "She has never eaten Japanese food.",
        hindi: "उसने कभी जापानी खाना नहीं खाया।"
      },
      {
        english: "He has already finished his project.",
        hindi: "उसने अपना project पहले ही पूरा कर लिया है।"
      },
      { english: "Have they arrived yet?", hindi: "क्या वे अभी तक आ गए हैं?" }
    ],
    tip: "Present Perfect bridges past and present — it means the past action is still relevant NOW. 'I have lost my keys' (so I can't enter now). This is one of the most important tenses for natural English! (Present Perfect past और present को जोड़ता है।)"
  },
  // === Day 26-30: Advanced Conversations, Formal/Informal, Review ===
  {
    day: 26,
    title: "Formal vs Casual",
    topic: "Formal & Informal English",
    grammarConcept: "Formal English: Used in work, official letters, exams. Full forms, formal vocabulary. 'I would like to request your assistance.' Informal: Used with friends and family. Contractions, slang, casual words. 'Can you help me out?' Key rule: Match your language to your audience — this is called 'register'.",
    vocabulary: [
      {
        word: "Formal",
        meaning: "Official / professional / serious style",
        hindi: "औपचारिक"
      },
      {
        word: "Informal",
        meaning: "Casual / friendly / relaxed style",
        hindi: "अनौपचारिक"
      },
      {
        word: "Colleague",
        meaning: "A person you work with (formal word)",
        hindi: "सहकर्मी"
      },
      {
        word: "Mate",
        meaning: "Friend (informal British English)",
        hindi: "दोस्त (informal)"
      },
      {
        word: "Request",
        meaning: "Formal way to ask for something",
        hindi: "निवेदन / अनुरोध"
      }
    ],
    sentences: [
      {
        english: "Formal: I would like to schedule a meeting.",
        hindi: "औपचारिक: मैं एक बैठक निर्धारित करना चाहूँगा।"
      },
      {
        english: "Informal: Can we meet up sometime?",
        hindi: "अनौपचारिक: क्या हम कभी मिल सकते हैं?"
      },
      {
        english: "Formal: Could you please send me the document?",
        hindi: "औपचारिक: क्या आप कृपया मुझे दस्तावेज़ भेज सकते हैं?"
      },
      {
        english: "Informal: Send me that file, will you?",
        hindi: "अनौपचारिक: वो file भेजो न?"
      },
      {
        english: "Formal: I am writing to enquire about the position.",
        hindi: "औपचारिक: मैं उस पद के बारे में जानकारी लेने के लिए लिख रहा/रही हूँ।"
      }
    ],
    tip: "Think about WHO you are talking to before choosing your language. Teacher, boss, elder = formal. Friend, sibling, classmate = informal. Using the wrong register is the most common English mistake! (बात करने से पहले सोचें — formal या informal?)"
  },
  {
    day: 27,
    title: "Speak Like a Pro",
    topic: "Idioms & Common Phrases",
    grammarConcept: "Idioms: Phrases where the literal meaning is different from the actual meaning. 'Break a leg' does not mean to actually break your leg — it means 'good luck'! Idioms make your English sound natural and fluent. They cannot be translated word-by-word.",
    vocabulary: [
      {
        word: "Break a leg",
        meaning: "Good luck! (theatre idiom)",
        hindi: "शुभकामनाएँ"
      },
      {
        word: "Hit the books",
        meaning: "Start studying seriously",
        hindi: "पढ़ाई शुरू करना"
      },
      {
        word: "Under the weather",
        meaning: "Feeling ill / not well",
        hindi: "तबियत ठीक नहीं"
      },
      {
        word: "Once in a blue moon",
        meaning: "Very rarely / almost never",
        hindi: "कभी-कभार / बहुत कम"
      },
      {
        word: "Bite off more than you can chew",
        meaning: "Take on more than you can handle",
        hindi: "औकात से ज़्यादा काम लेना"
      }
    ],
    sentences: [
      {
        english: "Break a leg at your interview tomorrow!",
        hindi: "कल के interview के लिए शुभकामनाएँ!"
      },
      {
        english: "I need to hit the books — my exam is on Friday.",
        hindi: "मुझे पढ़ाई शुरू करनी होगी — शुक्रवार को exam है।"
      },
      {
        english: "She is under the weather today.",
        hindi: "आज उसकी तबियत ठीक नहीं है।"
      },
      {
        english: "We go to the cinema once in a blue moon.",
        hindi: "हम बहुत कम ही cinema जाते हैं।"
      },
      {
        english: "Don't bite off more than you can chew.",
        hindi: "अपनी क्षमता से ज़्यादा काम मत लो।"
      }
    ],
    tip: "Learn 2 new idioms every week. Use them in conversations immediately — even if it feels forced at first. Within a month, you'll use them naturally without thinking! (हर हफ्ते 2 नए idioms सीखें।)"
  },
  {
    day: 28,
    title: "Writing Excellence",
    topic: "Letter & Email Writing",
    grammarConcept: "Formal Letter structure: 1) Sender's address 2) Date 3) Recipient's address 4) Subject 5) Salutation (Dear Sir/Madam) 6) Body (Introduction, Main content, Conclusion) 7) Closing (Yours sincerely/faithfully) 8) Signature. Email: Subject line → Greeting → Body → Sign-off. Always be clear and concise in formal writing.",
    vocabulary: [
      {
        word: "Sincerely",
        meaning: "Genuinely / from the heart (formal closing)",
        hindi: "ईमानदारी से / सविनय"
      },
      {
        word: "Regarding",
        meaning: "About / concerning / in relation to",
        hindi: "के संदर्भ में / बारे में"
      },
      {
        word: "Attached",
        meaning: "Included with this letter/email",
        hindi: "संलग्न / साथ में लगाया"
      },
      {
        word: "Acknowledge",
        meaning: "Confirm receipt of / recognize",
        hindi: "स्वीकार करना / पावती देना"
      },
      {
        word: "Convenient",
        meaning: "Suitable / easy / without difficulty",
        hindi: "सुविधाजनक"
      }
    ],
    sentences: [
      {
        english: "I am writing regarding the job advertisement.",
        hindi: "मैं नौकरी के विज्ञापन के संदर्भ में लिख रहा/रही हूँ।"
      },
      {
        english: "Please find the required documents attached.",
        hindi: "कृपया संलग्न आवश्यक दस्तावेज़ देखें।"
      },
      {
        english: "I would be grateful for your prompt reply.",
        hindi: "मैं आपके शीघ्र उत्तर के लिए आभारी रहूँगा/रहूँगी।"
      },
      {
        english: "Kindly acknowledge receipt of this letter.",
        hindi: "कृपया इस पत्र की प्राप्ति की पावती दें।"
      },
      {
        english: "Please contact me at your earliest convenience.",
        hindi: "कृपया जल्द से जल्द संपर्क करें।"
      }
    ],
    tip: "Practice writing one formal email per week — to a teacher, a company, or even imaginary. Formal writing skills open doors to jobs, universities, and government offices! (हर हफ्ते एक formal email लिखने का अभ्यास करें।)"
  },
  {
    day: 29,
    title: "Tell Your Story",
    topic: "Reported Speech",
    grammarConcept: "Reported Speech (Indirect Speech): Reporting what someone said. Direct: She said, 'I am tired.' Reported: She said that she was tired. Rules: Tense shifts back (am → was, will → would, can → could), pronouns change (I → she/he), time expressions change (today → that day, tomorrow → the next day). Say → said, Tell → told + object.",
    vocabulary: [
      {
        word: "Reported",
        meaning: "Said what someone else said",
        hindi: "रिपोर्ट किया / बताया"
      },
      {
        word: "Claimed",
        meaning: "Said something was true (reported speech)",
        hindi: "दावा किया"
      },
      {
        word: "Suggested",
        meaning: "Said it would be a good idea",
        hindi: "सुझाव दिया"
      },
      { word: "According to", meaning: "As said by someone", hindi: "के अनुसार" },
      {
        word: "Mentioned",
        meaning: "Said briefly / brought up",
        hindi: "ज़िक्र किया"
      }
    ],
    sentences: [
      {
        english: "He said that he was going to Delhi.",
        hindi: "उसने कहा कि वह दिल्ली जाने वाला था।"
      },
      {
        english: "She told me that she had passed the exam.",
        hindi: "उसने मुझे बताया कि वह परीक्षा पास कर चुकी थी।"
      },
      {
        english: "The teacher said that we should practice every day.",
        hindi: "शिक्षक ने कहा कि हमें हर दिन अभ्यास करना चाहिए।"
      },
      {
        english: "He claimed that he had not done anything wrong.",
        hindi: "उसने दावा किया कि उसने कुछ गलत नहीं किया।"
      },
      {
        english: "She suggested that we should leave early.",
        hindi: "उसने सुझाव दिया कि हमें जल्दी निकल जाना चाहिए।"
      }
    ],
    tip: "After every conversation, practice summarizing what was said using reported speech. 'He told me that...' / 'She mentioned that...' This skill is essential for office and academic settings! (हर conversation को reported speech में summarize करें।)"
  },
  {
    day: 30,
    title: "You Are Ready!",
    topic: "Fluency, Confidence & Continuing Your Journey",
    grammarConcept: "Fluency Review: You have now covered Simple Present, Present Continuous, Past Simple, Past Perfect, Present Perfect, Future (will / going to), Modal Verbs (can, could, may, might, should, must, would), Conditionals (0, 1st, 2nd), Comparatives, Superlatives, Reported Speech, Formal/Informal register, Idioms, and Letter Writing. The journey does not end here — it begins!",
    vocabulary: [
      {
        word: "Fluency",
        meaning: "Speaking smoothly / naturally / without hesitation",
        hindi: "प्रवाह / धाराप्रवाह बोलना"
      },
      {
        word: "Confidence",
        meaning: "Belief in yourself and your abilities",
        hindi: "आत्मविश्वास"
      },
      {
        word: "Progress",
        meaning: "Movement forward / improvement over time",
        hindi: "प्रगति"
      },
      {
        word: "Achievement",
        meaning: "Something you have successfully done",
        hindi: "उपलब्धि"
      },
      {
        word: "Continue",
        meaning: "Keep going / not stop",
        hindi: "जारी रखना"
      }
    ],
    sentences: [
      {
        english: "I have completed 30 days of English learning — I am proud of myself!",
        hindi: "मैंने 30 दिन की अंग्रेज़ी सीखने की यात्रा पूरी की — मुझे अपने आप पर गर्व है!"
      },
      {
        english: "Every day I practice, my English gets better.",
        hindi: "हर दिन अभ्यास से मेरी अंग्रेज़ी बेहतर होती है।"
      },
      {
        english: "I can now hold a conversation in English.",
        hindi: "मैं अब अंग्रेज़ी में बातचीत कर सकता/सकती हूँ।"
      },
      {
        english: "My journey to fluency continues from this day forward.",
        hindi: "मेरी fluency की यात्रा आज से आगे जारी रहती है।"
      },
      {
        english: "Learning a language takes courage — and I have it!",
        hindi: "भाषा सीखने में साहस चाहिए — और मेरे पास है!"
      }
    ],
    tip: "Congratulations on completing 30 days! (बधाई हो!) Now: speak English for 15 minutes every day, watch English movies with subtitles, read one English article per week, and write in your diary in English. You have built the foundation — now build the house! 🎓"
  }
];
export {
  courseData as c
};
