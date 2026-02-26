// --- TRANSLATIONS ---
// --- TRANSLATIONS (Fixed Arabic & Kept Brand Name) ---
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
        footerText: "Helping students eat better, one click at a time."
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
        chefHint: "Utilisez la cuisinière, impressionnez vos amis.",
        ingredients: "Ingrédients & Épices",
        steps: "Instructions",
        footerText: "Aider les étudiants à mieux manger, un clic à la fois."
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
        footerText: "نساعد الطلاب على تناول طعام أفضل بضغطة زر."
    }
};

// --- FUNNY LOADING TEXTS ---
const funnyTexts = [
    "Checking your wallet...",
    "Saving you from eating plain pasta...",
    "Calculating student budget...",
    "Consulting the recipe algorithms...",
    "Finding something you won't burn...",
    "Looking for cheap ingredients..."
];

// --- THE DATABASE ---
const foodDatabase = [
    { 
        id: "tun_1", tags: ["fried", "fish", "student", "tunisian", "cheap"], emoji: "🥟", difficultyCSS: "medium", 
        translations: {
            en: { 
                name: "Tunisian Brika", origin: "Tunisia", difficulty: "Medium", cost: "Est. 3.00 DT", 
                description: "A perfectly crispy triangle pastry, stuffed with tuna, parsley, and a runny egg.", 
                simple: { 
                    time: "10 mins", temp: "Medium-High (Stove)", 
                    ingredients: ["1 Malsouka sheet", "Canned Tuna", "1 Egg", "Chopped Parsley & Onion", "Pinch of Black Pepper & Salt"], 
                    steps: ["Mix tuna, parsley, onion, salt, and black pepper.", "Place the mixture on the Malsouka sheet and make a small hole in the middle.", "Crack the egg into the hole.", "Fold into a triangle quickly and fry in hot oil for 2-3 mins per side until golden."] 
                }, 
                hard: { 
                    time: "25 mins", temp: "Medium-High", 
                    ingredients: ["Malsouka", "Tuna", "Capers", "Boiled Potato", "1 Egg", "Black Pepper", "Tabil (Tunisian Spice)"], 
                    steps: ["Boil and mash 1 potato. Mix it with a pinch of Tabil, black pepper, tuna, and capers.", "Spread the filling on the sheet, crack the egg inside.", "Fold into a triangle and fry in hot oil until deeply crispy."] 
                } 
            }
        }
    },
    { 
        id: "tun_2", tags: ["boiled", "student", "spicy", "vegan", "tunisian", "cheap"], emoji: "🥣", difficultyCSS: "easy", 
        translations: {
            en: { 
                name: "Spicy Lablebi", origin: "Tunisia", difficulty: "Easy", cost: "Est. 3.50 DT", 
                description: "The ultimate cheap, garlicky chickpea street-food soup poured over day-old bread.", 
                simple: { 
                    time: "15 mins", temp: "Boiling", 
                    ingredients: ["1 Can Chickpeas", "1 tbsp Harissa", "Stale Baguette", "2 cloves Garlic (crushed)", "1 tsp Cumin", "Olive Oil"], 
                    steps: ["Boil chickpeas in their water with crushed garlic, cumin, and salt for 10 minutes.", "Tear the stale bread into small pieces in a bowl.", "Pour the boiling soup over the bread. Top with Harissa, olive oil, and extra cumin."] 
                }, 
                hard: { 
                    time: "2 hours", temp: "Low Simmer", 
                    ingredients: ["Dried Chickpeas", "Garlic", "Harissa", "Olive Oil", "Cumin", "Canned Tuna", "1 Soft-Boiled Egg"], 
                    steps: ["Soak chickpeas overnight. Boil them for 2 hours until very soft.", "Prepare a bowl with torn bread.", "Add the hot chickpeas and broth. Top heavily with olive oil, cumin, Harissa, tuna, and mix the soft-boiled egg in."] 
                } 
            }
        }
    },
    { 
        id: "tun_3", tags: ["boiled", "tunisian", "expensive"], emoji: "🥘", difficultyCSS: "hard", 
        translations: {
            en: { 
                name: "Traditional Mloukhiya", origin: "Tunisia", difficulty: "Hard", cost: "Est. 25.00 DT", 
                description: "A rich, dark green stew simmered for hours, made with jute leaf powder and tender beef.", 
                simple: { 
                    time: "3.5 hours", temp: "Low Heat", 
                    ingredients: ["Mloukhiya powder", "Olive Oil", "Beef chunks", "Minced Garlic", "Bay Leaves", "Tabil & Karwia"], 
                    steps: ["Mix the green powder with olive oil in a cold pot until it forms a paste.", "Turn on medium heat, gradually whisk in 1.5 liters of boiling water.", "Add garlic, bay leaves, Tabil, and beef.", "Cover and simmer on very low heat for 3 hours until the oil separates and floats to the top."] 
                }, 
                hard: { 
                    time: "5 hours", temp: "Lowest Heat", 
                    ingredients: ["Mloukhiya powder", "Premium Olive Oil", "Beef Shank", "Whole Head of Garlic", "Dried Mint", "Tabil & Karwia", "Bay Leaves"], 
                    steps: ["Marinate beef overnight with garlic, Tabil, Karwia, and salt.", "Fry the powder in a generous amount of olive oil for 3 minutes (do not burn).", "Whisk in boiling water to prevent lumps.", "Simmer for 2 hours, then add the marinated beef. Cook for 3 more hours until oil completely separates."] 
                } 
            }
        }
    },
    { 
        id: "int_5", tags: ["student", "boiled", "cheap"], emoji: "🍝", difficultyCSS: "medium", 
        translations: {
            en: { 
                name: "Garlic Butter Pasta", origin: "Italy", difficulty: "Medium", cost: "Est. 4.00 DT", 
                description: "A 5-star tasting meal made from standard, cheap pantry ingredients.", 
                simple: { 
                    time: "15 mins", temp: "Boiling", 
                    ingredients: ["Spaghetti", "2 tbsp Butter", "1 tsp Garlic Powder", "Salt & Black Pepper", "Grated Cheese"], 
                    steps: ["Boil water, add salt, and cook pasta for 10 mins. Drain it.", "In the same hot pot, melt butter, add garlic powder and black pepper.", "Toss the pasta in the butter, top with cheese."] 
                }, 
                hard: { 
                    time: "20 mins", temp: "Medium Heat", 
                    ingredients: ["Spaghetti", "Real Butter", "4 cloves Fresh Garlic", "Fresh Parsley", "Chili Flakes", "Parmesan Cheese"], 
                    steps: ["Cook pasta, save half a cup of pasta water.", "In a pan, melt butter on medium-low. Sauté fresh minced garlic and chili flakes for 2 mins (don't burn!).", "Add pasta and the saved water. Toss vigorously until a creamy sauce forms. Top with parsley."] 
                } 
            }
        }
    },
    { 
        id: "int_10", tags: ["chicken", "fried", "expensive"], emoji: "🍗", difficultyCSS: "hard", 
        translations: {
            en: { 
                name: "Spicy Fried Chicken", origin: "USA", difficulty: "Hard", cost: "Est. 18.00 DT", 
                description: "Golden, ultra-crispy fried chicken with heavy spices.", 
                simple: { 
                    time: "25 mins", temp: "High Heat", 
                    ingredients: ["Chicken Breasts", "Flour", "2 Eggs", "Paprika, Garlic Powder, Salt, Black Pepper", "Frying Oil"], 
                    steps: ["Cut chicken into chunks.", "Mix flour with a heavy amount of paprika, salt, and pepper.", "Dip chicken in beaten egg, then in spiced flour.", "Fry in 170°C hot oil for 7-10 minutes until golden brown."] 
                }, 
                hard: { 
                    time: "12 hours", temp: "160°C Oil", 
                    ingredients: ["Bone-in Chicken pieces", "Lben (Buttermilk substitute)", "Flour", "Cornstarch", "Red Chili Powder, Garlic Powder, Onion Powder, White Pepper"], 
                    steps: ["Marinate chicken overnight in Lben mixed with hot sauce.", "Mix 2 parts flour to 1 part cornstarch with all the spices.", "Dredge the wet chicken in the flour, pressing hard so it sticks.", "Fry in deep oil for 12-15 minutes. Let it rest on a wire rack."] 
                } 
            }
        }
    }
];

let currentFood = null;

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

// --- TOP BAR CONTROLS (Theme & Lang) ---
document.getElementById('themeToggleBtn').addEventListener('click', (e) => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    e.target.innerText = isDark ? "☀️" : "🌙";
    localStorage.setItem('lettuceTheme', isDark ? 'dark' : 'light');
});

document.getElementById('languageSelect').addEventListener('change', (e) => {
    const newLang = e.target.value;
    localStorage.setItem('lettuceLang', newLang);
    applyLanguage(newLang);
    
    // Refresh food title if one is currently showing
    if (currentFood && document.getElementById('result').style.display !== 'none') {
        showResultUI(""); 
    }
});

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key]; 
    });

    if (lang === 'ar') {
        document.body.dir = "rtl";
        document.body.style.fontFamily = "'Tajawal', sans-serif";
        document.querySelectorAll('h1, h2, h3, .nav-brand, .btn-text').forEach(h => h.style.fontFamily = "'Tajawal', sans-serif");
    } else {
        document.body.dir = "ltr";
        document.body.style.fontFamily = "'Nunito', sans-serif";
        document.querySelectorAll('h1, h2, h3, .nav-brand, .btn-text').forEach(h => h.style.fontFamily = "'Outfit', sans-serif");
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
    showResultUI("🌟 "); 
});

// Main Discover Button Logic
document.getElementById('suggestBtn').addEventListener('click', () => {
    const filters = { 
        studentOnly: document.getElementById('studentOnly').checked, // STUDENT TAG IS BACK!
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
        if (filters.studentOnly && !food.tags.includes('student')) return false; // MUST HAVE STUDENT TAG
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
    
    loadingText.innerText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    loadingText.classList.remove('hidden');

    currentFood = availableFood[Math.floor(Math.random() * availableFood.length)];

    setTimeout(() => {
        loadingText.classList.add('hidden');
        btn.disabled = false;
        showResultUI("");
    }, 800);
});

function showResultUI(customTitlePrefix) {
    // Note: Always defaults to "en" right now unless you add French/Arabic database translations!
    const locFood = currentFood.translations["en"]; 
    
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
    const r = currentFood.translations["en"][mode]; 

    document.getElementById('modalTitle').innerText = mode === 'simple' ? `🟢 Lazy Mode` : `🔴 Chef Mode`;
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
