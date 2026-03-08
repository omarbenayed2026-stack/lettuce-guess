/* =========================================
   Lettuce Guess — smarter guessing + alive UI
   (Works with index.html + styles.css above)
   ========================================= */

/* ---------- I18N ---------- */
const translations = {
  en: {
    brand: "Lettuce Guess",
    brandPill: "fast • cheap • tasty",
    welcome: "Lettuce find something to prepare! 🥬",
    seoIntro:
      "Welcome to the ultimate random recipe generator. We help students and lazy cooks find delicious, budget-friendly meals. Choose your preferences, then hit Discover.",
    discover: "Discover",
    discoverHint: "Tip: tap Discover again for a new meal.",
    dailyPick: "Menu of the Day",
    preferences: "Preferences",
    customize: "Customize your craving",
    includeTitle: "Include",
    excludeTitle: "Blacklist (Exclude)",
    studentFriendly: "Student Friendly",
    cheap: "Cheap (< 6 DT)",
    expensive: "Costs money",
    tunisianStyle: "Tunisian",
    asianStyle: "Asian",
    withChicken: "Chicken",
    fish: "Fish",
    fried: "Fried",
    vegan: "Vegan",
    noFish: "No Fish",
    noChicken: "No Chicken",
    noSpicy: "No Spicy",
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
    introText:
      "Welcome! Use Discover to get a random meal. Open Preferences to filter by budget, style, and ingredients. Tap again for a new suggestion (we also try to avoid repeats).",
    introF1Title: "One-tap suggestions",
    introF1Sub: "Discover stays visible at the bottom.",
    introF2Title: "Budget aware",
    introF2Sub: "Cheap vs costs money tags + DT estimates.",
    introF3Title: "Smarter variety",
    introF3Sub: "Avoids repeats and tries to mix cuisines.",
    startDiscover: "Start discovering",
    funnyTexts: [
      "Checking your wallet...",
      "Finding something fast (and tasty)...",
      "Avoiding boring meals...",
      "Mixing up your menu...",
      "Doing the budget math..."
    ]
  },

  fr: {
    brand: "Lettuce Guess",
    brandPill: "rapide • pas cher • bon",
    welcome: "Trouvons quelque chose à préparer ! 🥬",
    seoIntro:
      "Le générateur de recettes pour étudiants. Choisissez vos préférences puis appuyez sur Découvrir.",
    discover: "Découvrir",
    discoverHint: "Astuce : appuyez encore sur Découvrir pour une nouvelle idée.",
    dailyPick: "Menu du jour",
    preferences: "Préférences",
    customize: "Personnalisez",
    includeTitle: "Inclure",
    excludeTitle: "Liste noire (Exclure)",
    studentFriendly: "Pour étudiant",
    cheap: "Pas cher (< 6 DT)",
    expensive: "Ça coûte",
    tunisianStyle: "Tunisien",
    asianStyle: "Asiatique",
    withChicken: "Poulet",
    fish: "Poisson",
    fried: "Frit",
    vegan: "Végan",
    noFish: "Sans poisson",
    noChicken: "Sans poulet",
    noSpicy: "Pas épicé",
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
    contact: "Contact/Feedback :",
    introTagline: "Choisis un plat en quelques secondes.",
    introText:
      "Bienvenue ! Utilisez Découvrir pour une recette aléatoire. Ouvrez Préférences pour filtrer par budget, style et ingrédients. Appuyez à nouveau pour une autre suggestion (on évite aussi les répétitions).",
    introF1Title: "Suggestions en un clic",
    introF1Sub: "Découvrir reste visible en bas.",
    introF2Title: "Budget",
    introF2Sub: "Tags pas cher / ça coûte + estimation DT.",
    introF3Title: "Variété",
    introF3Sub: "Évite les répétitions et mélange les cuisines.",
    startDiscover: "Commencer",
    funnyTexts: [
      "Vérification du portefeuille...",
      "On cherche quelque chose de rapide...",
      "On évite les plats ennuyeux...",
      "On mélange ton menu...",
      "Calcul du budget..."
    ]
  },

  ar: {
    brand: "Lettuce Guess",
    brandPill: "سريع • رخيص • لذيذ",
    welcome: "Lettuce Guess سيختار لك ماذا تطبخ! 🥬",
    seoIntro:
      "مولّد وصفات عشوائية للطلاب والطهاة الكسالى. اختر تفضيلاتك ثم اضغط «اكتشف».",
    discover: "اكتشف",
    discoverHint: "نصيحة: اضغط «اكتشف» مرة أخرى لاقتراح جديد.",
    dailyPick: "طبق اليوم",
    preferences: "التفضيلات",
    customize: "خصص رغباتك",
    includeTitle: "إضافة",
    excludeTitle: "القائمة السوداء (استبعاد)",
    studentFriendly: "مناسب للطلاب",
    cheap: "رخيص (أقل من 6 د.ت)",
    expensive: "مكلف",
    tunisianStyle: "تونسي",
    asianStyle: "آسيوي",
    withChicken: "دجاج",
    fish: "سمك",
    fried: "مقلي",
    vegan: "نباتي",
    noFish: "بدون سمك",
    noChicken: "بدون دجاج",
    noSpicy: "غير حار",
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
    contact: "للتواصل/الملاحظات:",
    introTagline: "اختر وجبة في ثوانٍ.",
    introText:
      "مرحبًا! استخدم «اكتشف» للحصول على وجبة عشوائية. افتح «التفضيلات» للتصفية حسب الميزانية والنوع والمكونات. اضغط مرة أخرى لاقتراح جديد (ونحاول تجنب التكرار).",
    introF1Title: "اقتراح بضغطة واحدة",
    introF1Sub: "زر «اكتشف» يبقى ظاهرًا في الأسفل.",
    introF2Title: "مراعاة الميزانية",
    introF2Sub: "رخيص/مكلف + تقدير بالدينار.",
    introF3Title: "تنويع أذكى",
    introF3Sub: "يتجنب التكرار ويحاول تنويع الأطباق.",
    startDiscover: "ابدأ",
    funnyTexts: [
      "جاري فحص محفظتك...",
      "نبحث عن شيء سريع ولذيذ...",
      "نتجنب الأكل الممل...",
      "ننوّع قائمة اليوم...",
      "جاري حساب الميزانية..."
    ]
  }
};

let currentLang = "en";

/* ---------- Recipe Database (+5 new recipes translated) ---------- */
const foodDatabase = [
  /* existing recipes from your snippet */
  {
    id: "tun_1",
    tags: ["fried", "fish", "student", "tunisian", "cheap"],
    emoji: "🥟",
    difficultyCSS: "medium",
    translations: {
      en: {
        name: "Tunisian Brika",
        origin: "Tunisia",
        difficulty: "Medium",
        cost: "Est. 3.00 DT",
        description:
          "A perfectly crispy triangle pastry, stuffed with tuna, parsley, and a runny egg.",
        simple: {
          time: "10 mins",
          temp: "Medium-High (Stove)",
          ingredients: [
            "1 Malsouka sheet",
            "Canned Tuna",
            "1 Egg",
            "Chopped Parsley & Onion",
            "Pinch of Black Pepper & Salt"
          ],
          steps: [
            "Mix tuna, parsley, onion, salt, and black pepper.",
            "Place the mixture on the Malsouka sheet and make a small hole in the middle.",
            "Crack the egg into the hole.",
            "Fold into a triangle quickly and fry in hot oil for 2-3 mins per side until golden."
          ]
        },
        hard: {
          time: "25 mins",
          temp: "Medium-High",
          ingredients: [
            "Malsouka",
            "Tuna",
            "Capers",
            "Boiled Potato",
            "1 Egg",
            "Black Pepper",
            "Tabil (Tunisian Spice)"
          ],
          steps: [
            "Boil and mash 1 potato. Mix it with a pinch of Tabil, black pepper, tuna, and capers.",
            "Spread the filling on the sheet, crack the egg inside.",
            "Fold into a triangle and fry in hot oil until deeply crispy."
          ]
        }
      },
      fr: {
        name: "Brik Tunisien",
        origin: "Tunisie",
        difficulty: "Moyen",
        cost: "Env. 3.00 DT",
        description:
          "Un triangle de pâte croustillante, farci au thon, persil et un œuf coulant.",
        simple: {
          time: "10 mins",
          temp: "Feu Vif",
          ingredients: [
            "1 Feuille de Malsouka",
            "Thon",
            "1 Œuf",
            "Persil et oignon hachés",
            "Sel & Poivre"
          ],
          steps: [
            "Mélanger thon, persil, oignon et épices.",
            "Placer sur la feuille, faire un creux.",
            "Casser l'œuf dedans.",
            "Plier en triangle et frire 2-3 mins par face."
          ]
        },
        hard: {
          time: "25 mins",
          temp: "Feu Vif",
          ingredients: ["Malsouka", "Thon", "Câpres", "Pomme de terre", "1 Œuf", "Poivre", "Tabel"],
          steps: [
            "Écraser la pomme de terre bouillie, mélanger avec Tabel, thon et câpres.",
            "Placer la farce, ajouter l'œuf.",
            "Frire dans l'huile bien chaude."
          ]
        }
      },
      ar: {
        name: "بريك تونسي",
        origin: "تونس",
        difficulty: "متوسط",
        cost: "حوالي 3.00 د.ت",
        description: "مثلث عجين مقرمش محشو بالتونة، البقدونس، وبيضة سائلة.",
        simple: {
          time: "10 دقائق",
          temp: "نار متوسطة-��الية",
          ingredients: ["ورقة ملسوقة", "تونة", "بيضة", "بقدونس وبصل مقطع", "ملح وفلفل أسود"],
          steps: [
            "اخلط التونة، البقدونس، البصل، والبهارات.",
            "ضع الخليط على الملسوقة واصنع حفرة صغيرة.",
            "اكسر البيضة داخل الحفرة.",
            "اطوها على شكل مثلث واقليها في زيت ساخن حتى تصبح ذهبية."
          ]
        },
        hard: {
          time: "25 دقيقة",
          temp: "نار عالية",
          ingredients: ["ملسوقة", "تونة", "كَبَر", "بطاطا مسلوقة", "بيضة", "فلفل أسود", "تابل وكروية"],
          steps: [
            "اسلق البطاطا واهرسها، اخلطها مع التابل والتونة والكبر.",
            "ضع الحشوة والبيضة على الورقة.",
            "اقليها في زيت ساخن جداً حتى تقرمش."
          ]
        }
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
        name: "Spicy Lablebi",
        origin: "Tunisia",
        difficulty: "Easy",
        cost: "Est. 3.50 DT",
        description:
          "The ultimate cheap, garlicky chickpea street-food soup poured over day-old bread.",
        simple: {
          time: "15 mins",
          temp: "Boiling",
          ingredients: [
            "1 Can Chickpeas",
            "1 tbsp Harissa",
            "Stale Baguette",
            "2 cloves Garlic (crushed)",
            "1 tsp Cumin",
            "Olive Oil"
          ],
          steps: [
            "Boil chickpeas in their water with crushed garlic, cumin, and salt for 10 minutes.",
            "Tear the stale bread into small pieces in a bowl.",
            "Pour the boiling soup over the bread. Top with Harissa, olive oil, and extra cumin."
          ]
        },
        hard: {
          time: "2 hours",
          temp: "Low Simmer",
          ingredients: ["Dried Chickpeas", "Garlic", "Harissa", "Olive Oil", "Cumin", "Canned Tuna", "1 Soft-Boiled Egg"],
          steps: [
            "Soak chickpeas overnight. Boil them for 2 hours until very soft.",
            "Prepare a bowl with torn bread.",
            "Add the hot chickpeas and broth. Top heavily with olive oil, cumin, Harissa, tuna, and mix the soft-boiled egg in."
          ]
        }
      },
      fr: {
        name: "Lablebi Épicé",
        origin: "Tunisie",
        difficulty: "Facile",
        cost: "Env. 3.50 DT",
        description:
          "Soupe de rue pas chère aux pois chiches et à l'ail, versée sur du pain de la veille.",
        simple: {
          time: "15 mins",
          temp: "Ébullition",
          ingredients: ["Pois chiches en boîte", "Harissa", "Pain rassis", "Ail", "Cumin", "Huile d'olive"],
          steps: [
            "Bouillir les pois chiches avec l'ail et le cumin 10 mins.",
            "Déchirer le pain dans un bol.",
            "Verser la soupe brûlante. Ajouter harissa et huile d'olive."
          ]
        },
        hard: {
          time: "2 heures",
          temp: "Frémir",
          ingredients: ["Pois chiches secs", "Ail", "Harissa", "Huile d'olive", "Cumin", "Thon", "Œuf mollet"],
          steps: [
            "Tremper les pois chiches la nuit. Bouillir 2h.",
            "Mettre le pain dans un bol.",
            "Ajouter pois chiches, bouillon, huile, cumin, harissa, thon et l'œuf."
          ]
        }
      },
      ar: {
        name: "لبلابي حار",
        origin: "تونس",
        difficulty: "سهل",
        cost: "حوالي 3.50 د.ت",
        description:
          "حساء الشارع الشهير والرخيص بالحمص والثوم، يُسكب فوق الخبز البائت.",
        simple: {
          time: "15 دقيقة",
          temp: "غليان",
          ingredients: ["حمص معلب", "ملعقة هريسة", "خبز بائت", "ثوم مهروس", "كمون", "زيت زيتون"],
          steps: [
            "اغلي الحمص في مائه مع الثوم والكمون والملح لـ 10 دقائق.",
            "قطع الخبز البائت في وعاء.",
            "اسكب الحساء المغلي فوق الخبز وزينه بالهريسة وزيت الزيتون."
          ]
        },
        hard: {
          time: "ساعتان",
          temp: "نار هادئة",
          ingredients: ["حمص جاف", "ثوم", "هريسة", "زيت زيتون", "كمون", "تونة", "بيضة نصف مسلوقة"],
          steps: [
            "انقع الحمص طوال الليل واغله لساعتين حتى يلين جداً.",
            "حضر وعاء الخبز المقطع.",
            "أضف الحمص والمرق، وزينه بسخاء بزيت الزيتون والكمون والهريسة والتونة والبيضة."
          ]
        }
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
        name: "Traditional Mloukhiya",
        origin: "Tunisia",
        difficulty: "Hard",
        cost: "Est. 25.00 DT",
        description:
          "A rich, dark green stew simmered for hours, made with jute leaf powder and tender beef.",
        simple: {
          time: "3.5 hours",
          temp: "Low Heat",
          ingredients: ["Mloukhiya powder", "Olive Oil", "Beef chunks", "Minced Garlic", "Bay Leaves", "Tabil & Karwia"],
          steps: [
            "Mix the green powder with olive oil in a cold pot until it forms a paste.",
            "Turn on medium heat, gradually whisk in 1.5 liters of boiling water.",
            "Add garlic, bay leaves, Tabil, and beef.",
            "Cover and simmer on very low heat for 3 hours until the oil separates."
          ]
        },
        hard: {
          time: "5 hours",
          temp: "Lowest Heat",
          ingredients: ["Mloukhiya powder", "Premium Olive Oil", "Beef Shank", "Whole Head of Garlic", "Dried Mint", "Tabil & Karwia", "Bay Leaves"],
          steps: [
            "Marinate beef overnight with garlic, Tabil, Karwia, and salt.",
            "Fry the powder in olive oil for 3 minutes (do not burn).",
            "Whisk in boiling water.",
            "Simmer for 2 hours, add beef. Cook 3 more hours until oil separates."
          ]
        }
      },
      fr: {
        name: "Mloukhiya Traditionnelle",
        origin: "Tunisie",
        difficulty: "Difficile",
        cost: "Env. 25.00 DT",
        description:
          "Ragoût vert foncé riche, mijoté pendant des heures avec de la poudre de corète et du bœuf.",
        simple: {
          time: "3.5 heures",
          temp: "Feu Doux",
          ingredients: ["Poudre de Mloukhiya", "Huile d'olive", "Bœuf", "Ail", "Laurier", "Tabel & Karwia"],
          steps: [
            "Mélanger la poudre et l'huile à froid.",
            "Chauffer et ajouter l'eau bouillante.",
            "Ajouter ail, épices et viande.",
            "Mijoter à feu très doux 3h jusqu'à ce que l'huile remonte."
          ]
        },
        hard: {
          time: "5 heures",
          temp: "Feu Très Doux",
          ingredients: ["Mloukhiya", "Huile d'olive", "Jarret de bœuf", "Ail", "Menthe séchée", "Tabel & Karwia", "Laurier"],
          steps: [
            "Mariner la viande la nuit avec les épices.",
            "Frire la poudre dans l'huile 3 mins.",
            "Ajouter l'eau bouillante doucement.",
            "Mijoter 2h, ajouter la viande. Cuire encore 3h."
          ]
        }
      },
      ar: {
        name: "ملوخية دياري",
        origin: "تونس",
        difficulty: "صعب",
        cost: "حوالي 25.00 د.ت",
        description:
          "يخنة غنية وداكنة تُطبخ لساعات من مسحوق الملوخية ولحم البقر الطري.",
        simple: {
          time: "3.5 ساعات",
          temp: "نار هادئة",
          ingredients: ["مسحوق ملوخية", "زيت زيتون", "قطع لحم بقر", "ثوم", "رند (غار)", "تابل وكروية"],
          steps: [
            "اخلط المسحوق مع الزيت في قدر بارد.",
            "سخن القدر وأضف الماء المغلي تدريجياً.",
            "أضف الثوم والرند واللحم.",
            "اتركها تطبخ على نار هادئة جداً لـ 3 ساعات حتى يطفو الزيت."
          ]
        },
        hard: {
          time: "5 ساعات",
          temp: "نار هادئة جداً",
          ingredients: ["ملوخية", "زيت زيتون رفيع", "لحم بقر (هبرة)", "رأس ثوم كامل", "نعناع شايح", "تابل وكروية", "رند"],
          steps: [
            "تبل اللحم ليلة كاملة بالثوم والبهارات.",
            "اقلِ الملوخية في الزيت لـ 3 دقائق.",
            "أضف الماء المغلي مع التحريك المستمر.",
            "اطبخها لساعتين ثم أضف اللحم. اتركها 3 ساعات أخرى حتى يقر زيتها."
          ]
        }
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
        name: "Garlic Butter Pasta",
        origin: "Italy",
        difficulty: "Medium",
        cost: "Est. 4.00 DT",
        description: "A 5-star tasting meal made from standard, cheap pantry ingredients.",
        simple: {
          time: "15 mins",
          temp: "Boiling",
          ingredients: ["Spaghetti", "2 tbsp Butter", "1 tsp Garlic Powder", "Salt & Black Pepper", "Grated Cheese"],
          steps: [
            "Boil water, add salt, and cook pasta for 10 mins. Drain it.",
            "In the same hot pot, melt butter, add garlic powder and black pepper.",
            "Toss the pasta in the butter, top with cheese."
          ]
        },
        hard: {
          time: "20 mins",
          temp: "Medium Heat",
          ingredients: ["Spaghetti", "Real Butter", "4 cloves Fresh Garlic", "Fresh Parsley", "Chili Flakes", "Parmesan Cheese"],
          steps: [
            "Cook pasta, save half a cup of pasta water.",
            "In a pan, melt butter. Sauté fresh minced garlic and chili flakes for 2 mins.",
            "Add pasta and the saved water. Toss vigorously until a creamy sauce forms. Top with parsley."
          ]
        }
      },
      fr: {
        name: "Pâtes Beurre et Ail",
        origin: "Italie",
        difficulty: "Moyen",
        cost: "Env. 4.00 DT",
        description: "Un repas 5 étoiles réalisé avec des ingrédients simples et pas chers.",
        simple: {
          time: "15 mins",
          temp: "Ébullition",
          ingredients: ["Spaghetti", "Beurre", "Ail en poudre", "Sel & Poivre", "Fromage râpé"],
          steps: [
            "Cuire les pâtes 10 mins et égoutter.",
            "Fondre le beurre dans la casserole avec l'ail en poudre.",
            "Mélanger les pâtes et ajouter le fromage."
          ]
        },
        hard: {
          time: "20 mins",
          temp: "Feu Moyen",
          ingredients: ["Spaghetti", "Beurre", "Ail frais", "Persil", "Piment en flocons", "Parmesan"],
          steps: [
            "Cuire les pâtes, garder un peu d'eau de cuisson.",
            "Fondre le beurre, sauter l'ail et le piment 2 mins.",
            "Ajouter les pâtes et l'eau. Mélanger fort pour créer une sauce crémeuse."
          ]
        }
      },
      ar: {
        name: "مكرونة بالثوم والزبدة",
        origin: "إيطاليا",
        difficulty: "متوسط",
        cost: "حوالي 4.00 د.ت",
        description: "وجبة بمذاق 5 نجوم بمكونات رخيصة ومتوفرة في كل مطبخ.",
        simple: {
          time: "15 دقيقة",
          temp: "غليان",
          ingredients: ["سباغيتي", "زبدة", "بودرة ثوم", "ملح وفلفل أسود", "جبن مبشور"],
          steps: [
            "اسلق المكرونة لـ 10 دقائق وصفها.",
            "في نفس القدر، أذب الزبدة وأضف بودرة الثوم والفلفل.",
            "قلب المكرونة في الزبدة وزينها بالجبن."
          ]
        },
        hard: {
          time: "20 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["سباغيتي", "زبدة حيوانية", "ثوم طازج", "بقدونس طازج", "رقائق فلفل حار", "جبن بارميزان"],
          steps: [
            "اسلق المكرونة واحتفظ بنصف كوب من ماء السلق.",
            "أذب الزبدة وشوّح الثوم الطازج والفلفل لـ دقيقتين.",
            "أضف المكرونة وماء السلق. قلب بقوة حتى تتكون صلصة كريمية."
          ]
        }
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
        name: "Spicy Fried Chicken",
        origin: "USA",
        difficulty: "Hard",
        cost: "Est. 18.00 DT",
        description: "Golden, ultra-crispy fried chicken with heavy spices.",
        simple: {
          time: "25 mins",
          temp: "High Heat",
          ingredients: ["Chicken Breasts", "Flour", "2 Eggs", "Paprika, Garlic Powder, Salt, Black Pepper", "Frying Oil"],
          steps: [
            "Cut chicken into chunks.",
            "Mix flour with a heavy amount of paprika, salt, and pepper.",
            "Dip chicken in beaten egg, then in spiced flour.",
            "Fry in 170°C hot oil for 7-10 minutes until golden brown."
          ]
        },
        hard: {
          time: "12 hours",
          temp: "160°C Oil",
          ingredients: ["Bone-in Chicken pieces", "Lben (Buttermilk)", "Flour", "Cornstarch", "Red Chili Powder, Garlic, Onion, White Pepper"],
          steps: [
            "Marinate chicken overnight in Lben and hot sauce.",
            "Mix 2 parts flour, 1 part cornstarch, and spices.",
            "Dredge chicken in flour, pressing hard.",
            "Fry in deep oil for 12-15 minutes. Rest on a wire rack."
          ]
        }
      },
      fr: {
        name: "Poulet Frit Épicé",
        origin: "USA",
        difficulty: "Difficile",
        cost: "Env. 18.00 DT",
        description: "Poulet frit doré et ultra-croustillant avec beaucoup d'épices.",
        simple: {
          time: "25 mins",
          temp: "Feu Vif",
          ingredients: ["Blancs de poulet", "Farine", "2 Œufs", "Paprika, Ail, Sel, Poivre", "Huile de friture"],
          steps: ["Couper le poulet.", "Mélanger farine et épices.", "Tremper le poulet dans l'œuf puis la farine.", "Frire à 170°C pendant 7-10 mins."]
        },
        hard: {
          time: "12 heures",
          temp: "Huile 160°C",
          ingredients: ["Poulet avec os", "Lben (Babeurre)", "Farine", "Maïzena", "Piment rouge, Ail, Oignon, Poivre blanc"],
          steps: ["Mariner le poulet la nuit dans le Lben.", "Mélanger farine, maïzena et épices.", "Enrober le poulet en pressant fort.", "Frire 12-15 mins. Laisser reposer sur une grille."]
        }
      },
      ar: {
        name: "دجاج مقلي حار",
        origin: "أمريكا",
        difficulty: "صعب",
        cost: "حوالي 18.00 د.ت",
        description: "دجاج مقلي ذهبي ومقرمش جداً ومليء بالبهارات.",
        simple: {
          time: "25 دقيقة",
          temp: "نار عالية",
          ingredients: ["صدور دجاج", "دقيق", "بيضتان", "بابريكا، بودرة ثوم، ملح، فلفل أسود", "زيت قلي"],
          steps: ["قطع الدجاج إلى قطع.", "اخلط الدقيق مع البهارات.", "اغمس الدجاج في البيض ثم في الدقيق المتبل.", "اقله في زيت ساخن (170 درجة) لـ 7-10 دقائق."]
        },
        hard: {
          time: "12 ساعة",
          temp: "زيت 160 درجة",
          ingredients: ["دجاج بالعظم", "لبن", "دقيق", "نشا", "فلفل أحمر حار، ثوم، بصل، فلفل أبيض"],
          steps: ["انقع الدجاج ليلة كاملة في اللبن والصلصة الحارة.", "اخلط الدقيق والنشا والبهارات.", "غلف الدجاج بالخليط واضغط بقوة.", "اقله في زيت غزير لـ 12-15 دقيقة. دعه يرتاح على شبكة معدنية."]
        }
      }
    }
  },

  /* +5 NEW (same as I gave before) */
  {
    id: "tun_4",
    tags: ["student", "tunisian", "cheap", "fried"],
    emoji: "🍳",
    difficultyCSS: "easy",
    translations: {
      en: {
        name: "Tunisian Ojja (Eggs & Tomato)",
        origin: "Tunisia",
        difficulty: "Easy",
        cost: "Est. 4.50 DT",
        description: "Eggs poached in a spicy tomato-pepper sauce. Fast, filling, and student-proof.",
        simple: {
          time: "15 mins",
          temp: "Medium Heat (Stove)",
          ingredients: ["2 Eggs", "1 Tomato (or canned)", "1 tbsp Harissa (optional)", "Olive oil", "Salt & Black Pepper"],
          steps: [
            "Heat olive oil in a pan, add tomato (and harissa if you want).",
            "Simmer 5 minutes until saucy.",
            "Make 2 holes and crack the eggs.",
            "Cover 4–6 minutes until eggs set. Season and serve with bread."
          ]
        },
        hard: {
          time: "30 mins",
          temp: "Medium Heat",
          ingredients: ["3 Eggs", "Tomatoes", "Bell pepper", "Garlic", "Harissa", "Cumin", "Tabil", "Optional: merguez"],
          steps: [
            "Sauté garlic + pepper, then add tomatoes and spices.",
            "Simmer until thick. (Optional: add merguez and cook through.)",
            "Crack eggs, cover until set. Finish with olive oil."
          ]
        }
      },
      fr: {
        name: "Ojja Tunisienne (Œufs & Tomate)",
        origin: "Tunisie",
        difficulty: "Facile",
        cost: "Env. 4.50 DT",
        description: "Des œufs cuits dans une sauce tomate/poivron épicée. Rapide et rassasiant.",
        simple: {
          time: "15 mins",
          temp: "Feu Moyen",
          ingredients: ["2 Œufs", "1 Tomate (ou tomate en boîte)", "1 c.à.s Harissa (optionnel)", "Huile d'olive", "Sel & Poivre"],
          steps: [
            "Chauffer l'huile, ajouter la tomate (et harissa).",
            "Laisser mijoter 5 mins.",
            "Faire 2 trous et casser les œufs.",
            "Couvrir 4–6 mins. Assaisonner et servir avec du pain."
          ]
        },
        hard: {
          time: "30 mins",
          temp: "Feu Moyen",
          ingredients: ["3 Œufs", "Tomates", "Poivron", "Ail", "Harissa", "Cumin", "Tabel", "Option: merguez"],
          steps: [
            "Faire revenir ail + poivron, ajouter tomates et épices.",
            "Mijoter jusqu'à épaississement. (Option: ajouter merguez.)",
            "Casser les œufs, couvrir. Finir avec un filet d'huile d'olive."
          ]
        }
      },
      ar: {
        name: "عُجّة تونسية (بيض بالطماطم)",
        origin: "تونس",
        difficulty: "سهل",
        cost: "حوالي 4.50 د.ت",
        description: "بيض يطيب في صوص طماطم وفلفل حار. سريع ويشبع برشا.",
        simple: {
          time: "15 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["بيضتان", "طماطم (أو طماطم معلبة)", "ملعقة هريسة (اختياري)", "زيت زيتون", "ملح وفلفل أسود"],
          steps: [
            "سخّن زيت الزيتون وأضف الطماطم (والهريسة).",
            "خليه يطيب 5 دقايق حتى يولي صوص.",
            "اعمل حفرتين واكسر البيض.",
            "غطّي 4–6 دقايق. ملّح وفلفل وقدم مع الخبز."
          ]
        },
        hard: {
          time: "30 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["3 بيض", "طماطم", "فلفل حلو", "ثوم", "هريسة", "كمون", "تابل", "اختياري: مرڨاز"],
          steps: [
            "شوّح الثوم والفلفل، ثم أضف الطماطم والبهارات.",
            "خلّيه يثقل. (اختياري: أضف المرڨاز.)",
            "اكسر البيض وغطّي حتى يطيب."
          ]
        }
      }
    }
  },

  {
    id: "tun_5",
    tags: ["student", "tunisian", "cheap", "vegan"],
    emoji: "🌶️",
    difficultyCSS: "easy",
    translations: {
      en: {
        name: "Tunisian Slata Mechouia (Quick)",
        origin: "Tunisia",
        difficulty: "Easy",
        cost: "Est. 5.00 DT",
        description: "Smoky grilled salad made from peppers/tomatoes. Great with tuna/eggs, but tasty vegan too.",
        simple: {
          time: "20 mins",
          temp: "High Heat (Grill/Pan)",
          ingredients: ["2 Peppers", "1 Tomato", "Olive oil", "Salt", "Optional: garlic"],
          steps: [
            "Char peppers and tomato (stove flame, grill, or hot pan).",
            "Peel and chop everything.",
            "Mix with olive oil and salt. Eat with bread."
          ]
        },
        hard: {
          time: "35 mins",
          temp: "High Heat + Mix",
          ingredients: ["Peppers", "Tomatoes", "Garlic", "Olive oil", "Salt", "Cumin", "Optional toppings: tuna, eggs, olives"],
          steps: [
            "Grill until skins blacken, then peel.",
            "Chop finely (or mash).",
            "Season with olive oil + salt + cumin. Add toppings if you want."
          ]
        }
      },
      fr: {
        name: "Slata Mechouia (Rapide)",
        origin: "Tunisie",
        difficulty: "Facile",
        cost: "Env. 5.00 DT",
        description: "Salade grillée fumée à base de poivrons/tomates. Très bonne même en version vegan.",
        simple: {
          time: "20 mins",
          temp: "Feu Vif (Grill/Poêle)",
          ingredients: ["2 Poivrons", "1 Tomate", "Huile d'olive", "Sel", "Option: ail"],
          steps: [
            "Griller/faire noircir poivrons et tomate.",
            "Peler puis couper.",
            "Assaisonner huile d'olive + sel. Manger avec du pain."
          ]
        },
        hard: {
          time: "35 mins",
          temp: "Feu Vif + Mélange",
          ingredients: ["Poivrons", "Tomates", "Ail", "Huile d'olive", "Sel", "Cumin", "Option: thon, œufs, olives"],
          steps: [
            "Griller jusqu'à peau noire, puis peler.",
            "Hacher finement (ou écraser).",
            "Assaisonner huile + sel + cumin. Ajouter les toppings si besoin."
          ]
        }
      },
      ar: {
        name: "سلاطة مشوية (سريعة)",
        origin: "تونس",
        difficulty: "سهل",
        cost: "حوالي 5.00 د.ت",
        description: "سلاطة مشوية بنكهة دخان من الفلفل والطماطم. تنجم تاكلها نباتي زادة.",
        simple: {
          time: "20 دقيقة",
          temp: "نار عالية (شواية/مقلاة)",
          ingredients: ["فلفلتان", "طماطم", "زيت زيتون", "ملح", "اختياري: ثوم"],
          steps: [
            "شوّح/اشوي الفلفل والطماطم حتى تتفحم القشرة.",
            "قشّر وقطّع.",
            "اخلط بزيت زيتون وملح. كلّها مع الخبز."
          ]
        },
        hard: {
          time: "35 دقيقة",
          temp: "نار عالية + خلط",
          ingredients: ["فلفل", "طماطم", "ثوم", "زيت زيتون", "ملح", "كمون", "اختياري: تونة/بيض/زيتون"],
          steps: [
            "اشوي حتى تسود القشرة ثم قشّر.",
            "فرم مليح (أو اهرس).",
            "بهّر بزيت زيتون وملح وكمون. أضف الإضافات إذا تحب."
          ]
        }
      }
    }
  },

  {
    id: "int_11",
    tags: ["student", "cheap", "asian", "fried"],
    emoji: "🍚",
    difficultyCSS: "easy",
    translations: {
      en: {
        name: "Egg Fried Rice (Student)",
        origin: "Asia",
        difficulty: "Easy",
        cost: "Est. 5.50 DT",
        description: "The best way to use leftover rice. Fast, cheap, and addictive.",
        simple: {
          time: "15 mins",
          temp: "High Heat (Pan)",
          ingredients: ["Cooked rice (cold)", "2 Eggs", "Soy sauce", "Oil", "Optional: frozen veggies"],
          steps: [
            "Scramble eggs in a hot pan, set aside.",
            "Add oil + rice, fry 3–4 mins.",
            "Add soy sauce + veggies, mix.",
            "Return eggs, stir and serve."
          ]
        },
        hard: {
          time: "25 mins",
          temp: "High Heat",
          ingredients: ["Cooked rice", "Eggs", "Soy sauce", "Garlic", "Green onion", "Sesame oil (optional)", "Optional chicken"],
          steps: [
            "Fry garlic + onion quickly.",
            "Add rice and break up clumps.",
            "Season with soy + sesame oil.",
            "Add eggs (and chicken if using) and stir until hot."
          ]
        }
      },
      fr: {
        name: "Riz Cantonais (Étudiant)",
        origin: "Asie",
        difficulty: "Facile",
        cost: "Env. 5.50 DT",
        description: "Parfait pour utiliser du riz de la veille. Rapide, pas cher, et trop bon.",
        simple: {
          time: "15 mins",
          temp: "Feu Vif (Poêle)",
          ingredients: ["Riz cuit (froid)", "2 Œufs", "Sauce soja", "Huile", "Option: légumes surgelés"],
          steps: [
            "Brouiller les œufs, réserver.",
            "Ajouter huile + riz, faire sauter 3–4 mins.",
            "Ajouter soja + légumes, mélanger.",
            "Remettre les œufs, servir."
          ]
        },
        hard: {
          time: "25 mins",
          temp: "Feu Vif",
          ingredients: ["Riz cuit", "Œufs", "Sauce soja", "Ail", "Oignon vert", "Huile de sésame (option)", "Option: poulet"],
          steps: [
            "Faire revenir ail + oignon vert.",
            "Ajouter le riz et casser les blocs.",
            "Assaisonner avec soja + sésame.",
            "Ajouter œufs (et poulet si besoin) puis mélanger."
          ]
        }
      },
      ar: {
        name: "رز مقلي بالبيض (للطلاب)",
        origin: "آسيا",
        difficulty: "سهل",
        cost: "حوالي 5.50 د.ت",
        description: "أفضل طريقة لاستعمال رز البارح. سريع ورخيص ويجي بن��ن.",
        simple: {
          time: "15 دقيقة",
          temp: "نار عالية (مقلاة)",
          ingredients: ["رز مطبوخ (بارد)", "بيضتان", "صويا صوص", "زيت", "اختياري: خضرة مجمدة"],
          steps: [
            "اعمل بيض مخلوط في مقلاة سخونة وخليه على جنب.",
            "زيد زيت + رز وقلّيه 3–4 دقايق.",
            "زيد الصويا والخضرة وخلّط.",
            "رجّع البيض وقدم."
          ]
        },
        hard: {
          time: "25 دقيقة",
          temp: "نار عالية",
          ingredients: ["رز مطبوخ", "بيض", "صويا صوص", "ثوم", "بصل أخضر", "زيت سمسم (اختياري)", "اختياري: دجاج"],
          steps: [
            "شوّح الثوم والبصل الأخضر بسرعة.",
            "أضف الرز وفتّت الكتل.",
            "بهّر بالصويا وزيت السمسم.",
            "أضف البيض (والدجاج إذا تحب) وقلّب حتى يسخن."
          ]
        }
      }
    }
  },

  {
    id: "int_12",
    tags: ["student", "cheap", "vegan", "asian", "boiled"],
    emoji: "🍜",
    difficultyCSS: "easy",
    translations: {
      en: {
        name: "Soy Garlic Noodles",
        origin: "Asia",
        difficulty: "Easy",
        cost: "Est. 4.80 DT",
        description: "Quick noodles with a sweet-salty soy garlic sauce. Works with any pasta too.",
        simple: {
          time: "12 mins",
          temp: "Boiling + Pan",
          ingredients: ["Noodles (or spaghetti)", "Soy sauce", "Garlic", "Sugar (or honey)", "Oil"],
          steps: [
            "Boil noodles and drain.",
            "In a pan, heat oil + minced garlic 30 seconds.",
            "Add soy + a pinch of sugar, then noodles.",
            "Toss 1 minute and serve."
          ]
        },
        hard: {
          time: "20 mins",
          temp: "Medium Heat",
          ingredients: ["Noodles", "Soy sauce", "Garlic", "Ginger (optional)", "Chili flakes (optional)", "Green onion (optional)"],
          steps: [
            "Cook noodles.",
            "Sauté garlic (and ginger).",
            "Add soy + noodles, toss.",
            "Top with green onion (and chili if you want)."
          ]
        }
      },
      fr: {
        name: "Nouilles Sauce Soja-Ail",
        origin: "Asie",
        difficulty: "Facile",
        cost: "Env. 4.80 DT",
        description: "Nouilles rapides avec une sauce soja/ail sucrée-salée. Fonctionne aussi avec des pâtes.",
        simple: {
          time: "12 mins",
          temp: "Ébullition + Poêle",
          ingredients: ["Nouilles (ou spaghetti)", "Sauce soja", "Ail", "Sucre (ou miel)", "Huile"],
          steps: [
            "Cuire les nouilles et égoutter.",
            "Chauffer huile + ail 30 sec.",
            "Ajouter soja + pincée de sucre, puis nouilles.",
            "Mélanger 1 min et servir."
          ]
        },
        hard: {
          time: "20 mins",
          temp: "Feu Moyen",
          ingredients: ["Nouilles", "Sauce soja", "Ail", "Gingembre (option)", "Piment (option)", "Oignon vert (option)"],
          steps: [
            "Cuire les nouilles.",
            "Faire revenir ail (et gingembre).",
            "Ajouter soja + nouilles et mélanger.",
            "Ajouter oignon vert (et piment)."
          ]
        }
      },
      ar: {
        name: "نودلز بصوص الصويا والثوم",
        origin: "آسيا",
        difficulty: "سهل",
        cost: "حوالي 4.80 د.ت",
        description: "نودلز سريعة بصوص صويا وثوم حلو/مالح. تنجم تعملها حتى بالمكرونة.",
        simple: {
          time: "12 دقيقة",
          temp: "غليان + مقلاة",
          ingredients: ["نودلز (أو سباغيتي)", "صويا صوص", "ثوم", "سكر (أو عسل)", "زيت"],
          steps: [
            "اسلق النودلز وصفّها.",
            "في مقلاة: سخّن زيت + ثوم 30 ثانية.",
            "زيد الصويا ورشة سكر ثم النودلز.",
            "قلّب دقيقة وقدم."
          ]
        },
        hard: {
          time: "20 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["نودلز", "صويا صوص", "ثوم", "زنجبيل (اختياري)", "فلفل حار (اختياري)", "بصل أخضر (اختياري)"],
          steps: [
            "اسلق النودلز.",
            "شوّح الثوم (والزنجبيل).",
            "زيد الصويا والنودلز وقلّب.",
            "زيّن بالبصل الأخضر (والفلفل)."
          ]
        }
      }
    }
  },

  {
    id: "int_13",
    tags: ["student", "cheap", "boiled"],
    emoji: "🥔",
    difficultyCSS: "easy",
    translations: {
      en: {
        name: "Tuna Potato Bowl",
        origin: "International",
        difficulty: "Easy",
        cost: "Est. 5.80 DT",
        description: "Boiled potato + tuna + olive oil = the fastest high-protein meal.",
        simple: {
          time: "18 mins",
          temp: "Boiling",
          ingredients: ["2 Potatoes", "1 can Tuna", "Olive oil", "Salt & pepper", "Optional: lemon"],
          steps: [
            "Boil potatoes until soft, then cut.",
            "Mix with tuna, olive oil, salt and pepper.",
            "Add lemon if you like."
          ]
        },
        hard: {
          time: "25 mins",
          temp: "Boiling + Mix",
          ingredients: ["Potatoes", "Tuna", "Olive oil", "Onion", "Parsley", "Capers (optional)", "Vinegar or lemon"],
          steps: [
            "Boil potatoes and cool slightly.",
            "Mix tuna + chopped onion + parsley.",
            "Season with olive oil + vinegar/lemon. Combine and serve."
          ]
        }
      },
      fr: {
        name: "Bol Thon & Pommes de Terre",
        origin: "International",
        difficulty: "Facile",
        cost: "Env. 5.80 DT",
        description: "Pommes de terre + thon + huile d'olive = repas protéiné ultra rapide.",
        simple: {
          time: "18 mins",
          temp: "Ébullition",
          ingredients: ["2 Pommes de terre", "1 boîte de thon", "Huile d'olive", "Sel & poivre", "Option: citron"],
          steps: [
            "Cuire les pommes de terre, couper.",
            "Mélanger avec thon, huile, sel, poivre.",
            "Ajouter citron si vous voulez."
          ]
        },
        hard: {
          time: "25 mins",
          temp: "Ébullition + Mélange",
          ingredients: ["Pommes de terre", "Thon", "Huile d'olive", "Oignon", "Persil", "Câpres (option)", "Vinaigre ou citron"],
          steps: [
            "Cuire les pommes de terre et laisser tiédir.",
            "Mélanger thon + oignon + persil.",
            "Assaisonner huile + vinaigre/citron. Mélanger et servir."
          ]
        }
      },
      ar: {
        name: "طبق بطاطا بالتونة",
        origin: "عالمي",
        difficulty: "سهل",
        cost: "حوالي 5.80 د.ت",
        description: "بطاطا مسلوقة + تونة + زيت زيتون = أسرع وجبة بروتين.",
        simple: {
          time: "18 دقيقة",
          temp: "غليان",
          ingredients: ["زوز بطاطا", "علبة تونة", "زيت زيتون", "ملح وفلفل", "اختياري: ليمون"],
          steps: [
            "اسلق البطاطا حتى تطرى ثم قطّعها.",
            "اخلطها مع التونة وزيت الز��تون والملح والفلفل.",
            "زيد الليمون إذا تحب."
          ]
        },
        hard: {
          time: "25 دقيقة",
          temp: "غليان + خلط",
          ingredients: ["بطاطا", "تونة", "زيت زيتون", "بصل", "بقدونس", "كَبَر (اختياري)", "خل أو ليمون"],
          steps: [
            "اسلق البطاطا وخليها تبرد شوية.",
            "اخلط التونة مع بصل وبقدونس.",
            "بهّر بزيت زيتون وخل/ليمون. اخلط وقدّم."
          ]
        }
      }
    }
  }
];

/* ---------- State / Memory ---------- */
let currentFood = null;
const RECENT_LIMIT = 6;
let recentIds = loadJson("lettuceRecentIds", []);
let lastCuisineTag = loadStr("lettuceLastCuisine", "");
let hintShown = loadStr("lettuceHintShown", "0") === "1";

/* ---------- DOM ---------- */
const els = {
  languageSelect: document.getElementById("languageSelect"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  helpBtn: document.getElementById("helpBtn"),

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

  copyrightYear: document.getElementById("copyrightYear")
};

/* ---------- Init ---------- */
boot();

function boot() {
  if (els.copyrightYear) {
    els.copyrightYear.textContent = String(new Date().getFullYear());
  }

  const savedLang = loadStr("lettuceLang", "en");
  currentLang = savedLang;
  if (els.languageSelect) els.languageSelect.value = savedLang;
  applyLanguage(savedLang);

  const savedTheme = loadStr("lettuceTheme", "dark");
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
  els.languageSelect?.addEventListener("change", (e) => {
    const lang = e.target.value;
    currentLang = lang;
    saveStr("lettuceLang", lang);
    applyLanguage(lang);

    if (currentFood) renderFood(currentFood);
    if (!els.recipeModal.classList.contains("hidden")) {
      const mode = els.modalModeEmoji.textContent.includes("🟢") ? "simple" : "hard";
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
  els.introDiscoverBtn?.addEventListener("click", () => {
    closeIntro(true);
    handleDiscover(false);
  });

  els.dailyPickBtnTop?.addEventListener("click", () => handleDiscover(true));
  els.dailyPickBtnSticky?.addEventListener("click", () => handleDiscover(true));

  els.preferencesBtnTop?.addEventListener("click", openPreferences);
  els.preferencesBtnSticky?.addEventListener("click", openPreferences);
  els.openPreferencesBtn2?.addEventListener("click", openPreferences);

  els.introPreferencesBtn?.addEventListener("click", () => {
    closeIntro(true);
    openPreferences();
  });

  els.closePreferencesBtn?.addEventListener("click", closePreferences);
  els.resetFiltersBtn?.addEventListener("click", resetFilters);

  els.applyFiltersBtn?.addEventListener("click", () => {
    closePreferences();
    handleDiscover(false);
  });

  els.relaxFiltersBtn?.addEventListener("click", () => {
    resetFilters();
    closePreferences();
    handleDiscover(false);
  });

  els.lazyModeBtn?.addEventListener("click", () => openRecipe("simple"));
  els.chefModeBtn?.addEventListener("click", () => openRecipe("hard"));

  els.closeIntroBtn?.addEventListener("click", () => closeIntro(true));
  els.closeRecipeBtn?.addEventListener("click", closeRecipe);

  els.introModal?.addEventListener("click", (e) => {
    if (e.target === els.introModal) closeIntro(true);
  });
  els.recipeModal?.addEventListener("click", (e) => {
    if (e.target === els.recipeModal) closeRecipe();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePreferences();
      closeRecipe();
      closeIntro(true);
    }
  });
}

/* ---------- Theme ---------- */
function setTheme(mode) {
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(mode === "light" ? "theme-light" : "theme-dark");
  saveStr("lettuceTheme", mode);

  if (els.themeToggleBtn) {
    els.themeToggleBtn.textContent = mode === "light" ? "🌙" : "☀️";
    els.themeToggleBtn.title = mode === "light" ? "Toggle dark" : "Toggle light";
  }
}

/* ---------- Language / direction ---------- */
function applyLanguage(lang) {
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    if (key === "brand") {
      el.textContent = "Lettuce Guess";
      return;
    }
    if (dict[key] != null) el.textContent = dict[key];
  });
}

/* ---------- Preferences UI ---------- */
function openPreferences() {
  els.preferencesPanel?.classList.remove("hidden");
  els.preferencesPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function closePreferences() {
  els.preferencesPanel?.classList.add("hidden");
}
function resetFilters() {
  const ids = [
    "studentOnly","cheapOnly","expensiveOnly","tunisianStyle","asianStyle",
    "withChicken","loveFish","friedOnly","vegan",
    "noFish","noChicken","noSpicy"
  ];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
}

/* ---------- Intro Modal ---------- */
function openIntro() {
  els.introModal?.classList.remove("hidden");
}
function closeIntro(markDone) {
  els.introModal?.classList.add("hidden");
  if (markDone) saveStr("lettuceIntroDone", "1");
}

/* ---------- Discover Logic ---------- */
function handleDiscover(isDailyPick) {
  hideNotFound();

  const t = translations[currentLang] || translations.en;
  showLoadingLine(t.funnyTexts);

  const filters = readFilters();
  const pool = filterDatabase(foodDatabase, filters);

  if (pool.length === 0) {
    hideLoadingLine();
    showNotFound();
    return;
  }

  const picked = isDailyPick ? deterministicDailyPick(pool) : smartPick(pool, filters);

  setTimeout(() => {
    hideLoadingLine();
    if (!picked) return showNotFound();
    currentFood = picked;
    rememberPick(picked);
    renderFood(picked);
    els.result?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 450);
}

function readFilters() {
  return {
    include: {
      studentOnly: !!els.studentOnly?.checked,
      cheapOnly: !!els.cheapOnly?.checked,
      expensiveOnly: !!els.expensiveOnly?.checked,
      tunisianStyle: !!els.tunisianStyle?.checked,
      asianStyle: !!els.asianStyle?.checked,
      withChicken: !!els.withChicken?.checked,
      loveFish: !!els.loveFish?.checked,
      friedOnly: !!els.friedOnly?.checked,
      vegan: !!els.vegan?.checked
    },
    exclude: {
      noFish: !!els.noFish?.checked,
      noChicken: !!els.noChicken?.checked,
      noSpicy: !!els.noSpicy?.checked
    }
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
  if (cuisineTag) {
    lastCuisineTag = cuisineTag;
    saveStr("lettuceLastCuisine", cuisineTag);
  }
}

/* ---------- Rendering ---------- */
function renderFood(food) {
  const t = food?.translations?.[currentLang] || food?.translations?.en;
  if (!food || !t) return;

  els.result?.classList.remove("hidden");
  els.notFound?.classList.add("hidden");

  els.foodEmoji.textContent = food.emoji || "🍲";
  els.foodName.textContent = t.name || "Meal";
  els.foodOrigin.textContent = `🌍 ${t.origin || ""}`;
  els.foodCost.textContent = t.cost || "";

  const diffText = (t.difficulty || "").toUpperCase();
  els.foodDifficulty.textContent = diffText || "—";
  els.foodDifficulty.classList.remove("badge-green", "badge-gold", "badge-red", "badge-blue");

  const diff = (food.difficultyCSS || "").toLowerCase();
  if (diff === "easy") els.foodDifficulty.classList.add("badge-green");
  else if (diff === "medium") els.foodDifficulty.classList.add("badge-gold");
  else if (diff === "hard") els.foodDifficulty.classList.add("badge-red");
  else els.foodDifficulty.classList.add("badge-blue");

  els.foodDesc.textContent = t.description || "";
}

function showNotFound() {
  els.result?.classList.add("hidden");
  els.notFound?.classList.remove("hidden");
  els.notFound?.scrollIntoView({ behavior: "smooth", block: "center" });
}
function hideNotFound() {
  els.notFound?.classList.add("hidden");
}

/* ---------- Recipe Modal ---------- */
function openRecipe(mode) {
  if (!currentFood) return;

  const t = currentFood.translations?.[currentLang] || currentFood.translations?.en;
  if (!t) return;

  const r = t[mode];
  if (!r) return;

  const ui = translations[currentLang] || translations.en;

  els.modalModeEmoji.textContent = mode === "simple" ? "🟢" : "🔴";
  els.modalTitle.textContent = mode === "simple" ? ui.lazyMode : ui.chefMode;
  els.timeVal.textContent = r.time || "";
  els.tempVal.textContent = r.temp || "";

  els.modalIngredients.innerHTML = "";
  (r.ingredients || []).forEach((ing) => {
    const li = document.createElement("li");
    li.textContent = ing;
    els.modalIngredients.appendChild(li);
  });

  els.modalSteps.innerHTML = "";
  (r.steps || []).forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    els.modalSteps.appendChild(li);
  });

  els.recipeModal.classList.remove("hidden");
}
function closeRecipe() {
  els.recipeModal?.classList.add("hidden");
}

/* ---------- Loading line ---------- */
function showLoadingLine(funnyTexts) {
  const arr = Array.isArray(funnyTexts) ? funnyTexts : (translations.en.funnyTexts || []);
  const msg = arr[Math.floor(Math.random() * arr.length)];
  els.funnyLoadingText.textContent = msg;
  els.funnyLoadingText.classList.remove("hidden");
}
function hideLoadingLine() {
  els.funnyLoadingText.classList.add("hidden");
}

/* ---------- Storage helpers ---------- */
function loadStr(key, fallback = "") {
  try {
    const v = localStorage.getItem(key);
    return v == null ? fallback : v;
  } catch {
    return fallback;
  }
}
function saveStr(key, value) { try { localStorage.setItem(key, value); } catch {} }
function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function saveJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
