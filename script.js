/* =========================================
   Lettuce Guess — Exact Measurements Update (35 Recipes)
   ========================================= */

const translations = {
  en: {
    brandPill: "fast • cheap • tasty",
    welcome: "What are we eating today?",
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
    healthy: "🥗 Healthy",
    tunisianStyle: "🇹🇳 Tunisian",
    asianStyle: "🥢 Asian",
    americanStyle: "🇺🇸 American",
    europeanStyle: "🇪🇺 European",
    middleEasternStyle: "🌍 Middle Eastern",
    withChicken: "🍗 Chicken",
    withBeef: "🥩 Beef",
    fish: "🐟 Fish",
    withCheese: "🧀 Cheesy",
    withPasta: "🍝 Pasta",
    fried: "🍟 Fried",
    vegan: "🌱 Vegan",
    withDessert: "🍰 Dessert",
    noFish: "🚫🐟 No Fish",
    noChicken: "🚫🍗 No Chicken",
    noBeef: "🚫🥩 No Beef",
    noSpicy: "🚫🌶️ No Spicy",
    noCheese: "🚫🧀 No Cheese",
    noSweets: "🚫🍰 No Sweets",
    reset: "Reset",
    apply: "Apply",
    notFoundTitle: "No matches found",
    notFoundText: "Sorry, not available yet. We will find something soon! Try relaxing your filters.",
    relax: "Relax filters",
    lazyMode: "Lazy Mode",
    lazyHint: "Fast, cheap, microwave-friendly.",
    chefMode: "Chef Mode",
    chefHint: "Use the stove, impress your friends.",
    ingredients: "Ingredients & Spices",
    steps: "Instructions",
    footerText: "Helping students eat better, one click at a time.",
    contactDev: "Contact Dev:",
    rights: "All rights reserved.",
    introTagline: "Pick a meal in seconds.",
    introText: "Welcome! Use Discover to get a random meal. Open Preferences to filter by budget, cuisine, and ingredients. Tap again for a new suggestion.",
    startDiscover: "Start discovering",
    funnyTexts: ["Checking your wallet...", "Finding something fast (and tasty)...", "Avoiding boring meals...", "Mixing up your menu...", "Doing the budget math..."]
  },
  fr: {
    brandPill: "rapide • pas cher • bon",
    welcome: "Que mangeons-nous aujourd'hui ?",
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
    healthy: "🥗 Sain",
    tunisianStyle: "🇹🇳 Tunisien",
    asianStyle: "🥢 Asiatique",
    americanStyle: "🇺🇸 Américain",
    europeanStyle: "🇪🇺 Européen",
    middleEasternStyle: "🌍 Moyen-Orient",
    withChicken: "🍗 Poulet",
    withBeef: "🥩 Bœuf",
    fish: "🐟 Poisson",
    withCheese: "🧀 Fromage",
    withPasta: "🍝 Pâtes",
    fried: "🍟 Frit",
    vegan: "🌱 Végan",
    withDessert: "🍰 Dessert",
    noFish: "🚫🐟 Sans poisson",
    noChicken: "🚫🍗 Sans poulet",
    noBeef: "🚫🥩 Sans bœuf",
    noSpicy: "🚫🌶️ Pas épicé",
    noCheese: "🚫🧀 Sans fromage",
    noSweets: "🚫🍰 Sans sucre",
    reset: "Réinitialiser",
    apply: "Appliquer",
    notFoundTitle: "Aucun résultat",
    notFoundText: "Désolé, pas encore disponible. Essayez d'assouplir vos filtres !",
    relax: "Assouplir les filtres",
    lazyMode: "Mode Fainéant",
    lazyHint: "Rapide, pas cher, micro-ondes.",
    chefMode: "Mode Chef",
    chefHint: "Cuisine sérieusement, impressionne tes amis.",
    ingredients: "Ingrédients & Épices",
    steps: "Instructions",
    footerText: "Aider les étudiants à mieux manger, un clic à la fois.",
    contactDev: "Contacter le Développeur :",
    rights: "Tous droits réservés.",
    introTagline: "Choisis un plat en quelques secondes.",
    introText: "Bienvenue ! Utilisez Découvrir pour une recette aléatoire. Ouvrez Préférences pour filtrer par budget et ingrédients.",
    startDiscover: "Commencer",
    funnyTexts: ["Vérification du portefeuille...", "On cherche quelque chose de rapide...", "On évite les plats ennuyeux...", "On mélange ton menu...", "Calcul du budget..."]
  },
  ar: {
    brandPill: "سريع • رخيص • لذيذ",
    welcome: "ماذا سنأكل اليوم؟",
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
    healthy: "🥗 صحي",
    tunisianStyle: "🇹🇳 تونسي",
    asianStyle: "🥢 آسيوي",
    americanStyle: "🇺🇸 أمريكي",
    europeanStyle: "🇪🇺 أوروبي",
    middleEasternStyle: "🌍 شرق أوسطي",
    withChicken: "🍗 دجا��",
    withBeef: "🥩 لحم بقري",
    fish: "🐟 سمك",
    withCheese: "🧀 مليء بالجبن",
    withPasta: "🍝 مكرونة",
    fried: "🍟 مقلي",
    vegan: "🌱 نباتي",
    withDessert: "🍰 حلى",
    noFish: "🚫🐟 بدون سمك",
    noChicken: "🚫🍗 بدون دجاج",
    noBeef: "🚫🥩 بدون لحم بقري",
    noSpicy: "🚫🌶️ غير حار",
    noCheese: "🚫🧀 بدون جبن",
    noSweets: "🚫🍰 بدون حلى",
    reset: "إعادة ضبط",
    apply: "تطبيق",
    notFoundTitle: "لا توجد نتائج",
    notFoundText: "عذرًا، غير متوفر الآن. جرب تخفيف الفلاتر!",
    relax: "تخفيف الفلاتر",
    lazyMode: "وضع الكسل",
    lazyHint: "سريع، رخيص، ومناسب للميكروويف.",
    chefMode: "وضع الطاهي",
    chefHint: "استخدم الموقد وأبهر أصدقاءك.",
    ingredients: "المكونات والبهارات",
    steps: "طريقة التحضير",
    footerText: "نساعد الطلاب على تناول طعام أفضل بضغطة زر.",
    contactDev: "تواصل مع المطور:",
    rights: "جميع الحقوق محفوظة.",
    introTagline: "اختر وجبة في ثوانٍ.",
    introText: "مرحبًا! استخدم «اكتشف» للحصول على وجبة عشوائية. افتح «التفضيلات» للتصفية. اضغط مرة أخرى لاقتراح جديد.",
    startDiscover: "ابدأ",
    funnyTexts: ["جاري فحص محفظتك...", "نبحث عن شيء سريع ولذيذ...", "نتجنب الأكل الممل...", "ننوّع قائمة اليوم...", "جاري حساب الميزانية..."]
  }
};

/* ---------- Complete Recipe Database (35 Recipes Total, with Exact Measurements) ---------- */
const foodDatabase = [
  {
    id: "tun_1", tags: ["fried", "fish", "student", "tunisian", "cheap"], emoji: "🥟", difficultyCSS: "medium",
    translations: {
      en: { name: "Tunisian Brika", origin: "Tunisia", difficulty: "Medium", cost: "Est. 3.00 DT", description: "A perfectly crispy triangle pastry, stuffed with tuna, parsley, and a runny egg.", simple: { time: "10 mins", temp: "Medium", ingredients: ["1 Brik pastry sheet", "50g Canned tuna", "1 Egg", "1 tbsp Chopped parsley", "Pinch of salt/pepper"], steps: ["Mix tuna and parsley", "Crack egg inside pastry", "Fold into a triangle", "Fry until golden"] }, hard: { time: "20 mins", temp: "Medium High", ingredients: ["1 Brik pastry sheet", "50g Tuna", "1 tsp Capers", "1/2 Boiled potato (mashed)", "1 Egg", "1 tbsp Parsley"], steps: ["Boil and mash potato", "Mix with tuna, parsley, and capers", "Fold pastry, crack egg inside", "Fry carefully until crispy"] } },
      fr: { name: "Brik Tunisien", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 3.00 DT", description: "Un triangle de pâte croustillante, farci au thon, persil et un œuf coulant.", simple: { time: "10 mins", temp: "Moyen", ingredients: ["1 Feuille de brik", "50g de Thon", "1 Oeuf", "1 c.à.s de Persil haché"], steps: ["Mélanger thon et persil", "Casser l'oeuf au centre", "Plier en triangle", "Frire jusqu'à dorure"] }, hard: { time: "20 mins", temp: "Moyen Fort", ingredients: ["1 Feuille de brik", "50g de Thon", "1 c.à.c de Câpres", "1/2 Pomme de terre (écrasée)", "1 Oeuf", "Persil"], steps: ["Écraser la pomme de terre", "Mélanger avec thon et câpres", "Plier, casser l'oeuf", "Frire délicatement"] } },
      ar: { name: "بريك تونسي", origin: "تونس", difficulty: "متوسط", cost: "حوالي 3.00 د.ت", description: "مثلث عجين مقرمش محشو بالتونة، البقدونس، وبيضة.", simple: { time: "10 دقائق", temp: "متوسط", ingredients: ["1 ورقة ملسوقة", "50غ تونة", "1 بيضة", "1 ملعقة كبيرة بقدونس مفروم"], steps: ["اخلط التونة والبقدونس", "ضع الخليط واكسر البيضة", "اطوها على شكل مثلث", "اقليها حتى تحمر"] }, hard: { time: "20 دقائق", temp: "عالي", ingredients: ["1 ورقة ملسوقة", "50غ تونة", "1 ملعقة صغيرة كبار", "نصف حبة بطاطا مسلوقة ومهروسة", "1 بيضة", "بقدونس"], steps: ["اسلق البطاطا واهرسها", "اخلطها مع التونة والكبار", "ضعها في الملسوقة مع البيضة", "اقليها بحذر"] } }
    }
  },
  {
    id: "tun_2", tags: ["boiled", "student", "spicy", "vegan", "tunisian", "cheap", "middleEastern"], emoji: "🥣", difficultyCSS: "easy",
    translations: {
      en: { name: "Spicy Lablebi", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.50 DT", description: "The ultimate cheap, garlicky chickpea street-food soup poured over day-old bread.", simple: { time: "15 mins", temp: "High", ingredients: ["1 Can (400g) chickpeas", "1/2 Stale baguette", "1 tbsp Harissa", "2 Cloves garlic", "1 tsp Cumin", "Salt"], steps: ["Heat chickpeas with minced garlic and cumin", "Break bread into small pieces in a bowl", "Pour hot soup over bread", "Top with harissa"] }, hard: { time: "12 hours", temp: "Low", ingredients: ["200g Dry chickpeas", "1/2 Baguette", "1 tbsp Harissa", "2 tbsp Olive oil", "50g Tuna", "1 Boiled egg", "Garlic & Cumin"], steps: ["Soak chickpeas overnight with baking soda", "Boil gently until extremely soft", "Mix broth with garlic and cumin", "Assemble bowl with bread, tuna, egg, and olive oil"] } },
      fr: { name: "Lablebi Épicé", origin: "Tunisie", difficulty: "Facile", cost: "Env. 3.50 DT", description: "Soupe de rue pas chère aux pois chiches et à l'ail, versée sur du pain de la veille.", simple: { time: "15 mins", temp: "Fort", ingredients: ["1 Boîte (400g) de pois chiches", "1/2 Baguette rassise", "1 c.à.s d'Harissa", "2 Gousses d'ail", "Cumin"], steps: ["Chauffer les pois chiches avec ail et cumin", "Couper le pain en morceaux dans un bol", "Verser la soupe chaude", "Ajouter l'harissa"] }, hard: { time: "12 heures", temp: "Doux", ingredients: ["200g Pois chiches secs", "1/2 Baguette", "1 c.à.s Harissa", "2 c.à.s Huile d'olive", "50g Thon", "1 Oeuf mollet"], steps: ["Tremper les pois chiches la veille", "Bouillir jusqu'à ce qu'ils soient très tendres", "Dresser le bol avec pain, thon, œuf et huile"] } },
      ar: { name: "لبلابي حار", origin: "تونس", difficulty: "سهل", cost: "حوالي 3.50 د.ت", description: "حساء الشارع الشهير والرخيص بالحمص والثوم.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["علبة حمص (400غ)", "نصف باقيت بايت", "ملعقة كبيرة هريسة", "فصان ثوم", "ملعقة صغيرة كمون"], steps: ["سخن الحمص مع الثوم المفروم والكمون", "فتت الخبز في وعاء", "اسكب الحساء الساخن على الخبز", "أضف الهريسة"] }, hard: { time: "12 ساعة", temp: "هادئ", ingredients: ["200غ حمص جاف", "نصف خبزة باقيت", "هريسة", "ملعقتان زيت زيتون", "50غ تونة", "بيضة مسلوقة أو بروشت", "ثوم وكمون"], steps: ["انقع الحمص ليلة كاملة مع بيكربونات", "اغله ببطء حتى يصبح طرياً جداً", "تبل المرق بالثوم والكمون", "قدمه فوق الخبز مع التونة والبيضة والزيت"] } }
    }
  },
  {
    id: "tun_3", tags: ["boiled", "tunisian", "expensive", "beef"], emoji: "🥘", difficultyCSS: "hard",
    translations: {
      en: { name: "Traditional Mloukhiya", origin: "Tunisia", difficulty: "Hard", cost: "Est. 25.00 DT", description: "A rich, dark green stew simmered for hours, made with jute leaf powder and beef.", simple: { time: "2 hours", temp: "Low", ingredients: ["5 tbsp Mloukhiya powder", "1/2 cup Olive oil", "3 Cloves garlic", "300g Beef chunks", "1 tbsp Tomato paste"], steps: ["Mix powder with cold oil", "Heat up, then slowly add boiling water", "Add meat, garlic, and paste", "Simmer for 2 hours"] }, hard: { time: "5 hours", temp: "Very Low", ingredients: ["100g Mloukhiya powder", "1 cup Extra virgin olive oil", "500g Beef (with some fat)", "3 Bay leaves", "1 head of Garlic (mashed)", "1 tbsp Tabil spice", "Pinch of dried mint"], steps: ["Fry powder gently in oil for 5 mins", "Slowly whisk in 2 liters of boiling water", "Marinate beef with garlic, tabil, and mint", "Add meat and bay leaves", "Simmer uncovered for 4-5 hours until the oil perfectly separates on top"] } },
      fr: { name: "Mloukhiya", origin: "Tunisie", difficulty: "Difficile", cost: "Env. 25.00 DT", description: "Ragoût vert foncé riche, mijoté pendant des heures avec de la viande.", simple: { time: "2 heures", temp: "Doux", ingredients: ["5 c.à.s Poudre de Mloukhiya", "1/2 tasse Huile", "300g Bœuf", "3 Gousses d'ail"], steps: ["Mélanger poudre et huile froide", "Chauffer et ajouter l'eau bouillante", "Ajouter viande et ail", "Mijoter 2h"] }, hard: { time: "5 heures", temp: "Très Doux", ingredients: ["100g Poudre", "1 tasse Huile d'olive", "500g Bœuf", "3 Feuilles de laurier", "1 Tête d'ail", "1 c.à.s Épices Tabil"], steps: ["Frire la poudre dans l'huile 5 mins", "Ajouter 2L d'eau bouillante lentement", "Ajouter la viande marinée à l'ail", "Mijoter 4-5h jusqu'à ce que l'huile remonte"] } },
      ar: { name: "ملوخية دياري", origin: "تونس", difficulty: "صعب", cost: "حوالي 25.00 د.ت", description: "يخنة غنية وداكنة تُطبخ لساعات من مسحوق الملوخية واللحم.", simple: { time: "ساعتان", temp: "هادئ", ingredients: ["5 ملاعق كبيرة ملوخية مرحية", "نصف كوب زيت", "300غ لحم بقري", "3 فصوص ثوم"], steps: ["اخلط الزيت البارد والملوخية", "سخنها ثم أضف الماء المغ��ي تدريجياً", "أضف اللحم والثوم", "اتركها تطبخ لساعتين"] }, hard: { time: "5 ساعات", temp: "هادئ جدا", ingredients: ["100غ ملوخية", "كوب زيت زيتون", "500غ لحم بقري", "3 أوراق رند", "رأس ثوم كامل مهروش", "ملعقة كبيرة تابل وكروية", "رشة نعناع شايح"], steps: ["اقلي الملوخية في الزيت لـ 5 دقائق", "أضف لترين ماء مغلي مع التحريك", "تبل اللحم بالثوم والتابل وأضفه", "اتركها تطبخ بدون غطاء 4-5 ساعات حتى يطفو الزيت"] } }
    }
  },
  {
    id: "int_5", tags: ["student", "boiled", "cheap", "pasta", "european", "cheesy"], emoji: "🍝", difficultyCSS: "medium",
    translations: {
      en: { name: "Garlic Butter Pasta", origin: "Italy", difficulty: "Medium", cost: "Est. 4.00 DT", description: "A 5-star tasting meal made from standard, cheap pantry ingredients.", simple: { time: "15 mins", temp: "Medium", ingredients: ["200g Pasta", "2 tbsp Butter", "3 Cloves garlic (minced)", "Salt & Black pepper"], steps: ["Boil pasta in salted water until soft", "Melt butter in a pan and fry garlic lightly", "Drain pasta and toss in the garlic butter"] }, hard: { time: "25 mins", temp: "Medium", ingredients: ["200g Spaghetti", "3 tbsp High-quality Butter", "4 Cloves fresh Garlic", "50g Parmesan cheese (grated)", "1 tbsp Fresh parsley", "1/2 cup Pasta water"], steps: ["Boil spaghetti al dente (save 1/2 cup pasta water)", "Brown minced garlic in butter until fragrant", "Add pasta water to pan and emulsify into a creamy sauce", "Toss in pasta, remove from heat, vigorously stir in parmesan and parsley"] } },
      fr: { name: "Pâtes Beurre et Ail", origin: "Italie", difficulty: "Moyen", cost: "Env. 4.00 DT", description: "Un repas 5 étoiles réalisé avec des ingrédients simples et pas chers.", simple: { time: "15 mins", temp: "Moyen", ingredients: ["200g de Pâtes", "2 c.à.s de Beurre", "3 Gousses d'ail", "Sel/Poivre"], steps: ["Cuire les pâtes dans l'eau salée", "Fondre le beurre et dorer l'ail", "Mélanger les pâtes au beurre"] }, hard: { time: "25 mins", temp: "Moyen", ingredients: ["200g Spaghetti", "3 c.à.s Beurre", "4 Gousses d'ail frais", "50g Parmesan râpé", "1 c.à.s Persil", "Eau de cuisson"], steps: ["Cuire al dente et garder 1/2 tasse d'eau", "Émulsionner beurre, ail et eau de cuisson", "Hors du feu, mélanger vigoureusement avec parmesan et persil"] } },
      ar: { name: "مكرونة بالثوم والزبدة", origin: "إيطاليا", difficulty: "متوسط", cost: "حوالي 4.00 د.ت", description: "وجبة بمذاق 5 نجوم بمكونات بسيطة ورخيصة.", simple: { time: "15 دقيقة", temp: "متوسط", ingredients: ["200غ مكرونة", "ملعقتان زبدة", "3 فصوص ثوم مفروم", "ملح وفلفل أسود"], steps: ["اسلق المكرونة في ماء مالح", "ذوب الزبدة وحمر الثوم قليلاً", "صف المكرونة واخلطها مع زبدة الثوم"] }, hard: { time: "25 دقيقة", temp: "متوسط", ingredients: ["200غ سباغيتي", "3 ملاعق زبدة جيدة", "4 فصوص ثوم طازج", "50غ جبن بارميزان مبشور", "ملعقة بقدونس طازج", "نصف كوب من ماء سلق المكرونة"], steps: ["اسلق المكرونة (ألدينتي) واحتفظ ببعض ماء السلق", "حمر الثوم في الزبدة", "أضف ماء السلق للمقلاة لصنع صلصة كريمية", "أضف المكرونة، ارفعها عن النار، وقلب بسرعة مع البارميزان وال��قدونس"] } }
    }
  },
  {
    id: "int_10", tags: ["chicken", "fried", "expensive", "spicy", "american"], emoji: "🍗", difficultyCSS: "hard",
    translations: {
      en: { name: "Spicy Fried Chicken", origin: "USA", difficulty: "Hard", cost: "Est. 18.00 DT", description: "Golden, ultra-crispy fried chicken with heavy spices.", simple: { time: "30 mins", temp: "High", ingredients: ["500g Chicken cuts", "1 cup Flour", "3 tbsp Hot sauce", "1 tsp Paprika", "Cooking oil"], steps: ["Coat chicken thoroughly in hot sauce", "Dredge heavily in flour and paprika", "Deep fry in hot oil for 12-15 mins until crispy and cooked through"] }, hard: { time: "24 hours", temp: "High", ingredients: ["1 Whole Chicken (cut into 8)", "2 cups Buttermilk", "2 tbsp Cayenne pepper", "2 cups Flour", "1/2 cup Cornstarch", "1 tsp Garlic powder", "Frying Oil"], steps: ["Marinate chicken in buttermilk and spices overnight in fridge", "Mix flour, cornstarch, and dry spices", "Double coat chicken (flour, dip in buttermilk again, flour)", "Deep fry at exactly 170°C for 15 mins"] } },
      fr: { name: "Poulet Frit Épicé", origin: "USA", difficulty: "Difficile", cost: "Env. 18.00 DT", description: "Poulet frit doré et ultra-croustillant avec beaucoup d'épices.", simple: { time: "30 mins", temp: "Fort", ingredients: ["500g Poulet", "1 tasse Farine", "3 c.à.s Sauce piquante", "1 c.à.c Paprika", "Huile"], steps: ["Enrober le poulet de sauce piquante", "Paner dans la farine", "Frire dans l'huile chaude 15 mins"] }, hard: { time: "24 heures", temp: "Fort", ingredients: ["1 Poulet entier coupé", "2 tasses Lait ribot", "2 c.à.s Piment de Cayenne", "2 tasses Farine", "1/2 tasse Maïzena", "Huile de friture"], steps: ["Mariner 24h dans le lait ribot et épices", "Mélanger farine et maïzena", "Double panure", "Frire à 170°C pendant 15 mins"] } },
      ar: { name: "دجاج مقلي حار", origin: "أمريكا", difficulty: "صعب", cost: "حوالي 18.00 د.ت", description: "دجاج مقلي ذهبي ومقرمش جداً ومليء بالبهارات.", simple: { time: "30 دقيقة", temp: "عالي", ingredients: ["500غ قطع دجاج", "كوب دقيق", "3 ملاعق صلصة حارة", "ملعقة صغيرة بابريكا", "زيت للقلي"], steps: ["غلف الدجاج بالصلصة الحارة", "اغمسه جيداً في الدقيق والبابريكا", "اقليه في زيت غزير وحار 15 دقيقة"] }, hard: { time: "24 ساعة", temp: "عالي", ingredients: ["دجاجة كاملة مقطعة 8 قطع", "كوبان حليب رائب (Buttermilk)", "ملعقتان فلفل حار (كايين)", "كوبان دقيق", "نصف كوب نشا", "ثوم بودرة", "زيت غزير"], steps: ["انقع الدجاج في الحليب الرائب والبهارات ليلة كاملة", "اخلط الدقيق والنشا والبهارات الجافة", "غلف الدجاج مرتين (دقيق ثم حليب ثم دقيق)", "اقليه في درجة حرارة 170 مئوية لـ 15 دقيقة"] } }
    }
  },
  {
    id: "tun_4", tags: ["student", "cheap", "spicy", "tunisian", "healthy"], emoji: "🍳", difficultyCSS: "easy",
    translations: {
      en: { name: "Shakshouka", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.50 DT", description: "A classic North African dish of eggs poached in a saucy, spicy tomato and pepper base.", simple: { time: "15 mins", temp: "Medium", ingredients: ["2 tbsp Tomato paste", "3 Eggs", "1 tsp Harissa", "1 Onion (chopped)", "3 tbsp Olive oil"], steps: ["Sauté onions in olive oil", "Add tomato paste, harissa, and 1/2 cup water", "Simmer for 5 mins", "Crack eggs on top and cover until cooked"] }, hard: { time: "30 mins", temp: "Medium", ingredients: ["4 Fresh ripe tomatoes", "2 Green bell peppers", "3 Cloves garlic", "4 Eggs", "1 tbsp Fresh Coriander", "1/4 cup Olive oil", "1 tsp Tabil"], steps: ["Roast and peel the green peppers", "Dice tomatoes and simmer with garlic and olive oil until it forms a rich sauce", "Add chopped roasted peppers and spices", "Gently poach eggs in the sauce", "Garnish with fresh coriander"] } },
      fr: { name: "Chakchouka", origin: "Tunisie", difficulty: "Facile", cost: "Env. 3.50 DT", description: "Des œufs pochés dans une sauce épicée aux tomates et aux poivrons.", simple: { time: "15 mins", temp: "Moyen", ingredients: ["2 c.à.s Concentré de tomate", "3 Oeufs", "1 c.à.c Harissa", "1 Oignon", "3 c.à.s Huile d'olive"], steps: ["Faire revenir l'oignon", "Ajouter tomate, harissa et un peu d'eau", "Casser les œufs dessus et couvrir"] }, hard: { time: "30 mins", temp: "Moyen", ingredients: ["4 Tomates fraîches", "2 Poivrons verts", "3 Gousses d'ail", "4 Oeufs", "Coriandre fraîche", "Épices Tabil"], steps: ["Rôtir et peler les poivrons", "Réduire les tomates en sauce avec l'ail", "Ajouter poivrons et épices", "Pocher les œufs", "Garnir de coriandre"] } },
      ar: { name: "شكشوكة", origin: "تونس", difficulty: "سهل", cost: "حوالي 3.50 د.ت", description: "بيض مطبوخ في صلصة طماطم وفلفل حارة ولذيذة.", simple: { time: "15 دقيقة", temp: "متوسط", ingredients: ["ملعقتان طماطم معجونة", "3 بيضات", "ملعقة صغيرة هريسة", "بصلة مفرومة", "3 ملاعق زيت زيتون"], steps: ["قلي البصل في الزيت", "أضف الطماطم، الهريسة ونصف كوب ماء", "اتركها تغلي ثم أضف البيض وغطِ المقلاة"] }, hard: { time: "30 دقيقة", temp: "متوسط", ingredients: ["4 حبات طماطم طازجة ناضجة", "قرنان فلفل أخضر", "3 فصوص ثوم", "4 بيضات", "كزبرة طازجة", "ملعقة صغيرة تابل وكروية"], steps: ["اشوِ الفلفل وقشره وقطعه", "اطبخ الطماطم مع الثوم والزيت ببطء لتصبح صلصة غنية", "أضف الفلفل المشوي والبهارات", "اكسر البيض بلطف لينسلق في الصلصة", "زين بالكزبرة"] } }
    }
  },
  {
    id: "tun_5", tags: ["student", "cheap", "fish", "tunisian"], emoji: "🥖", difficultyCSS: "easy",
    translations: {
      en: { name: "Tunisian Casse-croûte", origin: "Tunisia", difficulty: "Easy", cost: "Est. 2.50 DT", description: "The iconic Tunisian sandwich loaded with tuna, harissa, and olives.", simple: { time: "5 mins", temp: "None", ingredients: ["1 Half Baguette", "1 can (80g) Tuna", "1 tbsp Harissa mixed with water", "10 Green olives"], steps: ["Slice baguette open", "Spread diluted harissa generously inside", "Stuff with tuna and pitted olives"] }, hard: { time: "15 mins", temp: "Medium", ingredients: ["1 Fresh crusty Baguette", "100g High-quality Tuna in olive oil", "1 tbsp Homemade Harissa", "1 Boiled egg (sliced)", "2 tbsp Slata Mechouia (Grilled salad)", "Capers & Olives"], steps: ["Boil the egg for exactly 8 minutes", "Slice baguette and coat with harissa and olive oil", "Spread a layer of Slata Mechouia", "Arrange tuna, egg slices, capers, and olives beautifully"] } },
      fr: { name: "Casse-croûte Tunisien", origin: "Tunisie", difficulty: "Facile", cost: "Env. 2.50 DT", description: "Le célèbre sandwich tunisien au thon, harissa et olives.", simple: { time: "5 mins", temp: "Aucune", ingredients: ["1/2 Baguette", "1 boîte (80g) de Thon", "1 c.à.s Harissa diluée", "10 Olives vertes"], steps: ["Ouvrir le pain", "Tartiner d'harissa", "Ajouter le thon et les olives"] }, hard: { time: "15 mins", temp: "Moyen", ingredients: ["1 Baguette fraîche", "100g Thon de qualité", "1 c.à.s Harissa maison", "1 Oeuf dur", "2 c.à.s Slata Mechouia", "Câpres & Olives"], steps: ["Cuire l'œuf 8 mins", "Tartiner d'harissa et huile d'olive", "Ajouter la salade grillée", "Dresser thon, œuf, câpres et olives"] } },
      ar: { name: "كاسكروت تونسي", origin: "تونس", difficulty: "سهل", cost: "حوالي 2.50 د.ت", description: "السندويش التونسي الشهير بالتونة والهريسة والزيتون.", simple: { time: "5 دقائق", temp: "لا يوجد", ingredients: ["نصف باقيت", "علبة تونة (80غ)", "ملعقة هريسة محلولة في قليل من الماء", "10 حبات زيتون أخضر"], steps: ["افتح الخبز", "ادهن الهريسة بسخاء من الداخل", "أضف التونة والزيتون بدون نواة"] }, hard: { time: "15 دقيقة", temp: "متوسط", ingredients: ["باقيت طازج ومقرمش", "100غ تونة ممتازة بزيت الزيتون", "هريسة دياري", "بيضة مسلوقة", "ملعقتان سلاطة مشوية", "كبار وزيتون"], steps: ["اسلق البيضة 8 دقائق فقط", "ادهن الخبز بالهريسة وزيت الزيتون", "ضع طبقة من السلاطة المشوية", "رتب التونة، شرائح البيض، الكبار والزيتون بعناية"] } }
    }
  },
  {
    id: "tun_6", tags: ["student", "cheap", "fish", "fried", "tunisian"], emoji: "🥪", difficultyCSS: "medium",
    translations: {
      en: { name: "Fricassé", origin: "Tunisia", difficulty: "Medium", cost: "Est. 3.00 DT", description: "Fried savory donuts stuffed with tuna, boiled potatoes, eggs, and olives.", simple: { time: "30 mins", temp: "High", ingredients: ["1 pack Store-bought pizza/bread dough", "1 can Tuna", "1 Boiled Potato (diced)", "2 tbsp Harissa"], steps: ["Form dough into small ovals and fry in hot oil until golden", "Boil and dice the potato", "Slice open the fried breads and stuff with harissa, potato, and tuna"] }, hard: { time: "2 hours", temp: "High", ingredients: ["500g Flour", "1 packet Dry Yeast", "1 tsp Salt & Sugar", "200g Tuna", "Black Olives", "2 Boiled eggs", "Capers", "Homemade Harissa"], steps: ["Knead flour, yeast, salt, sugar, and warm water", "Let dough rise for 1 hour, then form ovals and let rise again", "Deep fry until golden brown", "Prepare all fresh fillings", "Slice open and stuff generously in order: harissa, potato, egg, tuna, capers, olive"] } },
      fr: { name: "Fricassé", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 3.00 DT", description: "Beignets salés frits et farcis au thon, pommes de terre, œufs et olives.", simple: { time: "30 mins", temp: "Fort", ingredients: ["1 Pâte à pain/pizza toute prête", "1 boîte de Thon", "1 Pomme de terre (dés)", "2 c.à.s Harissa"], steps: ["Frire des petits ovales de pâte", "Bouillir la pomme de terre", "Ouvrir et farcir d'harissa, patate et thon"] }, hard: { time: "2 heures", temp: "Fort", ingredients: ["500g Farine", "1 sachet Levure", "200g Thon", "Oeufs durs", "Olives & Câpres", "Harissa maison"], steps: ["Pétrir la pâte et laisser lever 1h", "Former les pains, laisser lever encore", "Frire jusqu'à dorure", "Garnir généreusement dans l'ordre"] } },
      ar: { name: "فريكاسي", origin: "تونس", difficulty: "متوسط", cost: "حوالي 3.00 د.ت", description: "خبز مقلي محشو بالتونة، البطاطا المسلوقة، البيض والزيتون.", simple: { time: "30 دقيقة", temp: "عالي", ingredients: ["عجين خبز أو بيتزا جاهز", "علبة تونة", "حبة بطاطا مسلوقة ومقطعة", "ملعقتان هريسة"], steps: ["شكل العجين كرات بيضاوية واقليها حتى تحمر", "اسلق البطاطا وقطعها", "افتح الخبز المقلي واحشه بالهريسة، البطاطا والتونة"] }, hard: { time: "ساعتان", temp: "عالي", ingredients: ["500غ دقيق", "ظرف خميرة خبز", "ملعقة صغيرة ملح وسكر", "200غ تونة", "زيتون أسود وكبار", "بيض مسلوق", "هريسة دياري"], steps: ["اعجن الدقيق مع الخميرة والماء الدافئ واتركه يتخمر ساعة", "شكل حبات الفريكاسي واتركها ترتاح مجدداً", "اقليها في زيت غزير", "افتحها واحشها بالترتيب: هريسة، بطاطا، بيض، تونة، كبار وزيتونة"] } }
    }
  },
  {
    id: "tun_7", tags: ["fried", "spicy", "tunisian", "cheap", "healthy"], emoji: "🥘", difficultyCSS: "medium",
    translations: {
      en: { name: "Kafteji", origin: "Tunisia", difficulty: "Medium", cost: "Est. 4.50 DT", description: "A delicious mess of fried veggies and eggs, chopped together with tomato sauce.", simple: { time: "20 mins", temp: "High", ingredients: ["2 large Potatoes (diced)", "2 Green peppers", "2 Eggs", "2 tbsp Tomato paste", "Harissa"], steps: ["Fry diced potatoes and peppers in oil", "Fry eggs sunny-side up", "Mix everything in a bowl", "Add tomato paste diluted in hot water and mash together"] }, hard: { time: "45 mins", temp: "High", ingredients: ["300g Red Pumpkin", "2 Potatoes", "3 Hot green peppers", "3 Fresh tomatoes", "3 Eggs", "1/2 cup Olive oil", "Tabil and Caraway"], steps: ["Deep fry thick slices of pumpkin, potato, and peppers separately", "Fry eggs and tomatoes", "Place all fried ingredients on a large cutting board", "Chop everything vigorously together using two large knives", "Season with tabil, salt, and olive oil"] } },
      fr: { name: "Kafteji", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 4.50 DT", description: "Un délicieux mélange de légumes frits et d'œufs, hachés avec une sauce tomate.", simple: { time: "20 mins", temp: "Fort", ingredients: ["2 Pommes de terre", "2 Poivrons", "2 Oeufs", "2 c.à.s Concentré de tomate"], steps: ["Frire les légumes en dés", "Frire les œufs", "Mélanger le tout avec la tomate diluée"] }, hard: { time: "45 mins", temp: "Fort", ingredients: ["300g Citrouille rouge", "2 Pommes de terre", "3 Poivrons piquants", "3 Tomates fraîches", "3 Oeufs", "Épices Tabil"], steps: ["Frire chaque légume séparément", "Frire œufs et tomates", "Hacher vigoureusement le tout ensemble avec deux couteaux", "Assaisonner d'huile d'olive et d'épices"] } },
      ar: { name: "كفتاجي", origin: "تونس", difficulty: "متوسط", cost: "حوالي 4.50 د.ت", description: "مزيج لذيذ من الخضار المقلية والبيض، مفرومة مع صلصة الطماطم.", simple: { time: "20 دقيقة", temp: "عالي", ingredients: ["حبتان بطاطا", "قرنان فلفل", "بيضتان", "ملعقتان طماطم معجونة"], steps: ["اقلي البطاطا والفلفل", "اقلي البيض", "اخلط الكل في وعاء", "أضف الطماطم المحلولة في الماء واهرس المزيج"] }, hard: { time: "45 دقيقة", temp: "عالي", ingredients: ["300غ قرع أحمر", "حبتان بطاطا", "3 قرون فلفل حار", "3 حبات طماطم طازجة", "3 بيضات", "تابل وكروية وزيت زيتون"], steps: ["اقلي شرائح القرع، البطاطا والفلفل كل على حدة", "اقلي الطماطم والبيض", "ضع كل المكونات المقلية على لوح التقطيع", "افرم الكل بقوة باستخدام سكينين كبيرين", "تبل بالتابل وزيت الزيتون"] } }
    }
  },
  {
    id: "int_6", tags: ["student", "cheap", "asian", "spicy", "pasta"], emoji: "🍜", difficultyCSS: "easy",
    translations: {
      en: { name: "Spicy Instant Ramen Upgrade", origin: "Asia", difficulty: "Easy", cost: "Est. 2.00 DT", description: "Turn cheap instant noodles into a gourmet, spicy, satisfying meal.", simple: { time: "5 mins", temp: "High", ingredients: ["1 pack Instant noodles", "1 Egg", "1 tbsp Sriracha or Hot sauce", "1 slice American cheese"], steps: ["Boil 2 cups of water and cook noodles", "Add flavor packet and hot sauce", "Crack an egg directly into the boiling broth", "Top with cheese slice to melt"] }, hard: { time: "15 mins", temp: "High", ingredients: ["1 pack High-quality Ramen", "1 clove Garlic (minced)", "1 tsp Sesame oil", "1 tbsp Soy sauce", "1 Soft-boiled egg (6 mins)", "Chopped Green onions", "Toasted sesame seeds"], steps: ["Sauté minced garlic in sesame oil for 30 seconds", "Add water, bring to boil, and cook noodles", "Mix flavor packet with soy sauce in the serving bowl", "Pour hot noodles and broth into bowl", "Slice soft-boiled egg in half and garnish with green onions and seeds"] } },
      fr: { name: "Ramen Épicé Amélioré", origin: "Asie", difficulty: "Facile", cost: "Env. 2.00 DT", description: "Transformez des nouilles instantanées en un repas gourmet et épicé.", simple: { time: "5 mins", temp: "Fort", ingredients: ["1 sachet de Nouilles", "1 Oeuf", "1 c.à.s Sauce piquante", "1 Tranche de fromage"], steps: ["Bouillir l'eau et cuire les nouilles", "Ajouter les épices et sauce", "Casser l'œuf dans le bouillon", "Fondre le fromage dessus"] }, hard: { time: "15 mins", temp: "Fort", ingredients: ["1 sachet de Ramen", "1 Gousse d'ail", "1 c.à.c Huile de sésame", "1 c.à.s Sauce soja", "1 Oeuf mollet (6 mins)", "Cébette"], steps: ["Sauter l'ail dans l'huile de sésame", "Bouillir l'eau et cuire les nouilles", "Mélanger sauce soja et épices dans le bol", "Verser le bouillon et dresser avec œuf et cébette"] } },
      ar: { name: "إندومي حار مطور", origin: "آسيا", difficulty: "سهل", cost: "حوالي 2.00 د.ت", description: "حول النودلز الرخيصة إلى وجبة لذيذة وحارة ومشبعة.", simple: { time: "5 دقائق", temp: "عالي", ingredients: ["كيس نودلز (إندومي)", "بيضة", "ملعقة صلصة حارة أو سيراتشا", "شريحة جبن"], steps: ["اغلِ كوبين من الماء واطبخ النودلز", "أضف البهارات والصلصة الحارة", "اكسر البيضة مباشرة في المرق المغلي", "ضع شريحة الجبن لتذوب على الوجه"] }, hard: { time: "15 دقيقة", temp: "عالي", ingredients: ["كيس رامين جيد", "فص ثوم مفروم", "ملعقة صغيرة زيت سمسم", "ملعقة صويا صوص", "بيضة نصف مسلوقة (6 دقائق)", "بصل أخضر وسمسم محمص"], steps: ["حمر الثوم في زيت السمسم لـ 30 ثانية", "أضف الماء واطبخ النودلز", "اخلط البهارات مع الصويا في وعاء التقديم", "اسكب النودلز والمرق فوقها", "زين بنصف البيضة المسلوقة والبصل الأخضر والسمسم"] } }
    }
  },
  {
    id: "int_7", tags: ["asian", "chicken", "fried", "student"], emoji: "🍚", difficultyCSS: "medium",
    translations: {
      en: { name: "Chicken Fried Rice", origin: "China", difficulty: "Medium", cost: "Est. 6.00 DT", description: "A quick, savory stir-fry using leftover rice, veggies, and chicken.", simple: { time: "15 mins", temp: "High", ingredients: ["2 cups Leftover cooked rice (cold)", "150g Chicken breast (diced)", "1 cup Frozen mixed veggies", "3 tbsp Soy sauce", "2 tbsp Oil"], steps: ["Fry diced chicken in hot oil until cooked", "Add frozen veggies and cook for 2 mins", "Add cold rice and break it apart", "Pour soy sauce over and stir-fry aggressively"] }, hard: { time: "30 mins", temp: "Very High", ingredients: ["3 cups Day-old jasmine rice", "200g Chicken breast (marinated)", "2 Eggs", "1 cup Fresh Peas & Carrots", "1 tbsp Sesame oil", "1 tbsp Oyster sauce", "2 cloves Garlic & 1 tsp Ginger"], steps: ["Marinate chicken in soy sauce and cornstarch", "Scramble eggs quickly in a hot wok, remove", "Stir-fry chicken at max heat, remove", "Sauté garlic, ginger, and veggies", "Toss rice aggressively with sauces, then add back chicken and eggs"] } },
      fr: { name: "Riz Sauté au Poulet", origin: "Chine", difficulty: "Moyen", cost: "Env. 6.00 DT", description: "Un plat rapide avec du riz de la veille, des légumes et du poulet.", simple: { time: "15 mins", temp: "Fort", ingredients: ["2 tasses Riz cuit (froid)", "150g Poulet en dés", "1 tasse Légumes surgelés", "3 c.à.s Sauce soja"], steps: ["Frire le poulet", "Ajouter les légumes", "Ajouter le riz froid", "Mélanger avec la sauce soja à feu vif"] }, hard: { time: "30 mins", temp: "Très Fort", ingredients: ["3 tasses Riz jasmin (veille)", "200g Poulet mariné", "2 Oeufs", "Ail & Gingembre", "1 c.à.s Huile de sésame", "1 c.à.s Sauce huître"], steps: ["Cuire les œufs brouillés au wok et réserver", "Sauter le poulet à feu vif, réserver", "Sauter aromates et légumes", "Mélanger le riz avec les sauces, réincorporer le tout"] } },
      ar: { name: "أرز مقلي بالدجاج", origin: "الصين", difficulty: "متوسط", cost: "حوالي 6.00 د.ت", description: "أرز مقلي سريع ولذيذ باستخدام الأرز البايت والدجاج.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["كوبان أرز مطبوخ وبايت (بارد)", "150غ صدر دجاج مقطع", "كوب خضار مجمدة", "3 ملاعق صويا صوص", "ملعقتان زيت"], steps: ["اقلي الدجاج في الزيت الحار حتى ينضج", "أضف الخضار المجمدة لـ دقيقتين", "أضف الأرز البارد وفتته", "اسكب الصويا وقلب بقوة"] }, hard: { time: "30 دقيقة", temp: "عالي جدا", ingredients: ["3 أكواب أرز ياسمين بايت", "200غ دجاج متبل (صويا ونشا)", "بيضتان", "كوب جزر وبازلاء", "ملعقة زيت سمسم", "ملعقة صلصة محار", "ثوم وزنجبيل"], steps: ["اقلي البيض بسرعة في ووك حار وارفعيه", "اقلي الدجاج بحرارة عالية وارفعيه", "حمر الثوم والزنجبيل والخضار", "قلب الأرز بقوة مع الصلصات، ثم أعد الدجاج والبيض للمقلاة"] } }
    }
  },
  {
    id: "int_8", tags: ["fish", "expensive", "healthy", "european"], emoji: "🐟", difficultyCSS: "hard",
    translations: {
      en: { name: "Baked Salmon & Veggies", origin: "Global", difficulty: "Hard", cost: "Est. 22.00 DT", description: "A healthy, premium dinner with flaky salmon and roasted vegetables.", simple: { time: "20 mins", temp: "Medium", ingredients: ["1 (200g) Salmon fillet", "1/2 Lemon", "Salt & Pepper", "200g Frozen broccoli", "1 tbsp Olive oil"], steps: ["Place salmon and broccoli on a baking tray", "Drizzle with olive oil, salt, and pepper", "Bake at 200°C for 15 mins", "Squeeze lemon juice on top"] }, hard: { time: "40 mins", temp: "Medium", ingredients: ["1 Fresh center-cut Salmon fillet", "1 bunch Fresh Asparagus", "1 cup Cherry tomatoes", "2 tbsp Garlic herb butter", "Splash of White wine", "Sea salt flakes"], steps: ["Toss asparagus and tomatoes in oil and start roasting", "Prepare a garlic compound butter", "Sear salmon skin-side down in a hot skillet until crispy", "Transfer salmon to the oven tray, deglaze pan with wine, melt butter", "Baste salmon with the butter sauce and finish roasting"] } },
      fr: { name: "Saumon Rôti & Légumes", origin: "Global", difficulty: "Difficile", cost: "Env. 22.00 DT", description: "Un dîner sain et premium avec du saumon et des légumes rôtis.", simple: { time: "20 mins", temp: "Moyen", ingredients: ["1 Pavé de saumon (200g)", "1/2 Citron", "Sel & Poivre", "200g Brocoli", "1 c.à.s Huile d'olive"], steps: ["Mettre saumon et brocoli sur une plaque", "Assaisonner et huiler", "Cuire au four à 200°C 15 mins", "Ajouter le jus de citron"] }, hard: { time: "40 mins", temp: "Moyen", ingredients: ["1 Pavé de saumon frais", "Asperges fraîches", "Tomates cerises", "2 c.à.s Beurre à l'ail", "Vin blanc"], steps: ["Commencer à rôtir les légumes", "Saisir le saumon côté peau à la poêle", "Déglacer la poêle au vin et beurre", "Finir la cuisson au four en nappant de sauce"] } },
      ar: { name: "سلمون مشوي مع الخضار", origin: "عالمي", difficulty: "صعب", cost: "حوالي 22.00 د.ت", description: "عشاء صحي وفاخر من السلمون والخضار المشوية.", simple: { time: "20 دقيقة", temp: "متوسط", ingredients: ["شريحة سلمون (200غ)", "نصف ليمونة", "ملح وفلفل", "200غ بروكلي", "ملعقة زيت زيتون"], steps: ["ضع السلمون والبروكلي في صينية فرن", "رش الزيت والملح والفلفل", "اخبزه على 200 درجة لـ 15 دقيقة", "اعصر الليمون فوقه عند التقديم"] }, hard: { time: "40 دقيقة", temp: "متوسط", ingredients: ["شريحة سلمون طازجة من الوسط", "حزمة هليون (Asparagus)", "كوب طماطم كرزية", "ملعقتان زبدة بالثوم والأعشاب", "رشة ملح بحري خشن"], steps: ["ابدأ بشوي الهليون والطماطم في الفرن", "اشوِ السلمون من جهة الجلد في مقلاة حارة ليتقرمش", "انقل السلمون للفرن", "ذوب زبدة الثوم في المقلاة واسكبها فوق السلمون أثناء الشوي"] } }
    }
  },
  {
    id: "int_9", tags: ["vegan", "student", "cheap", "healthy", "middleEastern"], emoji: "🍲", difficultyCSS: "easy",
    translations: {
      en: { name: "Vegan Lentil Stew", origin: "Middle East", difficulty: "Easy", cost: "Est. 3.00 DT", description: "A warm, earthy, and highly nutritious bowl of lentil soup.", simple: { time: "30 mins", temp: "Medium", ingredients: ["1 cup Dry red lentils", "1 Onion (chopped)", "1 Carrot (chopped)", "1 tsp Cumin", "4 cups Water", "Salt"], steps: ["Wash lentils thoroughly", "Put all ingredients in a pot with water", "Boil, then simmer for 25 mins until thick and soft"] }, hard: { time: "1 hour", temp: "Low", ingredients: ["1 cup Red lentils", "4 cloves Garlic (minced)", "1 tsp Turmeric", "1 tsp Cumin", "1 Lemon (juiced)", "1/4 cup Fresh coriander", "3 tbsp Olive oil"], steps: ["Sauté minced garlic and spices in olive oil until fragrant", "Add lentils and 4 cups of broth/water", "Slow cook for 45 mins until extremely creamy", "Use a blender to slightly pulse it", "Finish with fresh lemon juice and chopped coriander"] } },
      fr: { name: "Soupe de Lentilles Végan", origin: "Moyen-Orient", difficulty: "Facile", cost: "Env. 3.00 DT", description: "Un bol de soupe aux lentilles chaud, réconfortant et nutritif.", simple: { time: "30 mins", temp: "Moyen", ingredients: ["1 tasse Lentilles corail", "1 Oignon", "1 Carotte", "1 c.à.c Cumin", "4 tasses Eau"], steps: ["Laver les lentilles", "Mettre tout dans une marmite", "Mijoter 25 mins jusqu'à épaississement"] }, hard: { time: "1 heure", temp: "Doux", ingredients: ["1 tasse Lentilles corail", "4 Gousses d'ail", "Curcuma & Cumin", "1 Citron", "Coriandre fraîche", "3 c.à.s Huile d'olive"], steps: ["Sauter l'ail et les épices dans l'huile", "Ajouter lentilles et bouillon, cuire 45 mins", "Mixer légèrement pour la texture", "Ajouter citron frais et coriandre avant de servir"] } },
      ar: { name: "شوربة عدس نباتية", origin: "الشرق الأوسط", difficulty: "سهل", cost: "حوالي 3.00 د.ت", description: "حساء عدس دافئ، مغذي، ومليء بالنكهات.", simple: { time: "30 دقيقة", temp: "متوسط", ingredients: ["كوب عدس أحمر جاف", "بصلة مفرومة", "جزرة مقطعة", "ملعقة صغيرة كمون", "4 أكواب ماء", "ملح"], steps: ["اغسل العدس جيداً", "ضع كل المكونات في قدر مع الماء", "اغله ثم اتركه يطبخ 25 دقيقة حتى يثخن"] }, hard: { time: "ساعة", temp: "هادئ", ingredients: ["كوب عدس أحمر", "4 فصوص ثوم مفروم", "ملعقة صغيرة كركم وكمون", "عصير ليمونة", "ربع كوب كزبرة طازجة", "3 ملاعق زيت زيتون"], steps: ["حمر الثوم والبهارات في الزيت حتى تفوح رائحتها", "أضف العدس و4 أكواب مرق واطبخه ببطء 45 دقيقة", "استخدم خلاط يدوي لطحنه جزئياً لقوام كريمي", "أضف الليمون والكزبرة الطازجة في النهاية"] } }
    }
  },
  {
    id: "int_11", tags: ["asian", "chicken", "spicy", "expensive"], emoji: "🍛", difficultyCSS: "medium",
    translations: {
      en: { name: "Spicy Chicken Curry", origin: "India", difficulty: "Medium", cost: "Est. 14.00 DT", description: "A rich, creamy, and spicy curry loaded with tender chicken.", simple: { time: "25 mins", temp: "Medium", ingredients: ["300g Chicken breast chunks", "2 tbsp Red curry paste", "1/2 cup Coconut milk or heavy cream", "1 cup Cooked rice", "1 tbsp Oil"], steps: ["Fry chicken chunks in oil until white", "Stir in curry paste and cook for 1 min", "Pour in coconut milk and simmer for 10 mins", "Serve hot over rice"] }, hard: { time: "1 hour", temp: "Medium", ingredients: ["400g Chicken thigh (marinated)", "2 tbsp Garam masala & Turmeric", "1 inch Fresh ginger (grated)", "1 cup Heavy cream", "1 cup Tomato puree", "2 cups Basmati rice"], steps: ["Marinate chicken in yogurt and spices", "Toast fresh grated ginger, garlic, and spices in butter", "Add tomato puree and simmer until oil separates", "Add chicken and heavy cream, slow cook", "Serve with perfectly washed and steamed fluffy basmati rice"] } },
      fr: { name: "Curry de Poulet Épicé", origin: "Inde", difficulty: "Moyen", cost: "Env. 14.00 DT", description: "Un curry riche, crémeux et épicé avec du poulet tendre.", simple: { time: "25 mins", temp: "Moyen", ingredients: ["300g Blanc de poulet", "2 c.à.s Pâte de curry", "1/2 tasse Lait de coco", "1 tasse Riz cuit"], steps: ["Frire le poulet", "Ajouter la pâte de curry (1 min)", "Verser le lait de coco et mijoter 10 mins", "Servir sur le riz"] }, hard: { time: "1 heure", temp: "Moyen", ingredients: ["400g Cuisses de poulet", "Garam masala & Curcuma", "Gingembre frais", "1 tasse Crème liquide", "1 tasse Purée de tomate", "Riz Basmati"], steps: ["Mariner le poulet (yaourt/épices)", "Torréfier gingembre, ail et épices", "Mijoter la tomate puis ajouter crème et poulet", "Préparer un riz basmati parfait"] } },
      ar: { name: "كاري دجاج حار", origin: "الهند", difficulty: "متوسط", cost: "حوالي 14.00 د.ت", description: "كاري غني وكريمي وحار مع قطع الدجاج الطرية.", simple: { time: "25 دقيقة", temp: "متوسط", ingredients: ["300غ صدر دجاج مقطع", "ملعقتان معجون كاري", "نصف كوب حليب جوز هند أو كريمة", "كوب أرز مطبوخ", "ملعقة زيت"], steps: ["اقلي الدجاج في الزيت حتى يتغير لونه", "أضف الكاري وقلب لدقيقة", "اسكب حليب جوز الهند واتركه يغلي 10 دقائق", "قدمه ساخناً مع الأرز"] }, hard: { time: "ساعة", temp: "متوسط", ingredients: ["400غ أفخاذ دجاج منزوعة العظم", "ملعقتان غارام ماسالا وكركم", "قطعة زنجبيل طازج مبشور", "كوب كريمة طبخ", "كوب طماطم مهروسة", "كوبان أرز بسمتي"], steps: ["تبل الدجاج بالزبادي والبهارات", "حمص الزنجبيل والثوم والبهارات في الزبدة", "أضف الطماطم واتركها حتى يطفو الزيت", "أضف الدجاج والكريمة واطبخه ببطء", "قدمه مع أرز بسمتي مفلفل ومغسول جيداً"] } }
    }
  },
  {
    id: "int_12", tags: ["asian", "chicken", "fried", "expensive"], emoji: "🍱", difficultyCSS: "hard",
    translations: {
      en: { name: "Sweet & Sour Chicken", origin: "China", difficulty: "Hard", cost: "Est. 15.00 DT", description: "Crispy battered chicken tossed in a sticky, tangy sweet and sour glaze.", simple: { time: "30 mins", temp: "High", ingredients: ["300g Frozen chicken nuggets", "3 tbsp Ketchup", "2 tbsp Sugar", "2 tbsp White vinegar", "1/4 cup Water"], steps: ["Fry or bake chicken nuggets until crispy", "In a pan, mix ketchup, sugar, vinegar, and water", "Boil sauce until sticky", "Toss nuggets in the hot glaze"] }, hard: { time: "1 hour", temp: "High", ingredients: ["400g Chicken breast (diced)", "1 cup Cornstarch", "1 cup Fresh pineapple chunks", "1 Bell pepper (diced)", "Soy sauce & Rice vinegar", "Brown sugar"], steps: ["Marinate chicken in soy sauce and egg white", "Dredge heavily in cornstarch", "Deep fry twice (double fry) for maximum crunch", "Make glaze from scratch (vinegar, sugar, ketchup, soy)", "Wok toss chicken with fresh pineapple and peppers"] } },
      fr: { name: "Poulet Aigre-Doux", origin: "Chine", difficulty: "Difficile", cost: "Env. 15.00 DT", description: "Poulet croustillant enrobé d'une sauce aigre-douce collante.", simple: { time: "30 mins", temp: "Fort", ingredients: ["300g Nuggets de poulet", "3 c.à.s Ketchup", "2 c.à.s Sucre", "2 c.à.s Vinaigre blanc"], steps: ["Cuire les nuggets pour qu'ils soient croustillants", "Mélanger ketchup, sucre, vinaigre et eau", "Réduire en sirop", "Enrober le poulet"] }, hard: { time: "1 heure", temp: "Fort", ingredients: ["400g Blanc de poulet", "1 tasse Maïzena", "Ananas frais", "1 Poivron", "Sauce soja & Vinaigre de riz"], steps: ["Mariner le poulet (soja/blanc d'œuf)", "Paner à la maïzena et frire deux fois", "Préparer le glaçage maison", "Sauter au wok avec ananas et poivron"] } },
      ar: { name: "دجاج حلو وحامض", origin: "الصين", difficulty: "صعب", cost: "حوالي 15.00 د.ت", description: "دجاج مقرمش مغطى بصلصة لزجة وحامضة وحلوة.", simple: { time: "30 دقيقة", temp: "عالي", ingredients: ["300غ ناجتس دجاج", "3 ملاعق كاتشب", "ملعقتان سكر", "ملعقتان خل أبيض", "ربع كوب ماء"], steps: ["اقلي أو اخبز الناجتس حتى يتقرمش", "في مقلاة، اخلط الكاتشب والسكر والخل والماء", "اغلِ الصلصة حتى تصبح لزجة", "قلب الدجاج في الصلصة الحارة"] }, hard: { time: "ساعة", temp: "عالي", ingredients: ["400غ صدر دجاج مقطع", "كوب نشا", "كوب أناناس طازج", "حبة فلفل رومي", "صويا صوص وخل أرز", "سكر بني"], steps: ["تبل الدجاج بالصويا وبياض بيضة", "غلفه جيداً بالنشا", "اقليه مرتين (قلي مزدوج) لقرمشة فائقة", "حضر الصلصة من الصفر", "قلب الدجاج في الووك مع الأناناس والفلفل"] } }
    }
  },

  // 16 to 25
  {
    id: "int_16", tags: ["asian", "vegan", "cheap", "fried", "pasta"], emoji: "🥢", difficultyCSS: "easy",
    translations: {
      en: { name: "Veggie Stir-fry Noodles", origin: "Asia", difficulty: "Easy", cost: "Est. 4.00 DT", description: "Fast, flexible, and completely vegan noodle stir-fry with a soy-garlic sauce.", simple: { time: "15 mins", temp: "High", ingredients: ["200g Instant noodles (no flavor packet)", "3 tbsp Soy sauce", "1 tbsp Sugar", "1 cup Frozen mixed veggies", "2 tbsp Oil"], steps: ["Boil noodles for 2 mins, drain", "Heat oil and fry veggies", "Add noodles, soy sauce, and sugar", "Stir fry for 2 mins until coated"] }, hard: { time: "25 mins", temp: "High", ingredients: ["300g Fresh Udon noodles", "1 head Bok Choy", "100g Shiitake Mushrooms", "1 tbsp Minced Ginger", "Dark soy & Oyster (or mushroom) sauce", "Sesame seeds"], steps: ["Prep fresh veggies and slice mushrooms", "Make a ginger-soy-sesame glaze", "Wok-fry mushrooms until brown", "Add noodles and bok choy on maximum heat", "Toss with glaze and garnish with sesame seeds"] } },
      fr: { name: "Nouilles Sautées aux Légumes", origin: "Asie", difficulty: "Facile", cost: "Env. 4.00 DT", description: "Nouilles véganes rapides sautées avec une sauce soja et ail.", simple: { time: "15 mins", temp: "Fort", ingredients: ["200g Nouilles", "3 c.à.s Sauce soja", "1 c.à.s Sucre", "1 tasse Légumes surgelés"], steps: ["Cuire les nouilles 2 mins", "Sauter les légumes dans l'huile", "Ajouter nouilles, soja et sucre", "Sauter 2 mins"] }, hard: { time: "25 mins", temp: "Fort", ingredients: ["300g Nouilles Udon fraîches", "Bok Choy", "100g Champignons", "Gingembre frais", "Soja noir", "Sésame"], steps: ["Préparer légumes", "Faire la sauce gingembre/sésame", "Dorer les champignons au wok", "Sauter à feu max avec nouilles", "Garnir de sésame"] } },
      ar: { name: "نودلز مقلية بالخضار", origin: "آسيا", difficulty: "سهل", cost: "حوالي 4.00 د.ت", description: "نودلز نباتية سريعة ومقلية مع صلصة الصويا والثوم.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["200غ نودلز (بدون بهارات)", "3 ملاعق صويا صوص", "ملعقة سكر", "كوب خضار مجمدة", "ملعقتان زيت"], steps: ["اسلق النودلز دقيقتين وصفها", "سخن الزيت واقلي الخضار", "أضف النودلز والصويا والسكر", "قلب الكل على نار عالية دقيقتين"] }, hard: { time: "25 دقيقة", temp: "عالي", ingredients: ["300غ نودلز أودون طازجة", "بوك تشوي", "100غ فطر شيتاكي", "زنجبيل مفروم", "صويا داكنة وصلصة فطر المحار", "سمسم"], steps: ["حضر الخضار الطازجة وقطع الفطر", "اصنع صلصة الزنجبيل والسمسم", "حمر الفطر في الووك", "أضف النودلز والبوك تشوي بحرارة قصوى", "قلب مع الصلصة وزين بالسمسم"] } }
    }
  },
  {
    id: "tun_17", tags: ["tunisian", "chicken", "spicy"], emoji: "🥘", difficultyCSS: "medium",
    translations: {
      en: { name: "Tunisian Chicken Couscous", origin: "Tunisia", difficulty: "Medium", cost: "Est. 12.00 DT", description: "The national dish, featuring fluffy semolina steamed over a spicy, rich chicken and vegetable broth.", simple: { time: "45 mins", temp: "Medium", ingredients: ["300g Instant couscous", "2 Chicken legs", "3 tbsp Tomato paste", "2 Carrots (chopped)", "1 tbsp Harissa"], steps: ["Boil chicken with paste, harissa, water, and veggies to make a red broth", "Prepare instant couscous with hot water", "Mix the cooked couscous thoroughly with the red sauce"] }, hard: { time: "2 hours", temp: "Medium", ingredients: ["500g Fine Couscous", "1 Whole Chicken (cut)", "1 cup Soaked Chickpeas", "200g Squash/Pumpkin", "2 Potatoes", "Tabil spice & Olive oil"], steps: ["Steam couscous traditionally in a 'kesskess' above the broth", "Simmer the spiced tomato broth with chicken and chickpeas", "Remove couscous, rub with olive oil and water, and steam a second time", "Add delicate veggies (squash/potato) near the end", "Mix perfectly and arrange meat/veggies on top"] } },
      fr: { name: "Couscous au Poulet", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 12.00 DT", description: "Le plat national avec de la semoule cuite à la vapeur sur un bouillon rouge épicé.", simple: { time: "45 mins", temp: "Moyen", ingredients: ["300g Couscous rapide", "2 Cuisses de poulet", "3 c.à.s Tomate concentrée", "2 Carottes", "1 c.à.s Harissa"], steps: ["Bouillir le poulet, tomate et légumes pour le bouillon", "Gonfler le couscous à l'eau chaude", "Mélanger le couscous avec la sauce rouge"] }, hard: { time: "2 heures", temp: "Moyen", ingredients: ["500g Couscous fin", "1 Poulet coupé", "Pois chiches trempés", "Courge & Pommes de terre", "Épices Tabil & Huile d'olive"], steps: ["Cuire à la vapeur dans un kesskess", "Mijoter le bouillon épicé", "Travailler la semoule à l'huile d'olive entre deux cuissons", "Dresser les légumes et la viande sur le dessus"] } },
      ar: { name: "كسكسي بالدجاج", origin: "تونس", difficulty: "متوسط", cost: "حوالي 12.00 د.ت", description: "الطبق الوطني التونسي، كسكسي مفور مع مرق أحمر حار بالدجاج والخضار.", simple: { time: "45 دقيقة", temp: "متوسط", ingredients: ["300غ كسكسي سريع", "فخذا دجاج", "3 ملاعق طماطم معجونة", "حبتان جزر", "ملعقة هريسة"], steps: ["اطبخ الدجاج مع الخضار والطماطم والماء لصنع مرق", "حضر الكسكسي بالماء الساخن", "سقّي الكسكسي بالمرق الأحمر واخلطه"] }, hard: { time: "ساعتان", temp: "متوسط", ingredients: ["500غ كسكسي دياري", "دجاجة مقطعة", "كوب حمص منفخ", "200غ قرع", "حبتان بطاطا", "تابل وكروية وزيت زيتون"], steps: ["فور الكسكسي في الكسكاس فوق قدر المرق", "اطبخ المرق مع الدجاج والحمص", "ارفع الكسكسي وبخه بالماء والزيت وفوره مرة ثانية", "أضف القرع والبطاطا في النهاية", "اخلط الكسكسي بالصلصة ورتب اللحم والخضار فوقه"] } }
    }
  },
  {
    id: "int_18", tags: ["asian", "fish", "expensive", "healthy"], emoji: "🍣", difficultyCSS: "hard",
    translations: {
      en: { name: "Salmon Poke Bowl", origin: "Japan/Hawaii", difficulty: "Hard", cost: "Est. 20.00 DT", description: "A fresh, vibrant bowl of sushi rice topped with raw marinated salmon and crisp vegetables.", simple: { time: "15 mins", temp: "None", ingredients: ["1 cup Cooked white rice", "150g Smoked salmon (sliced)", "1/2 Cucumber (diced)", "3 tbsp Soy sauce", "1 tbsp Mayonnaise"], steps: ["Put warm rice in a bowl", "Chop salmon and cucumber and place on top", "Drizzle with soy sauce and a squirt of mayo"] }, hard: { time: "45 mins", temp: "Low", ingredients: ["1 cup Sushi rice", "200g Sashimi-grade fresh salmon", "1/2 Avocado", "1/4 cup Edamame", "Rice vinegar & Sugar", "Spicy Sriracha mayo", "Sesame seeds"], steps: ["Wash sushi rice 4 times and cook perfectly", "Season warm rice with vinegar-sugar mix", "Marinate raw salmon in soy, sesame oil, and ginger", "Arrange bowl beautifully with fanned avocado and edamame", "Drizzle with spicy mayo and sesame"] } },
      fr: { name: "Poke Bowl au Saumon", origin: "Japon/Hawaï", difficulty: "Difficile", cost: "Env. 20.00 DT", description: "Un bol frais de riz à sushi surmonté de saumon mariné et de légumes croquants.", simple: { time: "15 mins", temp: "Aucune", ingredients: ["1 tasse Riz cuit", "150g Saumon fumé", "1/2 Concombre", "3 c.à.s Sauce soja"], steps: ["Mettre le riz dans un bol", "Couper saumon et concombre dessus", "Ajouter la sauce soja et mayo"] }, hard: { time: "45 mins", temp: "Doux", ingredients: ["1 tasse Riz à sushi", "200g Saumon qualité sashimi", "1/2 Avocat", "Edamame", "Vinaigre de riz", "Mayo épicée"], steps: ["Laver et cuire le riz à sushi", "Assaisonner le riz au vinaigre", "Mariner le saumon cru (soja/sésame)", "Dresser joliment avec avocat en éventail", "Napper de mayo épicée"] } },
      ar: { name: "بوكي بول السلمون", origin: "اليابان/هاواي", difficulty: "صعب", cost: "حوالي 20.00 د.ت", description: "وعاء طازج من أرز السوشي مع السلمون المتبل والخضار المقرمشة.", simple: { time: "15 دقيقة", temp: "لا يوجد", ingredients: ["كوب أرز مطبوخ", "150غ سلمون مدخن", "نصف خيارة", "3 ملاعق صويا صوص", "مايونيز"], steps: ["ضع الأرز الدافئ في وعاء", "قطع السلمون والخيار وضعهما فوقه", "أضف صلصة الصويا وقليلاً من المايونيز"] }, hard: { time: "45 دقيقة", temp: "هادئ", ingredients: ["كوب أرز سوشي", "200غ سلمون طازج جداً (نيء)", "نصف حبة أفوكادو", "إدامامي", "خل الأرز وسكر", "مايونيز حار بسيراتشا", "سمسم"], steps: ["اغسل أرز السوشي 4 مرات واطبخه", "تبل الأرز بالخل والسكر", "تبل السلمون النيء بالصويا وزيت السمسم", "رتب الوعاء بشكل جميل مع الأفوكادو", "زينه بالمايونيز الحار والسمسم"] } }
    }
  },
  {
    id: "int_19", tags: ["vegan", "student", "cheap", "healthy", "middleEastern"], emoji: "🧆", difficultyCSS: "easy",
    translations: {
      en: { name: "Creamy Hummus", origin: "Middle East", difficulty: "Easy", cost: "Est. 4.00 DT", description: "A smooth, rich chickpea dip perfect for snacking with pita bread.", simple: { time: "10 mins", temp: "None", ingredients: ["1 Can (400g) Chickpeas", "Juice of 1 Lemon", "2 cloves Garlic", "3 tbsp Olive oil", "Pinch of salt"], steps: ["Drain chickpeas (save a little water)", "Put everything in a blender or food processor", "Blend until relatively smooth, serve with bread"] }, hard: { time: "12 hours", temp: "Medium", ingredients: ["250g Dry chickpeas", "1 tsp Baking soda", "1/2 cup High-quality Tahini", "Ice cubes", "Fresh lemon juice", "Extra virgin olive oil", "Cumin"], steps: ["Soak chickpeas overnight with baking soda", "Boil until they turn to mush, then peel the skins off", "Whip tahini and lemon juice first until thick", "Add chickpeas and ice cubes, blend for 5+ minutes for maximum restaurant creaminess", "Garnish with oil and cumin"] } },
      fr: { name: "Houmous Crémeux", origin: "Moyen-Orient", difficulty: "Facile", cost: "Env. 4.00 DT", description: "Une trempette de pois chiches riche et onctueuse, parfaite avec du pain pita.", simple: { time: "10 mins", temp: "Aucune", ingredients: ["1 Boîte (400g) Pois chiches", "Jus d'1 Citron", "2 Gousses d'ail", "3 c.à.s Huile d'olive"], steps: ["Égoutter les pois chiches", "Tout mixer au robot", "Servir avec du pain"] }, hard: { time: "12 heures", temp: "Moyen", ingredients: ["250g Pois chiches secs", "1 c.à.c Bicarbonate", "1/2 tasse Tahini premium", "Glaçons", "Citron frais"], steps: ["Tremper la veille avec bicarbonate", "Surcuire puis enlever la peau", "Fouetter tahini et citron", "Mixer 5 mins avec glaçons pour une texture ultra-lisse"] } },
      ar: { name: "حمص بالطحينة", origin: "الشرق الأوسط", difficulty: "سهل", cost: "حوالي 4.00 د.ت", description: "تغميسة حمص غنية وكريمية مثالية مع الخبز العربي.", simple: { time: "10 دقائق", temp: "لا يوجد", ingredients: ["علبة حمص (400غ)", "عصير ليمونة", "فصان ثوم", "3 ملاعق زيت زيتون"], steps: ["صفِ الحمص", "ضع كل المكونات في الخلاط", "اطحنها حتى تصبح ناعمة وقدمها مع الخبز"] }, hard: { time: "12 ساعة", temp: "متوسط", ingredients: ["250غ حمص جاف", "ملعقة صغيرة بيكربونات", "نصف كوب طحينة فاخرة", "مكعبات ثلج", "ليمون طازج", "كمون"], steps: ["انقع الحمص ليلة كاملة مع البيكربونات", "اغله حتى يذوب تماماً ثم قشره", "اخفق الطحينة والليمون أولاً", "أضف الحمص والثلج واطحن لـ 5 دقائق لقوام مطاعم كريمي جداً", "زين بالزيت والكمون"] } }
    }
  },
  {
    id: "tun_20", tags: ["chicken", "fried", "student", "cheap", "tunisian"], emoji: "🥪", difficultyCSS: "easy",
    translations: {
      en: { name: "Escalope Sandwich (Mlawi)", origin: "Tunisia", difficulty: "Easy", cost: "Est. 5.50 DT", description: "The ultimate student street food: fried chicken escalope wrapped in Mlawi bread with fries.", simple: { time: "15 mins", temp: "High", ingredients: ["1 Store-bought Mlawi or Baguette", "150g Chicken breast (thin)", "1 Handful frozen Fries", "Harissa & Mayo"], steps: ["Fry chicken breast in a pan with oil", "Fry or bake the fries", "Spread sauces on bread", "Wrap chicken and fries inside"] }, hard: { time: "40 mins", temp: "High", ingredients: ["Homemade Mlawi dough (flour/semolina)", "1 Breaded chicken escalope (flour, egg, breadcrumbs)", "2 Slices Gruyere cheese", "Homemade Harissa", "Fresh potatoes for fries"], steps: ["Prepare and cook Mlawi flatbread on a hot griddle", "Bread the escalope and deep fry until crispy", "Melt cheese over the hot chicken", "Double-fry fresh potatoes", "Wrap tightly and press on griddle to toast"] } },
      fr: { name: "Sandwich Escalope (Mlawi)", origin: "Tunisie", difficulty: "Facile", cost: "Env. 5.50 DT", description: "Le classique étudiant : escalope de poulet frite et frites dans un pain Mlawi.", simple: { time: "15 mins", temp: "Fort", ingredients: ["1 Pain Mlawi acheté", "150g Blanc de poulet", "Frites surgelées", "Harissa & Mayo"], steps: ["Frire le poulet à la poêle", "Cuire les frites", "Tartiner le pain", "Garnir et rouler"] }, hard: { time: "40 mins", temp: "Fort", ingredients: ["Pâte à Mlawi maison", "1 Escalope panée", "Gruyère", "Harissa maison", "Pommes de terre fraîches"], steps: ["Cuire le pain Mlawi", "Paner et frire le poulet", "Fondre le fromage dessus", "Frire les frites fraîches", "Rouler le sandwich et le toaster"] } },
      ar: { name: "ساندويتش سكالوب وملاوي", origin: "تونس", difficulty: "سهل", cost: "حوالي 5.50 د.ت", description: "أكلة الطلاب المفضلة: دجاج بانيه وبطاطا مقلية ملفوفة في خبز الملاوي.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["خبز ملاوي جاهز أو باقيت", "150غ صدر دجاج رفيع", "حفنة بطاطا مج��دة", "هريسة ومايونيز"], steps: ["اقلي الدجاج في مقلاة", "اقلي البطاطا", "ادهن الخبز بالصلصات", "لف الدجاج والبطاطا بداخله"] }, hard: { time: "40 دقيقة", temp: "عالي", ingredients: ["عجين ملاوي دياري (سميد وفارينة)", "سكالوب بانيه (مغلف بالبقسماط)", "شريحتان جبن قرويير", "هريسة دياري", "بطاطا طازجة للقلي"], steps: ["حضر واطبخ الملاوي في طاجين حار", "اقلي الدجاج بالبقسماط حتى يتقرمش", "ذوب الجبن على الدجاج الساخن", "اقلي البطاطا الطازجة مرتين", "لف الساندويتش واضغط عليه في الطاجين ليتحمص"] } }
    }
  },
  {
    id: "tun_21", tags: ["tunisian", "vegan", "spicy", "cheap", "student", "healthy"], emoji: "🍳", difficultyCSS: "easy",
    translations: {
      en: { name: "Tunisian Ojja (Meatless)", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.00 DT", description: "A fast, fiery garlic and tomato skillet with scrambled or poached eggs.", simple: { time: "10 mins", temp: "Medium", ingredients: ["2 tbsp Tomato paste", "3 cloves Garlic (minced)", "3 Eggs", "1 tsp Harissa", "3 tbsp Oil"], steps: ["Lightly fry garlic and tomato paste in oil", "Add half a cup of water and harissa, simmer", "Crack eggs in, scramble slightly into the sauce", "Eat with fresh bread"] }, hard: { time: "25 mins", temp: "Medium", ingredients: ["4 Fresh ripe tomatoes", "5 cloves Garlic", "1 tsp Tabil spice", "1/4 cup Extra virgin olive oil", "1 Green pepper", "4 Eggs"], steps: ["Grate or blend fresh tomatoes", "Sauté chopped green peppers and garlic in olive oil", "Add tomatoes and tabil, slow simmer until thick", "Create small wells in sauce, poach eggs perfectly without breaking yolks"] } },
      fr: { name: "Ojja Tunisienne (Sans viande)", origin: "Tunisie", difficulty: "Facile", cost: "Env. 3.00 DT", description: "Une poêlée rapide et piquante à l'ail et aux tomates avec des œufs.", simple: { time: "10 mins", temp: "Moyen", ingredients: ["2 c.à.s Concentré de tomate", "3 Gousses d'ail", "3 Oeufs", "1 c.à.c Harissa", "Huile"], steps: ["Frire l'ail et la tomate", "Ajouter un fond d'eau et mijoter", "Brouiller les œufs dedans", "Manger avec du pain"] }, hard: { time: "25 mins", temp: "Moyen", ingredients: ["4 Tomates fraîches", "5 Gousses d'ail", "Épices Tabil", "Huile d'olive", "1 Poivron vert", "4 Oeufs"], steps: ["Râper les tomates fraîches", "Sauter poivron et ail", "Ajouter tomates et épices, réduire", "Pocher les œufs entiers dans la sauce"] } },
      ar: { name: "عجة تونسية (بدون لحم)", origin: "تونس", difficulty: "سهل", cost: "حوالي 3.00 د.ت", description: "مقلاة سريعة وحارة من الثوم والطماطم مع البيض.", simple: { time: "10 دقائق", temp: "متوسط", ingredients: ["ملعقتان طماطم معجونة", "3 فصوص ثوم مفروم", "3 بيضات", "ملعقة صغيرة هريسة", "3 ملاعق زيت"], steps: ["اقلي الثوم والطماطم في الزيت", "أضف نصف كوب ماء والهريسة واتركه يغلي", "اكسر البيض واخلطه قليلاً مع ال��لصة", "يؤكل بالخبز الطازج"] }, hard: { time: "25 دقيقة", temp: "متوسط", ingredients: ["4 حبات طماطم طازجة ناضجة", "5 فصوص ثوم", "ملعقة صغيرة تابل", "ربع كوب زيت زيتون", "قرن فلفل أخضر", "4 بيضات"], steps: ["ابشر الطماطم الطازجة", "حمر الفلفل المقطع والثوم في الزيت", "أضف الطماطم والتابل واطبخ ببطء لتتكثف", "اصنع حفراً صغيرة واسلق البيض فيها بدون كسر الصفار"] } }
    }
  },
  {
    id: "int_22", tags: ["fish", "fried", "expensive", "european"], emoji: "🍟", difficultyCSS: "medium",
    translations: {
      en: { name: "Fish and Chips", origin: "UK", difficulty: "Medium", cost: "Est. 18.00 DT", description: "Classic British pub food: crispy battered white fish served with thick-cut fries.", simple: { time: "25 mins", temp: "High", ingredients: ["200g Frozen breaded white fish", "200g Frozen thick fries", "3 tbsp Tartar sauce", "1/2 Lemon"], steps: ["Bake or fry the fries until golden", "Bake or fry the fish according to package", "Serve together with lemon wedges and tartar sauce"] }, hard: { time: "45 mins", temp: "High", ingredients: ["1 Fresh Cod or Haddock fillet", "1 cup Flour + 1 tsp Baking powder", "1 cup Ice cold sparkling water or Beer", "3 large Russet Potatoes", "Malt vinegar"], steps: ["Cut potatoes thick, blanch, then double-fry for crispy chips", "Make a light, bubbly batter with flour and ice-cold beer", "Dip dry fish into batter and deep fry immediately at 180°C", "Serve authentic style with malt vinegar and salt"] } },
      fr: { name: "Fish and Chips", origin: "Royaume-Uni", difficulty: "Moyen", cost: "Env. 18.00 DT", description: "Le classique britannique : poisson blanc frit en pâte avec de grosses frites.", simple: { time: "25 mins", temp: "Fort", ingredients: ["200g Poisson pané surgelé", "200g Grosses frites surgelées", "Sauce tartare", "Citron"], steps: ["Cuire les frites", "Cuire le poisson", "Servir avec citron et sauce"] }, hard: { time: "45 mins", temp: "Fort", ingredients: ["Cabillaud frais", "1 tasse Farine + Levure", "Bière très froide", "3 Pommes de terre", "Vinaigre de malt"], steps: ["Couper et frire les frites en deux fois", "Faire une pâte à frire légère à la bière", "Plonger le poisson et frire à 180°C", "Servir avec du vinaigre de malt"] } },
      ar: { name: "سمك وبطاطا مقلية (فش آند شبس)", origin: "بريطانيا", difficulty: "متوسط", cost: "حوالي 18.00 د.ت", description: "الطبق البريطاني الكلاسيكي: سمك أبيض مقرمش مع بطاطا مقلية سميكة.", simple: { time: "25 دقيقة", temp: "عالي", ingredients: ["200غ سمك بانيه مجمد", "200غ بطاطا مجمدة سميكة", "3 ملاعق صلصة تارتار", "نصف ليمونة"], steps: ["اقلي أو اخبز البطاطا", "اقلي أو اخبز السمك", "قدمه مع شرائح الليمون والصلصة"] }, hard: { time: "45 دقيقة", temp: "عالي", ingredients: ["شريحة سمك أبيض (كود) طازج", "كوب دقيق + بيكنج باودر", "كوب ماء غازي مثلج جداً أو بيرة", "3 حبات بطاطا", "خل شعير (Malt)"], steps: ["قطع البطاطا سميكة واقليها مرتين للقرمشة", "حضر عجين مقرمش وخفيف بالماء الغازي", "اغمس السمك واقله فوراً في زيت 180 درجة", "قدمه على الطريقة الأصلية مع خل الشعير والملح"] } }
    }
  },
  {
    id: "int_23", tags: ["vegan", "cheap", "student", "fried", "cheesy", "american"], emoji: "🥪", difficultyCSS: "easy",
    translations: {
      en: { name: "Grilled Cheese & Tomato", origin: "Global", difficulty: "Easy", cost: "Est. 2.50 DT", description: "A simple, comforting, buttery toasted sandwich filled with gooey cheese and tomato.", simple: { time: "5 mins", temp: "Medium", ingredients: ["2 slices Sandwich bread", "2 slices Melting cheese (Edam/Gouda)", "1 tbsp Butter", "2 slices Tomato"], steps: ["Butter the outside of both bread slices", "Put cheese and tomato in the middle", "Toast in a pan on medium heat until golden and melted"] }, hard: { time: "15 mins", temp: "Medium Low", ingredients: ["2 thick slices Sourdough bread", "Cheddar, Gruyere, & Mozzarella", "2 tbsp Garlic herb butter", "Fresh heirloom tomato", "Oregano & Black pepper"], steps: ["Whip butter with minced garlic and herbs", "Generously coat the bread", "Layer the 3 cheeses and seasoned tomato", "Slow toast in a skillet with a lid on to ensure perfect melting without burning the bread"] } },
      fr: { name: "Grilled Cheese à la Tomate", origin: "Global", difficulty: "Facile", cost: "Env. 2.50 DT", description: "Un sandwich grillé au beurre, simple et réconfortant, avec du fromage fondant et de la tomate.", simple: { time: "5 mins", temp: "Moyen", ingredients: ["2 tranches Pain de mie", "2 tranches Fromage fondant", "1 c.à.s Beurre", "Tomate"], steps: ["Beurrer l'extérieur du pain", "Ajouter fromage et tomate", "Griller à la poêle jusqu'à ce que ce soit fondu"] }, hard: { time: "15 mins", temp: "Doux", ingredients: ["Pain au levain", "Cheddar, Gruyère, Mozza", "Beurre à l'ail", "Tomate ancienne", "Origan"], steps: ["Faire un beurre à l'ail", "Superposer les 3 fromages et la tomate", "Griller lentement à l'étouffée (avec couvercle)"] } },
      ar: { name: "ساندويتش جبن وطماطم محمص", origin: "عالمي", difficulty: "سهل", cost: "حوالي 2.50 د.ت", description: "ساندويتش دافئ ومقرمش بالزبدة مع جبن ذائب وشرائح الطماطم.", simple: { time: "5 دقائق", temp: "متوسط", ingredients: ["شريحتان خبز توست", "شريحتان جبن يذوب", "ملعقة زبدة", "شريحتان طماطم"], steps: ["ادهن الخبز بالزبدة من الخارج", "ضع الجبن والطماطم في الوسط", "حمصه في مقلاة على حرارة متوسطة حتى يذوب"] }, hard: { time: "15 دقيقة", temp: "هادئ", ingredients: ["شريحتان خبز ساوردو سميكة", "أجبان: شيدر، قرويير، موزاريلا", "ملعقتان زبدة بالثوم", "طماطم عضوية طازجة", "زعتر أوريغانو وفلفل أسود"], steps: ["حضر زبدة الثوم والأعشاب وادهن الخبز", "ضع طبقات الأجبان الثلاثة والطماطم المتبلة", "حمصه ببطء مع تغطية المقلاة ليذوب الجبن تماماً دون حرق الخبز"] } }
    }
  },
  {
    id: "int_24", tags: ["asian", "chicken", "student", "cheap"], emoji: "🥢", difficultyCSS: "easy",
    translations: {
      en: { name: "Teriyaki Chicken Bites", origin: "Japan", difficulty: "Easy", cost: "Est. 5.50 DT", description: "Sweet and savory sticky chicken served over a simple bowl of rice.", simple: { time: "15 mins", temp: "Medium High", ingredients: ["200g Chicken breast (cubed)", "3 tbsp Store-bought Teriyaki sauce", "1 cup Cooked rice", "1 tbsp Oil"], steps: ["Chop chicken and pan-fry in oil until white", "Pour teriyaki sauce over it", "Simmer until sauce is thick and sticky", "Serve over a bowl of hot rice"] }, hard: { time: "30 mins", temp: "Medium High", ingredients: ["300g Boneless Chicken thigh", "1/4 cup Soy sauce", "2 tbsp Brown sugar", "1 tsp Fresh minced Ginger", "1 clove Garlic", "Sesame seeds & Green onions"], steps: ["Make homemade glaze: boil soy, sugar, ginger, and garlic until syrupy", "Sear chicken thighs whole, skin-side down until very crispy", "Slice chicken, return to pan, and toss with glaze", "Garnish heavily with sesame seeds and onions"] } },
      fr: { name: "Bouchées de Poulet Teriyaki", origin: "Japon", difficulty: "Facile", cost: "Env. 5.50 DT", description: "Morceaux de poulet collants, sucrés et salés, servis sur du riz.", simple: { time: "15 mins", temp: "Moyen Fort", ingredients: ["200g Blanc de poulet", "3 c.à.s Sauce Teriyaki toute prête", "1 tasse Riz cuit", "Huile"], steps: ["Cuire le poulet en dés", "Verser la sauce Teriyaki", "Réduire jusqu'à ce que ce soit collant", "Servir sur le riz"] }, hard: { time: "30 mins", temp: "Moyen Fort", ingredients: ["300g Cuisses de poulet désossées", "1/4 tasse Sauce soja", "2 c.à.s Sucre roux", "Gingembre frais", "Sésame"], steps: ["Faire la sauce maison (soja, sucre, gingembre)", "Saisir le poulet côté peau très croustillant", "Trancher, remettre à la poêle avec la sauce", "Garnir de sésame"] } },
      ar: { name: "دجاج ترياكي", origin: "اليابان", difficulty: "سهل", cost: "حوالي 5.50 د.ت", description: "قطع دجاج بصلصة لزجة حلوة ومالحة تقدم فوق الأرز.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["200غ صدر دجاج مكعبات", "3 ملاعق صلصة ترياكي جاهزة", "كوب أرز مطبوخ", "ملعقة زيت"], steps: ["اقلي الدجاج في الزيت حتى ينضج", "اسكب الصلصة فوقه", "اتركه يغلي حتى تتكثف الصلصة وتصبح لزجة", "قدمه فوق الأرز الساخن"] }, hard: { time: "30 دقيقة", temp: "عالي", ingredients: ["300غ فخذ دجاج بدون عظم", "ربع كوب صويا صوص", "ملعقتان سكر بني", "زنجبيل طازج وثوم", "سمسم وبصل أخضر"], steps: ["حضر الصلصة بغلي الصويا والسكر والزنجبيل لتصبح كالشربات", "اشوِ أفخاذ الدجاج حتى تتقرمش جداً", "قطعها وأعدها للمقلاة وقلبها بالصلصة", "زينها بالسمسم والبصل الأخضر"] } }
    }
  },
  {
    id: "tun_25", tags: ["tunisian", "fish", "spicy", "boiled", "pasta"], emoji: "🍝", difficultyCSS: "medium",
    translations: {
      en: { name: "Macaroni with Tuna (Maqrouna)", origin: "Tunisia", difficulty: "Medium", cost: "Est. 6.50 DT", description: "The iconic Tunisian red pasta, intensely spicy, loaded with garlic, bay leaves, and canned tuna.", simple: { time: "20 mins", temp: "Medium", ingredients: ["250g Short pasta", "2 tbsp Tomato paste", "1 tbsp Harissa", "1 can Tuna", "3 cloves Garlic"], steps: ["Boil pasta", "Fry garlic, tomato paste, and harissa in oil", "Add 1 cup water and simmer 10 mins", "Mix pasta in sauce and top with tuna"] }, hard: { time: "40 mins", temp: "Medium", ingredients: ["300g 'Fell' pasta", "3 tbsp Tomato paste", "5 cloves Fresh garlic", "3 Bay leaves", "1 tsp Tabil spice", "130g Premium Tuna in olive oil", "2 Green peppers"], steps: ["Fry whole green peppers first, then remove", "Sauté crushed garlic and tomato paste", "Simmer slowly with bay leaves and tabil until oil separates", "Toss pasta, plate it, and garnish carefully with large tuna chunks and fried peppers"] } },
      fr: { name: "Macaroni au Thon (Maqrouna)", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 6.50 DT", description: "Les fameuses pâtes rouges tunisiennes, épicées, avec de l'ail et du thon.", simple: { time: "20 mins", temp: "Moyen", ingredients: ["250g Pâtes", "2 c.à.s Concentré de tomate", "1 c.à.s Harissa", "1 boîte Thon", "Ail"], steps: ["Cuire les pâtes", "Frire ail, tomate et harissa", "Ajouter un peu d'eau, mijoter 10 mins", "Mélanger et ajouter thon"] }, hard: { time: "40 mins", temp: "Moyen", ingredients: ["300g Pâtes 'Fell'", "Concentré", "5 Gousses d'ail", "Laurier", "Thon à l'huile d'olive de qualité", "Poivrons verts"], steps: ["Frire les poivrons entiers, réserver", "Faire revenir l'ail et la tomate", "Mijoter lentement au laurier", "Mélanger les pâtes, garnir de gros morceaux de thon et poivrons frits"] } },
      ar: { name: "مقرونة بالتونة", origin: "تونس", difficulty: "متوسط", cost: "حوالي 6.50 د.ت", description: "المقرونة التونسية الحمراء الشهيرة، حارة جداً ومتبلة بالثوم والرند والتونة.", simple: { time: "20 دقيقة", temp: "متوسط", ingredients: ["250غ مقرونة", "ملعقتان طماطم معجونة", "ملعقة هريسة", "علبة تونة", "3 فصوص ثوم"], steps: ["اسلق المقرونة", "اقلي الثوم، الطماطم والهريسة في الزيت", "أضف كوب ماء واتركها تغلي 10 دقائق", "اخلط المقرونة بالصلصة وزينها بالتونة"] }, hard: { time: "40 دقيقة", temp: "متوسط", ingredients: ["300غ مقرونة فل", "3 ملاعق طماطم", "5 فصوص ثوم طازج", "3 أوراق رند", "تابل", "تونة ممتازة بزيت الزيتون", "قرنان فلفل أخضر"], steps: ["اقلي الفلفل الأخضر أولاً وارفعه", "اقلي الثوم المهروس والطماطم", "اطبخ الصلصة ببطء مع الرند والتابل حتى يطفو الزيت", "اخلط المقرونة، وضعها في صحن، وزينها بقطع التونة الكبيرة والفلفل المقلي"] } }
    }
  },

  // 26 to 35
  {
    id: "int_26", tags: ["american", "cheesy", "pasta", "student", "cheap", "boiled"], emoji: "🧀", difficultyCSS: "easy",
    translations: {
      en: { name: "Macaroni and Cheese", origin: "USA", difficulty: "Easy", cost: "Est. 5.00 DT", description: "A gooey, comforting bowl of cheesy pasta.", simple: { time: "15 mins", temp: "Medium", ingredients: ["1 Box Mac & Cheese", "1/4 cup Milk", "2 tbsp Butter"], steps: ["Boil pasta for 7-8 minutes", "Drain water completely", "Return pasta to pot, add milk, butter, and cheese powder, stir well"] }, hard: { time: "45 mins", temp: "Medium", ingredients: ["250g Macaroni", "100g Sharp Cheddar", "100g Gruyere", "3 tbsp Butter & Flour", "2 cups Milk", "Breadcrumbs"], steps: ["Make a roux (melt butter, whisk in flour)", "Slowly whisk in milk to make a silky béchamel", "Remove from heat, melt in grated cheeses", "Mix with cooked pasta, top with buttery breadcrumbs, bake until bubbly"] } },
      fr: { name: "Macaroni au Fromage", origin: "USA", difficulty: "Facile", cost: "Env. 5.00 DT", description: "Un bol réconfortant de pâtes au fromage fondant.", simple: { time: "15 mins", temp: "Moyen", ingredients: ["1 Boîte Mac & Cheese", "1/4 tasse Lait", "2 c.à.s Beurre"], steps: ["Bouillir les pâtes 8 mins", "Égoutter", "Ajouter lait, beurre, poudre de fromage et mélanger"] }, hard: { time: "45 mins", temp: "Moyen", ingredients: ["250g Macaroni", "100g Cheddar", "100g Gruyère", "Beurre & Farine", "2 tasses Lait", "Chapelure"], steps: ["Faire un roux (beurre + farine)", "Ajouter le lait pour une béchamel", "Fondre les fromages hors du feu", "Mélanger aux pâtes, couvrir de chapelure et gratiner au four"] } },
      ar: { name: "ماك آند تشيز (مكرونة بالجبن)", origin: "أمريكا", difficulty: "سهل", cost: "حوالي 5.00 د.ت", description: "وعاء دافئ ومريح من المكرونة المليئة بالجبن الذائب.", simple: { time: "15 دقيقة", temp: "متوسط", ingredients: ["علبة مكرونة وجبن", "ربع كوب حليب", "ملعقتان زبدة"], steps: ["اسلق المكرونة لـ 8 دقائق", "صفِ الماء تماماً", "أعدها للقدر، أضف الحليب، الزبدة وبودرة الجبن وقلب جيداً"] }, hard: { time: "45 دقيقة", temp: "متوسط", ingredients: ["250غ مكرونة", "100غ شيدر", "100غ قرويير", "3 ملاعق زبدة ودقيق", "كوبان حليب", "بقسماط (شابورة)"], steps: ["اصنع الرو (ذوب الزبدة مع الدقيق)", "أضف الحليب تدريجياً لصنع بشاميل ناعم", "ارفعها عن النار وذوب الأجبان فيها", "اخلطها مع المكرونة، غطها بالبقسماط وحمرها في الفرن"] } }
    }
  },
  {
    id: "int_27", tags: ["dessert", "student", "cheap", "european", "american"], emoji: "☕", difficultyCSS: "easy",
    translations: {
      en: { name: "Chocolate Mug Cake", origin: "Global", difficulty: "Easy", cost: "Est. 2.00 DT", description: "A warm, fluffy chocolate cake made right in your mug in minutes.", simple: { time: "5 mins", temp: "Microwave", ingredients: ["3 tbsp Flour", "2 tbsp Sugar", "1 tbsp Cocoa powder", "3 tbsp Milk", "1 tbsp Oil", "Pinch of baking powder"], steps: ["Whisk dry ingredients in a large microwave-safe mug", "Stir in milk and oil until smooth", "Microwave on high for 70-90 seconds"] }, hard: { time: "25 mins", temp: "Oven", ingredients: ["100g High quality dark chocolate", "50g Butter", "2 Eggs", "40g Sugar", "1 tbsp Flour"], steps: ["Melt chocolate and butter over a double boiler", "Whisk eggs and sugar until pale and fluffy", "Gently fold in melted chocolate and flour", "Bake in buttered ramekins at 200°C for exactly 10-12 mins for a liquid molten center"] } },
      fr: { name: "Mug Cake au Chocolat", origin: "Global", difficulty: "Facile", cost: "Env. 2.00 DT", description: "Un gâteau au chocolat chaud et moelleux préparé dans une tasse en quelques minutes.", simple: { time: "5 mins", temp: "Micro-ondes", ingredients: ["3 c.à.s Farine", "2 c.à.s Sucre", "1 c.à.s Cacao", "3 c.à.s Lait", "1 c.à.s Huile", "Levure"], steps: ["Mélanger les poudres dans un mug", "Ajouter lait et huile", "Cuire 90 secondes au micro-ondes à pleine puissance"] }, hard: { time: "25 mins", temp: "Four", ingredients: ["100g Chocolat noir", "50g Beurre", "2 Oeufs", "40g Sucre", "1 c.à.s Farine"], steps: ["Fondre chocolat et beurre au bain-marie", "Blanchir œufs et sucre", "Incorporer le chocolat délicatement", "Cuire en ramequins à 200°C pendant 10-12 mins pour un cœur coulant"] } },
      ar: { name: "كيكة المج بالشوكولاتة", origin: "عالمي", difficulty: "سهل", cost: "حوالي 2.00 د.ت", description: "كيكة شوكولاتة دافئة وهشة تُحضر في كوبك خلال دقائق.", simple: { time: "5 دقائق", temp: "ميكروويف", ingredients: ["3 ملاعق كبيرة دقيق", "ملعقتان كبيرتان سكر", "ملعقة كبيرة كاكاو", "3 ملاعق حليب", "ملعقة زيت", "رشة بيكنج باودر"], steps: ["اخلط المكونات الجافة في كوب كبير", "أضف الحليب والزيت وحرك حتى يتجانس", "ضعه في الميكروويف لـ 90 ثانية"] }, hard: { time: "25 دقيقة", temp: "فرن", ingredients: ["100غ شوكولاتة داكنة", "50غ زبدة", "بيضتان", "40غ سكر", "ملعقة دقيق"], steps: ["ذوب الشوكولاتة والزبدة في حمام مائي", "اخفق البيض والسكر حتى يصبح فاتحاً", "قلب الشوكولاتة والدقيق معه بلطف", "اخبزه في قوالب مدهونة على 200 درجة لـ 10-12 دقيقة للحصول على قلب ذائب (مولتن كيك)"] } }
    }
  },
  {
    id: "int_28", tags: ["american", "beef", "cheesy", "expensive", "fried"], emoji: "🍔", difficultyCSS: "medium",
    translations: {
      en: { name: "Classic Cheeseburger", origin: "USA", difficulty: "Medium", cost: "Est. 12.00 DT", description: "A juicy, perfectly seared beef patty with melted cheese in a toasted bun.", simple: { time: "15 mins", temp: "High", ingredients: ["1 Burger bun", "150g Ground beef patty", "1 slice Processed Cheese", "1 tbsp Ketchup"], steps: ["Fry the patty in a hot pan for 4 mins each side", "Add cheese slice on top to melt", "Put in bun with ketchup"] }, hard: { time: "30 mins", temp: "High", ingredients: ["1 Brioche bun", "150g Fresh ground beef (80/20 fat)", "2 slices Sharp Cheddar", "1/2 Onion", "2 tbsp Mayo/Ketchup/Relish mix"], steps: ["Caramelize onions in butter", "Smash meatballs flat on a screaming hot griddle for a crusty sear", "Double slice the cheese", "Toast buns in butter and assemble with homemade secret sauce"] } },
      fr: { name: "Cheeseburger Classique", origin: "USA", difficulty: "Moyen", cost: "Env. 12.00 DT", description: "Un steak haché juteux avec du fromage fondu dans un pain grillé.", simple: { time: "15 mins", temp: "Fort", ingredients: ["1 Pain burger", "150g Steak haché", "1 Tranche de fromage", "1 c.à.s Ketchup"], steps: ["Cuire le steak 4 mins par face", "Ajouter le fromage pour fondre", "Assembler avec ketchup"] }, hard: { time: "30 mins", temp: "Fort", ingredients: ["1 Pain brioché", "150g Bœuf haché frais (20% mg)", "2 tranches Cheddar", "Oignons", "Sauce burger maison"], steps: ["Caraméliser les oignons", "Smasher la viande sur plaque très chaude pour la croûte", "Fondre le double fromage", "Griller le pain et dresser"] } },
      ar: { name: "تشيز برغر كلاسيكي", origin: "أمريكا", difficulty: "متوسط", cost: "حوالي 12.00 د.ت", description: "شريحة لحم بقري طرية ومشوية مع جبن ذائب في خبز محمص.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["خبز برغر", "150غ شريحة لحم مفروم", "شريحة جبن", "ملعقة كاتشب"], steps: ["اشوِ اللحم في مقلاة حارة 4 دقائق لكل جهة", "أضف الجبن ليذوب في الدقيقة الأخيرة", "ضعه في الخبز مع الكاتشب"] }, hard: { time: "30 دقيقة", temp: "عالي", ingredients: ["خبز بريوش", "150غ لحم مفروم طازج (20% دهن)", "شريحتان شيدر", "نصف بصلة", "صلصة برغر (مايونيز/كاتشب/مخلل)"], steps: ["كرمل البصل في الزبدة", "اضغط اللحم بقوة في مقلاة شديدة الحرارة (سماش برغر) لطبقة مقرمشة", "ذوب شريحتي الجبن", "حمص الخبز بالزبدة ورتب البرغر مع الصلصة السرية"] } }
    }
  },
  {
    id: "int_29", tags: ["european", "pasta", "beef", "student", "boiled"], emoji: "🍝", difficultyCSS: "medium",
    translations: {
      en: { name: "Spaghetti Bolognese", origin: "Italy", difficulty: "Medium", cost: "Est. 8.00 DT", description: "A hearty and satisfying pasta dish coated in a rich tomato and beef sauce.", simple: { time: "25 mins", temp: "Medium", ingredients: ["200g Spaghetti", "200g Ground beef", "1 cup Jarred tomato sauce", "1/2 Onion (chopped)"], steps: ["Boil pasta in salted water", "Fry beef and onion until browned", "Add jarred sauce, simmer 10 mins", "Mix sauce heavily into the pasta"] }, hard: { time: "4 hours", temp: "Low", ingredients: ["250g Fresh tagliatelle", "300g Beef & Pork mince", "50g Pancetta", "1 Carrot, 1 Celery, 1 Onion", "Splash of Red wine", "2 cups Tomato passata", "Parmigiano"], steps: ["Finely dice veg and slow-cook (sofrito)", "Brown the meats heavily, deglaze pan with wine", "Add passata and simmer uncovered for 3-4 hours", "Toss with fresh pasta and mountains of parmesan"] } },
      fr: { name: "Spaghetti Bolognaise", origin: "Italie", difficulty: "Moyen", cost: "Env. 8.00 DT", description: "Un plat de pâtes copieux enrobé d'une riche sauce tomate et viande.", simple: { time: "25 mins", temp: "Moyen", ingredients: ["200g Spaghetti", "200g Bœuf haché", "1 tasse Sauce tomate en pot", "1/2 Oignon"], steps: ["Cuire les pâtes", "Frire viande et oignon", "Ajouter sauce et mijoter 10 mins", "Mélanger avec les pâtes"] }, hard: { time: "4 heures", temp: "Doux", ingredients: ["250g Tagliatelles fraîches", "300g Hachis mixte", "50g Pancetta", "Carotte/Céleri/Oignon", "Vin rouge", "Passata de tomate"], steps: ["Faire suer le sofrito (légumes)", "Dorer la viande, déglacer au vin", "Ajouter la tomate et mijoter 3 à 4h", "Mélanger aux pâtes fraîches avec du parmesan"] } },
      ar: { name: "سباغيتي بولونيز", origin: "إيطاليا", difficulty: "متوسط", cost: "حوالي 8.00 د.ت", description: "طبق مكرونة مشبع بصلصة الطماطم واللحم المفروم الغنية.", simple: { time: "25 دقيقة", temp: "متوسط", ingredients: ["200غ سباغيتي", "200غ لحم مفروم", "كوب صلصة طماطم جاهزة", "نصف بصلة مقطعة"], steps: ["اسلق المكرونة", "اقلي اللحم والبصل حتى ينضج", "أضف الصلصة الجاهزة واتركها تغلي 10 دقائق", "اخلطها مع المكرونة"] }, hard: { time: "4 ساعات", temp: "هادئ", ingredients: ["250غ تاغلياتلي طازجة", "300غ لحم مفروم", "50غ بانشيتا", "جزرة، كرفس، بصل", "رشة مرق لحم", "كوبان طماطم مهروسة (باساتا)"], steps: ["افرم الخضار ناعماً واطبخها ببطء", "حمر اللحم جيداً", "أضف الطماطم", "اتركها تطبخ ببطء بدون غطاء لـ 3-4 ساعات ليتعزز الطعم"] } }
    }
  },
  {
    id: "int_30", tags: ["middleEastern", "vegan", "healthy", "cheap", "student", "fried"], emoji: "🧆", difficultyCSS: "medium",
    translations: {
      en: { name: "Falafel Wrap", origin: "Middle East", difficulty: "Medium", cost: "Est. 4.00 DT", description: "Crispy, herbaceous chickpea fritters wrapped in flatbread with fresh veggies.", simple: { time: "15 mins", temp: "High", ingredients: ["4 Frozen falafel balls", "1 Large Pita bread", "1/4 cup Chopped lettuce/Tomato", "2 tbsp Hummus"], steps: ["Fry or bake frozen falafel until hot", "Spread hummus on pita bread", "Mash falafels slightly, add veggies", "Wrap tightly and eat"] }, hard: { time: "24 hours", temp: "High", ingredients: ["1 cup Dry chickpeas", "1/2 cup Fresh parsley & coriander", "3 cloves Garlic & 1 Onion", "1 tsp Cumin & Coriander", "2 tbsp Tahini sauce", "Frying oil"], steps: ["Soak chickpeas overnight (do not boil)", "Grind raw soaked chickpeas with fresh herbs and spices in food processor", "Form balls and deep fry at 170°C until dark brown", "Make fresh tahini drizzle and assemble wrap"] } },
      fr: { name: "Wrap au Falafel", origin: "Moyen-Orient", difficulty: "Moyen", cost: "Env. 4.00 DT", description: "Boulettes de pois chiches croustillantes dans un pain plat avec crudités.", simple: { time: "15 mins", temp: "Fort", ingredients: ["4 Boulettes de falafel surgelé", "1 Pain pita", "Salade/Tomate", "2 c.à.s Houmous"], steps: ["Cuire le falafel", "Tartiner le pain de houmous", "Écraser un peu les falafels, ajouter légumes et rouler"] }, hard: { time: "24 heures", temp: "Fort", ingredients: ["1 tasse Pois chiches secs", "Persil & Coriandre frais", "Ail & Oignon", "Cumin", "Sauce Tahini"], steps: ["Tremper les pois chiches (ne pas cuire)", "Hacher crus avec herbes et épices", "Frire à 170°C", "Faire sauce tahini et dresser le wrap"] } },
      ar: { name: "ساندويتش فلافل", origin: "الشرق الأوسط", difficulty: "متوسط", cost: "حوالي 4.00 د.ت", description: "كرات حمص مقرمشة ومليئة بالأعشاب ملفوفة في خبز مع الخضار.", simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["4 حبات فلافل مجمدة", "رغيف خبز عربي", "خس وطماطم مقطعة", "ملعقتان حمص"], steps: ["اقلي أو اخبز الفلافل حتى تسخن", "ادهن الحمص على الخبز", "اهرس الفلافل قليلاً وأضف الخضار ولف الساندويتش"] }, hard: { time: "24 ساعة", temp: "عالي", ingredients: ["كوب حمص جاف", "نصف كوب بقدونس وكزبرة طازجة", "3 فصوص ثوم وبصلة", "ملعقة صغيرة كمون", "صلصة طحينة", "زيت للقلي"], steps: ["انقع الحمص ليلة كاملة (لا تسلقه!)", "افرم الحمص النيء مع الأعشاب والبهارات في محضرة الطعام", "شكل كرات واقليها حتى يصبح لونها بنياً غامقاً", "حضر صلصة الطحينة الطازجة ولف الساندويتش"] } }
    }
  },
  {
    id: "int_31", tags: ["european", "cheesy", "healthy", "cheap", "vegan"], emoji: "🍅", difficultyCSS: "easy",
    translations: {
      en: { name: "Caprese Salad", origin: "Italy", difficulty: "Easy", cost: "Est. 5.00 DT", description: "A simple, fresh, and beautiful salad of tomatoes, mozzarella, and basil.", simple: { time: "5 mins", temp: "None", ingredients: ["2 Medium Tomatoes", "1 ball Mozzarella cheese", "2 tbsp Olive oil", "Pinch of Salt & Pepper"], steps: ["Slice tomatoes and cheese", "Arrange them alternating on a plate", "Drizzle generously with oil, salt, and pepper"] }, hard: { time: "15 mins", temp: "Low", ingredients: ["2 large Heirloom tomatoes", "1 ball Fresh Buffalo Mozzarella", "Handful Fresh basil leaves", "1/4 cup Balsamic vinegar", "Extra virgin olive oil", "Flaky sea salt"], steps: ["Simmer balsamic vinegar in a tiny pot until it reduces into a thick sweet glaze", "Thickly slice heirloom tomatoes and salt them", "Layer with hand-torn buffalo mozzarella and whole basil leaves", "Drizzle with glaze and premium oil"] } },
      fr: { name: "Salade Caprese", origin: "Italie", difficulty: "Facile", cost: "Env. 5.00 DT", description: "Une salade simple et fraîche de tomates, mozzarella et basilic.", simple: { time: "5 mins", temp: "Aucune", ingredients: ["2 Tomates", "1 Boule de Mozzarella", "2 c.à.s Huile d'olive", "Sel & Poivre"], steps: ["Trancher tomates et fromage", "Dresser en alternant sur une assiette", "Verser l'huile et assaisonner"] }, hard: { time: "15 mins", temp: "Doux", ingredients: ["2 Tomates anciennes", "Mozzarella di Bufala", "Basilic frais", "Vinaigre balsamique", "Fleur de sel"], steps: ["Réduire le vinaigre en sirop", "Trancher les tomates et saler", "Alterner avec mozza déchirée à la main et basilic", "Napper de sirop et huile premium"] } },
      ar: { name: "سلطة كابريزي", origin: "إيطاليا", difficulty: "س��ل", cost: "حوالي 5.00 د.ت", description: "سلطة بسيطة وطازجة من الطماطم والموزاريلا والريحان.", simple: { time: "5 دقائق", temp: "لا يوجد", ingredients: ["حبتان طماطم", "كرة جبن موزاريلا", "ملعقتان زيت زيتون", "رشة ملح وفلفل"], steps: ["قطع الطماطم والجبن لشرائح", "رتبها بالتناوب في صحن", "رش الزيت والملح والفلفل بسخاء"] }, hard: { time: "15 دقيقة", temp: "هادئ", ingredients: ["حبتان طماطم عضوية", "موزاريلا بافلو طازجة", "ريحان طازج", "ربع كوب خل بلسميك", "زيت زيتون بكر", "ملح بحري"], steps: ["اغلِ الخل البلسميك في قدر صغير حتى يتكثف ويصبح كالشربات", "قطع الطماطم سميكة ورشها بالملح", "رتبها مع الموزاريلا المقطعة باليد وأوراق الريحان", "زينها بقطرات الخل والزيت الفاخر"] } }
    }
  },
  {
    id: "int_32", tags: ["american", "dessert", "cheap", "student"], emoji: "🥞", difficultyCSS: "easy",
    translations: {
      en: { name: "Fluffy Pancakes", origin: "USA", difficulty: "Easy", cost: "Est. 3.00 DT", description: "Classic breakfast treat: thick, soft pancakes stacked high with syrup.", simple: { time: "15 mins", temp: "Medium", ingredients: ["1 cup Pancake mix", "3/4 cup Water or Milk", "Maple Syrup or Honey", "Butter for pan"], steps: ["Mix batter until just combined (lumps are fine)", "Pour circles into a buttered hot pan", "Flip when bubbles pop on the surface, serve with syrup"] }, hard: { time: "30 mins", temp: "Medium", ingredients: ["1.5 cups Flour", "1.25 cups Buttermilk", "2 Eggs", "2 tsp Baking powder & 1/2 tsp Baking soda", "1 tsp Vanilla", "Maple syrup"], steps: ["Separate egg whites and whip to stiff peaks", "Mix dry ingredients, gently stir in egg yolks and buttermilk", "Carefully fold in whipped egg whites (keeps them fluffy)", "Cook slowly in clarified butter"] } },
      fr: { name: "Pancakes Moelleux", origin: "USA", difficulty: "Facile", cost: "Env. 3.00 DT", description: "Le classique du petit-déj : des pancakes épais et doux avec du sirop.", simple: { time: "15 mins", temp: "Moyen", ingredients: ["1 tasse Préparation pancake", "3/4 tasse Eau ou Lait", "Sirop ou Miel", "Beurre"], steps: ["Mélanger", "Verser de petits ronds à la poêle", "Retourner quand des bulles éclatent en surface"] }, hard: { time: "30 mins", temp: "Moyen", ingredients: ["1.5 tasse Farine", "1.25 tasse Lait ribot", "2 Oeufs", "Levure & Bicarbonate", "Vanille", "Sirop d'érable"], steps: ["Monter les blancs en neige", "Mélanger le reste", "Incorporer les blancs très délicatement", "Cuire doucement au beurre clarifié"] } },
      ar: { name: "بان كيك هش", origin: "أمريكا", difficulty: "سهل", cost: "حوالي 3.00 د.ت", description: "فطور كلاسيكي: أقراص بان كيك سميكة وطرية مغطاة بالشراب.", simple: { time: "15 دقيقة", temp: "متوسط", ingredients: ["كوب خليط بان كيك جاهز", "ثلاثة أرباع كوب ماء أو حليب", "عسل أو شراب القيقب", "زبدة للمقلاة"], steps: ["اخلط العجين (لا بأ�� ببعض التكتلات)", "اسكبه دوائر في مقلاة مدهونة بالزبدة", "اقلبه عندما تظهر فقاعات على السطح وتنفجر"] }, hard: { time: "30 دقيقة", temp: "متوسط", ingredients: ["كوب ونصف دقيق", "كوب وربع لبن (Buttermilk)", "بيضتان", "ملعقتان صغيرتان بيكنج باودر ونصف ملعقة بيكربونات", "فانيليا", "شراب القيقب"], steps: ["افصل بياض البيض واخفقه حتى يشتد كالثلج", "اخلط المكونات الجافة مع صفار البيض واللبن برفق", "أضف بياض البيض بلطف شديد (للحفاظ على الهواء)", "اطبخه ببطء في زبدة مصفاة"] } }
    }
  },
  {
    id: "int_33", tags: ["asian", "beef", "healthy", "expensive", "fried"], emoji: "🥩", difficultyCSS: "hard",
    translations: {
      en: { name: "Beef & Broccoli Stir-fry", origin: "China", difficulty: "Hard", cost: "Est. 16.00 DT", description: "Tender strips of beef and crisp broccoli tossed in a rich, savory garlic-ginger sauce.", simple: { time: "20 mins", temp: "High", ingredients: ["200g Beef strips", "2 cups Frozen broccoli", "3 tbsp Soy sauce", "2 cloves Garlic (minced)"], steps: ["Fry beef strips quickly in hot oil", "Add broccoli and cook for 3 mins", "Toss with soy sauce and minced garlic, serve"] }, hard: { time: "40 mins", temp: "High", ingredients: ["300g Flank steak", "1 tsp Baking soda (for velveting)", "2 cups Fresh broccoli", "3 tbsp Oyster sauce", "1 tbsp Minced Ginger", "Sesame oil"], steps: ["Velvet the beef: coat with baking soda for 15 mins, then rinse", "Blanch broccoli in boiling water", "Sear beef in a blazing hot wok", "Combine with homemade brown sauce (oyster, soy, cornstarch) and thicken"] } },
      fr: { name: "Sauté de Bœuf au Brocoli", origin: "Chine", difficulty: "Difficile", cost: "Env. 16.00 DT", description: "Bœuf tendre et brocoli croquant dans une sauce riche à l'ail et gingembre.", simple: { time: "20 mins", temp: "Fort", ingredients: ["200g Lamelles de bœuf", "2 tasses Brocoli surgelé", "3 c.à.s Sauce soja", "Ail"], steps: ["Sauter le bœuf rapidement", "Ajouter le brocoli", "Mélanger avec soja et ail"] }, hard: { time: "40 mins", temp: "Fort", ingredients: ["300g Bavette", "Bicarbonate (pour attendrir)", "Brocoli frais", "Sauce huître", "Gingembre"], steps: ["Attendrir la viande au bicarbonate 15 mins puis rincer", "Blanchir le brocoli", "Saisir au wok", "Lier avec une sauce brune (huître, soja, maïzena)"] } },
      ar: { name: "لحم وبطاطا مقلية (بيف بروكلي)", origin: "الصين", difficulty: "صعب", cost: "حوالي 16.00 د.ت", description: "شرائح لحم طرية وبروكلي مقرمش بصلصة غنية بالثوم والزنجبيل.", simple: { time: "20 دقيقة", temp: "عالي", ingredients: ["200غ شرائح لحم", "كوبان بروكلي مجمد", "3 ملاعق صويا صوص", "ثوم مفروم"], steps: ["اقلي اللحم بسرعة في زيت حار", "أضف البروكلي واطبخ 3 دقائق", "قلب مع الصويا والثوم وقدمه"] }, hard: { time: "40 دقيقة", temp: "عالي", ingredients: ["300غ ستيك", "ملعقة صغيرة بيكربونات (لتطرية اللحم)", "بروكلي طازج", "3 ملاعق صلصة المحار", "زنجبيل مفروم"], steps: ["طرِّ اللحم: غلفه بالبيكربونات لـ 15 دقيقة ثم اغسله", "اسلق البروكلي قليلاً", "اشوِ اللحم في ووك شديد الحرارة", "اخلط الكل بصلصة بنية (صلصة محار، صويا، نشا) حتى تتكثف"] } }
    }
  },
  {
    id: "int_34", tags: ["middleEastern", "dessert", "cheap"], emoji: "🍮", difficultyCSS: "easy",
    translations: {
      en: { name: "Mouhalabiya (Milk Pudding)", origin: "Middle East", difficulty: "Easy", cost: "Est. 3.50 DT", description: "A delicate, creamy, floral-scented milk pudding topped with crushed nuts.", simple: { time: "15 mins", temp: "Medium", ingredients: ["2 cups Milk", "3 tbsp Cornstarch", "3 tbsp Sugar", "1 tsp Vanilla extract"], steps: ["Whisk cornstarch and sugar into cold milk until dissolved", "Heat on stove, stirring constantly until thick", "Pour into cups and chill in the fridge"] }, hard: { time: "20 mins", temp: "Medium", ingredients: ["2 cups Whole milk", "3 tbsp Cornstarch", "2 tbsp Orange blossom water", "1/4 cup Crushed Pistachios", "1 piece Mastic gum (ground with sugar)"], steps: ["Grind mastic gum with a pinch of sugar", "Cook milk, cornstarch, and mastic until perfectly silky", "Remove from heat, stir in blossom water", "Pour into beautiful glasses, chill, garnish thickly with pistachios"] } },
      fr: { name: "Mouhalabiya (Flan au lait)", origin: "Moyen-Orient", difficulty: "Facile", cost: "Env. 3.50 DT", description: "Un flan au lait crémeux et parfumé aux fleurs, garni de noix concassées.", simple: { time: "15 mins", temp: "Moyen", ingredients: ["2 tasses Lait", "3 c.à.s Maïzena", "3 c.à.s Sucre", "Vanille"], steps: ["Délayer la maïzena et le sucre à froid", "Chauffer en remuant jusqu'à épaississement", "Mettre en verrines et réfrigérer"] }, hard: { time: "20 mins", temp: "Moyen", ingredients: ["Lait entier", "Maïzena", "Eau de fleur d'oranger", "Pistaches concassées", "Gomme mastic"], steps: ["Broyer le mastic", "Cuire le flan avec le mastic", "Hors du feu, parfumer à l'eau de fleur", "Garnir de pistaches avant de servir"] } },
      ar: { name: "مهلبية", origin: "الشرق الأوسط", difficulty: "سهل", cost: "حوالي 3.50 د.ت", description: "بودينج حليب كريمي معطر بماء الزهر ومزين بالمكسرات.", simple: { time: "15 دقيقة", temp: "متوسط", ingredients: ["كوبان حليب", "3 ملاعق كبيرة نشا", "3 ملاعق كبيرة سكر", "ملعقة صغيرة فانيليا"], steps: ["ذوب النشا والسكر في حليب بارد", "سخنه على النار مع التحريك المستمر حتى يتكثف", "اسكبه في أكواب وبرده في الثلاجة"] }, hard: { time: "20 دقيقة", temp: "متوسط", ingredients: ["كوبان حليب كامل الدسم", "3 ملاعق نشا", "ملعقتان ماء زهر", "فستق حلبي مطحون", "حبة مستكة (مطحونة مع السكر)"], steps: ["اطحن المستكة مع رشة سكر", "اطبخ الحليب والنشا والمستكة لقوام حريري", "ارفعها عن النار وأضف ماء الزهر", "اسكبها في كؤوس للتقديم، بردها، وزينها بطبقة كثيفة من الفستق"] } }
    }
  },
  {
    id: "int_35", tags: ["european", "pasta", "beef", "cheesy", "expensive", "boiled"], emoji: "🥘", difficultyCSS: "hard",
    translations: {
      en: { name: "Classic Lasagna", origin: "Italy", difficulty: "Hard", cost: "Est. 20.00 DT", description: "Layers of wide pasta, rich meat sauce, and creamy béchamel, baked to perfection.", simple: { time: "1 hour", temp: "Oven", ingredients: ["6 No-boil lasagna sheets", "2 cups Jarred meat sauce", "1 cup Ricotta cheese", "2 cups Grated Mozzarella"], steps: ["Spread sauce on bottom of a baking dish", "Layer pasta, sauce, ricotta, and mozzarella twice", "Bake for 45 mins at 190°C", "Let rest 10 mins before cutting"] }, hard: { time: "3 hours", temp: "Medium", ingredients: ["Fresh pasta sheets", "3 cups Homemade Beef Ragù", "2 cups Homemade Béchamel", "1 cup Parmigiano-Reggiano", "Nutmeg"], steps: ["Make a slow-cooked 3-hour meat ragù", "Whisk a perfect butter/flour/milk béchamel seasoned with nutmeg", "Layer carefully 5 times: Pasta, Ragù, Béchamel, Parmigiano", "Bake until top is dark golden and bubbly"] } },
      fr: { name: "Lasagnes Classiques", origin: "Italie", difficulty: "Difficile", cost: "Env. 20.00 DT", description: "Couches de pâtes, sauce viande riche et béchamel crémeuse, cuites au four.", simple: { time: "1 heure", temp: "Four", ingredients: ["6 Feuilles de lasagne sans précuisson", "2 tasses Sauce bolognaise en pot", "Ricotta", "Mozzarella râpée"], steps: ["Mettre un fond de sauce", "Alterner pâtes, sauce, ricotta et mozzarella", "Cuire 45 mins à 190°C", "Laisser reposer avant de couper"] }, hard: { time: "3 heures", temp: "Moyen", ingredients: ["Pâtes fraîches", "Ragù de bœuf maison", "Béchamel maison", "Parmesan", "Muscade"], steps: ["Faire un ragù mijoté 3h", "Préparer la béchamel à la muscade", "Monter 5 étages: Pâte, Ragù, Béchamel, Parmesan", "Gratiner au four"] } },
      ar: { name: "لازانيا كلاسيكية", origin: "إيطاليا", difficulty: "صعب", cost: "حوالي 20.00 د.ت", description: "طبقات من المكرونة العريضة وصلصة اللحم والبشاميل الكريمي، مخبوزة في الفرن.", simple: { time: "ساعة", temp: "فرن", ingredients: ["6 شرائح لازانيا (لا تحتاج سلق)", "كوبان صلصة لحم جاهزة", "كوب جبن ريكوتا", "كوبان موزاريلا مبشورة"], steps: ["ضع القليل من الصلصة في قاع الصينية", "رتب طبقات المكرونة والصلصة والريكوتا والموزاريلا", "اخبزها لـ 45 دقيقة على 190 درجة", "اتركها ترتاح 10 دقائق قبل التقطيع"] }, hard: { time: "3 ساعات", temp: "متوسط", ingredients: ["مكرونة طازجة", "صلصة راغو لحم منزلية مطبوخة ببطء", "صلصة بشاميل منزلي", "جبن بارميزان", "جوزة الطيب"], steps: ["حضر الراغو ببطء لمدة 3 ساعات", "حضر البشاميل وتبله بجوزة الطيب", "رتب 5 طبقات بحذر: مكرونة، راغو، بشاميل، بارميزان", "اخبزها حتى تحمر وتصبح ذهبية ومقرمشة من الأعلى"] } }
    }
  }
];

// ---------------------------------------------------------
// APP LOGIC
// ---------------------------------------------------------

let currentLang = "en";
let currentFood = null;
const RECENT_LIMIT = 6;
let recentIds = loadJson("lettuceRecentIds", []);
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
  
  loadingLine: document.getElementById("loadingLine"),
  funnyLoadingText: document.getElementById("funnyLoadingText"),
  hintLine: document.getElementById("hintLine"), 
  
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
  healthyOnly: document.getElementById("healthyOnly"),
  
  tunisianStyle: document.getElementById("tunisianStyle"),
  asianStyle: document.getElementById("asianStyle"),
  americanStyle: document.getElementById("americanStyle"),
  europeanStyle: document.getElementById("europeanStyle"),
  middleEasternStyle: document.getElementById("middleEasternStyle"),
  
  withChicken: document.getElementById("withChicken"),
  withBeef: document.getElementById("withBeef"),
  loveFish: document.getElementById("loveFish"),
  withCheese: document.getElementById("withCheese"),
  withPasta: document.getElementById("withPasta"),
  friedOnly: document.getElementById("friedOnly"),
  vegan: document.getElementById("vegan"),
  withDessert: document.getElementById("withDessert"),
  
  noChicken: document.getElementById("noChicken"),
  noBeef: document.getElementById("noBeef"),
  noFish: document.getElementById("noFish"),
  noCheese: document.getElementById("noCheese"),
  noSpicy: document.getElementById("noSpicy"),
  noSweets: document.getElementById("noSweets"),
  
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
  
  const savedTheme = loadStr("lettuceTheme", "light");
  setTheme(savedTheme);
  
  const introDone = loadStr("lettuceIntroDone", "0") === "1";
  if (!introDone) openIntro();
  
  if (!hintShown && els.hintLine) {
    els.hintLine.classList.remove("hidden");
    hintShown = true;
    saveStr("lettuceHintShown", "1");
    setTimeout(() => els.hintLine.classList.add("hidden"), 6000);
  }
  
  wireEvents();
}

function wireEvents() {
  if (els.heroActions && els.stickyBar) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) els.stickyBar.classList.add("visible");
        else els.stickyBar.classList.remove("visible");
      });
    }, { threshold: 0.1 });
    observer.observe(els.heroActions);
  }

  els.languageSelect?.addEventListener("change", (e) => {
    currentLang = e.target.value;
    saveStr("lettuceLang", currentLang);
    applyLanguage(currentLang);
    if (currentFood) renderFood(currentFood);
    if (els.recipeModal && !els.recipeModal.classList.contains("hidden")) {
      const isLazy = (els.modalModeEmoji?.textContent || "").includes("🟢");
      openRecipe(isLazy ? "simple" : "hard");
    }
  });

  els.themeToggleBtn?.addEventListener("click", () => {
    const isLight = document.body.classList.contains("theme-light");
    setTheme(isLight ? "dark" : "light");
  });

  els.helpBtn?.addEventListener("click", openIntro);

  const animateClick = (btn) => {
    if (!btn) return;
    btn.classList.remove("pop");
    void btn.offsetWidth;
    btn.classList.add("pop");
  };

  const bindBtn = (btn, action) => {
    if (!btn) return;
    btn.addEventListener("click", () => { animateClick(btn); action(); });
  };

  bindBtn(els.discoverBtnTop, () => handleDiscover(false));
  bindBtn(els.discoverBtnSticky, () => handleDiscover(false));
  bindBtn(els.introDiscoverBtn, () => { closeIntro(true); handleDiscover(false); });
  
  bindBtn(els.dailyPickBtnTop, () => handleDiscover(true));
  bindBtn(els.dailyPickBtnSticky, () => handleDiscover(true));

  bindBtn(els.preferencesBtnTop, togglePreferences);
  bindBtn(els.preferencesBtnSticky, togglePreferences);
  bindBtn(els.openPreferencesBtn2, togglePreferences);
  bindBtn(els.introPreferencesBtn, () => { closeIntro(true); togglePreferences(); });

  els.closePreferencesBtn?.addEventListener("click", closePreferences);
  els.resetFiltersBtn?.addEventListener("click", resetFilters);
  els.applyFiltersBtn?.addEventListener("click", () => { closePreferences(); handleDiscover(false); });
  els.relaxFiltersBtn?.addEventListener("click", () => { resetFilters(); closePreferences(); handleDiscover(false); });

  els.lazyModeBtn?.addEventListener("click", () => openRecipe("simple"));
  els.chefModeBtn?.addEventListener("click", () => openRecipe("hard"));

  els.closeIntroBtn?.addEventListener("click", () => closeIntro(true));
  els.closeRecipeBtn?.addEventListener("click", closeRecipe);
  
  document.querySelectorAll('.modal__backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => { closeIntro(true); closeRecipe(); });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closePreferences(); closeRecipe(); closeIntro(true); }
  });
}

function setTheme(mode) {
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(mode === "light" ? "theme-light" : "theme-dark");
  saveStr("lettuceTheme", mode);
  if (els.themeToggleBtn) els.themeToggleBtn.textContent = mode === "light" ? "🌙" : "☀️";
}

function applyLanguage(lang) {
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  const dict = translations[lang] || translations.en;
  
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    if (key === "brand") { el.textContent = "Lettuce Guess"; return; }
    if (key === "brandPill" && lang === 'en') { el.textContent = translations.en.brandPill; return; }
    if (dict[key] != null) el.textContent = dict[key];
  });
}

let isPrefsOpen = false;
function togglePreferences() {
  if (!els.preferencesPanel) return;
  isPrefsOpen = !isPrefsOpen;
  
  if (isPrefsOpen) {
    els.preferencesPanel.classList.remove("hidden");
    els.preferencesPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    els.preferencesPanel.classList.add("hidden");
  }
}

function closePreferences() { 
  els.preferencesPanel?.classList.add("hidden"); 
  isPrefsOpen = false;
}

function resetFilters() {
  const ids = [
    "studentOnly","cheapOnly","expensiveOnly","healthyOnly",
    "tunisianStyle","asianStyle","americanStyle","europeanStyle","middleEasternStyle",
    "withChicken","withBeef","loveFish","withCheese","withPasta","friedOnly","vegan","withDessert",
    "noChicken","noBeef","noFish","noCheese","noSpicy","noSweets"
  ];
  ids.forEach((id) => { const el = document.getElementById(id); if (el) el.checked = false; });
}

function openIntro() { els.introModal?.classList.remove("hidden"); }
function closeIntro(markDone) { 
  els.introModal?.classList.add("hidden"); 
  if (markDone) saveStr("lettuceIntroDone", "1"); 
}

function handleDiscover(isDailyPick) {
  els.result?.classList.add("hidden");
  els.notFound?.classList.add("hidden");
  
  const ui = translations[currentLang] || translations.en;
  showLoadingLine(ui.funnyTexts);
  
  const filters = readFilters();
  const pool = filterDatabase(foodDatabase, filters);
  
  setTimeout(() => {
    hideLoadingLine();
    if (pool.length === 0) { 
      els.notFound?.classList.remove("hidden");
      els.notFound?.scrollIntoView({ behavior: "smooth", block: "center" });
      return; 
    }
    
    const picked = isDailyPick ? deterministicDailyPick(pool) : smartPick(pool);
    currentFood = picked; 
    rememberPick(picked); 
    renderFood(picked);
    
    els.result?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 800);
}

function readFilters() {
  return {
    include: {
      student: !!els.studentOnly?.checked, cheap: !!els.cheapOnly?.checked, expensive: !!els.expensiveOnly?.checked, healthy: !!els.healthyOnly?.checked,
      tunisian: !!els.tunisianStyle?.checked, asian: !!els.asianStyle?.checked, american: !!els.americanStyle?.checked, european: !!els.europeanStyle?.checked, middleEastern: !!els.middleEasternStyle?.checked,
      chicken: !!els.withChicken?.checked, beef: !!els.withBeef?.checked, fish: !!els.loveFish?.checked, cheesy: !!els.withCheese?.checked, pasta: !!els.withPasta?.checked, fried: !!els.friedOnly?.checked, vegan: !!els.vegan?.checked, dessert: !!els.withDessert?.checked
    },
    exclude: { 
      chicken: !!els.noChicken?.checked, beef: !!els.noBeef?.checked, fish: !!els.noFish?.checked, cheesy: !!els.noCheese?.checked, spicy: !!els.noSpicy?.checked, dessert: !!els.noSweets?.checked 
    }
  };
}

function filterDatabase(db, filters) {
  return db.filter((food) => {
    const tags = food.tags || [];
    
    // Process Exclusions
    if (filters.exclude.fish && tags.includes("fish")) return false;
    if (filters.exclude.chicken && tags.includes("chicken")) return false;
    if (filters.exclude.beef && tags.includes("beef")) return false;
    if (filters.exclude.spicy && tags.includes("spicy")) return false;
    if (filters.exclude.cheesy && tags.includes("cheesy")) return false;
    if (filters.exclude.dessert && tags.includes("dessert")) return false;
    
    // Process Inclusions (AND logic - if it's checked, the recipe MUST have the tag)
    for (const [tag, isChecked] of Object.entries(filters.include)) {
      if (isChecked && !tags.includes(tag)) return false;
    }
    
    return true;
  });
}

function deterministicDailyPick(pool) {
  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  return pool[Math.abs(hash) % pool.length];
}

function smartPick(pool) {
  const lastId = currentFood?.id;
  let candidates = pool.filter((f) => f.id !== lastId && !recentIds.includes(f.id));
  if (candidates.length === 0) candidates = pool.filter((f) => f.id !== lastId);
  if (candidates.length === 0) candidates = pool.slice();
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function rememberPick(food) {
  if (!food?.id) return;
  recentIds = [food.id, ...recentIds.filter((x) => x !== food.id)].slice(0, RECENT_LIMIT);
  saveJson("lettuceRecentIds", recentIds);
}

function renderFood(food) {
  if (!food) return;
  const t = food.translations?.[currentLang] || food.translations?.en;
  if (!t) return;
  
  els.result?.classList.remove("hidden");
  
  const card = els.result.querySelector('.result-card');
  if(card) {
    card.classList.remove('bounce-in');
    void card.offsetWidth;
    card.classList.add('bounce-in');
  }
  
  if (els.foodEmoji) els.foodEmoji.textContent = food.emoji || "🍲";
  if (els.foodName) els.foodName.textContent = t.name || "Meal";
  if (els.foodOrigin) els.foodOrigin.textContent = `🌍 ${t.origin || ""}`;
  if (els.foodCost) els.foodCost.textContent = t.cost || "";
  
  if (els.foodDifficulty) {
    els.foodDifficulty.className = "pill"; 
    const diff = (food.difficultyCSS || "").toLowerCase();
    let textStr = t.difficulty || "—";
    
    if (diff === "easy") els.foodDifficulty.classList.add("badge-green");
    else if (diff === "medium") els.foodDifficulty.classList.add("badge-gold");
    else if (diff === "hard") els.foodDifficulty.classList.add("badge-red");
    else els.foodDifficulty.classList.add("badge-blue");
    
    els.foodDifficulty.textContent = textStr.toUpperCase();
  }
  
  if (els.foodDesc) els.foodDesc.textContent = t.description || "";
}

function openRecipe(mode) {
  if (!currentFood) return;
  const t = currentFood.translations?.[currentLang] || currentFood.translations?.en;
  if (!t) return;
  const r = t[mode];
  if (!r) return;
  
  const ui = translations[currentLang] || translations.en;
  if (els.modalModeEmoji) els.modalModeEmoji.textContent = mode === "simple" ? "🟢" : "🔴";
  if (els.modalTitle) els.modalTitle.textContent = mode === "simple" ? ui.lazyMode : ui.chefMode;
  if (els.timeVal) els.timeVal.textContent = r.time || "N/A";
  if (els.tempVal) els.tempVal.textContent = r.temp || "N/A";
  
  if (els.modalIngredients) {
    els.modalIngredients.innerHTML = "";
    (r.ingredients || []).forEach((ing) => { 
      const li = document.createElement("li"); 
      li.textContent = ing; 
      els.modalIngredients.appendChild(li); 
    });
  }
  if (els.modalSteps) {
    els.modalSteps.innerHTML = "";
    (r.steps || []).forEach((step) => { 
      const li = document.createElement("li"); 
      li.textContent = step; 
      els.modalSteps.appendChild(li); 
    });
  }
  els.recipeModal?.classList.remove("hidden");
}

function closeRecipe() { els.recipeModal?.classList.add("hidden"); }

function showLoadingLine(funnyTexts) {
  const arr = Array.isArray(funnyTexts) ? funnyTexts : (translations.en.funnyTexts || ["Thinking..."]);
  const msg = arr[Math.floor(Math.random() * arr.length)];
  if (els.loadingLine) els.loadingLine.classList.remove("hidden");
  if (els.funnyLoadingText) els.funnyLoadingText.textContent = msg;
}
function hideLoadingLine() { els.loadingLine?.classList.add("hidden"); }

function loadStr(key, fallback = "") { try { const v = localStorage.getItem(key); return v == null ? fallback : v; } catch { return fallback; } }
function saveStr(key, value) { try { localStorage.setItem(key, value); } catch {} }
function loadJson(key, fallback) { try { const raw = localStorage.getItem(key); if (!raw) return fallback; return JSON.parse(raw); } catch { return fallback; } }
function saveJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
