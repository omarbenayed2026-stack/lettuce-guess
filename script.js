/* Lettuce Guess — rewritten from scratch (robust, no-id mismatch) */
console.log("✅ Lettuce Guess script.js loaded");

const i18n = {
  en: {
    brandPill: "fast • cheap • tasty",
    welcome: "Lettuce find something to prepare! 🥬",
    seoIntro:
      "Welcome to the ultimate random recipe generator. Choose your preferences, then hit Discover.",
    discover: "Discover",
    dailyPick: "Menu of the Day",
    preferences: "Preferences",
    discoverHint: "Tip: tap Discover again for a new meal.",
    customize: "Customize your craving",
    includeTitle: "Include",
    excludeTitle: "Blacklist (Exclude)",
    studentFriendly: "Student Friendly",
    cheap: "Cheap (< 6 DT)",
    expensive: "Costs money",
    tunisianStyle: "Tunisian",
    asianStyle: "Asian",
    chicken: "Chicken",
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
    introTagline: "Pick a meal in seconds.",
    introText:
      "Welcome! Use Discover to get a random meal. Open Preferences to filter. Tap again for a new suggestion (we avoid repeats).",
    startDiscover: "Start discovering",
    funny: [
      "Checking your wallet...",
      "Finding something fast (and tasty)...",
      "Avoiding boring meals...",
      "Mixing up your menu...",
      "Doing the budget math..."
    ]
  },
  fr: {
    brandPill: "rapide • pas cher • bon",
    welcome: "Trouvons quelque chose à préparer ! 🥬",
    seoIntro:
      "Le générateur de recettes pour étudiants. Choisissez vos préférences puis appuyez sur Découvrir.",
    discover: "Découvrir",
    dailyPick: "Menu du jour",
    preferences: "Préférences",
    discoverHint: "Astuce : appuyez encore sur Découvrir pour une nouvelle idée.",
    customize: "Personnalisez",
    includeTitle: "Inclure",
    excludeTitle: "Liste noire (Exclure)",
    studentFriendly: "Pour étudiant",
    cheap: "Pas cher (< 6 DT)",
    expensive: "Ça coûte",
    tunisianStyle: "Tunisien",
    asianStyle: "Asiatique",
    chicken: "Poulet",
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
    introTagline: "Choisis un plat en quelques secondes.",
    introText:
      "Bienvenue ! Utilisez Découvrir pour une recette aléatoire. Ouvrez Préférences pour filtrer. Appuyez à nouveau pour une autre suggestion (on évite les répétitions).",
    startDiscover: "Commencer",
    funny: [
      "Vérification du portefeuille...",
      "On cherche quelque chose de rapide...",
      "On évite les plats ennuyeux...",
      "On mélange ton menu...",
      "Calcul du budget..."
    ]
  },
  ar: {
    brandPill: "سريع • رخيص • لذيذ",
    welcome: "Lettuce Guess سيختار لك ماذا تطبخ! 🥬",
    seoIntro:
      "مولّد وصفات عشوائية للطلاب والطهاة الكسالى. اختر تفضيلاتك ثم اضغط «اكتشف».",
    discover: "اكتشف",
    dailyPick: "طبق اليوم",
    preferences: "التفضيلات",
    discoverHint: "نصيحة: اضغط «اكتشف» مرة أخرى لاقتراح جديد.",
    customize: "خصص رغباتك",
    includeTitle: "إضافة",
    excludeTitle: "القائمة السوداء (استبعاد)",
    studentFriendly: "مناسب للطلاب",
    cheap: "رخيص (أقل من 6 د.ت)",
    expensive: "مكلف",
    tunisianStyle: "تونسي",
    asianStyle: "آسيوي",
    chicken: "دجاج",
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
    introTagline: "اختر وجبة في ثوانٍ.",
    introText:
      "مرحبًا! استخدم «اكتشف» للحصول على وجبة عشوائية. افتح «التفضيلات» للتصفية. اضغط مرة أخرى لاقتراح جديد (ونحاول تجنب التكرار).",
    startDiscover: "ابدأ",
    funny: [
      "جاري فحص محفظتك...",
      "نبحث عن شيء سريع ولذيذ...",
      "نتجنب الأكل الممل...",
      "ننوّع قائمة اليوم...",
      "جاري حساب الميزانية..."
    ]
  }
};

const db = [
  /* originals */
  {
    id: "tun_1",
    tags: ["fried", "fish", "student", "tunisian", "cheap"],
    emoji: "🥟",
    difficultyCSS: "medium",
    t: {
      en: {
        name: "Tunisian Brika",
        origin: "Tunisia",
        difficulty: "Medium",
        cost: "Est. 3.00 DT",
        description: "A crispy triangle pastry stuffed with tuna, parsley and egg.",
        simple: {
          time: "10 mins",
          temp: "Medium-High (Stove)",
          ingredients: ["1 Malsouka sheet", "Canned Tuna", "1 Egg", "Parsley & Onion", "Salt & Black Pepper"],
          steps: ["Mix tuna + herbs + spices.", "Place on sheet, crack egg.", "Fold triangle.", "Fry 2–3 mins per side."]
        },
        hard: {
          time: "25 mins",
          temp: "Medium-High",
          ingredients: ["Malsouka", "Tuna", "Capers", "Boiled Potato", "1 Egg", "Black Pepper", "Tabil"],
          steps: ["Mash potato + tuna + spices.", "Add egg, fold.", "Fry until deeply crispy."]
        }
      },
      fr: {
        name: "Brik Tunisien",
        origin: "Tunisie",
        difficulty: "Moyen",
        cost: "Env. 3.00 DT",
        description: "Un triangle croustillant farci au thon, persil et œuf.",
        simple: {
          time: "10 mins",
          temp: "Feu Vif",
          ingredients: ["1 Feuille de Malsouka", "Thon", "1 Œuf", "Persil & oignon", "Sel & poivre"],
          steps: ["Mélanger la farce.", "Casser l'œuf.", "Plier.", "Frire 2–3 mins par face."]
        },
        hard: {
          time: "25 mins",
          temp: "Feu Vif",
          ingredients: ["Malsouka", "Thon", "Câpres", "Pomme de terre", "1 Œuf", "Poivre", "Tabel"],
          steps: ["Écraser PDT + thon + épices.", "Ajouter œuf, plier.", "Frire jusqu'à croustillant."]
        }
      },
      ar: {
        name: "بريك تونسي",
        origin: "تونس",
        difficulty: "متوسط",
        cost: "حوالي 3.00 د.ت",
        description: "مثلث مقرمش محشو بالتونة والبقدونس والبيض.",
        simple: {
          time: "10 دقائق",
          temp: "نار متوسطة-عالية",
          ingredients: ["ورقة ملسوقة", "تونة", "بيضة", "بقدونس وبصل", "ملح وفلفل أسود"],
          steps: ["اخلط الحشوة.", "اكسر البيض.", "اطو مثلث.", "اقلي 2–3 دقايق لكل جهة."]
        },
        hard: {
          time: "25 دقيقة",
          temp: "نار عالية",
          ingredients: ["ملسوقة", "تونة", "كَبَر", "بطاطا مسلوقة", "بيضة", "فلفل أسود", "تابل"],
          steps: ["اهرِس البطاطا + تونة + بهارات.", "زيد البيض واطو.", "اقلي حتى تقرمش."]
        }
      }
    }
  },

  {
    id: "tun_2",
    tags: ["boiled", "student", "spicy", "vegan", "tunisian", "cheap"],
    emoji: "🥣",
    difficultyCSS: "easy",
    t: {
      en: {
        name: "Spicy Lablebi",
        origin: "Tunisia",
        difficulty: "Easy",
        cost: "Est. 3.50 DT",
        description: "Cheap chickpea soup poured over bread with garlic and harissa.",
        simple: {
          time: "15 mins",
          temp: "Boiling",
          ingredients: ["1 can chickpeas", "Harissa", "Stale bread", "Garlic", "Cumin", "Olive oil"],
          steps: ["Boil chickpeas with garlic + cumin.", "Tear bread in bowl.", "Pour soup, add harissa + oil."]
        },
        hard: {
          time: "2 hours",
          temp: "Low Simmer",
          ingredients: ["Dried chickpeas", "Garlic", "Harissa", "Olive oil", "Cumin", "Tuna (optional)", "Soft egg (optional)"],
          steps: ["Soak + boil chickpeas.", "Serve over bread.", "Top with oil + cumin + harissa (and tuna/egg)."]
        }
      },
      fr: {
        name: "Lablebi Épicé",
        origin: "Tunisie",
        difficulty: "Facile",
        cost: "Env. 3.50 DT",
        description: "Soupe de pois chiches à l'ail et harissa sur du pain.",
        simple: {
          time: "15 mins",
          temp: "Ébullition",
          ingredients: ["Pois chiches", "Harissa", "Pain rassis", "Ail", "Cumin", "Huile d'olive"],
          steps: ["Bouillir avec ail + cumin.", "Pain dans un bol.", "Verser + harissa + huile."]
        },
        hard: {
          time: "2 heures",
          temp: "Frémir",
          ingredients: ["Pois chiches secs", "Ail", "Harissa", "Huile", "Cumin", "Thon (option)", "Œuf (option)"],
          steps: ["Tremper + bouillir.", "Servir sur pain.", "Assaisonner (option thon/œuf)."]
        }
      },
      ar: {
        name: "لبلابي حار",
        origin: "تونس",
        difficulty: "سهل",
        cost: "حوالي 3.50 د.ت",
        description: "حساء حمص رخيص بالثوم والهريسة فوق الخبز.",
        simple: {
          time: "15 دقيقة",
          temp: "غليان",
          ingredients: ["حمص", "هريسة", "خبز بايت", "ثوم", "كمون", "زيت زيتون"],
          steps: ["اغلي الحمص مع الثوم والكمون.", "حط الخبز في وعاء.", "اسكب الحساء وزيد الهريسة والزيت."]
        },
        hard: {
          time: "ساعتان",
          temp: "نار هادئة",
          ingredients: ["حمص جاف", "ثوم", "هريسة", "زيت", "كمون", "تونة (اختياري)", "بيضة (اختياري)"],
          steps: ["انقع واطبخ.", "قدم فوق الخبز.", "بهّر (اختياري تونة/بيضة)."]
        }
      }
    }
  },

  {
    id: "tun_3",
    tags: ["boiled", "tunisian", "expensive"],
    emoji: "🥘",
    difficultyCSS: "hard",
    t: {
      en: {
        name: "Traditional Mloukhiya",
        origin: "Tunisia",
        difficulty: "Hard",
        cost: "Est. 25.00 DT",
        description: "Dark green stew simmered for hours with jute leaf powder and beef.",
        simple: {
          time: "3.5 hours",
          temp: "Low Heat",
          ingredients: ["Mloukhiya powder", "Olive oil", "Beef", "Garlic", "Bay leaves", "Tabil & Karwia"],
          steps: ["Mix powder + oil.", "Add boiling water slowly.", "Add spices + beef.", "Simmer ~3 hours."]
        },
        hard: {
          time: "5 hours",
          temp: "Lowest Heat",
          ingredients: ["Mloukhiya", "Olive oil", "Beef shank", "Garlic", "Mint", "Spices", "Bay leaves"],
          steps: ["Marinate beef.", "Fry powder briefly.", "Add water.", "Simmer long until oil separates."]
        }
      },
      fr: {
        name: "Mloukhiya Traditionnelle",
        origin: "Tunisie",
        difficulty: "Difficile",
        cost: "Env. 25.00 DT",
        description: "Ragoût vert foncé mijoté longtemps avec bœuf.",
        simple: {
          time: "3.5 heures",
          temp: "Feu Doux",
          ingredients: ["Mloukhiya", "Huile d'olive", "Bœuf", "Ail", "Laurier", "Tabel & Karwia"],
          steps: ["Mélanger poudre + huile.", "Ajouter eau bouillante.", "Ajouter viande + épices.", "Mijoter ~3h."]
        },
        hard: {
          time: "5 heures",
          temp: "Feu Très Doux",
          ingredients: ["Mloukhiya", "Huile", "Jarret", "Ail", "Menthe", "Épices", "Laurier"],
          steps: ["Mariner.", "Frire poudre.", "Ajouter eau.", "Cuire longtemps."]
        }
      },
      ar: {
        name: "ملوخية دياري",
        origin: "تونس",
        difficulty: "صعب",
        cost: "حوالي 25.00 د.ت",
        description: "يخنة ملوخية داكنة تطبخ لساعات مع اللحم.",
        simple: {
          time: "3.5 ساعات",
          temp: "نار هادئة",
          ingredients: ["ملوخية", "زيت زيتون", "لحم", "ثوم", "رند", "تابل وكروية"],
          steps: ["اخلط المسحوق بالزيت.", "زيد الماء المغلي.", "زيد اللحم والبهارات.", "اطبخ 3 ساعات."]
        },
        hard: {
          time: "5 ساعات",
          temp: "نار هادئة جدًا",
          ingredients: ["ملوخية", "زيت", "لحم", "ثوم", "نعناع", "بهارات", "رند"],
          steps: ["تبّل اللحم.", "اقلِ المسحوق شوية.", "زيد الماء.", "اطبخ مدة طويلة."]
        }
      }
    }
  },

  {
    id: "int_5",
    tags: ["student", "boiled", "cheap"],
    emoji: "🍝",
    difficultyCSS: "medium",
    t: {
      en: {
        name: "Garlic Butter Pasta",
        origin: "Italy",
        difficulty: "Medium",
        cost: "Est. 4.00 DT",
        description: "A 5-star tasting meal made from cheap pantry ingredients.",
        simple: {
          time: "15 mins",
          temp: "Boiling",
          ingredients: ["Spaghetti", "Butter", "Garlic powder", "Salt & pepper", "Cheese"],
          steps: ["Boil pasta.", "Melt butter + garlic.", "Toss pasta, add cheese."]
        },
        hard: {
          time: "20 mins",
          temp: "Medium Heat",
          ingredients: ["Spaghetti", "Butter", "Fresh garlic", "Parsley", "Chili flakes", "Parmesan"],
          steps: ["Cook pasta (save water).", "Sauté garlic + chili.", "Toss with water, top parsley."]
        }
      },
      fr: {
        name: "Pâtes Beurre et Ail",
        origin: "Italie",
        difficulty: "Moyen",
        cost: "Env. 4.00 DT",
        description: "Un repas très bon avec des ingrédients simples.",
        simple: {
          time: "15 mins",
          temp: "Ébullition",
          ingredients: ["Spaghetti", "Beurre", "Ail en poudre", "Sel & poivre", "Fromage"],
          steps: ["Cuire les pâtes.", "Fondre beurre + ail.", "Mélanger + fromage."]
        },
        hard: {
          time: "20 mins",
          temp: "Feu Moyen",
          ingredients: ["Spaghetti", "Beurre", "Ail frais", "Persil", "Piment", "Parmesan"],
          steps: ["Cuire (garder eau).", "Sauter ail + piment.", "Mélanger + persil."]
        }
      },
      ar: {
        name: "مكرونة بالثوم والزبدة",
        origin: "إيطاليا",
        difficulty: "متوسط",
        cost: "حوالي 4.00 د.ت",
        description: "وجبة بنينة بمكونات رخيصة.",
        simple: {
          time: "15 دقيقة",
          temp: "غليان",
          ingredients: ["سباغيتي", "زبدة", "بودرة ثوم", "ملح وفلفل", "جبن"],
          steps: ["اسلق المكرونة.", "أذب الزبدة + الثوم.", "قلّب وزين بالجبن."]
        },
        hard: {
          time: "20 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["سباغيتي", "زبدة", "ثوم", "بقدونس", "فلفل حار", "بارميزان"],
          steps: ["اسلق وخلي شوية ماء.", "شوّح الثوم.", "اخلط وزين بالبقدونس."]
        }
      }
    }
  },

  {
    id: "int_10",
    tags: ["chicken", "fried", "expensive", "spicy"],
    emoji: "🍗",
    difficultyCSS: "hard",
    t: {
      en: {
        name: "Spicy Fried Chicken",
        origin: "USA",
        difficulty: "Hard",
        cost: "Est. 18.00 DT",
        description: "Golden crispy fried chicken with heavy spices.",
        simple: {
          time: "25 mins",
          temp: "High Heat",
          ingredients: ["Chicken", "Flour", "Eggs", "Spices", "Oil"],
          steps: ["Season flour.", "Dip chicken egg→flour.", "Fry until golden."]
        },
        hard: {
          time: "12 hours",
          temp: "160°C Oil",
          ingredients: ["Chicken pieces", "Buttermilk", "Flour", "Cornstarch", "Spices"],
          steps: ["Marinate overnight.", "Dredge well.", "Fry 12–15 mins.", "Rest on rack."]
        }
      },
      fr: {
        name: "Poulet Frit Épicé",
        origin: "USA",
        difficulty: "Difficile",
        cost: "Env. 18.00 DT",
        description: "Poulet frit doré très croustillant.",
        simple: {
          time: "25 mins",
          temp: "Feu Vif",
          ingredients: ["Poulet", "Farine", "Œufs", "Épices", "Huile"],
          steps: ["Assaisonner farine.", "Œuf→farine.", "Frire jusqu'à doré."]
        },
        hard: {
          time: "12 heures",
          temp: "Huile 160°C",
          ingredients: ["Poulet", "Lben", "Farine", "Maïzena", "Épices"],
          steps: ["Mariner la nuit.", "Enrober.", "Frire 12–15 mins.", "Repos sur grille."]
        }
      },
      ar: {
        name: "دجاج مقلي حار",
        origin: "أمريكا",
        difficulty: "صعب",
        cost: "حوالي 18.00 د.ت",
        description: "دجاج مقلي ذهبي ومقرمش بالبهارات.",
        simple: {
          time: "25 دقيقة",
          temp: "نار عالية",
          ingredients: ["دجاج", "دقيق", "بيض", "بهارات", "زيت"],
          steps: ["بهّر الدقيق.", "بيض→دقيق.", "اقلي حتى يحمّر."]
        },
        hard: {
          time: "12 ساعة",
          temp: "زيت 160",
          ingredients: ["دجاج", "لبن", "دقيق", "نشا", "بهارات"],
          steps: ["انقع ليلة.", "غلّف مليح.", "اقلي 12–15 دق.", "خليه يرتاح."]
        }
      }
    }
  },

  /* +5 NEW recipes translated */
  {
    id: "tun_4",
    tags: ["student", "tunisian", "cheap", "fried"],
    emoji: "🍳",
    difficultyCSS: "easy",
    t: {
      en: {
        name: "Tunisian Ojja (Eggs & Tomato)",
        origin: "Tunisia",
        difficulty: "Easy",
        cost: "Est. 4.50 DT",
        description: "Eggs poached in a spicy tomato sauce. Fast and filling.",
        simple: {
          time: "15 mins",
          temp: "Medium Heat",
          ingredients: ["Eggs", "Tomato", "Harissa (optional)", "Olive oil", "Salt & pepper"],
          steps: ["Simmer tomato + oil.", "Crack eggs.", "Cover until set.", "Serve with bread."]
        },
        hard: {
          time: "30 mins",
          temp: "Medium Heat",
          ingredients: ["Eggs", "Tomatoes", "Bell pepper", "Garlic", "Harissa", "Cumin", "Optional merguez"],
          steps: ["Cook peppers + garlic.", "Add tomatoes + spices.", "Crack eggs.", "Cover until done."]
        }
      },
      fr: {
        name: "Ojja Tunisienne (Œufs & Tomate)",
        origin: "Tunisie",
        difficulty: "Facile",
        cost: "Env. 4.50 DT",
        description: "Œufs cuits dans une sauce tomate épicée. Rapide et rassasiant.",
        simple: {
          time: "15 mins",
          temp: "Feu Moyen",
          ingredients: ["Œufs", "Tomate", "Harissa (option)", "Huile d'olive", "Sel & poivre"],
          steps: ["Mijoter tomate + huile.", "Casser les œufs.", "Couvrir.", "Servir avec pain."]
        },
        hard: {
          time: "30 mins",
          temp: "Feu Moyen",
          ingredients: ["Œufs", "Tomates", "Poivron", "Ail", "Harissa", "Cumin", "Option merguez"],
          steps: ["Cuire poivron + ail.", "Ajouter tomates + épices.", "Ajouter œufs.", "Couvrir."]
        }
      },
      ar: {
        name: "عُجّة تونسية (بيض بالطماطم)",
        origin: "تونس",
        difficulty: "سهل",
        cost: "حوالي 4.50 د.ت",
        description: "بيض يطيب في صوص طماطم حار. سريع ويشبع.",
        simple: {
          time: "15 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["بيض", "طماطم", "هريسة (اختياري)", "زيت زيتون", "ملح وفلفل"],
          steps: ["خلّي الطماطم تطيب بزيت.", "اكسر البيض.", "غطّي حتى يطيب.", "قدم مع الخبز."]
        },
        hard: {
          time: "30 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["بيض", "طماطم", "فلفل", "ثوم", "هريسة", "كمون", "اختياري مرڨاز"],
          steps: ["شوّح الفلفل والثوم.", "زيد الطماطم والبهارات.", "اكسر البيض.", "غطّي."]
        }
      }
    }
  },

  {
    id: "tun_5",
    tags: ["student", "tunisian", "cheap", "vegan"],
    emoji: "🌶️",
    difficultyCSS: "easy",
    t: {
      en: {
        name: "Slata Mechouia (Quick)",
        origin: "Tunisia",
        difficulty: "Easy",
        cost: "Est. 5.00 DT",
        description: "Smoky grilled salad from peppers and tomatoes.",
        simple: {
          time: "20 mins",
          temp: "High Heat",
          ingredients: ["Peppers", "Tomato", "Olive oil", "Salt"],
          steps: ["Char veggies.", "Peel + chop.", "Season with oil + salt."]
        },
        hard: {
          time: "35 mins",
          temp: "High Heat",
          ingredients: ["Peppers", "Tomatoes", "Garlic", "Cumin", "Olive oil", "Optional tuna/eggs/olives"],
          steps: ["Grill until black.", "Peel.", "Chop/mash.", "Season and add toppings."]
        }
      },
      fr: {
        name: "Slata Mechouia (Rapide)",
        origin: "Tunisie",
        difficulty: "Facile",
        cost: "Env. 5.00 DT",
        description: "Salade grillée fumée à base de poivrons et tomates.",
        simple: {
          time: "20 mins",
          temp: "Feu Vif",
          ingredients: ["Poivrons", "Tomate", "Huile d'olive", "Sel"],
          steps: ["Griller.", "Peler + couper.", "Assaisonner."]
        },
        hard: {
          time: "35 mins",
          temp: "Feu Vif",
          ingredients: ["Poivrons", "Tomates", "Ail", "Cumin", "Huile", "Option thon/œufs/olives"],
          steps: ["Griller.", "Peler.", "Hacher/écraser.", "Assaisonner + toppings."]
        }
      },
      ar: {
        name: "سلاطة مشوية (سريعة)",
        origin: "تونس",
        difficulty: "سهل",
        cost: "حوالي 5.00 د.ت",
        description: "سلاطة مشوية بنكهة دخان من الفلفل والطماطم.",
        simple: {
          time: "20 دقيقة",
          temp: "نار عالية",
          ingredients: ["فلفل", "طماطم", "زيت زيتون", "ملح"],
          steps: ["اشوي.", "قشّر وقطّع.", "بهّر بزيت وملح."]
        },
        hard: {
          time: "35 دقيقة",
          temp: "نار عالية",
          ingredients: ["فلفل", "طماطم", "ثوم", "كمون", "زيت", "اختياري تونة/بيض/زيتون"],
          steps: ["اشوي.", "قشّر.", "افرُم/اهرِس.", "بهّر وزيد الإضافات."]
        }
      }
    }
  },

  {
    id: "int_11",
    tags: ["student", "cheap", "asian", "fried"],
    emoji: "🍚",
    difficultyCSS: "easy",
    t: {
      en: {
        name: "Egg Fried Rice",
        origin: "Asia",
        difficulty: "Easy",
        cost: "Est. 5.50 DT",
        description: "Perfect for leftover rice. Fast and cheap.",
        simple: {
          time: "15 mins",
          temp: "High Heat",
          ingredients: ["Cooked rice", "Eggs", "Soy sauce", "Oil", "Optional veggies"],
          steps: ["Scramble eggs.", "Fry rice.", "Add soy + veggies.", "Mix eggs back in."]
        },
        hard: {
          time: "25 mins",
          temp: "High Heat",
          ingredients: ["Rice", "Eggs", "Soy", "Garlic", "Green onion", "Sesame oil (optional)"],
          steps: ["Sauté garlic.", "Fry rice.", "Season.", "Add eggs + onions."]
        }
      },
      fr: {
        name: "Riz Cantonais (Œufs)",
        origin: "Asie",
        difficulty: "Facile",
        cost: "Env. 5.50 DT",
        description: "Parfait pour utiliser le riz de la veille.",
        simple: {
          time: "15 mins",
          temp: "Feu Vif",
          ingredients: ["Riz cuit", "Œufs", "Sauce soja", "Huile", "Option légumes"],
          steps: ["Brouiller œufs.", "Sauter riz.", "Ajouter soja + légumes.", "Remettre œufs."]
        },
        hard: {
          time: "25 mins",
          temp: "Feu Vif",
          ingredients: ["Riz", "Œufs", "Soja", "Ail", "Oignon vert", "Huile de sésame (option)"],
          steps: ["Sauter ail.", "Sauter riz.", "Assaisonner.", "Ajouter œufs + oignon vert."]
        }
      },
      ar: {
        name: "رز مقلي بالبيض",
        origin: "آسيا",
        difficulty: "سهل",
        cost: "حوالي 5.50 د.ت",
        description: "ممتاز لِرز البارح. سريع ورخيص.",
        simple: {
          time: "15 دقيقة",
          temp: "نار عالية",
          ingredients: ["رز مطبوخ", "بيض", "صويا صوص", "زيت", "اختياري خضرة"],
          steps: ["اعمل بيض مخلوط.", "قلّي الرز.", "زيد الصويا والخضرة.", "رجّع البيض وخلّط."]
        },
        hard: {
          time: "25 دقيقة",
          temp: "نار عالية",
          ingredients: ["رز", "بيض", "صويا", "ثوم", "بصل أخضر", "زيت سمسم (اختياري)"],
          steps: ["شوّح الثوم.", "قلّي الرز.", "بهّر.", "زيد البيض والبصل الأخضر."]
        }
      }
    }
  },

  {
    id: "int_12",
    tags: ["student", "cheap", "vegan", "asian", "boiled"],
    emoji: "🍜",
    difficultyCSS: "easy",
    t: {
      en: {
        name: "Soy Garlic Noodles",
        origin: "Asia",
        difficulty: "Easy",
        cost: "Est. 4.80 DT",
        description: "Quick noodles in soy-garlic sauce.",
        simple: {
          time: "12 mins",
          temp: "Boiling + Pan",
          ingredients: ["Noodles", "Soy sauce", "Garlic", "Oil", "Pinch of sugar"],
          steps: ["Boil noodles.", "Sauté garlic.", "Add soy + sugar.", "Toss noodles."]
        },
        hard: {
          time: "20 mins",
          temp: "Medium Heat",
          ingredients: ["Noodles", "Soy", "Garlic", "Ginger (opt)", "Chili (opt)", "Green onion (opt)"],
          steps: ["Boil.", "Sauté garlic/ginger.", "Toss with soy.", "Top with onion."]
        }
      },
      fr: {
        name: "Nouilles Soja-Ail",
        origin: "Asie",
        difficulty: "Facile",
        cost: "Env. 4.80 DT",
        description: "Nouilles rapides avec sauce soja et ail.",
        simple: {
          time: "12 mins",
          temp: "Ébullition + Poêle",
          ingredients: ["Nouilles", "Soja", "Ail", "Huile", "Pincée de sucre"],
          steps: ["Cuire.", "Sauter ail.", "Ajouter soja + sucre.", "Mélanger."]
        },
        hard: {
          time: "20 mins",
          temp: "Feu Moyen",
          ingredients: ["Nouilles", "Soja", "Ail", "Gingembre (opt)", "Piment (opt)", "Oignon vert (opt)"],
          steps: ["Cuire.", "Sauter ail/gingembre.", "Mélanger avec soja.", "Ajouter oignon vert."]
        }
      },
      ar: {
        name: "نودلز بالصويا والثوم",
        origin: "آسيا",
        difficulty: "سهل",
        cost: "حوالي 4.80 د.ت",
        description: "نودلز سريعة بصوص صويا وثوم.",
        simple: {
          time: "12 دقيقة",
          temp: "غليان + مقلاة",
          ingredients: ["نودلز", "صويا", "ثوم", "زيت", "رشة سكر"],
          steps: ["اسلق.", "شوّح الثوم.", "زيد صويا + سكر.", "قلّب النودلز."]
        },
        hard: {
          time: "20 دقيقة",
          temp: "نار متوسطة",
          ingredients: ["نودلز", "صويا", "ثوم", "زنجبيل (اختياري)", "فلفل (اختياري)", "بصل أخضر (اختياري)"],
          steps: ["اسلق.", "شوّح الثوم/الزنجبيل.", "قلّب مع الصويا.", "زيّن بالبصل."]
        }
      }
    }
  },

  {
    id: "int_13",
    tags: ["student", "cheap", "boiled"],
    emoji: "🥔",
    difficultyCSS: "easy",
    t: {
      en: {
        name: "Tuna Potato Bowl",
        origin: "International",
        difficulty: "Easy",
        cost: "Est. 5.80 DT",
        description: "Boiled potato + tuna + olive oil = fast high-protein meal.",
        simple: {
          time: "18 mins",
          temp: "Boiling",
          ingredients: ["Potatoes", "Tuna", "Olive oil", "Salt & pepper", "Optional lemon"],
          steps: ["Boil potatoes.", "Mix with tuna + oil.", "Season and eat."]
        },
        hard: {
          time: "25 mins",
          temp: "Boiling + Mix",
          ingredients: ["Potatoes", "Tuna", "Onion", "Parsley", "Olive oil", "Vinegar/lemon"],
          steps: ["Boil + cut.", "Mix with tuna + onion + parsley.", "Season with oil + lemon."]
        }
      },
      fr: {
        name: "Bol Thon & Pommes de Terre",
        origin: "International",
        difficulty: "Facile",
        cost: "Env. 5.80 DT",
        description: "PDT + thon + huile d'olive = repas rapide et protéiné.",
        simple: {
          time: "18 mins",
          temp: "Ébullition",
          ingredients: ["Pommes de terre", "Thon", "Huile d'olive", "Sel & poivre", "Option citron"],
          steps: ["Cuire.", "Mélanger thon + huile.", "Assaisonner."]
        },
        hard: {
          time: "25 mins",
          temp: "Ébullition + Mélange",
          ingredients: ["PDT", "Thon", "Oignon", "Persil", "Huile", "Vinaigre/citron"],
          steps: ["Cuire.", "Mélanger.", "Assaisonner."]
        }
      },
      ar: {
        name: "بطاطا بالتونة",
        origin: "عالمي",
        difficulty: "سهل",
        cost: "حوالي 5.80 د.ت",
        description: "بطاطا مسلوقة + تونة + زيت زيتون = وجبة بروتين سريعة.",
        simple: {
          time: "18 دقيقة",
          temp: "غليان",
          ingredients: ["بطاطا", "تونة", "زيت زيتون", "ملح وفلفل", "اختياري ليمون"],
          steps: ["اسلق البطاطا.", "اخلط مع التونة والزيت.", "بهّر وكل."]
        },
        hard: {
          time: "25 دقيقة",
          temp: "غليان + خلط",
          ingredients: ["بطاطا", "تونة", "بصل", "بقدونس", "زيت", "خل/ليمون"],
          steps: ["اسلق.", "اخلط.", "بهّر."]
        }
      }
    }
  }
];

/* state */
const RECENT_LIMIT = 6;
let currentLang = loadStr("lettuceLang", "en");
let currentFood = null;
let recentIds = loadJson("lettuceRecentIds", []);
let lastCuisineTag = loadStr("lettuceLastCuisine", "");
let hintShown = loadStr("lettuceHintShown", "0") === "1";

/* DOM (simple ids only) */
const $ = (id) => document.getElementById(id);

const els = {
  languageSelect: $("languageSelect"),
  themeToggleBtn: $("themeToggleBtn"),
  helpBtn: $("helpBtn"),

  discoverBtn: $("discoverBtn"),
  dailyPickBtn: $("dailyPickBtn"),
  preferencesBtn: $("preferencesBtn"),

  discoverBtnSticky: $("discoverBtnSticky"),
  dailyPickBtnSticky: $("dailyPickBtnSticky"),
  preferencesBtnSticky: $("preferencesBtnSticky"),

  loadingLine: $("loadingLine"),
  hintLine: $("hintLine"),

  preferencesPanel: $("preferencesPanel"),
  closePreferencesBtn: $("closePreferencesBtn"),
  resetFiltersBtn: $("resetFiltersBtn"),
  applyFiltersBtn: $("applyFiltersBtn"),

  studentOnly: $("studentOnly"),
  cheapOnly: $("cheapOnly"),
  expensiveOnly: $("expensiveOnly"),
  tunisianStyle: $("tunisianStyle"),
  asianStyle: $("asianStyle"),
  withChicken: $("withChicken"),
  loveFish: $("loveFish"),
  friedOnly: $("friedOnly"),
  vegan: $("vegan"),
  noFish: $("noFish"),
  noChicken: $("noChicken"),
  noSpicy: $("noSpicy"),

  result: $("result"),
  notFound: $("notFound"),
  relaxFiltersBtn: $("relaxFiltersBtn"),
  openPreferencesBtn2: $("openPreferencesBtn2"),

  foodEmoji: $("foodEmoji"),
  foodName: $("foodName"),
  foodOrigin: $("foodOrigin"),
  foodCost: $("foodCost"),
  foodDifficulty: $("foodDifficulty"),
  foodDesc: $("foodDesc"),
  lazyModeBtn: $("lazyModeBtn"),
  chefModeBtn: $("chefModeBtn"),

  introModal: $("introModal"),
  closeIntroBtn: $("closeIntroBtn"),
  introDiscoverBtn: $("introDiscoverBtn"),
  introPreferencesBtn: $("introPreferencesBtn"),

  recipeModal: $("recipeModal"),
  closeRecipeBtn: $("closeRecipeBtn"),
  modalModeEmoji: $("modalModeEmoji"),
  modalTitle: $("modalTitle"),
  timeVal: $("timeVal"),
  tempVal: $("tempVal"),
  modalIngredients: $("modalIngredients"),
  modalSteps: $("modalSteps"),

  year: $("year"),

  /* text nodes */
  brandPill: $("brandPill"),
  welcomeText: $("welcomeText"),
  seoIntro: $("seoIntro"),

  preferencesTitle: $("preferencesTitle"),
  customizeTitle: $("customizeTitle"),
  includeTitle: $("includeTitle"),
  excludeTitle: $("excludeTitle"),

  studentFriendly: $("studentFriendly"),
  cheapText: $("cheapText"),
  expensiveText: $("expensiveText"),
  tunisianText: $("tunisianText"),
  asianText: $("asianText"),
  chickenText: $("chickenText"),
  fishText: $("fishText"),
  friedText: $("friedText"),
  veganText: $("veganText"),
  noFishText: $("noFishText"),
  noChickenText: $("noChickenText"),
  noSpicyText: $("noSpicyText"),

  lazyModeTitle: $("lazyModeTitle"),
  lazyHint: $("lazyHint"),
  chefModeTitle: $("chefModeTitle"),
  chefHint: $("chefHint"),

  notFoundTitle: $("notFoundTitle"),
  notFoundText: $("notFoundText"),

  footerText: $("footerText"),
  rightsText: $("rightsText"),

  ingredientsTitle: $("ingredientsTitle"),
  stepsTitle: $("stepsTitle"),

  introTagline: $("introTagline"),
  introText: $("introText")
};

init();

function init() {
  // year
  if (els.year) els.year.textContent = String(new Date().getFullYear());

  // language + theme
  if (els.languageSelect) els.languageSelect.value = currentLang;
  applyLang(currentLang);

  setTheme(loadStr("lettuceTheme", "dark"));

  // intro
  const introDone = loadStr("lettuceIntroDone", "0") === "1";
  if (!introDone) openIntro();

  // hint once
  if (!hintShown) {
    els.hintLine?.classList.remove("hidden");
    hintShown = true;
    saveStr("lettuceHintShown", "1");
    setTimeout(() => els.hintLine?.classList.add("hidden"), 6000);
  }

  wire();
}

function wire() {
  els.languageSelect?.addEventListener("change", (e) => {
    currentLang = e.target.value;
    saveStr("lettuceLang", currentLang);
    applyLang(currentLang);
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

  const discover = () => handleDiscover(false);
  const daily = () => handleDiscover(true);
  const prefs = () => openPreferences();

  els.discoverBtn?.addEventListener("click", discover);
  els.discoverBtnSticky?.addEventListener("click", discover);

  els.dailyPickBtn?.addEventListener("click", daily);
  els.dailyPickBtnSticky?.addEventListener("click", daily);

  els.preferencesBtn?.addEventListener("click", prefs);
  els.preferencesBtnSticky?.addEventListener("click", prefs);
  els.openPreferencesBtn2?.addEventListener("click", prefs);

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
  els.introDiscoverBtn?.addEventListener("click", () => {
    closeIntro(true);
    handleDiscover(false);
  });
  els.introPreferencesBtn?.addEventListener("click", () => {
    closeIntro(true);
    openPreferences();
  });

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

/* language */
function applyLang(lang) {
  const t = i18n[lang] || i18n.en;
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // top/hero
  setText(els.brandPill, t.brandPill);
  setText(els.welcomeText, t.welcome);
  setText(els.seoIntro, t.seoIntro);

  setText(els.discoverBtn, t.discover);
  setText(els.dailyPickBtn, t.dailyPick);
  setText(els.preferencesBtn, t.preferences);

  setText(els.discoverBtnSticky, t.discover);
  setText(els.dailyPickBtnSticky, t.dailyPick);
  setText(els.preferencesBtnSticky, t.preferences);

  setText(els.hintLine, t.discoverHint);

  // preferences labels
  setText(els.preferencesTitle, t.preferences);
  setText(els.customizeTitle, t.customize);
  setText(els.includeTitle, t.includeTitle);
  setText(els.excludeTitle, t.excludeTitle);

  setText(els.studentFriendly, t.studentFriendly);
  setText(els.cheapText, t.cheap);
  setText(els.expensiveText, t.expensive);
  setText(els.tunisianText, t.tunisianStyle);
  setText(els.asianText, t.asianStyle);
  setText(els.chickenText, t.chicken);
  setText(els.fishText, t.fish);
  setText(els.friedText, t.fried);
  setText(els.veganText, t.vegan);

  setText(els.noFishText, t.noFish);
  setText(els.noChickenText, t.noChicken);
  setText(els.noSpicyText, t.noSpicy);

  setText(els.resetFiltersBtn, t.reset);
  setText(els.applyFiltersBtn, t.apply);

  // cards
  setText(els.lazyModeTitle, t.lazyMode);
  setText(els.lazyHint, t.lazyHint);
  setText(els.chefModeTitle, t.chefMode);
  setText(els.chefHint, t.chefHint);

  setText(els.notFoundTitle, t.notFoundTitle);
  setText(els.notFoundText, t.notFoundText);
  setText(els.relaxFiltersBtn, t.relax);
  setText(els.openPreferencesBtn2, t.preferences);

  setText(els.footerText, t.footerText);
  setText(els.rightsText, t.rights);

  // modals
  setText(els.introTagline, t.introTagline);
  setText(els.introText, t.introText);
  setText(els.introDiscoverBtn, t.startDiscover);
  setText(els.introPreferencesBtn, t.preferences);

  setText(els.ingredientsTitle, t.ingredients);
  setText(els.stepsTitle, t.steps);

  // recipe modal title refresh if open
  if (!els.recipeModal.classList.contains("hidden")) {
    const mode = els.modalModeEmoji.textContent.includes("🟢") ? "simple" : "hard";
    els.modalTitle.textContent = mode === "simple" ? t.lazyMode : t.chefMode;
  }
}

function setText(el, text) {
  if (!el) return;
  el.textContent = text ?? "";
}

/* theme */
function setTheme(mode) {
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(mode === "light" ? "theme-light" : "theme-dark");
  saveStr("lettuceTheme", mode);
  if (els.themeToggleBtn) els.themeToggleBtn.textContent = mode === "light" ? "🌙" : "☀️";
}

/* preferences */
function openPreferences() {
  els.preferencesPanel?.classList.remove("hidden");
  els.preferencesPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function closePreferences() {
  els.preferencesPanel?.classList.add("hidden");
}
function resetFilters() {
  [
    "studentOnly","cheapOnly","expensiveOnly","tunisianStyle","asianStyle",
    "withChicken","loveFish","friedOnly","vegan",
    "noFish","noChicken","noSpicy"
  ].forEach((id) => {
    const el = $(id);
    if (el) el.checked = false;
  });
}

/* modals */
function openIntro() {
  els.introModal?.classList.remove("hidden");
}
function closeIntro(markDone) {
  els.introModal?.classList.add("hidden");
  if (markDone) saveStr("lettuceIntroDone", "1");
}
function closeRecipe() {
  els.recipeModal?.classList.add("hidden");
}

/* discover */
function handleDiscover(isDailyPick) {
  hideNotFound();

  const t = i18n[currentLang] || i18n.en;
  showLoading(t.funny);

  const filters = readFilters();
  const pool = filterDb(db, filters);

  if (pool.length === 0) {
    hideLoading();
    showNotFound();
    return;
  }

  const picked = isDailyPick ? dailyPick(pool) : smartPick(pool, filters);

  setTimeout(() => {
    hideLoading();
    if (!picked) return showNotFound();
    currentFood = picked;
    remember(picked);
    renderFood(picked);
    els.result?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 400);
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

function filterDb(list, filters) {
  return list.filter((f) => {
    const tags = f.tags || [];

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

function dailyPick(pool) {
  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  return pool[Math.abs(hash) % pool.length];
}

function smartPick(pool, filters) {
  const lastId = currentFood?.id;
  let candidates = pool.filter((x) => x.id !== lastId && !recentIds.includes(x.id));
  if (candidates.length === 0) candidates = pool.filter((x) => x.id !== lastId);
  if (candidates.length === 0) candidates = pool.slice();

  const forcedCuisine = filters.include.tunisianStyle || filters.include.asianStyle;
  if (!forcedCuisine && lastCuisineTag) {
    const rotated = candidates.filter((x) => !(x.tags || []).includes(lastCuisineTag));
    if (rotated.length > 0) candidates = rotated;
  }

  return candidates[Math.floor(Math.random() * candidates.length)];
}

function remember(food) {
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

/* render */
function renderFood(food) {
  const t = food.t?.[currentLang] || food.t?.en;
  if (!t) return;

  els.result?.classList.remove("hidden");
  els.notFound?.classList.add("hidden");

  els.foodEmoji.textContent = food.emoji || "🍲";
  els.foodName.textContent = t.name || "Meal";
  els.foodOrigin.textContent = `🌍 ${t.origin || ""}`;
  els.foodCost.textContent = t.cost || "";

  els.foodDifficulty.classList.remove("badge-green", "badge-gold", "badge-red", "badge-blue");
  const diff = (food.difficultyCSS || "").toLowerCase();
  const diffText = (t.difficulty || "").toUpperCase();
  els.foodDifficulty.textContent = diffText || "—";
  if (diff === "easy") els.foodDifficulty.classList.add("badge-green");
  else if (diff === "medium") els.foodDifficulty.classList.add("badge-gold");
  else if (diff === "hard") els.foodDifficulty.classList.add("badge-red");
  else els.foodDifficulty.classList.add("badge-blue");

  els.foodDesc.textContent = t.description || "";
}

function showNotFound() {
  els.result?.classList.add("hidden");
  els.notFound?.classList.remove("hidden");
}
function hideNotFound() {
  els.notFound?.classList.add("hidden");
}

/* recipe modal */
function openRecipe(mode) {
  if (!currentFood) return;
  const t = currentFood.t?.[currentLang] || currentFood.t?.en;
  if (!t) return;

  const r = t[mode];
  if (!r) return;

  const ui = i18n[currentLang] || i18n.en;

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

/* loading */
function showLoading(funnyArr) {
  const arr = Array.isArray(funnyArr) ? funnyArr : i18n.en.funny;
  const msg = arr[Math.floor(Math.random() * arr.length)];
  els.loadingLine.textContent = msg;
  els.loadingLine.classList.remove("hidden");
}
function hideLoading() {
  els.loadingLine.classList.add("hidden");
}

/* storage */
function loadStr(key, fallback = "") {
  try {
    const v = localStorage.getItem(key);
    return v == null ? fallback : v;
  } catch { return fallback; }
}
function saveStr(key, value) { try { localStorage.setItem(key, value); } catch {} }
function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch { return fallback; }
}
function saveJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
