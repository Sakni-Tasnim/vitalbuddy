const physicalHealthQuestions = [
    {
        id: "overall_health_rating",
        text: "How would you rate your general physical health right now?",
        options: ["Excellent", "Good", "Fair", "Poor"],
        multiSelect: false
    },
    {
        id: "chronic_pain",
        text: "Do you experience persistent physical pain or discomfort?",
        options: ["Never", "Rarely", "Often (weekly)", "Daily"],
        multiSelect: false
    },
    {
        id: "pain_location",
        text: "Where is the pain or discomfort located?",
        options: ["Back / Neck", "Joints (Knees, Shoulders, etc.)", "Headaches / Migraines", "Digestive system"],
        dependsOn: { questionId: "chronic_pain", value: ["Often (weekly)", "Daily"] },
        multiSelect: true
    },
    {
        id: "hydration",
        text: "How much plain water do you drink on an average day?",
        options: ["Less than 1 liter", "1–2 liters", "Over 2 liters", "I mostly drink soda/coffee/juice"],
        multiSelect: false
    },
    {
        id: "diet_composition",
        text: "Which of these best describes your typical diet?",
        options: ["Balanced (protein, carbs, and veggies)", "High in processed/fast foods", "Mostly plant-based", "High protein / Low carb"],
        multiSelect: false
    },
    {
        id: "fruit_veg_intake",
        text: "How many servings of fruits or vegetables do you eat daily?",
        options: ["0 servings", "1–2 servings", "3–4 servings", "5 or more servings"],
        multiSelect: false
    },
    {
        id: "digestion",
        text: "How often do you experience digestive issues (bloating, acid reflux, etc.)?",
        options: ["Rarely or never", "Occasionally", "Frequently", "After almost every meal"],
        multiSelect: false
    },
    {
        id: "posture",
        text: "How would you describe your posture during the day?",
        options: ["Generally upright and aligned", "I slouch occasionally", "I have significant 'tech neck' or slouching", "I feel constant strain from my posture"],
        multiSelect: false
    },
    {
        id: "immune_system",
        text: "How often do you catch a cold or fall ill?",
        options: ["Rarely (once a year or less)", "Occasionally (2–3 times a year)", "Frequently (almost every season)", "Very often"],
        multiSelect: false
    },
    {
        id: "medical_checkup",
        text: "When was your last general medical checkup or blood test?",
        options: ["Within the last 6 months", "Within the last year", "1–2 years ago", "More than 2 years ago"],
        multiSelect: false
    },
    {
        id: "vision_dental",
        text: "Do you keep up with regular dental and vision exams?",
        options: ["Yes, both regularly", "Only when I have a problem", "I skip one or the other", "I haven't gone in years"],
        multiSelect: false
    },
    {
        id: "heart_rate_awareness",
        text: "Are you aware of your resting heart rate or blood pressure levels?",
        options: ["Yes, I track them regularly", "I know them from my last doctor visit", "I have a vague idea", "No idea at all"],
        multiSelect: false
    },
    {
        id: "physical_limitations",
        text: "Do you have any physical conditions that limit your daily activities?",
        options: ["No limitations", "Minor limitations", "Moderate limitations", "Significant limitations"],
        multiSelect: false
    },
    {
        id: "limitation_type",
        text: "What is the primary nature of the limitation?",
        options: ["Mobility / Flexibility", "Stamina / Breathing", "Strength", "Injury recovery"],
        dependsOn: { questionId: "physical_limitations", value: ["Minor limitations", "Moderate limitations", "Significant limitations"] },
        multiSelect: true
    },
    {
        id: "recovery_speed",
        text: "How quickly does your body recover from physical exertion or minor injury?",
        options: ["Very quickly", "Average speed", "Slowly", "I feel like I never fully recover"],
        multiSelect: false
    }
];

export default physicalHealthQuestions;