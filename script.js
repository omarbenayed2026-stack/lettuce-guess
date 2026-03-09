/* =========================================
   Lettuce Guess — Final Master Update
   ========================================= */

const translations = {
  en: {
    brandPill: "fast • cheap • tasty",
    welcome: "Lettuce find something to prepare! 🥬",
    seoIntro: "Welcome to the ultimate random recipe generator. We help students and lazy cooks find delicious, budget-friendly meals. Choose your preferences, then hit Discover.",
    discover: "Discover",
    discoverHint: "Tip: tap Discover again for a new meal.",
    dailyPick: "Menu of the Day",
    preferences: "Preferences",
    customize: "Customize your craving",
    includeTitle: "Include",
    excludeTitle: "Blacklist (Exclude)",
    studentFriendly: "🎓 Student Friendly",
    cheap: "🪙 Cheap (< 6 DT)",
    expensive: "💸 Costs money",
    tunisianStyle: "🇹🇳 Tunisian",
    asianStyle: "🥢 Asian",
    withChicken: "🍗 Chicken",
    fish: "🐟 Fish",
    fried: "🍟 Fried",
    vegan: "🥗 Vegan",
    noFish: "🚫🐟 No Fish",
    noChicken: "🚫🍗 No Chicken",
    noSpicy: "🚫🌶️ No Spicy",
    reset: "Reset",
    apply: "Apply",
    notFoundTitle: "No matches found",
    notFoundText: "Sorry, not available yet. We will find something soon!",
    relax: "Relax filters",
    lazyMode: "🟢 Lazy Mode",
    lazyHint: "Fast, cheap, microwave-friendly.",
    chefMode: "🔴 Chef Mode",
    chefHint: "Use the stove, impress your friends.",
    ingredients: "Ingredients & Spices",
    steps: "Instructions",
    footerText: "Helping students eat better, one click at a time.",
    rights: "All rights reserved.",
    contact: "Contact/Feedback:",
    introTagline: "Pick a meal in seconds.",
    introText: "Welcome! Use Discover to get a random meal. Open Preferences to filter by budget, style, and ingredients. Tap again for a new suggestion (we also try to avoid repeats).",
    startDiscover: "Start discovering",
    funnyTexts: ["Checking your wallet...", "Finding something fast (and tasty)...", "Avoiding boring meals...", "Mixing up your menu...", "Doing the budget math..."]
  },
  fr: {
    brandPill: "rapide • pas cher • bon",
    welcome: "Trouvons quelque chose à préparer ! 🥬",
    seoIntro: "Le générateur de recettes pour étudiants. Choisissez vos préférences puis appuyez sur Découvrir.",
    discover: "Découvrir",
    discoverHint: "Astuce : appuyez encore sur Découvrir pour une nouvelle idée.",
    dailyPick: "Menu du jour",
    preferences: "Préférences",
    customize: "Personnalisez",
    includeTitle: "Inclure",
    excludeTitle: "Liste noire (Exclure)",
    studentFriendly: "🎓 Pour étudiant",
    cheap: "🪙 Pas cher (< 6 DT)",
    expensive: "💸 Ça coûte",
    tunisianStyle: "🇹🇳 Tunisien",
    asianStyle: "🥢 Asiatique",
    withChicken: "🍗 Poulet",
    fish: "🐟 Poisson",
    fried: "🍟 Frit",
    vegan: "🥗 Végan",
    noFish: "🚫🐟 Sans poisson",
    noChicken: "🚫🍗 Sans poulet",
    noSpicy: "🚫🌶️ Pas épicé",
    reset: "Réinitialiser",
    apply: "Appliquer",
    notFoundTitle: "Aucun résultat",
    notFoundText: "Désolé, pas encore disponible. On trouvera quelque chose bientôt !",
    relax: "Assouplir les filtres",
    lazyMode: "🟢 Mode Fainéant",
    lazyHint: "Rapide, pas cher, micro-ondes.",
    chefMode: "🔴 Mode Chef",
    chefHint: "Cuisine sérieusement, impressionne tes amis.",
    ingredients: "Ingrédients & Épices",
    steps: "Instructions",
    footerText: "Aider les étudiants à mieux manger, un clic à la fois.",
    rights: "Tous droits réservés.",
    introTagline: "Choisis un plat en quelques secondes.",
    introText: "Bienvenue ! Utilisez Découvrir pour une recette aléatoire. Ouvrez Préférences pour filtrer par budget, style et ingrédients. Appuyez à nouveau pour une autre suggestion.",
    startDiscover: "Commencer",
    funnyTexts: ["Vérification du portefeuille...", "On cherche quelque chose de rapide...", "On évite les plats ennuyeux...", "On mélange ton menu...", "Calcul du budget..."]
  },
  ar: {
    brandPill: "سريع • رخيص • لذيذ",
    welcome: "Lettuce Guess سيختار لك ماذا تطبخ! 🥬",
    seoIntro: "مولّد وصفات عشوائية للطلاب والطهاة الكسالى. اختر تفضيلاتك ثم اضغط «اكتشف».",
    discover: "اكتشف",
    discoverHint: "نصيحة: اضغط «اكتشف» مرة أخرى لاقتراح جديد.",
    dailyPick: "طبق اليوم",
    preferences: "التفضيلات",
    customize: "خصص رغباتك",
    includeTitle: "إضافة",
    excludeTitle: "القائمة السوداء (استبعاد)",
    studentFriendly: "🎓 مناسب للطلاب",
    cheap: "🪙 رخيص (أقل من 6 د.ت)",
    expensive: "💸 مكلف",
    tunisianStyle: "🇹🇳 تونسي",
    asianStyle: "🥢 آسيوي",
    withChicken: "🍗 دجاج",
    fish: "🐟 سمك",
    fried: "🍟 مقلي",
    vegan: "🥗 نباتي",
    noFish: "🚫🐟 بدون سمك",
    noChicken: "🚫🍗 بدون دجاج",
    noSpicy: "🚫🌶️ غير حار",
    reset: "إعادة ضبط",
    apply: "تطبيق",
    notFoundTitle: "لا توجد نتائج",
    notFoundText: "عذرًا، غير متوفر الآن. سنجد شيئًا قريبًا!",
    relax: "تخفيف الفلاتر",
    lazyMode: "🟢 وضع الكسل",
    lazyHint: "سريع، رخيص، ومناسب للميكروويف.",
    chefMode: "🔴 وضع الطاهي",
    chefHint: "استخدم الموقد وأبهر أصدقاءك.",
    ingredients: "المكونات والبهارات",
    steps: "طريقة التحضير",
    footerText: "نساعد الطلاب على تناول طعام أفضل بضغطة زر.",
    rights: "جميع الحقوق محفوظة.",
    introTagline: "اختر وجبة في ثوانٍ.",
    introText: "مرحبًا! استخدم «اكتشف» للحصول على وجبة عشوائية. افتح «التفضيلات» للتصفية حسب الميزانية والنوع والمكونات. اضغط مرة أخرى لاقتراح جديد.",
    startDiscover: "ابدأ",
    funnyTexts: ["جاري فحص محفظتك...", "نبحث عن شيء سريع ولذيذ...", "نتجنب الأكل الممل...", "ننوّع قائمة اليوم...", "جاري حساب الميزانية..."]
  }
};

let currentLang = "en";

/* ---------- Recipe Database ---------- */
const foodDatabase = [
  {
    id: "tun_1",
    tags: ["fried", "fish", "student", "tunisian", "cheap"],
    emoji: "🥟",
    difficultyCSS: "medium",
    translations: {
      en: { name: "Tunisian Brika", origin: "Tunisia", difficulty: "Medium", cost: "Est. 3.00 DT", description: "A perfectly crispy triangle pastry, stuffed with tuna, parsley, and a runny egg.", simple: { time: "10 mins", temp: "Medium-High (Stove)", ingredients: ["1 Malsouka sheet", "Canned Tuna", "1 Egg", "Chopped Parsley & Onion", "Pinch of Black Pepper & Salt"], steps: ["Mix tuna, parsley, onion, salt, and black pepper.", "Place the mixture on the Malsouka sheet and make a small hole in the middle.", "Crack the egg into the hole.", "Fold into a triangle quickly and fry in hot oil for 2-3 mins per side until golden."] }, hard: { time: "25 mins", temp: "Medium-High", ingredients: ["Malsouka", "Tuna", "Capers", "Boiled Potato", "1 Egg", "Black Pepper", "Tabil (Tunisian Spice)"], steps: ["Boil and mash 1 potato. Mix it with a pinch of Tabil, black pepper, tuna, and capers.", "Spread the filling on the sheet, crack the egg inside.", "Fold into a triangle and fry in hot oil until deeply crispy."] } },
      fr: { name: "Brik Tunisien", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 3.00 DT", description: "Un triangle de pâte croustillante, farci au thon, persil et un œuf coulant.", simple: { time: "10 mins", temp: "Feu Vif", ingredients: ["1 Feuille de Malsouka", "Thon", "1 Œuf", "Persil et oignon hachés", "Sel & Poivre"], steps: ["Mélanger thon, persil, oignon et épices.", "Placer sur la feuille, faire un creux.", "Casser l'œuf dedans.", "Plier en triangle et frire 2-3 mins par face."] }, hard: { time: "25 mins", temp: "Feu Vif", ingredients: ["Malsouka", "Thon", "Câpres", "Pomme de terre", "1 Œuf", "Poivre", "Tabel"], steps: ["Écraser la pomme de terre bouillie, mélanger avec Tabel, thon et câpres.", "Placer la farce, ajouter l'œuf.", "Frire dans l'huile bien chaude."] } },
      ar: { name: "بريك تونسي", origin: "تونس", difficulty: "متوسط", cost: "حوالي 3.00 د.ت", description: "مثلث عجين مقرمش محشو بالتونة، البقدونس، وبيضة سائلة.", simple: { time: "10 دقائق", temp: "نار متوسطة-عالية", ingredients: ["ورقة ملسوقة", "تونة", "بيضة", "بقدونس وبصل مقطع", "ملح وفلفل أسود"], steps: ["اخلط التونة، البقدونس، البصل، والبهارات.", "ضع الخليط على الملسوقة واصنع حفرة صغيرة.", "اكسر البيضة داخل الحفرة.", "اطوها على شكل مثلث واقليها في زيت ساخن حتى تصبح ذهبية."] }, hard: { time: "25 دقيقة", temp: "نار عالية", ingredients: ["ملسوقة", "تونة", "كَبَر", "بطاطا مسلوقة", "بيضة", "فلفل أسود", "تابل وكروية"], steps: ["اسلق البطاطا واهرسها، اخلطها مع التابل والتونة والكبر.", "ضع الحشوة والبيضة على الورقة.", "اقليها في زيت ساخن جداً حتى تقرمش."] } }
    }
  },
  {
    id: "tun_2",
    tags: ["boiled", "student", "spicy", "vegan", "tunisian", "cheap"],
    emoji: "🥣",
    difficultyCSS: "easy",
    translations: {
      en: { name: "Spicy Lablebi", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.50 DT", description: "The ultimate cheap, garlicky chickpea street-food soup poured over day-old bread.", simple: { time: "15 mins", temp: "Boiling", ingredients: ["1 Can Chickpeas", "1 tbsp Harissa", "Stale Baguette", "2 cloves Garlic (crushed)", "1 tsp Cumin", "Olive Oil"], steps: ["Boil chickpeas in their water with crushed garlic, cumin, and salt for 10 minutes.", "Tear the stale bread into small pieces in a bowl.", "Pour the boiling soup over the bread. Top with Harissa, olive oil, and extra cumin."] }, hard: { time: "2 hours", temp: "Low Simmer", ingredients: ["Dried Chickpeas", "Garlic", "Harissa", "Olive Oil", "Cumin", "Canned Tuna", "1 Soft-Boiled Egg"], steps: ["Soak chickpeas overnight. Boil them for 2 hours until very soft.", "Prepare a bowl with torn bread.", "Add the hot chickpeas and broth. Top heavily with olive oil, cumin, Harissa, tuna, and mix the soft-boiled egg in."] } },
      fr: { name: "Lablebi Épicé", origin: "Tunisie", difficulty: "Facile", cost: "Env. 3.50 DT", description: "Soupe de rue pas chère aux pois chiches et à l'ail, versée sur du pain de la veille.", simple: { time: "15 mins", temp: "Ébullition", ingredients: ["Pois chiches en boîte", "Harissa", "Pain rassis", "Ail", "Cumin", "Huile d'olive"], steps: ["Bouillir les pois chiches avec l'ail et le cumin 10 mins.", "Déchirer le pain dans un bol.", "Verser la soupe brûlante. Ajouter harissa et huile d'olive."] }, hard: { time: "2 heures", temp: "Frémir", ingredients: ["Pois chiches secs", "Ail", "Harissa", "Huile d'olive", "Cumin", "Thon", "Œuf mollet"], steps: ["Tremper les pois chiches la nuit. Bouillir 2h.", "Mettre le pain dans un bol.", "Ajouter pois chiches, bouillon, huile, cumin, harissa, thon et l'œuf."] } },
      ar: { name: "لبلابي حار", origin: "تونس", difficulty: "سهل", cost: "حوالي 3.50 د.ت", description: "حساء الشارع الشهير والرخيص بالحمص والثوم، يُسكب فوق الخبز البائت.", simple: { time: "15 دقيقة", temp: "غليان", ingredients: ["حمص معلب", "ملعقة هريسة", "خبز بائت", "ثوم مهروس", "كمون", "زيت زيتون"], steps: ["اغلي الحمص في مائه مع الثوم والكمون والملح لـ 10 دقائق.", "قطع الخبز البائت في وعاء.", "اسكب الحساء المغلي فوق الخبز وزينه بالهريسة وزيت الزيتون."] }, hard: { time: "ساعتان", temp: "نار هادئة", ingredients: ["حمص جاف", "ثوم", "هريسة", "زيت زيتون", "كمون", "تونة", "بيضة نصف مسلوقة"], steps: ["انقع الحمص طوال الليل واغله لساعتين حتى يلين جداً.", "حضر وعاء الخبز المقطع.", "أضف الحمص والمرق، وزينه بسخاء بزيت الزيتون والكمون والهريسة والتونة والبيضة."] } }
    }
  },
  {
    id: "tun_3",
    tags: ["boiled", "tunisian", "expensive"],
    emoji: "🥘",
    difficultyCSS: "hard",
    translations: {
      en: { name: "Traditional Mloukhiya", origin: "Tunisia", difficulty: "Hard", cost: "Est. 25.00 DT", description: "A rich, dark green stew simmered for hours, made with jute leaf powder and tender beef.", simple: { time: "3.5 hours", temp: "Low Heat", ingredients: ["Mloukhiya powder", "Olive Oil", "Beef chunks", "Minced Garlic", "Bay Leaves", "Tabil & Karwia"], steps: ["Mix the green powder with olive oil in a cold pot until it forms a paste.", "Turn on medium heat, gradually whisk in 1.5 liters of boiling water.", "Add garlic, bay leaves, Tabil, and beef.", "Cover and simmer on very low heat for 3 hours until the oil separates."] }, hard: { time: "5 hours", temp: "Lowest Heat", ingredients: ["Mloukhiya powder", "Premium Olive Oil", "Beef Shank", "Whole Head of Garlic", "Dried Mint", "Tabil & Karwia", "Bay Leaves"], steps: ["Marinate beef overnight with garlic, Tabil, Karwia, and salt.", "Fry the powder in olive oil for 3 minutes (do not burn).", "Whisk in boiling water.", "Simmer for 2 hours, add beef. Cook 3 more hours until oil separates."] } },
      fr: { name: "Mloukhiya Traditionnelle", origin: "Tunisie", difficulty: "Difficile", cost: "Env. 25.00 DT", description: "Ragoût vert foncé riche, mijoté pendant des heures avec de la poudre de corète et du bœuf.", simple: { time: "3.5 heures", temp: "Feu Doux", ingredients: ["Poudre de Mloukhiya", "Huile d'olive", "Bœuf", "Ail", "Laurier", "Tabel & Karwia"], steps: ["Mélanger la poudre et l'huile à froid.", "Chauffer et ajouter l'eau bouillante.", "Ajouter ail, épices et viande.", "Mijoter à feu très doux 3h jusqu'à ce que l'huile remonte."] }, hard: { time: "5 heures", temp: "Feu Très Doux", ingredients: ["Mloukhiya", "Huile d'olive", "Jarret de bœuf", "Ail", "Menthe séchée", "Tabel & Karwia", "Laurier"], steps: ["Mariner la viande la nuit avec les épices.", "Frire la poudre dans l'huile 3 mins.", "Ajouter l'eau bouillante doucement.", "Mijoter 2h, ajouter la viande. Cuire encore 3h."] } },
      ar: { name: "ملوخية دياري", origin: "تونس", difficulty: "صعب", cost: "حوالي 25.00 د.ت", description: "يخنة غنية وداكنة تُطبخ لساعات من مسحوق الملوخية ولحم البقر الطري.", simple: { time: "3.5 ساعات", temp: "نار هادئة", ingredients: ["مسحوق ملوخية", "زيت زيتون", "قطع لحم بقر", "ثوم", "رند (غار)", "تابل وكروية"], steps: ["اخلط المسحوق مع الزيت في قدر بارد.", "سخن القدر وأضف الماء المغلي تدريجياً.", "أضف الثوم والرند واللحم.", "اتركها تطبخ على نار هادئة جداً لـ 3 ساعات حتى يطفو الزيت."] }, hard: { time: "5 ساعات", temp: "نار هادئة جداً", ingredients: ["ملوخية", "زيت زيتون رفيع", "لحم بقر (هبرة)", "رأس ثوم كامل", "نعناع شايح", "تابل وكروية", "رند"], steps: ["تبل اللحم ليلة كاملة بالثوم والبهارات.", "اقلِ الملوخية في الزيت لـ 3 دقائق.", "أضف الماء المغلي مع التحريك المستمر.", "اطبخها لساعتين ثم أضف اللحم. اتركها 3 ساعات أخرى حتى يقر زيتها."] } }
    }
  },
  {
    id: "int_5",
    tags: ["student", "boiled", "cheap"],
    emoji: "🍝",
    difficultyCSS: "medium",
    translations: {
      en: { name: "Garlic Butter Pasta", origin: "Italy", difficulty: "Medium", cost: "Est. 4.00 DT", description: "A 5-star tasting meal made from standard, cheap pantry ingredients.", simple: { time: "15 mins", temp: "Boiling", ingredients: ["Spaghetti", "2 tbsp Butter", "1 tsp Garlic Powder", "Salt & Black Pepper", "Grated Cheese"], steps: ["Boil water, add salt, and cook pasta for 10 mins. Drain it.", "In the same hot pot, melt butter, add garlic powder and black pepper.", "Toss the pasta in the butter, top with cheese."] }, hard: { time: "20 mins", temp: "Medium Heat", ingredients: ["Spaghetti", "Real Butter", "4 cloves Fresh Garlic", "Fresh Parsley", "Chili Flakes", "Parmesan Cheese"], steps: ["Cook pasta, save half a cup of pasta water.", "In a pan, melt butter. Sauté fresh minced garlic and chili flakes for 2 mins.", "Add pasta and the saved water. Toss vigorously until a creamy sauce forms. Top with parsley."] } },
      fr: { name: "Pâtes Beurre et Ail", origin: "Italie", difficulty: "Moyen", cost: "Env. 4.00 DT", description: "Un repas 5 étoiles réalisé avec des ingrédients simples et pas chers.", simple: { time: "15 mins", temp: "Ébullition", ingredients: ["Spaghetti", "Beurre", "Ail en poudre", "Sel & Poivre", "Fromage râpé"], steps: ["Cuire les pâtes 10 mins et égoutter.", "Fondre le beurre dans la casserole avec l'ail en poudre.", "Mélanger les pâtes et ajouter le fromage."] }, hard: { time: "20 mins", temp: "Feu Moyen", ingredients: ["Spaghetti", "Beurre", "Ail frais", "Persil", "Piment en flocons", "Parmesan"], steps: ["Cuire les pâtes, garder un peu d'eau de cuisson.", "Fondre le beurre, sauter l'ail et le piment 2 mins.", "Ajouter les pâtes et l'eau. Mélanger fort pour créer une sauce crémeuse."] } },
      ar: { name: "مكرونة بالثوم والزبدة", origin: "إيطاليا", difficulty: "متوسط", cost: "حوالي 4.00 د.ت", description: "وجبة بمذاق 5 نجوم بمكونات رخيصة ومتوفرة في كل مطبخ.", simple: { time: "15 دقيقة", temp: "غليان", ingredients: ["سباغيتي", "زبدة", "بودرة ثوم", "ملح وفلفل أسود", "جبن مبشور"], steps: ["اسلق المكرونة لـ 10 دقائق وصفها.", "في نفس القدر، أذب الزبدة وأضف بودرة الثوم والفلفل.", "قلب المكرونة في الزبدة وزينها بالجبن."] }, hard: { time: "20 دقيقة", temp: "نار متوسطة", ingredients: ["سباغيتي", "زبدة حيوانية", "ثوم طازج", "بقدونس طازج", "رقائق فلفل حار", "جبن بارميزان"], steps: ["اسلق المكرونة واحتفظ بنصف كوب من ماء السلق.", "أذب الزبدة وشوّح الثوم الطازج والفلفل لـ دقيقتين.", "أضف المكرونة وماء السلق. قلب بقوة حتى تتكون صلصة كريمية."] } }
    }
  },
  {
    id: "int_10",
    tags: ["chicken", "fried", "expensive", "spicy"],
    emoji: "🍗",
    difficultyCSS: "hard",
    translations: {
      en: { name: "Spicy Fried Chicken", origin: "USA", difficulty: "Hard", cost: "Est. 18.00 DT", description: "Golden, ultra-crispy fried chicken with heavy spices.", simple: { time: "25 mins", temp: "High Heat", ingredients: ["Chicken Breasts", "Flour", "2 Eggs", "Paprika, Garlic Powder, Salt, Black Pepper", "Frying Oil"], steps: ["Cut chicken into chunks.", "Mix flour with a heavy amount of paprika, salt, and pepper.", "Dip chicken in beaten egg, then in spiced flour.", "Fry in 170°C hot oil for 7-10 minutes until golden brown."] }, hard: { time: "12 hours", temp: "160°C Oil", ingredients: ["Bone-in Chicken pieces", "Lben (Buttermilk)", "Flour", "Cornstarch", "Red Chili Powder, Garlic, Onion, White Pepper"], steps: ["Marinate chicken overnight in Lben and hot sauce.", "Mix 2 parts flour, 1 part cornstarch, and spices.", "Dredge chicken in flour, pressing hard.", "Fry in deep oil for 12-15 minutes. Rest on a wire rack."] } },
      fr: { name: "Poulet Frit Épicé", origin: "USA", difficulty: "Difficile", cost: "Env. 18.00 DT", description: "Poulet frit doré et ultra-croustillant avec beaucoup d'épices.", simple: { time: "25 mins", temp: "Feu Vif", ingredients: ["Blancs de poulet", "Farine", "2 Œufs", "Paprika, Ail, Sel, Poivre", "Huile de friture"], steps: ["Couper le poulet.", "Mélanger farine et épices.", "Tremper le poulet dans l'œuf puis la farine.", "Frire à 170°C pendant 7-10 mins."] }, hard: { time: "12 heures", temp: "Huile 160°C", ingredients: ["Poulet avec os", "Lben (Babeurre)", "Farine", "Maïzena", "Piment rouge, Ail, Oignon, Poivre blanc"], steps: ["Mariner le poulet la nuit dans le Lben.", "Mélanger farine, maïzena et épices.", "Enrober le poulet en pressant fort.", "Frire 12-15 mins. Laisser reposer sur une grille."] } },
      ar: { name: "دجاج مقلي حار", origin: "أمريكا", difficulty: "صعب", cost: "حوالي 18.00 د.ت", description: "دجاج مقلي ذهبي ومقرمش جداً ومليء بالبهارات.", simple: { time: "25 دقيقة", temp: "نار عالية", ingredients: ["صدور دجاج", "دقيق", "بيضتان", "بابريكا، بودرة ثوم، ملح، فلفل أسود", "زيت قلي"], steps: [\"قطع الدجاج إلى قطع.\", \"اخلط الدقيق مع البهارات.\", \"اغمس الدجاج في البيض ثم في الدقيق المتبل.\", \"اقله في زيت ساخن (170 درجة) لـ 7-10 دقائق.\"] }, hard: { time: "12 ساعة", temp: "زيت 160 درجة", ingredients: ["دجاج بالعظم", "لبن", "دقيق", "نشا", "فلفل أحمر حار، ثوم، بصل، فلفل أبيض"], steps: ["انقع الدجاج ليلة كاملة في اللبن والصلصة الحارة.", "اخلط الدقيق والنشا والبهارات.", "غلف الدجاج بالخليط واضغط بقوة.", "اقله في زيت غزير لـ 12-15 دقيقة. دعه يرتاح على شبكة معدنية."] } }
    }
  }
];

let currentFood = null;
const RECENT_LIMIT = 6;
let recentIds = loadJson("lettuceRecentIds", []);
let lastCuisineTag = loadStr("lettuceLastCuisine", "");
let hintShown = loadStr("lettuceHintShown", "0") === "1";

const els = {
  languageSelect: document.getElementById("languageSelect"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  helpBtn: document.getElementById("helpBtn"),
  
  heroActions: document.getElementById("heroActions"),
  stickyBar: document.getElementById("stickyBar"),
  
  discoverBtnTop: document.getElementById("discoverBtnTop"),
  dailyPickBtnTop: document.getElementById("dailyPickBtnTop"),
  preferencesBtnTop: document.getElementById("preferencesBtnTop"),
  
  funnyLoadingText: document.getElementById("funnyLoadingText"),
  hintText: document.getElementById("hintText"),
  
  discoverBtnSticky: document.getElementById("discoverBtnSticky"),
  dailyPickBtnSticky: document.getElementById("dailyPickBtnSticky"),
  preferencesBtnSticky: document.getElementById("preferencesBtnSticky"),
  
  preferencesPanel: document.getElementById("preferencesPanel"),
  closePreferencesBtn: document.getElementById("closePreferencesBtn"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  applyFiltersBtn: document.getElementById("applyFiltersBtn"),
  
  studentOnly: document.getElementById("studentOnly"),
  cheapOnly: document.getElementById("cheapOnly"),
  expensiveOnly: document.getElementById("expensiveOnly"),
  tunisianStyle: document.getElementById("tunisianStyle"),
  asianStyle: document.getElementById("asianStyle"),
  withChicken: document.getElementById("withChicken"),
  loveFish: document.getElementById("loveFish"),
  friedOnly: document.getElementById("friedOnly"),
  vegan: document.getElementById("vegan"),
  noFish: document.getElementById("noFish"),
  noChicken: document.getElementById("noChicken"),
  noSpicy: document.getElementById("noSpicy"),
  
  result: document.getElementById("result"),
  notFound: document.getElementById("notFound"),
  relaxFiltersBtn: document.getElementById("relaxFiltersBtn"),
  openPreferencesBtn2: document.getElementById("openPreferencesBtn2"),
  
  foodEmoji: document.getElementById("foodEmoji"),
  foodName: document.getElementById("foodName"),
  foodOrigin: document.getElementById("foodOrigin"),
  foodCost: document.getElementById("foodCost"),
  foodDifficulty: document.getElementById("foodDifficulty"),
  foodDesc: document.getElementById("foodDesc"),
  
  lazyModeBtn: document.getElementById("lazyModeBtn"),
  chefModeBtn: document.getElementById("chefModeBtn"),
  
  introModal: document.getElementById("introModal"),
  closeIntroBtn: document.getElementById("closeIntroBtn"),
  introDiscoverBtn: document.getElementById("introDiscoverBtn"),
  introPreferencesBtn: document.getElementById("introPreferencesBtn"),
  
  recipeModal: document.getElementById("recipeModal"),
  closeRecipeBtn: document.getElementById("closeRecipeBtn"),
  modalModeEmoji: document.getElementById("modalModeEmoji"),
  modalTitle: document.getElementById("modalTitle"),
  timeVal: document.getElementById("timeVal"),
  tempVal: document.getElementById("tempVal"),
  modalIngredients: document.getElementById("modalIngredients"),
  modalSteps: document.getElementById("modalSteps"),
  copyrightYear: document.getElementById("year")
};

boot();

function boot() {
  if (els.copyrightYear) els.copyrightYear.textContent = String(new Date().getFullYear());
  const savedLang = loadStr("lettuceLang", "en");
  currentLang = savedLang;
  if (els.languageSelect) els.languageSelect.value = savedLang;
  applyLanguage(savedLang);
  const savedTheme = loadStr("lettuceTheme", "light"); // Default to light mode for apple feel
  setTheme(savedTheme);
  const introDone = loadStr("lettuceIntroDone", "0") === "1";
  if (!introDone) openIntro();
  if (!hintShown) {
    els.hintText?.classList.remove("hidden");
    hintShown = true;
    saveStr("lettuceHintShown", "1");
    setTimeout(() => els.hintText?.classList.add("hidden"), 6000);
  }
  wireEvents();
}

function wireEvents() {
  // Intersection Observer for the Sticky Bar Logic
  if (els.heroActions && els.stickyBar) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          els.stickyBar.classList.add("visible");
        } else {
          els.stickyBar.classList.remove("visible");
        }
      });
    }, { threshold: 0.1 });
    observer.observe(els.heroActions);
  }

  els.languageSelect?.addEventListener("change", (e) => {
    const lang = e.target.value;
    currentLang = lang;
    saveStr("lettuceLang", lang);
    applyLanguage(lang);
    if (currentFood) renderFood(currentFood);
    if (els.recipeModal && !els.recipeModal.classList.contains("hidden")) {
      const mode = (els.modalModeEmoji?.textContent || "").includes("🟢") ? "simple" : "hard";
      openRecipe(mode);
    }
  });

  els.themeToggleBtn?.addEventListener("click", () => {
    const isLight = document.body.classList.contains("theme-light");
    setTheme(isLight ? "dark" : "light");
  });

  els.helpBtn?.addEventListener("click", () => openIntro());

  els.discoverBtnTop?.addEventListener("click", () => handleDiscover(false));
  els.discoverBtnSticky?.addEventListener("click", () => handleDiscover(false));
  els.introDiscoverBtn?.addEventListener("click", () => { closeIntro(true); handleDiscover(false); });
  
  els.dailyPickBtnTop?.addEventListener("click", () => handleDiscover(true));
  els.dailyPickBtnSticky?.addEventListener("click", () => handleDiscover(true));

  els.preferencesBtnTop?.addEventListener("click", togglePreferences);
  els.preferencesBtnSticky?.addEventListener("click", togglePreferences);
  els.openPreferencesBtn2?.addEventListener("click", togglePreferences);
  els.introPreferencesBtn?.addEventListener("click", () => { closeIntro(true); togglePreferences(); });

  els.closePreferencesBtn?.addEventListener("click", closePreferences);
  els.resetFiltersBtn?.addEventListener("click", resetFilters);
  els.applyFiltersBtn?.addEventListener("click", () => { closePreferences(); handleDiscover(false); });
  els.relaxFiltersBtn?.addEventListener("click", () => { resetFilters(); closePreferences(); handleDiscover(false); });

  els.lazyModeBtn?.addEventListener("click", () => openRecipe("simple"));
  els.chefModeBtn?.addEventListener("click", () => openRecipe("hard"));

  els.closeIntroBtn?.addEventListener("click", () => closeIntro(true));
  els.closeRecipeBtn?.addEventListener("click", closeRecipe);
  els.introModal?.addEventListener("click", (e) => { if (e.target === els.introModal) closeIntro(true); });
  els.recipeModal?.addEventListener("click", (e) => { if (e.target === els.recipeModal) closeRecipe(); });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closePreferences(); closeRecipe(); closeIntro(true); }
  });
}

function setTheme(mode) {
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(mode === "light" ? "theme-light" : "theme-dark");
  saveStr("lettuceTheme", mode);
  if (els.themeToggleBtn) {
    els.themeToggleBtn.textContent = mode === "light" ? "🌙" : "☀️";
    els.themeToggleBtn.title = mode === "light" ? "Toggle dark" : "Toggle light";
  }
}

function applyLanguage(lang) {
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    if (dict[key] != null) el.textContent = dict[key];
  });
}

let isTogglingPrefs = false;
function togglePreferences() {
  if (isTogglingPrefs) return;
  isTogglingPrefs = true;
  setTimeout(() => isTogglingPrefs = false, 300);

  const panel = els.preferencesPanel;
  if (!panel) return;
  if (panel.classList.contains("hidden")) {
    panel.classList.remove("hidden");
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    panel.classList.add("hidden");
  }
}

function closePreferences() { els.preferencesPanel?.classList.add("hidden"); }

function resetFilters() {
  const ids = ["studentOnly","cheapOnly","expensiveOnly","tunisianStyle","asianStyle","withChicken","loveFish","friedOnly","vegan","noFish","noChicken","noSpicy"];
  ids.forEach((id) => { const el = document.getElementById(id); if (el) el.checked = false; });
}

function openIntro() { els.introModal?.classList.remove("hidden"); }
function closeIntro(markDone) { els.introModal?.classList.add("hidden"); if (markDone) saveStr("lettuceIntroDone", "1"); }

function handleDiscover(isDailyPick) {
  hideNotFound();
  const ui = translations[currentLang] || translations.en;
  showLoadingLine(ui.funnyTexts);
  const filters = readFilters();
  const pool = filterDatabase(foodDatabase, filters);
  
  if (pool.length === 0) { hideLoadingLine(); showNotFound(); return; }
  const picked = isDailyPick ? deterministicDailyPick(pool) : smartPick(pool, filters);
  
  setTimeout(() => {
    hideLoadingLine();
    if (!picked) { showNotFound(); return; }
    
    currentFood = picked; 
    rememberPick(picked); 
    renderFood(picked);
    
    els.result?.scrollIntoView({ behavior: "smooth", block: "center" });
    
    // Trigger the cool POP animation!
    els.result?.classList.remove("pop-animate");
    void els.result?.offsetWidth; // Trigger reflow to restart animation
    els.result?.classList.add("pop-animate");
    
  }, 450);
}

function readFilters() {
  return {
    include: { studentOnly: !!els.studentOnly?.checked, cheapOnly: !!els.cheapOnly?.checked, expensiveOnly: !!els.expensiveOnly?.checked, tunisianStyle: !!els.tunisianStyle?.checked, asianStyle: !!els.asianStyle?.checked, withChicken: !!els.withChicken?.checked, loveFish: !!els.loveFish?.checked, friedOnly: !!els.friedOnly?.checked, vegan: !!els.vegan?.checked },
    exclude: { noFish: !!els.noFish?.checked, noChicken: !!els.noChicken?.checked, noSpicy: !!els.noSpicy?.checked }
  };
}

function filterDatabase(db, filters) {
  return db.filter((food) => {
    const tags = food.tags || [];
    if (filters.exclude.noFish && tags.includes("fish")) return false;
    if (filters.exclude.noChicken && tags.includes("chicken")) return false;
    if (filters.exclude.noSpicy && tags.includes("spicy")) return false;
    if (filters.include.studentOnly && !tags.includes("student")) return false;
    if (filters.include.cheapOnly && !tags.includes("cheap")) return false;
    if (filters.include.expensiveOnly && !tags.includes("expensive")) return false;
    if (filters.include.tunisianStyle && !tags.includes("tunisian")) return false;
    if (filters.include.asianStyle && !tags.includes("asian")) return false;
    if (filters.include.withChicken && !tags.includes("chicken")) return false;
    if (filters.include.loveFish && !tags.includes("fish")) return false;
    if (filters.include.friedOnly && !tags.includes("fried")) return false;
    if (filters.include.vegan && !tags.includes("vegan")) return false;
    return true;
  });
}

function deterministicDailyPick(pool) {
  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  return pool[Math.abs(hash) % pool.length];
}

function smartPick(pool, filters) {
  const lastId = currentFood?.id;
  let candidates = pool.filter((f) => f.id !== lastId && !recentIds.includes(f.id));
  if (candidates.length === 0) candidates = pool.filter((f) => f.id !== lastId);
  if (candidates.length === 0) candidates = pool.slice();
  const forcedCuisine = filters.include.tunisianStyle || filters.include.asianStyle;
  if (!forcedCuisine && lastCuisineTag) {
    const rotated = candidates.filter((f) => !(f.tags || []).includes(lastCuisineTag));
    if (rotated.length > 0) candidates = rotated;
  }
  const varietyTags = ["fried", "vegan", "chicken", "fish", "spicy"];
  const forced = new Set();
  if (filters.include.friedOnly) forced.add("fried");
  if (filters.include.vegan) forced.add("vegan");
  if (filters.include.withChicken) forced.add("chicken");
  if (filters.include.loveFish) forced.add("fish");
  if (currentFood) {
    const lastTags = new Set(currentFood.tags || []);
    for (const tag of varietyTags) {
      if (forced.has(tag)) continue;
      if (lastTags.has(tag)) {
        const rotated = candidates.filter((f) => !(f.tags || []).includes(tag));
        if (rotated.length > 0) { candidates = rotated; break; }
      }
    }
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function rememberPick(food) {
  if (!food?.id) return;
  recentIds = [food.id, ...recentIds.filter((x) => x !== food.id)].slice(0, RECENT_LIMIT);
  saveJson("lettuceRecentIds", recentIds);
  const tags = food.tags || [];
  const cuisineTag = tags.includes("tunisian") ? "tunisian" : tags.includes("asian") ? "asian" : "";
  if (cuisineTag) { lastCuisineTag = cuisineTag; saveStr("lettuceLastCuisine", cuisineTag); }
}

function renderFood(food) {
  if (!food) return;
  const t = food.translations?.[currentLang] || food.translations?.en;
  if (!t) return;
  els.result?.classList.remove("hidden");
  els.notFound?.classList.add("hidden");
  if (els.foodEmoji) els.foodEmoji.textContent = food.emoji || "🍲";
  if (els.foodName) els.foodName.textContent = t.name || "Meal";
  if (els.foodOrigin) els.foodOrigin.textContent = `🌍 ${t.origin || ""}`;
  if (els.foodCost) els.foodCost.textContent = t.cost || "";
  const diffText = (t.difficulty || "").toUpperCase();
  if (els.foodDifficulty) {
    els.foodDifficulty.textContent = diffText || "—";
    els.foodDifficulty.classList.remove("badge-green", "badge-gold", "badge-red", "badge-blue");
    const diff = (food.difficultyCSS || "").toLowerCase();
    if (diff === "easy") els.foodDifficulty.classList.add("badge-green");
    else if (diff === "medium") els.foodDifficulty.classList.add("badge-gold");
    else if (diff === "hard") els.foodDifficulty.classList.add("badge-red");
    else els.foodDifficulty.classList.add("badge-blue");
  }
  if (els.foodDesc) els.foodDesc.textContent = t.description || "";
}

function showNotFound() { els.result?.classList.add("hidden"); els.notFound?.classList.remove("hidden"); els.notFound?.scrollIntoView({ behavior: "smooth", block: "center" }); }
function hideNotFound() { els.notFound?.classList.add("hidden"); }

function openRecipe(mode) {
  if (!currentFood) return;
  const t = currentFood.translations?.[currentLang] || currentFood.translations?.en;
  if (!t) return;
  const r = t[mode];
  if (!r) return;
  const ui = translations[currentLang] || translations.en;
  if (els.modalModeEmoji) els.modalModeEmoji.textContent = mode === "simple" ? "🟢" : "🔴";
  if (els.modalTitle) els.modalTitle.textContent = mode === "simple" ? ui.lazyMode : ui.chefMode;
  if (els.timeVal) els.timeVal.textContent = r.time || "";
  if (els.tempVal) els.tempVal.textContent = r.temp || "";
  if (els.modalIngredients) {
    els.modalIngredients.innerHTML = "";
    (r.ingredients || []).forEach((ing) => { const li = document.createElement("li"); li.textContent = ing; els.modalIngredients.appendChild(li); });
  }
  if (els.modalSteps) {
    els.modalSteps.innerHTML = "";
    (r.steps || []).forEach((step) => { const li = document.createElement("li"); li.textContent = step; els.modalSteps.appendChild(li); });
  }
  els.recipeModal?.classList.remove("hidden");
}
function closeRecipe() { els.recipeModal?.classList.add("hidden"); }

let loadingTimer = null;
function showLoadingLine(funnyTexts) {
  const arr = Array.isArray(funnyTexts) ? funnyTexts : (translations.en.funnyTexts || []);
  const msg = arr[Math.floor(Math.random() * arr.length)];
  if (els.funnyLoadingText) { els.funnyLoadingText.textContent = msg; els.funnyLoadingText.classList.remove("hidden"); }
  clearTimeout(loadingTimer);
  loadingTimer = setTimeout(() => {}, 0);
}
function hideLoadingLine() { els.funnyLoadingText?.classList.add("hidden"); }

function loadStr(key, fallback = "") { try { const v = localStorage.getItem(key); return v == null ? fallback : v; } catch { return fallback; } }
function saveStr(key, value) { try { localStorage.setItem(key, value); } catch {} }
function loadJson(key, fallback) { try { const raw = localStorage.getItem(key); if (!raw) return fallback; return JSON.parse(raw); } catch { return fallback; } }
function saveJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
