/* =========================================
   Lettuce Guess — Final Engine
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
    lazyMode: "Lazy Mode",
    lazyHint: "Fast, cheap, microwave-friendly.",
    chefMode: "Chef Mode",
    chefHint: "Use the stove, impress your friends.",
    ingredients: "Ingredients & Spices",
    steps: "Instructions",
    footerText: "Helping students eat better, one click at a time.",
    rights: "All rights reserved.",
    introTagline: "Pick a meal in seconds.",
    introText: "Welcome! Use Discover to get a random meal. Open Preferences to filter by budget, style, and ingredients. Tap again for a new suggestion.",
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
    lazyMode: "Mode Fainéant",
    lazyHint: "Rapide, pas cher, micro-ondes.",
    chefMode: "Mode Chef",
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
    lazyMode: "وضع الكسل",
    lazyHint: "سريع، رخيص، ومناسب للميكروويف.",
    chefMode: "وضع الطاهي",
    chefHint: "استخدم الموقد وأبهر أصدقاءك.",
    ingredients: "المكونات والبهارات",
    steps: "طريقة التحضير",
    footerText: "نساعد الطلاب على تناول طعام أفضل بضغطة زر.",
    rights: "جميع الحقوق محفوظة.",
    introTagline: "اختر وجبة في ثوانٍ.",
    introText: "مرحبًا! استخدم «اكتشف» للحصول على وجبة عشوائية. افتح «التفضيلات» للتصفية. اضغط مرة أخرى لاقتراح جديد.",
    startDiscover: "ابدأ",
    funnyTexts: ["جاري فحص محفظتك...", "نبحث عن شيء سريع ولذيذ...", "نتجنب الأكل الممل...", "ننوّع قائمة اليوم...", "جاري حساب الميزانية..."]
  }
};

/* ---------- Complete Recipe Database ---------- */
const foodDatabase = [
  {
    id: "tun_1",
    tags: ["fried", "fish", "student", "tunisian", "cheap"],
    emoji: "🥟",
    difficultyCSS: "medium",
    translations: {
      en: { 
        name: "Tunisian Brika", origin: "Tunisia", difficulty: "Medium", cost: "Est. 3.00 DT", description: "A perfectly crispy triangle pastry, stuffed with tuna, parsley, and a runny egg.", 
        simple: { time: "10 mins", temp: "Medium", ingredients: ["Brik pastry", "Tuna", "Egg", "Parsley"], steps: ["Mix tuna and parsley", "Crack egg inside pastry", "Fry until golden"] },
        hard: { time: "20 mins", temp: "Medium High", ingredients: ["Brik pastry", "Tuna", "Capers", "Potato", "Egg"], steps: ["Boil and mash potato", "Mix with tuna and capers", "Fold pastry", "Fry carefully"] }
      },
      fr: { 
        name: "Brik Tunisien", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 3.00 DT", description: "Un triangle de pâte croustillante, farci au thon, persil et un œuf coulant.", 
        simple: { time: "10 mins", temp: "Moyen", ingredients: ["Feuille de brik", "Thon", "Oeuf", "Persil"], steps: ["Mélanger thon et persil", "Casser l'oeuf", "Frire"] },
        hard: { time: "20 mins", temp: "Moyen Fort", ingredients: ["Feuille de brik", "Thon", "Câpres", "Pomme de terre", "Oeuf"], steps: ["Écraser la pomme de terre", "Mélanger", "Frire"] }
      },
      ar: { 
        name: "بريك تونسي", origin: "تونس", difficulty: "متوسط", cost: "حوالي 3.00 د.ت", description: "مثلث عجين مقرمش محشو بالتونة، البقدونس، وبيضة.", 
        simple: { time: "10 دقائق", temp: "متوسط", ingredients: ["ملسوقة", "تونة", "بيضة", "بقدونس"], steps: ["اخلط التونة", "أضف البيضة", "اقليها"] },
        hard: { time: "20 دقائق", temp: "عالي", ingredients: ["ملسوقة", "تونة", "كبار", "بطاطا", "بيضة"], steps: ["اسلق البطاطا", "اخلط المكونات", "اقليها بحذر"] }
      }
    }
  },
  {
    id: "tun_2",
    tags: ["boiled", "student", "spicy", "vegan", "tunisian", "cheap"],
    emoji: "🥣",
    difficultyCSS: "easy",
    translations: {
      en: { 
        name: "Spicy Lablebi", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.50 DT", description: "The ultimate cheap, garlicky chickpea street-food soup poured over day-old bread.", 
        simple: { time: "15 mins", temp: "High", ingredients: ["Canned chickpeas", "Stale bread", "Harissa", "Garlic", "Cumin"], steps: ["Heat chickpeas with garlic", "Break bread into bowl", "Pour soup", "Add harissa"] },
        hard: { time: "12 hours", temp: "Low", ingredients: ["Dry chickpeas", "Bread", "Harissa", "Olive oil", "Tuna", "Egg"], steps: ["Soak chickpeas overnight", "Boil until soft", "Assemble bowl with toppings"] }
      },
      fr: { 
        name: "Lablebi Épicé", origin: "Tunisie", difficulty: "Facile", cost: "Env. 3.50 DT", description: "Soupe de rue pas chère aux pois chiches et à l'ail, versée sur du pain de la veille.", 
        simple: { time: "15 mins", temp: "Fort", ingredients: ["Pois chiches en conserve", "Pain rassis", "Harissa", "Ail", "Cumin"], steps: ["Chauffer pois chiches", "Couper pain", "Verser", "Ajouter harissa"] },
        hard: { time: "12 heures", temp: "Doux", ingredients: ["Pois chiches secs", "Pain", "Harissa", "Huile", "Thon", "Oeuf"], steps: ["Tremper la veille", "Bouillir", "Dresser le bol"] }
      },
      ar: { 
        name: "لبلابي حار", origin: "تونس", difficulty: "سهل", cost: "حوالي 3.50 د.ت", description: "حساء الشارع الشهير والرخيص بالحمص والثوم.", 
        simple: { time: "15 دقيقة", temp: "عالي", ingredients: ["حمص معلب", "خبز بايت", "هريسة", "ثوم", "كمون"], steps: ["سخن الحمص", "فتت الخبز", "اسكب الحساء"] },
        hard: { time: "12 ساعة", temp: "هادئ", ingredients: ["حمص جاف", "خبز", "هريسة", "زيت", "تونة", "بيضة"], steps: ["انقع الحمص", "اغله", "قدمه مع الإضافات"] }
      }
    }
  },
  {
    id: "tun_3",
    tags: ["boiled", "tunisian", "expensive"],
    emoji: "🥘",
    difficultyCSS: "hard",
    translations: {
      en: { 
        name: "Traditional Mloukhiya", origin: "Tunisia", difficulty: "Hard", cost: "Est. 25.00 DT", description: "A rich, dark green stew simmered for hours, made with jute leaf powder and beef.", 
        simple: { time: "2 hours", temp: "Low", ingredients: ["Mloukhiya powder", "Oil", "Garlic", "Beef chunks"], steps: ["Mix powder with oil", "Add boiling water", "Add meat and garlic", "Simmer"] },
        hard: { time: "5 hours", temp: "Very Low", ingredients: ["Mloukhiya powder", "Olive oil", "Beef", "Bay leaves", "Coriander", "Garlic"], steps: ["Fry powder in oil", "Slowly add water while stirring", "Add spiced meat", "Simmer for 4+ hours until oil separates"] }
      },
      fr: { 
        name: "Mloukhiya", origin: "Tunisie", difficulty: "Difficile", cost: "Env. 25.00 DT", description: "Ragoût vert foncé riche, mijoté pendant des heures avec de la viande.", 
        simple: { time: "2 heures", temp: "Doux", ingredients: ["Poudre de Mloukhiya", "Huile", "Viande"], steps: ["Mélanger", "Ajouter l'eau", "Mijoter"] },
        hard: { time: "5 heures", temp: "Très Doux", ingredients: ["Poudre", "Huile d'olive", "Boeuf", "Laurier", "Ail"], steps: ["Frire la poudre", "Ajouter l'eau lentement", "Mijoter jusqu'à séparation de l'huile"] }
      },
      ar: { 
        name: "ملوخية دياري", origin: "تونس", difficulty: "صعب", cost: "حوالي 25.00 د.ت", description: "يخنة غنية وداكنة تُطبخ لساعات من مسحوق الملوخية واللحم.", 
        simple: { time: "ساعتان", temp: "هادئ", ingredients: ["ملوخية مرحية", "زيت", "لحم"], steps: ["اخلط الزيت والملوخية", "أضف الماء الساخن", "أضف اللحم واتركه يطبخ"] },
        hard: { time: "5 ساعات", temp: "هادئ جدا", ingredients: ["ملوخية", "زيت زيتون", "لحم بقري", "رند", "ثوم"], steps: ["اقلي الملوخية", "أضف الماء تدريجيا", "أضف اللحم المتبل", "اتركها تطبخ حتى يطفو الزيت"] }
      }
    }
  },
  {
    id: "int_5",
    tags: ["student", "boiled", "cheap"],
    emoji: "🍝",
    difficultyCSS: "medium",
    translations: {
      en: { 
        name: "Garlic Butter Pasta", origin: "Italy", difficulty: "Medium", cost: "Est. 4.00 DT", description: "A 5-star tasting meal made from standard, cheap pantry ingredients.", 
        simple: { time: "15 mins", temp: "Medium", ingredients: ["Pasta", "Butter", "Garlic", "Salt"], steps: ["Boil pasta", "Melt butter and fry garlic", "Toss pasta in butter"] },
        hard: { time: "25 mins", temp: "Medium", ingredients: ["Spaghetti", "High-quality Butter", "Fresh Garlic", "Parmesan", "Parsley", "Pasta water"], steps: ["Boil pasta al dente", "Brown garlic in butter", "Emulsify with pasta water", "Toss with cheese and herbs"] }
      },
      fr: { 
        name: "Pâtes Beurre et Ail", origin: "Italie", difficulty: "Moyen", cost: "Env. 4.00 DT", description: "Un repas 5 étoiles réalisé avec des ingrédients simples et pas chers.", 
        simple: { time: "15 mins", temp: "Moyen", ingredients: ["Pâtes", "Beurre", "Ail"], steps: ["Cuire pâtes", "Fondre le beurre et ail", "Mélanger"] },
        hard: { time: "25 mins", temp: "Moyen", ingredients: ["Spaghetti", "Beurre", "Ail frais", "Parmesan", "Persil"], steps: ["Cuire al dente", "Émulsionner beurre et eau de cuisson", "Mélanger avec fromage"] }
      },
      ar: { 
        name: "مكرونة بالثوم والزبدة", origin: "إيطاليا", difficulty: "متوسط", cost: "حوالي 4.00 د.ت", description: "وجبة بمذاق 5 نجوم بمكونات بسيطة ورخيصة.", 
        simple: { time: "15 دقيقة", temp: "متوسط", ingredients: ["مكرونة", "زبدة", "ثوم"], steps: ["اسلق المكرونة", "ذوب الزبدة مع الثوم", "اخلطهم"] },
        hard: { time: "25 دقيقة", temp: "متوسط", ingredients: ["سباغيتي", "زبدة جيدة", "ثوم طازج", "بارميزان", "بقدونس"], steps: ["اسلق المكرونة جيدا", "حمر الثوم", "اصنع صوص بماء السلق", "أضف الجبن"] }
      }
    }
  },
  {
    id: "int_10",
    tags: ["chicken", "fried", "expensive", "spicy"],
    emoji: "🍗",
    difficultyCSS: "hard",
    translations: {
      en: { 
        name: "Spicy Fried Chicken", origin: "USA", difficulty: "Hard", cost: "Est. 18.00 DT", description: "Golden, ultra-crispy fried chicken with heavy spices.", 
        simple: { time: "30 mins", temp: "High", ingredients: ["Chicken cuts", "Flour", "Hot sauce", "Oil"], steps: ["Coat chicken in hot sauce then flour", "Fry in deep oil until crispy"] },
        hard: { time: "24 hours", temp: "High", ingredients: ["Chicken", "Buttermilk", "Cayenne", "Flour", "Cornstarch", "Frying Oil"], steps: ["Marinate chicken in buttermilk and spices overnight", "Double coat in seasoned flour", "Deep fry at exactly 170°C"] }
      },
      fr: { 
        name: "Poulet Frit Épicé", origin: "USA", difficulty: "Difficile", cost: "Env. 18.00 DT", description: "Poulet frit doré et ultra-croustillant avec beaucoup d'épices.", 
        simple: { time: "30 mins", temp: "Fort", ingredients: ["Poulet", "Farine", "Sauce piquante", "Huile"], steps: ["Tremper dans sauce puis farine", "Frire"] },
        hard: { time: "24 heures", temp: "Fort", ingredients: ["Poulet", "Lait ribot", "Piment", "Farine", "Huile"], steps: ["Mariner 24h", "Double panure", "Frire à 170°C"] }
      },
      ar: { 
        name: "دجاج مقلي حار", origin: "أمريكا", difficulty: "صعب", cost: "حوالي 18.00 د.ت", description: "دجاج مقلي ذهبي ومقرمش جداً ومليء بالبهارات.", 
        simple: { time: "30 دقيقة", temp: "عالي", ingredients: ["دجاج", "دقيق", "صلصة حارة", "زيت"], steps: ["غمس الدجاج في الصلصة والدقيق", "اقليه في الزيت"] },
        hard: { time: "24 ساعة", temp: "عالي", ingredients: ["دجاج", "حليب رائب", "فلفل حار", "دقيق", "نشا", "زيت غسير"], steps: ["انقع الدجاج ليلة كاملة", "غلفه مرتين", "اقليه في درجة 170 مئوية"] }
      }
    }
  }
];

let currentLang = "en";
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
  // Mobile sticky bar observer
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

  // Buttons with tiny pop animation
  const animateClick = (btn) => {
    if (!btn) return;
    btn.classList.remove("pop");
    void btn.offsetWidth; // trigger reflow
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
  
  // Close modals on background click
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
  const ids = ["studentOnly","cheapOnly","expensiveOnly","tunisianStyle","asianStyle","withChicken","loveFish","friedOnly","vegan","noFish","noChicken","noSpicy"];
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
    
    const picked = isDailyPick ? deterministicDailyPick(pool) : smartPick(pool, filters);
    currentFood = picked; 
    rememberPick(picked); 
    renderFood(picked);
    
    els.result?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 800); // 800ms fake loading delay for a fun effect
}

function readFilters() {
  return {
    include: {
      studentOnly: !!els.studentOnly?.checked, cheapOnly: !!els.cheapOnly?.checked, expensiveOnly: !!els.expensiveOnly?.checked,
      tunisianStyle: !!els.tunisianStyle?.checked, asianStyle: !!els.asianStyle?.checked,
      withChicken: !!els.withChicken?.checked, loveFish: !!els.loveFish?.checked, friedOnly: !!els.friedOnly?.checked, vegan: !!els.vegan?.checked
    },
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
  
  // Re-trigger CSS animation
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
