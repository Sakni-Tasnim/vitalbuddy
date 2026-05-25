const psychologyQuestions = [
    {
        id: "predominant_mood",
        text: "How would you describe your baseline mood over the last two weeks?",
        options: ["Content / Peaceful", "Anxious / On edge", "Low / Apathetic", "Fluctuating rapidly"],
        multiSelect: false
    },
    {
        id: "emotional_regulation",
        text: "When you face a setback, how do you typically react?",
        options: ["I process it and move on", "I dwell on it for a long time", "I tend to blame myself", "I try to ignore or distract myself"],
        multiSelect: false
    },
    {
        id: "social_connection",
        text: "How satisfied are you with your current social support system?",
        options: ["Very satisfied", "I have people, but feel misunderstood", "I feel somewhat isolated", "I prefer being alone most of the time"],
        multiSelect: false
    },
    {
        id: "internal_monologue",
        text: "What is the 'tone' of your internal monologue most of the time?",
        options: ["Encouraging and kind", "Neutral / Task-oriented", "Highly critical / Perfectionist", "Intrusive or worrying"],
        multiSelect: false
    },
    {
        id: "burnout_signs",
        text: "Do you feel a sense of detachment or 'autopilot' in your daily life?",
        options: ["Never", "Occasionally during work", "Frequently", "Almost constantly"],
        multiSelect: false
    },
    {
        id: "stress_manifestation",
        text: "How does stress physically manifest for you?",
        options: ["Muscle tension / Jaw clenching", "Digestive issues", "Racing heart", "Difficulty concentrating"],
        multiSelect: true
    },
    {
        id: "coping_mechanisms",
        text: "What is your primary way of handling intense emotions?",
        options: ["Talking to someone", "Physical activity", "Creative expression", "Withdrawal / Shutting down"],
        multiSelect: false
    },
    {
        id: "future_outlook",
        text: "When you think about the next six months, what is your primary feeling?",
        options: ["Optimism / Excitement", "Neutrality", "Apprehension", "Dread"],
        multiSelect: false
    },
    {
        id: "sleep_mind_connection",
        text: "Do you find your mind 'racing' when you try to rest?",
        options: ["Rarely", "Only when I'm stressed", "Most nights", "Every single night"],
        multiSelect: false
    },
    {
        id: "fulfillment",
        text: "How often do you engage in activities that make you lose track of time (Flow state)?",
        options: ["Daily", "Weekly", "Rarely", "I can't remember the last time"],
        multiSelect: false
    }
];

export default psychologyQuestions;