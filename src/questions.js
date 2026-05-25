const questions = [
    {
       id: "sleep_schedule",
       text:"How consistent is your sleep schedule?",
       options:["Very consistent (same time every day)","Mostly consistent","Irregular","Completely chaotic"],
       multiSelect: false
    },
     {
       id: "sleep_amount",
       text:"How many hours do you usually sleep?",
       options:["Less than 5","5–6","7-8","More than 8"],
       multiSelect: false
    },
     {
       id: "active",
       text:"How active are you during a typical day?",
       options:["Mostly sitting","Light movement (walking around)","Moderately active","Very active (on my feet a lot)"],
       multiSelect: false
    },
     {
       id: "exercise",
       text:"How often do you exercise intentionally (gym, sport, workout, etc.)?",
       options:["Rarely or never","1–2 times per week", "3–4 times per week","Almost daily"],
       multiSelect: false
    },
     {
       id: "exercise_type",
       text:"What type of exercise do you do most often?",
       options:["Cardio (running, cycling, swimming)","Strength training / weights","Yoga / Pilates / flexibility","Sports / team activities"],
       dependsOn:{questionId:"exercise", value:["3–4 times per week", "Almost daily"]},
       multiSelect: true
    },
     {
       id: "screen_time",
       text:"How much recreational screen time (phone, TV, gaming, social media) do you have daily?",
       options:["Less than 2 hours","2–4 hours","4–6 hours","More than 6 hours"],
       multiSelect: false
    },
     {
       id: "screen_before_bed",
       text:"Do you use screens (phone/TV) right before sleep?",
       options:["Never","Sometimes","Often","Every night"],
       multiSelect: false
    },
     {
       id: "screen_before_bed_amount",
       text:"How long before bed do you usually stop using screens?",
       options:["Less than 30 minutes","30–60 minutes","More than 60 minutes "],
       dependsOn:{questionId:"screen_before_bed", value:["Often", "Every night"]},
       multiSelect: false
    },
     {
       id: "outside",
       text:"How often do you get natural daylight / go outside during the day?",
       options:["Rarely","Once a day briefly","Several times a day","Most of the day (outdoors a lot)"],
       multiSelect: false
    },
     {
       id: "smoke",
       text:"Do you smoke or vape?",
       options:["No, never","Occasionally","Regularly","Prefer not to say"],
       multiSelect: false
    },
     {
       id: "smoke_amount",
       text:"How often do you smoke or vape?",
       options:["1–3 times per week","4–6 times per week","Every day","Multiple times a day"],
       dependsOn:{questionId:"smoke", value:["Occasionally","Regularly"]},
       multiSelect: false
    },

    {
      id:"alcohol",
      text:"How often do you consume alcohol?",
      options:["Never","Rarely (a few times a month)","Weekly","Several times per week"],
      multiSelect: false
    },
    
     {
      id:"alcohol_amount",
      text:"On a typical drinking day, how many drinks do you usually have?",
      options:["1–2 drinks","3–4 drinks","5-6 drinks","more than 6 drinks"],
      dependsOn:{questionId:"alcohol", value:["Weekly","Several times per week"]},
      multiSelect: false
    },

     {
      id:"overwhelmed",
      text:"How rushed or overwhelmed do you usually feel during the day?",
      options:["Calm and relaxed most of the time","Sometimes rushed","Often rushed","Always overwhelmed"],
      multiSelect: false
    },

     {
      id:"stress_type",
      text:"What do you think is the main cause of your stress/rush?",
      options:["Work / studies","Family responsibilities","Not enough time for myself","Lack of sleep"],
      dependsOn:{questionId:"overwhelmed", value:["Often rushed","Always overwhelmed"]},
      multiSelect: true
    },

     {
      id:"meal",
      text:"How regular are your meal times?",
      options:["Very regular","Mostly regular","Quite irregular","I skip meals often"],
      multiSelect: false
    },

     {
      id:"bedtime_routine",
      text:"Do you have a bedtime routine?",
      options:["Yes, every night","Sometimes","Rarely","No routine at all"],
      multiSelect: false
    },

     {
      id:"bedtime_routine_type",
      text:"What does your bedtime routine usually include? (can choose multiple)",
      options:["No screens 30–60 min before bed","Reading a book","Meditation / breathing exercises","Skincare / shower"],
      dependsOn:{questionId:"bedtime_routine", value:["Yes, every night","Sometimes"]},
      multiSelect: true
    },

     {
      id:"energy",
      text:"How would you rate your overall energy level during the day?",
      options:["Very high / energetic","Good most of the time","Average / fluctuates","Low / tired most days"],
      multiSelect: false
    },
    
];

export default questions;