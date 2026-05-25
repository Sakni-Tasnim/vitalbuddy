const nutritionQuestions = [
    {
        id: "daily_diet_base",
        text: "How would you describe your typical daily eating pattern?",
        options: ["Three balanced meals", "Several small meals/snacks", "Intermittent fasting", "One large meal in the evening"],
        multiSelect: false
    },
    {
        id: "processed_food",
        text: "How often do you consume processed or 'fast' foods?",
        options: ["Rarely (less than once a week)", "1–2 times per week", "3–4 times per week", "Daily"],
        multiSelect: false
    },
    {
        id: "fiber_intake",
        text: "How many servings of whole grains, legumes, or high-fiber foods do you eat?",
        options: ["Multiple servings daily", "Once a day", "A few times a week", "Rarely"],
        multiSelect: false
    },
    {
        id: "protein_source",
        text: "What is your primary source of protein?",
        options: ["Animal-based (meat/dairy)", "Plant-based (beans/nuts/tofu)", "A mix of both", "I struggle to get enough protein"],
        multiSelect: false
    },
    {
        id: "sugar_cravings",
        text: "How often do you experience strong sugar or salt cravings?",
        options: ["Rarely", "In the afternoon", "After dinner", "Constantly throughout the day"],
        multiSelect: false
    },
    {
        id: "cooking_frequency",
        text: "How many of your meals are prepared at home from scratch?",
        options: ["Most of them", "About half", "Rarely", "Never"],
        multiSelect: false
    },
    {
        id: "eating_awareness",
        text: "How do you usually eat your meals?",
        options: ["Mindfully (no distractions)", "While watching TV or scrolling", "On the go / Working", "I tend to rush through them"],
        multiSelect: false
    },
    {
        id: "supplement_use",
        text: "Do you regularly take any vitamins or supplements?",
        options: ["Yes, based on blood work", "Yes, general multivitamins", "Occasionally", "No, never"],
        multiSelect: false
    },
    {
        id: "energy_crash",
        text: "Do you experience an energy 'slump' in the afternoon (2pm–4pm)?",
        options: ["Never", "Occasionally", "Most days", "Every day"],
        multiSelect: false
    },
    {
        id: "gut_health",
        text: "How do you feel physically shortly after eating a full meal?",
        options: ["Energized and light", "Neutral", "Bloated or heavy", "Sleepy / Brain fog"],
        multiSelect: false
    }
];

export default nutritionQuestions;