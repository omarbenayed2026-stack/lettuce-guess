// --- TRANSLATIONS (Fully translated UI & Funny Texts) ---
const translations = {
    en: { 
        brand: "Lettuce Guess", 
        welcome: "Lettuce find something to prepare! 🥬",
        seoIntro: "Welcome to the ultimate random recipe generator. We help students and lazy cooks find delicious, budget-friendly meals. Just set your preferences and let our algorithm decide your dinner!",
        togglePrefs: "⚙️ Toggle Preferences",
        customize: "Customize Your Craving",
        studentFriendly: "Student Friendly", 
        cheap: "Cheap (< 6 DT) 🪙", 
        expensive: "Expensive 💰", 
        tunisianStyle: "Tunisian Style 🇹🇳",
        asianStyle: "Asian 🥢",
        withChicken: "With Chicken 🐔",
        fish: "Fish 🐟",
        fried: "Fried 🍟",
        vegan: "Vegan 🌱",
        discover: "Discover", 
        dailyPick: "Dinner of the Day",
        lazyMode: "🟢 Lazy Mode",
        lazyHint: "Fast, cheap, microwave-friendly.",
        chefMode: "🔴 Chef Mode",
        chefHint: "Use the stove, impress your friends.",
        ingredients: "Ingredients & Spices",
        steps: "Instructions",
        footerText: "Helping students eat better, one click at a time.",
        funnyTexts: [
            "Checking your wallet...",
            "Saving you from eating plain pasta...",
            "Calculating student budget...",
            "Consulting the recipe algorithms...",
            "Finding something you won't burn...",
            "Looking for cheap ingredients..."
        ]
    },
    fr: { 
        brand: "Lettuce Guess", 
        welcome: "Trouvons quelque chose à préparer ! 🥬",
        seoIntro: "Le générateur de recettes pour étudiants. Choisissez vos préférences et laissez l'algorithme décider de votre dîner !",
        togglePrefs: "⚙️ Préférences",
        customize: "Personnalisez",
        studentFriendly: "Pour Étudiant", 
        cheap: "Pas Cher (< 6 DT) 🪙", 
        expensive: "Cher 💰", 
        tunisianStyle: "Style Tunisien 🇹🇳",
        asianStyle: "Asiatique 🥢",
        withChicken: "Poulet 🐔",
        fish: "Poisson 🐟",
        fried: "Frit 🍟",
        vegan: "Végan 🌱",
        discover: "Découvrir", 
        dailyPick: "Plat du Jour",
        lazyMode: "🟢 Mode Fainéant",
        lazyHint: "Rapide, pas cher, micro-ondes.",
        chefMode: "🔴 Mode Chef",
        chefHint: "Cuisinez sérieusement, impressionnez vos amis.",
        ingredients: "Ingrédients & Épices",
        steps: "Instructions",
        footerText: "Aider les étudiants à mieux manger, un clic à la fois.",
        funnyTexts: [
            "Vérification de votre portefeuille...",
            "On vous sauve des pâtes natures...",
            "Calcul du budget étudiant...",
            "Consultation de l'algorithme...",
            "Recherche d'un plat impossible à brûler...",
            "Recherche d'ingrédients pas chers..."
        ]
    },
    ar: { 
        brand: "Lettuce Guess", 
        welcome: "Lettuce Guess سيختار لك ماذا تطبخ! 🥬",
        seoIntro: "أفضل موقع لاقتراح وصفات عشوائية للطلاب والطهاة الكسالى. حدد ميزانيتك ودع الخوارزمية تختار عشاءك!",
        togglePrefs: "⚙️ إعدادات التفضيلات",
        customize: "خصص رغباتك",
        studentFriendly: "مناسب للطلاب", 
        cheap: "رخيص (أقل من 6 د.ت) 🪙", 
        expensive: "مكلف 💰", 
        tunisianStyle: "تونسي 🇹🇳",
        asianStyle: "آسيوي 🥢",
        withChicken: "بالدجاج 🐔",
        fish: "سمك 🐟",
        fried: "مقلية 🍟",
        vegan: "نباتي 🌱",
        discover: "اكتشف طعامك", 
        dailyPick: "طبق اليوم",
        lazyMode: "🟢 وضع الكسل",
        lazyHint: "سريع، رخيص، ومناسب للميكروويف.",
        chefMode: "🔴 وضع الطاهي",
        chefHint: "استخدم الموقد وأبهر أصدقاءك.",
        ingredients: "المكونات والبهارات",
        steps: "طريقة التحضير",
        footerText: "نساعد الطلاب على تناول طعام أفضل بضغطة زر.",
        funnyTexts: [
            "جاري فحص محفظتك...",
            "ننقذك من أكل المكرونة السادة...",
            "جاري حساب ميزانية الطالب...",
            "نتشاور مع خوارزمية الطبخ...",
            "نبحث عن شيء لن تحرقه...",
            "نبحث عن مكونات رخيصة..."
        ]
    }
};


// --- THE MASTER DATABASE (Fully Translated in EN, FR, AR) ---
const foodDatabase = [
    { 
        id: "tun_1", tags: ["fried", "fish", "student", "tunisian", "cheap"], emoji: "🥟", difficultyCSS: "medium", 
        translations: {
            en: { 
                name: "Tunisian Brika", origin: "Tunisia", difficulty: "Medium", cost: "Est. 3.00 DT", 
                description: "A perfectly crispy triangle pastry, stuffed with tuna, parsley, and a runny egg.", 
                simple: { time: "10 mins", temp: "Medium-High (Stove)", ingredients: ["1 Malsouka sheet", "Canned Tuna", "1 Egg", "Chopped Parsley & Onion", "Pinch of Black Pepper & Salt"], steps: ["Mix tuna, parsley, onion, salt, and black pepper.", "Place the mixture on the Malsouka sheet and make a small hole in the middle.", "Crack the egg into the hole.", "Fold into a triangle quickly and fry in hot oil for 2-3 mins per side until golden."] }, 
                hard: { time: "25 mins", temp: "Medium-High", ingredients: ["Malsouka", "Tuna", "Capers", "Boiled Potato", "1 Egg", "Black Pepper", "Tabil (Tunisian Spice)"], steps: ["Boil and mash 1 potato. Mix it with a pinch of Tabil, black pepper, tuna, and capers.", "Spread the filling on the sheet, crack the egg inside.", "Fold into a triangle and fry in hot oil until deeply crispy."] } 
            },
            fr: { 
                name: "Brik Tunisien", origin: "Tunisie", difficulty: "Moyen", cost: "Env. 3.00 DT", 
                description: "Un triangle de pâte croustillante, farci au thon, persil et un œuf coulant.", 
                simple: { time: "10 mins", temp: "Feu Vif", ingredients: ["1 Feuille de Malsouka", "Thon", "1 Œuf", "Persil et oignon hachés", "Sel & Poivre"], steps: ["Mélanger thon, persil, oignon et épices.", "Placer sur la feuille, faire un creux.", "Casser l'œuf dedans.", "Plier en triangle et frire 2-3 mins par face."] }, 
                hard: { time: "25 mins", temp: "Feu Vif", ingredients: ["Malsouka", "Thon", "Câpres", "Pomme de terre", "1 Œuf", "Poivre", "Tabel"], steps: ["Écraser la pomme de terre bouillie, mélanger avec Tabel, thon et câpres.", "Placer la farce, ajouter l'œuf.", "Frire dans l'huile bien chaude."] } 
            },
            ar: { 
                name: "بريك تونسي", origin: "تونس", difficulty: "متوسط", cost: "حوالي 3.00 د.ت", 
                description: "مثلث عجين مقرمش محشو بالتونة، البقدونس، وبيضة سائلة.", 
                simple: { time: "10 دقائق", temp: "نار متوسطة-عالية", ingredients: ["ورقة ملسوقة", "تونة", "بيضة", "بقدونس وبصل مقطع", "ملح وفلفل أسود"], steps: ["اخلط التونة، البقدونس، البصل، والبهارات.", "ضع الخليط على الملسوقة واصنع حفرة صغيرة.", "اكسر البيضة داخل الحفرة.", "اطوها على شكل مثلث واقليها في زيت ساخن حتى تصبح ذهبية."] }, 
                hard: { time: "25 دقيقة", temp: "نار عالية", ingredients: ["ملسوقة", "تونة", "كَبَر", "بطاطا مسلوقة", "بيضة", "فلفل أسود", "تابل وكروية"], steps: ["اسلق البطاطا واهرسها، اخلطها مع التابل والتونة والكبر.", "ضع الحشوة والبيضة على الورقة.", "اقليها في زيت ساخن جداً حتى تقرمش."] } 
            }
        }
    },
    { 
        id: "tun_2", tags: ["boiled", "student", "spicy", "vegan", "tunisian", "cheap"], emoji: "🥣", difficultyCSS: "easy", 
        translations: {
            en: { 
                name: "Spicy Lablebi", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.50 DT", 
                description: "The ultimate cheap, garlicky chickpea street-food soup poured over day-old bread.", 
                simple: { time: "15 mins", temp: "Boiling", ingredients: ["1 Can Chickpeas", "1 tbsp Harissa", "Stale Baguette", "2 cloves Garlic (crushed)", "1 tsp Cumin", "Olive Oil"], steps: ["Boil chickpeas in their water with crushed garlic, cumin, and salt for 10 minutes.", "Tear the stale bread into small pieces in a bowl.", "Pour the boiling soup over the bread. Top with Harissa, olive oil, and extra cumin."] }, 
                hard: { time: "2 hours", temp: "Low Simmer", ingredients: ["Dried Chickpeas", "Garlic", "Harissa", "Olive Oil", "Cumin", "Canned Tuna", "1 Soft-Boiled Egg"], steps: ["Soak chickpeas overnight. Boil them for 2 hours until very soft.", "Prepare a bowl with torn bread.", "Add the hot chickpeas and broth. Top heavily with olive oil, cumin, Harissa, tuna, and mix the soft-boiled egg in."] } 
            },
            fr: { 
                name: "Lablebi Épicé", origin: "Tunisie", difficulty: "Facile", cost: "Env. 3.50 DT", 
                description: "Soupe de rue pas chère aux pois chiches et à l'ail, versée sur du pain de la veille.", 
                simple: { time: "15 mins", temp: "Ébullition", ingredients: ["Pois chiches en boîte", "Harissa", "Pain rassis", "Ail", "Cumin", "Huile d'olive"], steps: ["Bouillir les pois chiches avec l'ail et le cumin 10 mins.", "Déchirer le pain dans un bol.", "Verser la soupe brûlante. Ajouter harissa et huile d'olive."] }, 
                hard: { time: "2 heures", temp: "Frémir", ingredients: ["Pois chiches secs", "Ail", "Harissa", "Huile d'olive", "Cumin", "Thon", "Œuf mollet"], steps: ["Tremper les pois chiches la nuit. Bouillir 2h.", "Mettre le pain dans un bol.", "Ajouter pois chiches, bouillon, huile, cumin, harissa, thon et l'œuf."] } 
            },
            ar: { 
                name: "لبلابي حار", origin: "تونس", difficulty: "سهل", cost: "حوالي 3.50 د.ت", 
                description: "حساء الشارع الشهير والرخيص بالحمص والثوم، يُسكب فوق الخبز البائت.", 
                simple: { time: "15 دقيقة", temp: "غليان", ingredients: ["حمص معلب", "ملعقة هريسة", "خبز بائت", "ثوم مهروس", "كمون", "زيت زيتون"], steps: ["اغلي الحمص في مائه مع الثوم والكمون والملح لـ 10 دقائق.", "قطع الخبز البائت في وعاء.", "اسكب الحساء المغلي فوق الخبز وزينه بالهريسة وزيت الزيتون."] }, 
                hard: { time: "ساعتان", temp: "نار هادئة", ingredients: ["حمص جاف", "ثوم", "هريسة", "زيت زيتون", "كمون", "تونة", "بيضة نصف مسلوقة"], steps: ["انقع الحمص طوال الليل واغله لساعتين حتى يلين جداً.", "حضّر وعاء الخبز المقطع.", "أضف الحمص والمرق، وزينه بسخاء بزيت الزيتون والكمون والهريسة والتونة والبيضة."] } 
            }
        }
    },
    { 
        id: "tun_3", tags: ["boiled", "tunisian", "expensive"], emoji: "🥘", difficultyCSS: "hard", 
        translations: {
            en: { 
                name: "Traditional Mloukhiya", origin: "Tunisia", difficulty: "Hard", cost: "Est. 25.00 DT", 
                description: "A rich, dark green stew simmered for hours, made with jute leaf powder and tender beef.", 
                simple: { time: "3.5 hours", temp: "Low Heat", ingredients: ["Mloukhiya powder", "Olive Oil", "Beef chunks", "Minced Garlic", "Bay Leaves", "Tabil & Karwia"], steps: ["Mix the green powder with olive oil in a cold pot until it forms a paste.", "Turn on medium heat, gradually whisk in 1.5 liters of boiling water.", "Add garlic, bay leaves, Tabil, and beef.", "Cover and simmer on very low heat for 3 hours until the oil separates."] }, 
                hard: { time: "5 hours", temp: "Lowest Heat", ingredients: ["Mloukhiya powder", "Premium Olive Oil", "Beef Shank", "Whole Head of Garlic", "Dried Mint", "Tabil & Karwia", "Bay Leaves"], steps: ["Marinate beef overnight with garlic, Tabil, Karwia, and salt.", "Fry the powder in olive oil for 3 minutes (do not burn).", "Whisk in boiling water.", "Simmer for 2 hours, add beef. Cook 3 more hours until oil separates."] } 
            },
            fr: { 
                name: "Mloukhiya Traditionnelle", origin: "Tunisie", difficulty: "Difficile", cost: "Env. 25.00 DT", 
                description: "Ragoût vert foncé riche, mijoté pendant des heures avec de la poudre de corète et du bœuf.", 
                simple: { time: "3.5 heures", temp: "Feu Doux", ingredients: ["Poudre de Mloukhiya", "Huile d'olive", "Bœuf", "Ail", "Laurier", "Tabel & Karwia"], steps: ["Mélanger la poudre et l'huile à froid.", "Chauffer et ajouter l'eau bouillante.", "Ajouter ail, épices et viande.", "Mijoter à feu très doux 3h jusqu'à ce que l'huile remonte."] }, 
                hard: { time: "5 heures", temp: "Feu Très Doux", ingredients: ["Mloukhiya", "Huile d'olive", "Jarret de bœuf", "Ail", "Menthe séchée", "Tabel & Karwia", "Laurier"], steps: ["Mariner la viande la nuit avec les épices.", "Frire la poudre dans l'huile 3 mins.", "Ajouter l'eau bouillante doucement.", "Mijoter 2h, ajouter la viande. Cuire encore 3h."] } 
            },
            ar: { 
                name: "ملوخية دياري", origin: "تونس", difficulty: "صعب", cost: "حوالي 25.00 د.ت", 
                description: "يخنة غنية وداكنة تُطبخ لساعات من مسحوق الملوخية ولحم البقر الطري.", 
                simple: { time: "3.5 ساعات", temp: "نار هادئة", ingredients: ["مسحوق ملوخية", "زيت زيتون", "قطع لحم بقر", "ثوم", "رند (غار)", "تابل وكروية"], steps: ["اخلط المسحوق مع الزيت في قدر بارد.", "سخن القدر وأضف الماء المغلي تدريجياً.", "أضف الثوم والرند واللحم.", "اتركها تطبخ على نار هادئة جداً لـ 3 ساعات حتى يطفو الزيت."] }, 
                hard: { time: "5 ساعات", temp: "نار هادئة جداً", ingredients: ["ملوخية", "زيت زيتون رفيع", "لحم بقر (هبرة)", "رأس ثوم كامل", "نعناع شايح", "تابل وكروية", "رند"], steps: ["تبل اللحم ليلة كاملة بالثوم والبهارات.", "اقلِ الملوخية في الزيت لـ 3 دقائق.", "أضف الماء المغلي مع التحريك المستمر.", "اطبخها لساعتين ثم أضف اللحم. اتركها 3 ساعات أخرى حتى يقر زيتها."] } 
            }
        }
    },
    { 
        id: "int_5", tags: ["student", "boiled", "cheap"], emoji: "🍝", difficultyCSS: "medium", 
        translations: {
            en: { 
                name: "Garlic Butter Pasta", origin: "Italy", difficulty: "Medium", cost: "Est. 4.00 DT", 
                description: "A 5-star tasting meal made from standard, cheap pantry ingredients.", 
                simple: { time: "15 mins", temp: "Boiling", ingredients: ["Spaghetti", "2 tbsp Butter", "1 tsp Garlic Powder", "Salt & Black Pepper", "Grated Cheese"], steps: ["Boil water, add salt, and cook pasta for 10 mins. Drain it.", "In the same hot pot, melt butter, add garlic powder and black pepper.", "Toss the pasta in the butter, top with cheese."] }, 
                hard: { time: "20 mins", temp: "Medium Heat", ingredients: ["Spaghetti", "Real Butter", "4 cloves Fresh Garlic", "Fresh Parsley", "Chili Flakes", "Parmesan Cheese"], steps: ["Cook pasta, save half a cup of pasta water.", "In a pan, melt butter. Sauté fresh minced garlic and chili flakes for 2 mins.", "Add pasta and the saved water. Toss vigorously until a creamy sauce forms. Top with parsley."] } 
            },
            fr: { 
                name: "Pâtes Beurre et Ail", origin: "Italie", difficulty: "Moyen", cost: "Env. 4.00 DT", 
                description: "Un repas 5 étoiles réalisé avec des ingrédients simples et pas chers.", 
                simple: { time: "15 mins", temp: "Ébullition", ingredients: ["Spaghetti", "Beurre", "Ail en poudre", "Sel & Poivre", "Fromage râpé"], steps: ["Cuire les pâtes 10 mins et égoutter.", "Fondre le beurre dans la casserole avec l'ail en poudre.", "Mélanger les pâtes et ajouter le fromage."] }, 
                hard: { time: "20 mins", temp: "Feu Moyen", ingredients: ["Spaghetti", "Beurre", "Ail frais", "Persil", "Piment en flocons", "Parmesan"], steps: ["Cuire les pâtes, garder un peu d'eau de cuisson.", "Fondre le beurre, sauter l'ail et le piment 2 mins.", "Ajouter les pâtes et l'eau. Mélanger fort pour créer une sauce crémeuse."] } 
            },
            ar: { 
                name: "مكرونة بالثوم والزبدة", origin: "إيطاليا", difficulty: "متوسط", cost: "حوالي 4.00 د.ت", 
                description: "وجبة بمذاق 5 نجوم بمكونات رخيصة ومتوفرة في كل مطبخ.", 
                simple: { time: "15 دقيقة", temp: "غليان", ingredients: ["سباغيتي", "زبدة", "بودرة ثوم", "ملح وفلفل أسود", "جبن مبشور"], steps: ["اسلق المكرونة لـ 10 دقائق وصفها.", "في نفس القدر، أذب الزبدة وأضف بودرة الثوم والفلفل.", "قلب المكرونة في الزبدة وزينها بالجبن."] }, 
                hard: { time: "20 دقيقة", temp: "نار متوسطة", ingredients: ["سباغيتي", "زبدة حيوانية", "ثوم طازج", "بقدونس طازج", "رقائق فلفل حار", "جبن بارميزان"], steps: ["اسلق المكرونة واحتفظ بنصف كوب من ماء السلق.", "أذب الزبدة وشوّح الثوم الطازج والفلفل لـ دقيقتين.", "أضف المكرونة وماء السلق. قلب بقوة حتى تتكون صلصة كريمية."] } 
            }
        }
    },
    { 
        id: "int_10", tags: ["chicken", "fried", "expensive"], emoji: "🍗", difficultyCSS: "hard", 
        translations: {
            en: { 
                name: "Spicy Fried Chicken", origin: "USA", difficulty: "Hard", cost: "Est. 18.00 DT", 
                description: "Golden, ultra-crispy fried chicken with heavy spices.", 
                simple: { time: "25 mins", temp: "High Heat", ingredients: ["Chicken Breasts", "Flour", "2 Eggs", "Paprika, Garlic Powder, Salt, Black Pepper", "Frying Oil"], steps: ["Cut chicken into chunks.", "Mix flour with a heavy amount of paprika, salt, and pepper.", "Dip chicken in beaten egg, then in spiced flour.", "Fry in 170°C hot oil for 7-10 minutes until golden brown."] }, 
                hard: { time: "12 hours", temp: "160°C Oil", ingredients: ["Bone-in Chicken pieces", "Lben (Buttermilk)", "Flour", "Cornstarch", "Red Chili Powder, Garlic, Onion, White Pepper"], steps: ["Marinate chicken overnight in Lben and hot sauce.", "Mix 2 parts flour, 1 part cornstarch, and spices.", "Dredge chicken in flour, pressing hard.", "Fry in deep oil for 12-15 minutes. Rest on a wire rack."] } 
            },
            fr: { 
                name: "Poulet Frit Épicé", origin: "USA", difficulty: "Difficile", cost: "Env. 18.00 DT", 
                description: "Poulet frit doré et ultra-croustillant avec beaucoup d'épices.", 
                simple: { time: "25 mins", temp: "Feu Vif", ingredients: ["Blancs de poulet", "Farine", "2 Œufs", "Paprika, Ail, Sel, Poivre", "Huile de friture"], steps: ["Couper le poulet.", "Mélanger farine et épices.", "Tremper le poulet dans l'œuf puis la farine.", "Frire à 170°C pendant 7-10 mins."] }, 
                hard: { time: "12 heures", temp: "Huile 160°C", ingredients: ["Poulet avec os", "Lben (Babeurre)", "Farine", "Maïzena", "Piment rouge, Ail, Oignon, Poivre blanc"], steps: ["Mariner le poulet la nuit dans le Lben.", "Mélanger farine, maïzena et épices.", "Enrober le poulet en pressant fort.", "Frire 12-15 mins. Laisser reposer sur une grille."] } 
            },
            ar: { 
                name: "دجاج مقلي حار", origin: "أمريكا", difficulty: "صعب", cost: "حوالي 18.00 د.ت", 
                description: "دجاج مقلي ذهبي ومقرمش جداً ومليء بالبهارات.", 
                simple: { time: "25 دقيقة", temp: "نار عالية", ingredients: ["صدور دجاج", "دقيق", "بيضتان", "بابريكا، بودرة ثوم، ملح، فلفل أسود", "زيت قلي"], steps: ["قطع الدجاج إلى قطع.", "اخلط الدقيق مع البهارات.", "اغمس الدجاج في البيض ثم في الدقيق المتبل.", "اقله في زيت ساخن (170 درجة) لـ 7-10 دقائق."] }, 
                hard: { time: "12 ساعة", temp: "زيت 160 درجة", ingredients: ["دجاج بالعظم", "لبن", "دقيق", "نشا", "فلفل أحمر حار، ثوم، بصل، فلفل أبيض"], steps: ["انقع الدجاج ليلة كاملة في اللبن والصلصة الحارة.", "اخلط الدقيق والنشا والبهارات.", "غلف الدجاج بالخليط واضغط بقوة.", "اقله في زيت غزير لـ 12-15 دقيقة. دعه يرتاح على شبكة معدنية."] } 
            }
        }
    },
    {
        id: "tun_4", tags: ["tunisian", "cheap", "student", "fried"], emoji: "🍳", difficultyCSS: "easy",
        translations: {
            en: {
                name: "Ojja (Tunisian Egg & Tomato)", origin: "Tunisia", difficulty: "Easy", cost: "Est. 5.00 DT",
                description: "A quick tomato, pepper, and egg skillet meal—perfect for students.",
                simple: {
                    time: "15 mins", temp: "Medium Heat",
                    ingredients: ["2 Eggs", "Tomato sauce", "1 Bell pepper", "Onion", "Harissa (optional)", "Olive oil", "Salt & Pepper"],
                    steps: [
                        "Sauté onion and pepper in olive oil.",
                        "Add tomato sauce and simmer 5 minutes (add harissa if you want).",
                        "Make small wells, crack eggs in.",
                        "Cover until eggs set. Eat with bread."
                    ]
                },
                hard: {
                    time: "25 mins", temp: "Medium Heat",
                    ingredients: ["3 Eggs", "Fresh tomatoes", "1 Bell pepper", "Onion", "Garlic", "Harissa", "Cumin", "Olive oil"],
                    steps: [
                        "Grate tomatoes and cook them down with onion, garlic, and pepper.",
                        "Season with cumin + harissa.",
                        "Crack eggs, cover, and cook to your liking."
                    ]
                }
            },
            fr: {
                name: "Ojja (Œufs à la tomate)", origin: "Tunisie", difficulty: "Facile", cost: "Env. 5.00 DT",
                description: "Plat rapide à base de tomate, poivron et œufs—parfait pour les étudiants.",
                simple: {
                    time: "15 mins", temp: "Feu Moyen",
                    ingredients: ["2 Œufs", "Sauce tomate", "1 Poivron", "Oignon", "Harissa (optionnel)", "Huile d'olive", "Sel & Poivre"],
                    steps: [
                        "Faire revenir oignon et poivron dans l'huile d'olive.",
                        "Ajouter la sauce tomate et mijoter 5 minutes (harissa si vous voulez).",
                        "Faire des petits trous et casser les œufs.",
                        "Couvrir jusqu'à cuisson des œufs. Manger avec du pain."
                    ]
                },
                hard: {
                    time: "25 mins", temp: "Feu Moyen",
                    ingredients: ["3 Œufs", "Tomates fraîches", "1 Poivron", "Oignon", "Ail", "Harissa", "Cumin", "Huile d'olive"],
                    steps: [
                        "Râper les tomates et les faire réduire avec oignon, ail et poivron.",
                        "Assaisonner avec cumin + harissa.",
                        "Ajouter les œufs, couvrir et cuire."
                    ]
                }
            },
            ar: {
                name: "عجّة تونسية", origin: "تونس", difficulty: "سهل", cost: "حوالي 5.00 د.ت",
                description: "طبق سريع بالطماطم والفلفل والبيض—ممتاز للطلاب.",
                simple: {
                    time: "15 دقيقة", temp: "نار متوسطة",
                    ingredients: ["بيضتان", "صلصة طماطم", "فلفل حلو", "بصل", "هريسة (اختياري)", "زيت زيتون", "ملح وفلفل"],
                    steps: [
                        "شوّح البصل والفلفل في زيت الزيتون.",
                        "أضف صلصة الطماطم واتركها 5 دقائق (أضف هريسة إذا تحب).",
                        "اصنع حفر صغيرة واكسر البيض.",
                        "غطِّ المقلاة حتى ينضج البيض. يؤكل مع الخبز."
                    ]
                },
                hard: {
                    time: "25 دقيقة", temp: "نار متوسطة",
                    ingredients: ["3 بيض", "طماطم طازجة", "فلفل", "بصل", "ثوم", "هريسة", "كمون", "زيت زيتون"],
                    steps: [
                        "ابشر الطماطم واطبخها مع البصل والثوم والفلفل حتى تتركز.",
                        "تبّل بالكمون والهريسة.",
                        "أضف البيض وغطِّ حتى ينضج حسب الرغبة."
                    ]
                }
            }
        }
    },
    {
        id: "tun_5", tags: ["tunisian", "cheap", "student", "vegan", "boiled"], emoji: "🥗", difficultyCSS: "easy",
        translations: {
            en: {
                name: "Tunisian Slata Mechouia", origin: "Tunisia", difficulty: "Easy", cost: "Est. 6.00 DT",
                description: "Smoky grilled pepper & tomato salad—fresh, cheap, and legendary.",
                simple: {
                    time: "20 mins", temp: "High Heat",
                    ingredients: ["2 Peppers", "2 Tomatoes", "Garlic", "Olive oil", "Salt", "Lemon"],
                    steps: [
                        "Grill peppers and tomatoes until skin blackens.",
                        "Peel, chop, and mix with garlic, salt, lemon, and olive oil.",
                        "Serve with bread (optional tuna/egg on top)."
                    ]
                },
                hard: {
                    time: "35 mins", temp: "High Heat",
                    ingredients: ["Peppers", "Tomatoes", "Onion", "Garlic", "Olive oil", "Cumin", "Caraway", "Harissa (optional)"],
                    steps: [
                        "Roast peppers and tomatoes, peel and remove seeds.",
                        "Chop finely and season with cumin + caraway.",
                        "Add olive oil and (optional) a little harissa."
                    ]
                }
            },
            fr: {
                name: "Slata Mechouia", origin: "Tunisie", difficulty: "Facile", cost: "Env. 6.00 DT",
                description: "Salade fumée de poivrons et tomates grillés—fraîche et pas chère.",
                simple: {
                    time: "20 mins", temp: "Feu Vif",
                    ingredients: ["2 Poivrons", "2 Tomates", "Ail", "Huile d'olive", "Sel", "Citron"],
                    steps: [
                        "Griller poivrons et tomates jusqu'à noircissement.",
                        "Éplucher, hacher, puis assaisonner avec ail, sel, citron et huile.",
                        "Servir avec du pain (thon/œuf en option)."
                    ]
                },
                hard: {
                    time: "35 mins", temp: "Feu Vif",
                    ingredients: ["Poivrons", "Tomates", "Oignon", "Ail", "Huile d'olive", "Cumin", "Carvi", "Harissa (optionnel)"],
                    steps: [
                        "Rôtir poivrons et tomates, éplucher et enlever les graines.",
                        "Hacher finement et assaisonner avec cumin + carvi.",
                        "Ajouter huile d'olive et un peu de harissa (optionnel)."
                    ]
                }
            },
            ar: {
                name: "سلاطة مشوية", origin: "تونس", difficulty: "سهل", cost: "حوالي 6.00 د.ت",
                description: "سلاطة دخانية بالفلفل والطماطم المشوية—خفيفة ورخيصة.",
                simple: {
                    time: "20 دقيقة", temp: "نار عالية",
                    ingredients: ["فلفلتان", "طماطمان", "ثوم", "زيت زيتون", "ملح", "عصير ليمون"],
                    steps: [
                        "اشوِ الفلفل والطماطم حتى تسود القشرة.",
                        "قشّر وقطّع وامزج مع الثوم والملح والليمون والزيت.",
                        "تُقدّم مع الخبز (يمكن إضافة تونة/بيض فوقها)."
                    ]
                },
                hard: {
                    time: "35 دقيقة", temp: "نار عالية",
                    ingredients: ["فلفل", "طماطم", "بصل", "ثوم", "زيت زيتون", "كمون", "كروية", "هريسة (اختياري)"],
                    steps: [
                        "اشوِ الفلفل والطماطم ثم قشّر وانزع البذور.",
                        "فرم جيداً وتبّل بالكمون والكروية.",
                        "أضف زيت الزيتون وقليل هريسة (اختياري)."
                    ]
                }
            }
        }
    },
    { 
        id: "int_11", tags: ["student", "cheap", "vegan", "boiled"], emoji: "🍚", difficultyCSS: "easy",
        translations: {
            en: {
                name: "Soy Garlic Rice Bowl", origin: "Asia", difficulty: "Easy", cost: "Est. 4.50 DT",
                description: "A fast rice bowl with soy, garlic, and veggies—cheap and filling.",
                simple: {
                    time: "15 mins", temp: "Medium Heat",
                    ingredients: ["Cooked rice", "Soy sauce", "Garlic", "Frozen veggies", "Sesame oil (optional)", "Black pepper"],
                    steps: [
                        "Sauté garlic in a little oil.",
                        "Add veggies and cook 5 minutes.",
                        "Add rice + soy sauce and mix well."
                    ]
                },
                hard: {
                    time: "25 mins", temp: "Medium-High",
                    ingredients: ["Rice", "Soy sauce", "Garlic", "Egg (optional)", "Green onion", "Ginger", "Chili flakes (optional)"],
                    steps: [
                        "Cook rice (best if slightly dry).",
                        "Sauté garlic + ginger.",
                        "Add rice + soy sauce; stir-fry 5 minutes.",
                        "Top with green onion (and egg if you want)."
                    ]
                }
            },
            fr: {
                name: "Bol de Riz Soja & Ail", origin: "Asie", difficulty: "Facile", cost: "Env. 4.50 DT",
                description: "Bol de riz rapide au soja, ail et légumes—pas cher et rassasiant.",
                simple: {
                    time: "15 mins", temp: "Feu Moyen",
                    ingredients: ["Riz cuit", "Sauce soja", "Ail", "Légumes surgelés", "Huile de sésame (optionnel)", "Poivre"],
                    steps: [
                        "Faire revenir l'ail dans un peu d'huile.",
                        "Ajouter les légumes et cuire 5 mins.",
                        "Ajouter le riz + soja et mélanger."
                    ]
                },
                hard: {
                    time: "25 mins", temp: "Feu Moyen-Vif",
                    ingredients: ["Riz", "Sauce soja", "Ail", "Œuf (optionnel)", "Oignon vert", "Gingembre", "Flocons de piment (optionnel)"],
                    steps: [
                        "Cuire le riz (meilleur un peu sec).",
                        "Faire revenir ail + gingembre.",
                        "Ajouter le riz + soja, sauter 5 mins.",
                        "Ajouter l'oignon vert (et l'œuf si vous voulez)."
                    ]
                }
            },
            ar: {
                name: "طبق أرز بالصويا والثوم", origin: "آسيا", difficulty: "سهل", cost: "حوالي 4.50 د.ت",
                description: "طبق أرز سريع مع صويا وثوم وخضار—رخيص ومشبع.",
                simple: {
                    time: "15 دقيقة", temp: "نار متوسطة",
                    ingredients: ["أرز مطبوخ", "صوص صويا", "ثوم", "خضار مجمدة", "زيت سمسم (اختياري)", "فلفل أسود"],
                    steps: [
                        "شوّح الثوم في قليل زيت.",
                        "أضف الخضار واطبخ 5 دقائق.",
                        "أضف الأرز وصوص الصويا وامزج جيداً."
                    ]
                },
                hard: {
                    time: "25 دقيقة", temp: "نار متوسطة-عالية",
                    ingredients: ["أرز", "صوص صويا", "ثوم", "بيضة (اختياري)", "بصل أخضر", "زنجبيل", "رقائق فلفل حار (اختياري)"],
                    steps: [
                        "اطبخ الأرز (أفضل إذا كان جاف قليلاً).",
                        "شوّح الثوم والزنجبيل.",
                        "أضف الأرز وصوص الصويا وقلّب 5 دقائق.",
                        "زيّن بالبصل الأخضر (وأضف البيض إن أحببت)."
                    ]
                }
            }
        }
    },
    {
        id: "int_12", tags: ["student", "cheap", "vegan", "boiled", "spicy"], emoji: "🍜", difficultyCSS: "easy",
        translations: {
            en: {
                name: "Spicy Instant Ramen Upgrade", origin: "Japan", difficulty: "Easy", cost: "Est. 4.00 DT",
                description: "Instant noodles upgraded with garlic, chili, and veggies—tastes 10x better.",
                simple: {
                    time: "10 mins", temp: "Boiling",
                    ingredients: ["Instant ramen", "Garlic", "Chili flakes", "Frozen veggies", "Soy sauce (optional)", "Green onion"],
                    steps: [
                        "Boil water and cook noodles.",
                        "Add veggies in the last 2 minutes.",
                        "Mix garlic + chili (and soy) then pour soup over it."
                    ]
                },
                hard: {
                    time: "20 mins", temp: "Medium Heat",
                    ingredients: ["Ramen", "Garlic", "Ginger", "Chili", "Peanut butter (optional)", "Egg (optional)"],
                    steps: [
                        "Make a quick sauce: garlic + ginger + chili + (optional peanut butter).",
                        "Cook noodles, toss into sauce.",
                        "Top with egg if you want."
                    ]
                }
            },
            fr: {
                name: "Ramen Instant Amélioré", origin: "Japon", difficulty: "Facile", cost: "Env. 4.00 DT",
                description: "Nouilles instant améliorées avec ail, piment et légumes—beaucoup meilleur.",
                simple: {
                    time: "10 mins", temp: "Ébullition",
                    ingredients: ["Ramen instant", "Ail", "Flocons de piment", "Légumes surgelés", "Sauce soja (optionnel)", "Oignon vert"],
                    steps: [
                        "Cuire les nouilles.",
                        "Ajouter les légumes les 2 dernières minutes.",
                        "Mélanger ail + piment (et soja) puis verser la soupe dessus."
                    ]
                },
                hard: {
                    time: "20 mins", temp: "Feu Moyen",
                    ingredients: ["Ramen", "Ail", "Gingembre", "Piment", "Beurre de cacahuète (optionnel)", "Œuf (optionnel)"],
                    steps: [
                        "Préparer une sauce: ail + gingembre + piment + (optionnel beurre de cacahuète).",
                        "Cuire les nouilles et les mélanger à la sauce.",
                        "Ajouter un œuf si vous voulez."
                    ]
                }
            },
            ar: {
                name: "رامن سريع محسّن", origin: "اليابان", difficulty: "سهل", cost: "حوالي 4.00 د.ت",
                description: "نودلز فورية محسّنة بالثوم والفلفل والخضار—طعم أفضل بكثير.",
                simple: {
                    time: "10 دقائق", temp: "غليان",
                    ingredients: ["نودلز فورية", "ثوم", "رقائق فلفل", "خضار مجمدة", "صوص صويا (اختياري)", "بصل أخضر"],
                    steps: [
                        "اسلق الماء واطبخ النودلز.",
                        "أضف الخضار في آخر دقيقتين.",
                        "اخلط الثوم والفلفل (وصويا اختياري) ثم اسكب المرق فوقه."
                    ]
                },
                hard: {
                    time: "20 دقيقة", temp: "نار متوسطة",
                    ingredients: ["رامن", "ثوم", "زنجبيل", "فلفل حار", "زبدة فول سوداني (اختياري)", "بيضة (اختياري)"],
                    steps: [
                        "حضّر صوص سريع: ثوم + زنجبيل + فلفل + (اختياري زبدة فول سوداني).",
                        "اطبخ النودلز وامزجها مع الصوص.",
                        "أضف بيضة إذا تحب."
                    ]
                }
            }
        }
    },
    {
        id: "int_13", tags: ["student", "cheap", "vegan", "fried"], emoji: "🌮", difficultyCSS: "medium",
        translations: {
            en: {
                name: "Bean & Veggie Wrap", origin: "International", difficulty: "Medium", cost: "Est. 6.00 DT",
                description: "A cheap wrap with beans and veggies—great for meal prep.",
                simple: {
                    time: "15 mins", temp: "Medium Heat",
                    ingredients: ["Tortilla", "Canned beans", "Onion", "Bell pepper", "Spices", "Yogurt sauce (optional)"],
                    steps: [
                        "Sauté onion + pepper.",
                        "Add beans + spices and heat.",
                        "Wrap in tortilla and toast lightly in pan."
                    ]
                },
                hard: {
                    time: "30 mins", temp: "Medium Heat",
                    ingredients: ["Tortillas", "Beans", "Corn (optional)", "Garlic", "Cumin", "Paprika", "Lettuce", "Tomato"],
                    steps: [
                        "Cook beans with garlic and spices.",
                        "Assemble wrap with lettuce + tomato.",
                        "Toast for a crispy finish."
                    ]
                }
            },
            fr: {
                name: "Wrap Haricots & Légumes", origin: "International", difficulty: "Moyen", cost: "Env. 6.00 DT",
                description: "Wrap pas cher avec haricots et légumes—parfait pour préparer à l'avance.",
                simple: {
                    time: "15 mins", temp: "Feu Moyen",
                    ingredients: ["Tortilla", "Haricots en boîte", "Oignon", "Poivron", "Épices", "Sauce yaourt (optionnel)"],
                    steps: [
                        "Faire revenir oignon + poivron.",
                        "Ajouter haricots + épices.",
                        "Rouler dans la tortilla et griller légèrement."
                    ]
                },
                hard: {
                    time: "30 mins", temp: "Feu Moyen",
                    ingredients: ["Tortillas", "Haricots", "Maïs (optionnel)", "Ail", "Cumin", "Paprika", "Salade", "Tomate"],
                    steps: [
                        "Cuire les haricots avec ail et épices.",
                        "Monter le wrap avec salade + tomate.",
                        "Griller pour un effet croustillant."
                    ]
                }
            },
            ar: {
                name: "راب بالفاصوليا والخضار", origin: "عالمي", difficulty: "متوسط", cost: "حوالي 6.00 د.ت",
                description: "راب رخيص بالفاصوليا والخضار—مناسب للتحضير المسبق.",
                simple: {
                    time: "15 دقيقة", temp: "نار متوسطة",
                    ingredients: ["تورتيلا", "فاصوليا معلبة", "بصل", "فلفل", "بهارات", "صوص ياغورت (اختياري)"],
                    steps: [
                        "شوّح البصل والفلفل.",
                        "أضف الفاصوليا والبهارات وسخّنها.",
                        "لفّها في التورتيلا وحمّصها قليلاً."
                    ]
                },
                hard: {
                    time: "30 دقيقة", temp: "نار متوسطة",
                    ingredients: ["تورتيلا", "فاصوليا", "ذرة (اختياري)", "ثوم", "كمون", "بابريكا", "خس", "طماطم"],
                    steps: [
                        "اطبخ الفاصوليا مع الثوم والبهارات.",
                        "حضّر الراب مع الخس والطماطم.",
                        "حمّصه ليصبح مقرمشاً."
                    ]
                }
            }
        }
    }
];

let currentFood = null;
let currentLang = 'en';

// --- INITIALIZE THEME & LANGUAGE ---
window.onload = () => {
    if (localStorage.getItem('lettuceTheme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggleBtn').innerText = "☀️";
    }
    const savedLang = localStorage.getItem('lettuceLang') || 'en';
    document.getElementById('languageSelect').value = savedLang;
    applyLanguage(savedLang);
};

// --- TOP BAR CONTROLS ---
document.getElementById('themeToggleBtn').addEventListener('click', (e) => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    e.target.innerText = isDark ? "☀️" : "🌙";
    localStorage.setItem('lettuceTheme', isDark ? 'dark' : 'light');
});
document.getElementById('languageSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('lettuceLang', currentLang);
    applyLanguage(currentLang);
    // Refresh food translation if a food is currently showing
    if (currentFood && document.getElementById('result').style.display !== 'none') {
        let prefix = "";
        if (document.getElementById('foodName').innerText.includes("🌟") || document.getElementById('foodName').innerText.includes("⭐")) {
            prefix = `🌟 ${translations[currentLang].dailyPick}: `;
        }
        showResultUI(prefix); 
        // Refresh Modal if it is open
        if (!document.getElementById('recipeModal').classList.contains('hidden')) {
            const isSimple = document.getElementById('modalTitle').innerText.includes("🟢");
            window.openRecipeDetails(isSimple ? 'simple' : 'hard');
        }
    }
});
function applyLanguage(lang) {
    currentLang = lang;
    // 1. Update HTML text based on data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Keep emojis safe if they exist inside the innerHTML
            if(el.innerHTML.includes('🪙')) el.innerHTML = translations[lang][key];
            else if(el.innerHTML.includes('💰')) el.innerHTML = translations[lang][key];
            else if(el.innerHTML.includes('🎓')) el.innerHTML = "🎓 " + translations[lang][key];
            else if(el.innerHTML.includes('🇹🇳')) el.innerHTML = translations[lang][key] + " 🇹🇳";
            else if(el.innerHTML.includes('🥢')) el.innerHTML = translations[lang][key] + " 🥢";
            else if(el.innerHTML.includes('🐔')) el.innerHTML = translations[lang][key] + " 🐔";
            else if(el.innerHTML.includes('🐟')) el.innerHTML = translations[lang][key] + " 🐟";
            else if(el.innerHTML.includes('🍟')) el.innerHTML = translations[lang][key] + " 🍟";
            else if(el.innerHTML.includes('🌱')) el.innerHTML = translations[lang][key] + " 🌱";
            else el.innerHTML = translations[lang][key]; 
        }
    });
    // 2. Set direction for CSS (This triggers the Tajawal font automatically now!)
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}
// --- UI LOGIC ---
document.getElementById('toggleFiltersBtn').addEventListener('click', () => {
    document.getElementById('preferencesPanel').classList.toggle('hidden');
});
// Daily Pick Button Logic
document.getElementById('dailyPickBtn').addEventListener('click', () => {
    const dateStr = new Date().toDateString(); 
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
    currentFood = foodDatabase[Math.abs(hash) % foodDatabase.length];
    showResultUI(`🌟 ${translations[currentLang].dailyPick}: `); 
});
// Main Discover Button Logic
document.getElementById('suggestBtn').addEventListener('click', () => {
    const filters = { 
        studentOnly: document.getElementById('studentOnly').checked,
        cheapOnly: document.getElementById('cheapOnly').checked,
        expensiveOnly: document.getElementById('expensiveOnly').checked,
        tunisianStyle: document.getElementById('tunisianStyle').checked, 
        asianStyle: document.getElementById('asianStyle').checked, 
        withChicken: document.getElementById('withChicken').checked, 
        loveFish: document.getElementById('loveFish').checked, 
        friedOnly: document.getElementById('friedOnly').checked, 
        isVegan: document.getElementById('vegan').checked 
    };
    let availableFood = foodDatabase.filter(food => {
        if (filters.studentOnly && !food.tags.includes('student')) return false; 
        if (filters.cheapOnly && !food.tags.includes('cheap')) return false;
        if (filters.expensiveOnly && !food.tags.includes('expensive')) return false;
        if (filters.tunisianStyle && !food.tags.includes('tunisian')) return false; 
        if (filters.asianStyle && !food.tags.includes('asian')) return false; 
        if (filters.withChicken && !food.tags.includes('chicken')) return false; 
        if (filters.loveFish && !food.tags.includes('fish')) return false;
        if (filters.friedOnly && !food.tags.includes('fried')) return false;
        if (filters.isVegan && !food.tags.includes('vegan')) return false;
        return true;
    });
    if (availableFood.length === 0) {
        alert("No food matches those exact filters! Try unchecking a few boxes.");
        return;
    }
    const btn = document.getElementById('suggestBtn');
    const loadingText = document.getElementById('funnyLoadingText');
    const resultSec = document.getElementById('result');
    btn.disabled = true;
    resultSec.classList.add('hidden');
    // Pick random funny text translated to current language
    const funnyArray = translations[currentLang].funnyTexts;
    loadingText.innerText = funnyArray[Math.floor(Math.random() * funnyArray.length)];
    loadingText.classList.remove('hidden');
    currentFood = availableFood[Math.floor(Math.random() * availableFood.length)];
    setTimeout(() => {
        loadingText.classList.add('hidden');
        btn.disabled = false;
        showResultUI("");
    }, 800);
});
function showResultUI(customTitlePrefix) {
    const locFood = currentFood.translations[currentLang]; // Use Current Language!
    document.getElementById('result').classList.remove('hidden');
    document.querySelector('.welcome-text').style.display = 'none';
    document.querySelector('.seo-intro').style.display = 'none';
    document.getElementById('foodEmoji').innerText = currentFood.emoji;
    document.getElementById('foodName').innerText = customTitlePrefix + locFood.name;
    document.getElementById('foodOrigin').innerText = `🌍 ${locFood.origin}`;
    const diffBadge = document.getElementById('foodDifficulty');
    diffBadge.innerText = locFood.difficulty.toUpperCase();
    diffBadge.className = 'badge ' + currentFood.difficultyCSS; 
    document.getElementById('foodCost').innerText = locFood.cost;
    document.getElementById('foodDesc').innerText = locFood.description;
    setTimeout(() => document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
}
// --- RECIPE MODAL LOGIC ---
window.openRecipeDetails = function(mode) {
    if (!currentFood) return;
    const r = currentFood.translations[currentLang][mode]; 
    const t = translations[currentLang];
    document.getElementById('modalTitle').innerText = mode === 'simple' ? t.lazyMode : t.chefMode;
    document.getElementById('timeVal').innerText = r.time;
    document.getElementById('tempVal').innerText = r.temp;
    document.getElementById('modalIngredients').innerHTML = '';
    r.ingredients.forEach(i => document.getElementById('modalIngredients').innerHTML += `<li>${i}</li>` );
    document.getElementById('modalSteps').innerHTML = '';
    r.steps.forEach(s => document.getElementById('modalSteps').innerHTML += `<li>${s}</li>` );
    document.getElementById('recipeModal').classList.remove('hidden');
};
window.closeRecipeDetails = function() {
    document.getElementById('recipeModal').classList.add('hidden');
};
