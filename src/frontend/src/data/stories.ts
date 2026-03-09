export interface Story {
  id: string;
  title: string;
  titleHindi: string;
  level: "Beginner" | "Elementary" | "Intermediate";
  topic: string;
  topicHindi: string;
  readingTime: string;
  emoji: string;
  paragraphs: {
    english: string;
    hindi: string;
  }[];
  vocabulary: {
    word: string;
    meaning: string;
  }[];
  moralEnglish: string;
  moralHindi: string;
}

export const stories: Story[] = [
  {
    id: "the-honest-farmer",
    title: "The Honest Farmer",
    titleHindi: "ईमानदार किसान",
    level: "Beginner",
    topic: "Honesty & Values",
    topicHindi: "ईमानदारी और मूल्य",
    readingTime: "3 min",
    emoji: "🌾",
    paragraphs: [
      {
        english:
          "Once upon a time, there was a poor farmer named Ramu. He lived in a small village near a forest. Every day, he worked hard in his fields to grow vegetables and wheat.",
        hindi:
          "एक बार की बात है, रामू नाम का एक गरीब किसान था। वह एक जंगल के पास एक छोटे से गाँव में रहता था। वह हर दिन अपने खेतों में सब्जियाँ और गेहूँ उगाने के लिए कड़ी मेहनत करता था।",
      },
      {
        english:
          "One morning, while ploughing his field, Ramu found a small pot full of gold coins. He was very surprised. His hands were shaking with excitement.",
        hindi:
          "एक सुबह, अपना खेत जोतते समय, रामू को सोने के सिक्कों से भरा एक छोटा घड़ा मिला। वह बहुत आश्चर्यचकित था। उसके हाथ उत्साह से काँप रहे थे।",
      },
      {
        english:
          "Ramu immediately thought, 'This gold does not belong to me. I must find its real owner.' He went to the village chief and told him everything honestly.",
        hindi:
          "रामू ने तुरंत सोचा, 'यह सोना मेरा नहीं है। मुझे इसका असली मालिक ढूंढना होगा।' वह गाँव के मुखिया के पास गया और उसे सब कुछ ईमानदारी से बताया।",
      },
      {
        english:
          "The village chief was very impressed. He said, 'Ramu, you are a truly honest man. The king himself must hear about your goodness.' The king rewarded Ramu with land and respect. Ramu became prosperous but always stayed humble.",
        hindi:
          "गाँव के मुखिया बहुत प्रभावित हुए। उन्होंने कहा, 'रामू, तुम सच में एक ईमानदार इंसान हो। राजा को खुद तुम्हारी अच्छाई के बारे में सुनना चाहिए।' राजा ने रामू को जमीन और सम्मान से पुरस्कृत किया। रामू समृद्ध हो गया लेकिन हमेशा विनम्र रहा।",
      },
    ],
    vocabulary: [
      { word: "ploughing", meaning: "हल चलाना (to dig up soil)" },
      { word: "surprised", meaning: "आश्चर्यचकित (astonished)" },
      { word: "immediately", meaning: "तुरंत (at once)" },
      { word: "rewarded", meaning: "पुरस्कृत किया (given a prize)" },
      { word: "prosperous", meaning: "समृद्ध (wealthy and successful)" },
      { word: "humble", meaning: "विनम्र (modest, not proud)" },
    ],
    moralEnglish: "Honesty is always rewarded. Never hide the truth.",
    moralHindi: "ईमानदारी का हमेशा पुरस्कार मिलता है। कभी सच मत छुपाओ।",
  },
  {
    id: "the-clever-crow",
    title: "The Clever Crow",
    titleHindi: "चालाक कौआ",
    level: "Beginner",
    topic: "Intelligence & Problem Solving",
    topicHindi: "बुद्धि और समस्या समाधान",
    readingTime: "3 min",
    emoji: "🐦",
    paragraphs: [
      {
        english:
          "It was a very hot summer day. A thirsty crow was flying over the fields looking for water. He searched everywhere but could not find any.",
        hindi:
          "गर्मियों का बहुत गर्म दिन था। एक प्यासा कौआ पानी की तलाश में खेतों के ऊपर उड़ रहा था। उसने हर जगह खोजा लेकिन कोई पानी नहीं मिला।",
      },
      {
        english:
          "Finally, the crow saw a tall pot under a tree. He flew down and looked inside. There was some water at the bottom, but it was too low to reach.",
        hindi:
          "अंत में, कौए ने एक पेड़ के नीचे एक ऊँचा घड़ा देखा। वह नीचे उड़ा और अंदर देखा। नीचे थोड़ा पानी था, लेकिन वह पहुँचने के लिए बहुत नीचे था।",
      },
      {
        english:
          "The crow thought carefully. He picked up small stones one by one and dropped them into the pot. Slowly, the water level rose higher and higher.",
        hindi:
          "कौए ने ध्यान से सोचा। उसने एक-एक करके छोटे पत्थर उठाए और उन्हें घड़े में डाला। धीरे-धीरे, पानी का स्तर ऊँचा और ऊँचा होता गया।",
      },
      {
        english:
          "At last, the water was high enough for the crow to drink. He drank the water happily and flew away refreshed. His patience and clever thinking had saved his life.",
        hindi:
          "अंत में, पानी इतना ऊँचा हो गया कि कौआ पी सके। उसने खुशी से पानी पिया और तरोताजा होकर उड़ गया। उसके धैर्य और चालाक सोच ने उसकी जान बचाई।",
      },
    ],
    vocabulary: [
      { word: "thirsty", meaning: "प्यासा (wanting water)" },
      { word: "searched", meaning: "खोजा (looked for something)" },
      { word: "bottom", meaning: "तल (the lowest part)" },
      { word: "carefully", meaning: "ध्यान से (with attention)" },
      { word: "patience", meaning: "धैर्य (ability to wait calmly)" },
      { word: "refreshed", meaning: "तरोताजा (feeling new energy)" },
    ],
    moralEnglish:
      "Where there is a will, there is a way. Think before you give up.",
    moralHindi: "जहाँ चाह वहाँ राह। हार मानने से पहले सोचो।",
  },
  {
    id: "two-friends-and-a-bear",
    title: "Two Friends and a Bear",
    titleHindi: "दो दोस्त और एक भालू",
    level: "Elementary",
    topic: "Friendship & Trust",
    topicHindi: "दोस्ती और विश्वास",
    readingTime: "4 min",
    emoji: "🐻",
    paragraphs: [
      {
        english:
          "Arjun and Vikram were best friends. They always said they would help each other in every situation. One day, they decided to travel through a dense forest.",
        hindi:
          "अर्जुन और विक्रम पक्के दोस्त थे। वे हमेशा कहते थे कि वे हर परिस्थिति में एक दूसरे की मदद करेंगे। एक दिन, उन्होंने एक घने जंगल से गुजरने का फैसला किया।",
      },
      {
        english:
          "Suddenly, a big bear appeared on the path in front of them. Both friends were terrified. Arjun, who knew how to climb trees, quickly ran to the nearest tree and climbed up.",
        hindi:
          "अचानक, उनके सामने रास्ते पर एक बड़ा भालू प्रकट हुआ। दोनों दोस्त डर गए। अर्जुन, जो पेड़ पर चढ़ना जानता था, तुरंत पास के पेड़ की तरफ दौड़ा और चढ़ गया।",
      },
      {
        english:
          "He forgot completely about Vikram. Vikram, left alone, remembered that bears do not attack dead bodies. He quickly lay down on the ground and held his breath.",
        hindi:
          "वह विक्रम के बारे में बिल्कुल भूल गया। अकेला छूटा विक्रम याद आया कि भालू मुर्दों पर हमला नहीं करते। वह जल्दी से जमीन पर लेट गया और साँस रोक ली।",
      },
      {
        english:
          "The bear came close, sniffed Vikram's face, and walked away, thinking he was dead. After the bear left, Arjun climbed down and asked, 'What did the bear whisper in your ear?' Vikram replied, 'He told me never to trust a friend who abandons you in danger.'",
        hindi:
          "भालू पास आया, विक्रम का चेहरा सूँघा और चला गया, यह सोचते हुए कि वह मर गया है। भालू के जाने के बाद, अर्जुन नीचे उतरा और पूछा, 'भालू ने तुम्हारे कान में क्या फुसफुसाया?' विक्रम ने जवाब दिया, 'उसने मुझे बताया कि उस दोस्त पर कभी भरोसा मत करो जो खतरे में तुम्हें छोड़ दे।'",
      },
    ],
    vocabulary: [
      { word: "dense", meaning: "घना (thick, crowded)" },
      { word: "terrified", meaning: "भयभीत (extremely scared)" },
      { word: "appeared", meaning: "प्रकट हुआ (came into view)" },
      { word: "sniffed", meaning: "सूँघा (smelled using the nose)" },
      { word: "whisper", meaning: "फुसफुसाना (speak very softly)" },
      { word: "abandons", meaning: "छोड़ देता है (leaves behind)" },
    ],
    moralEnglish:
      "A friend in need is a friend indeed. True friendship never runs away.",
    moralHindi: "मुसीबत में जो साथ दे वही सच्चा दोस्त होता है।",
  },
  {
    id: "the-magic-paintbrush",
    title: "The Magic Paintbrush",
    titleHindi: "जादुई तूलिका",
    level: "Elementary",
    topic: "Kindness & Greed",
    topicHindi: "दयालुता और लालच",
    readingTime: "5 min",
    emoji: "🎨",
    paragraphs: [
      {
        english:
          "Priya was a young girl who loved to paint. She was very poor, but her paintings were full of life and color. Every day she drew on old pieces of paper she found near the market.",
        hindi:
          "प्रिया एक युवा लड़की थी जिसे चित्र बनाना बहुत पसंद था। वह बहुत गरीब थी, लेकिन उसकी पेंटिंग्स जीवन और रंग से भरी थीं। वह हर दिन बाजार के पास पड़े पुराने कागज के टुकड़ों पर चित्र बनाती थी।",
      },
      {
        english:
          "One night, an old woman appeared in Priya's dream. She gave Priya a golden paintbrush and said, 'Whatever you paint with this brush will come to life — but use it only to help others.'",
        hindi:
          "एक रात, प्रिया के सपने में एक बूढ़ी औरत प्रकट हुई। उसने प्रिया को एक सुनहरी तूलिका दी और कहा, 'इस तूलिका से जो भी चित्र बनाओगी वह जीवित हो जाएगा — लेकिन इसे केवल दूसरों की मदद के लिए उपयोग करो।'",
      },
      {
        english:
          "Priya woke up and found the golden paintbrush in her hand. She painted food for the hungry, medicine for the sick, and shoes for children who walked barefoot. The whole village was happy.",
        hindi:
          "प्रिया उठी और उसके हाथ में सुनहरी तूलिका मिली। उसने भूखों के लिए खाना, बीमारों के लिए दवाई, और नंगे पैर चलने वाले बच्चों के लिए जूते बनाए। पूरा गाँव खुश था।",
      },
      {
        english:
          "But the greedy landlord of the village heard about the magic brush. He forced Priya to paint gold and jewels for him. When he asked her to paint a huge mountain of gold, she painted a great flood instead. The flood washed away all his greed forever.",
        hindi:
          "लेकिन गाँव के लालची जमींदार को जादुई तूलिका के बारे में पता चला। उसने प्रिया को उसके लिए सोना और गहने बनाने पर मजबूर किया। जब उसने उससे सोने का बड़ा पहाड़ बनाने को कहा, तो उसने इसके बजाय एक बड़ी बाढ़ बनाई। बाढ़ ने उसका सारा लालच हमेशा के लिए बहा दिया।",
      },
    ],
    vocabulary: [
      { word: "paintbrush", meaning: "तूलिका / ब्रश (a tool for painting)" },
      { word: "appeared", meaning: "प्रकट हुई (showed up)" },
      { word: "barefoot", meaning: "नंगे पैर (without shoes)" },
      { word: "greedy", meaning: "लालची (wanting more than needed)" },
      { word: "landlord", meaning: "जमींदार (one who owns land)" },
      { word: "flood", meaning: "बाढ़ (water overflowing land)" },
    ],
    moralEnglish: "Use your gifts to help others, not to serve greed.",
    moralHindi: "अपनी प्रतिभा का उपयोग दूसरों की मदद के लिए करो, लालच के लिए नहीं।",
  },
  {
    id: "the-lost-puppy",
    title: "The Lost Puppy",
    titleHindi: "खोया हुआ पिल्ला",
    level: "Intermediate",
    topic: "Empathy & Kindness",
    topicHindi: "सहानुभूति और दयालुता",
    readingTime: "5 min",
    emoji: "🐶",
    paragraphs: [
      {
        english:
          "Rahul was walking home from school one rainy afternoon when he heard a soft whimpering sound coming from a narrow alley. He stopped and peered into the darkness.",
        hindi:
          "राहुल एक बरसाती दोपहर को स्कूल से घर जा रहा था जब उसने एक संकरी गली से धीमी रोने की आवाज सुनी। वह रुका और अंधेरे में झाँका।",
      },
      {
        english:
          "There, shivering beneath a cardboard box, was a tiny brown puppy. Its eyes were wide with fear, and it was soaking wet from the rain. Rahul's heart went out to the little creature.",
        hindi:
          "वहाँ, एक गत्ते के डिब्बे के नीचे काँपता हुआ, एक छोटा भूरा पिल्ला था। उसकी आँखें डर से बड़ी थीं, और वह बारिश से पूरी तरह भीगा हुआ था। राहुल का दिल उस छोटे प्राणी के लिए दुखी हो गया।",
      },
      {
        english:
          "Without hesitation, Rahul took off his school bag, removed his spare shirt, and gently wrapped the puppy in it. He carried the puppy home, talking to it softly all the way. 'Don't worry, little one. You are safe now,' he whispered.",
        hindi:
          "बिना हिचकिचाहट के, राहुल ने अपना स्कूल बैग उतारा, अपनी अतिरिक्त कमीज निकाली, और धीरे से पिल्ले को उसमें लपेट लिया। वह पिल्ले को घर ले गया, पूरे रास्ते उससे धीरे-धीरे बात करता रहा। 'चिंता मत करो, छोटे। तुम अब सुरक्षित हो,' उसने फुसफुसाया।",
      },
      {
        english:
          "Rahul's mother helped him dry and feed the puppy. They searched the neighbourhood and found the puppy's owner — an elderly woman who had been crying all afternoon. Her eyes lit up with joy and she hugged Rahul tightly. 'Thank you, my dear boy. You have a golden heart,' she said.",
        hindi:
          "राहुल की माँ ने उसे पिल्ले को सुखाने और खिलाने में मदद की। उन्होंने पड़ोस में खोजा और पिल्ले का मालिक मिला — एक बुजुर्ग महिला जो दोपहर भर रो रही थी। उसकी आँखें खुशी से चमक उठीं और उसने राहुल को कसकर गले लगाया। 'शुक्रिया, मेरे प्यारे बच्चे। तुम्हारा दिल सोने का है,' उसने कहा।",
      },
    ],
    vocabulary: [
      { word: "whimpering", meaning: "सिसकना (crying softly)" },
      { word: "alley", meaning: "गली (narrow passage between buildings)" },
      { word: "shivering", meaning: "काँपना (trembling from cold/fear)" },
      { word: "hesitation", meaning: "हिचकिचाहट (pause before acting)" },
      { word: "neighbourhood", meaning: "पड़ोस (the area nearby)" },
      { word: "elderly", meaning: "बुजुर्ग (old in age)" },
    ],
    moralEnglish:
      "A small act of kindness can make a huge difference in someone's life.",
    moralHindi: "दयालुता का एक छोटा सा काम किसी की जिंदगी में बड़ा बदलाव ला सकता है।",
  },
  {
    id: "the-students-promise",
    title: "The Student's Promise",
    titleHindi: "छात्र का वादा",
    level: "Intermediate",
    topic: "Education & Determination",
    topicHindi: "शिक्षा और दृढ़ संकल्प",
    readingTime: "5 min",
    emoji: "📚",
    paragraphs: [
      {
        english:
          "Meena lived in a small town where many people believed girls did not need education. Her father worked in a factory and her mother stitched clothes at home. Every evening, Meena secretly read her brother's textbooks by candlelight.",
        hindi:
          "मीना एक छोटे कस्बे में रहती थी जहाँ बहुत से लोग मानते थे कि लड़कियों को पढ़ाई की जरूरत नहीं। उसके पिता एक कारखाने में काम करते थे और उसकी माँ घर पर कपड़े सिलती थी। हर शाम, मीना चुपचाप मोमबत्ती की रोशनी में अपने भाई की किताबें पढ़ती थी।",
      },
      {
        english:
          "One day, a new school opened in the village. The headmistress visited each family and said, 'Every child deserves to learn.' Meena's mother fought hard to convince her father. Finally, he agreed to send Meena to school for one year.",
        hindi:
          "एक दिन, गाँव में एक नया स्कूल खुला। प्रधानाचार्या ने हर परिवार से मुलाकात की और कहा, 'हर बच्चे को सीखने का अधिकार है।' मीना की माँ ने उसके पिता को मनाने के लिए कड़ी मेहनत की। अंत में, उन्होंने मीना को एक साल के लिए स्कूल भेजने पर सहमति जताई।",
      },
      {
        english:
          "Meena worked harder than any other student. She walked four kilometres to school every day, rain or shine. She studied late into the night and helped her classmates understand difficult lessons. Within six months, she won the district's top scholarship.",
        hindi:
          "मीना किसी भी अन्य छात्र से ज्यादा मेहनत करती थी। वह बारिश हो या धूप, हर दिन चार किलोमीटर स्कूल जाती थी। वह देर रात तक पढ़ती थी और अपने सहपाठियों को कठिन पाठ समझने में मदद करती थी। छह महीने के भीतर, उसने जिले की शीर्ष छात्रवृत्ति जीती।",
      },
      {
        english:
          "Her father stood in the school hall, watching his daughter receive the award. Tears rolled down his cheeks. 'I was wrong,' he said quietly. 'No one should ever stop a child from learning.' Meena smiled and hugged him. She had not only won a scholarship — she had changed her father's heart.",
        hindi:
          "उसके पिता स्कूल हॉल में खड़े होकर अपनी बेटी को पुरस्कार लेते देख रहे थे। उनके गालों पर आँसू बह रहे थे। 'मैं गलत था,' उन्होंने धीरे से कहा। 'किसी को भी किसी बच्चे को सीखने से नहीं रोकना चाहिए।' मीना मुस्कुराई और उन्हें गले लगा लिया। उसने न केवल छात्रवृत्ति जीती थी — उसने अपने पिता का दिल बदल दिया था।",
      },
    ],
    vocabulary: [
      {
        word: "secretly",
        meaning: "चुपचाप / गुप्त रूप से (without others knowing)",
      },
      { word: "convinced", meaning: "मनाया (persuaded)" },
      { word: "scholarship", meaning: "छात्रवृत्ति (financial award for study)" },
      { word: "determination", meaning: "दृढ़ संकल्प (strong will to succeed)" },
      { word: "district", meaning: "जिला (an area of a region)" },
      { word: "deserve", meaning: "पात्र होना (to be worthy of something)" },
    ],
    moralEnglish:
      "Education opens every door. Never let anyone stop you from learning.",
    moralHindi: "शिक्षा हर दरवाजा खोलती है। किसी को भी तुम्हें सीखने से मत रोकने दो।",
  },
];
