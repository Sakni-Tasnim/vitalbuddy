const sleepQuestions = [
    {
        id: "sleep_quality",
        text: "How would you describe the quality of your sleep?",
        options: ["Excellent (wake up refreshed)", "Good (mostly rested)", "Fair (toss and turn)", "Poor (always tired)"],
        multiSelect: false
    },
    {
        id: "sleep_latency",
        text: "How long does it usually take you to fall asleep?",
        options: ["Less than 15 minutes", "15–30 minutes", "30–60 minutes", "Over an hour"],
        multiSelect: false
    },
    {
        id: "mid_night_waking",
        text: "How often do you wake up during the night?",
        options: ["Never", "Once", "2–3 times", "4+ times / I struggle to fall back asleep"],
        multiSelect: false
    },
    {
        id: "sleep_environment",
        text: "Which of these describe your sleep environment?",
        options: ["Total darkness", "Quiet / White noise", "Cool temperature", "Comfortable mattress/pillow"],
        multiSelect: true
    },
    {
        id: "environment_disruptors",
        text: "What disrupts your sleep environment the most?",
        options: ["Noise (traffic, neighbors)", "Light pollution", "Temperature (too hot/cold)", "Partner or pets"],
        dependsOn: { questionId: "sleep_quality", value: ["Fair (toss and turn)", "Poor (always tired)"] },
        multiSelect: true
    },
    {
        id: "caffeine_cutoff",
        text: "When do you usually have your last caffeinated drink?",
        options: ["Before noon", "Early afternoon", "Late afternoon / Evening", "I don't drink caffeine"],
        multiSelect: false
    },
    {
        id: "nap_habits",
        text: "Do you take naps during the day?",
        options: ["Never", "Rarely", "Short power naps (20 min)", "Long naps (1 hour+)"],
        multiSelect: false
    },
    {
        id: "morning_alertness",
        text: "How long does it take you to feel fully 'awake' after rising?",
        options: ["Immediately", "Within 30 minutes", "1–2 hours", "I feel groggy half the day"],
        multiSelect: false
    },
    {
        id: "recovery_feel",
        text: "After a workout or busy day, how does your body feel the next morning?",
        options: ["Ready to go again", "Slightly stiff but fine", "Significant soreness", "Completely drained"],
        multiSelect: false
    },
    {
        id: "snoring_breathing",
        text: "Has anyone told you that you snore or stop breathing during sleep?",
        options: ["Never", "Occasionally", "Frequently", "Prefer not to say"],
        multiSelect: false
    },
    {
        id: "sleep_aid_use",
        text: "How often do you use sleep aids (melatonin, herbal teas, medication)?",
        options: ["Never", "Occasionally", "Weekly", "Almost every night"],
        multiSelect: false
    }
];

export default sleepQuestions;