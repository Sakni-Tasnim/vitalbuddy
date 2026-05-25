#this file creates API for my frontend to get AI advice

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
#import google.generativeai as genai 
import os
import json
from dotenv import load_dotenv
import requests

#bech n3aytou lil key (this meth keeps API keys secret)
load_dotenv()

#initialize FastAPI app
app = FastAPI(title='VitalBuddy AI API', version='1.0')

#now this allows my react to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
#GEMINI SETUP
#GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

#openRouter
api_key = os.getenv("OPENROUTER_API_KEY")
r = requests.get(
    "https://openrouter.ai/api/v1/models",
    headers={"Authorization": f"Bearer {api_key}"}
)
print(r.json())

if not api_key:
    print('⚠️  Warning: OPENROUTER_API_KEY not found in .env file!!')

#configuration Gemini 
#genai.configure(api_key=GEMINI_API_KEY)
#model = genai.GenerativeModel('gemini-2.0-flash')  

class QuizAnswer(BaseModel):
    """Represnets a single question-answer pair from the quiz"""
    question_id: str
    question_text: str
    answer: str

class AnalysisRequest(BaseModel):
    """The incoming request from React when quiz is submitted"""
    quiz_id: int
    answers: List[QuizAnswer]

class HealthAdvice(BaseModel):
    """The structured response we send back to react"""
    summary: str
    recommendations: List[str]
    warning: Optional[str] = None
    motivation: str

def build_lifestyle_prompt(answers: List[QuizAnswer]) -> str:
    """Creates a detailed prompt for the AI based on Quiz 1 answers"""
    
    answers_text = "\n".join([
        f"- {a.question_text}: {a.answer}"
        for a in answers
    ])

    prompt = f"""
You are VitaBuddy AI! 🌸 A versatile, empathetic, and super-supportive health & growth mentor. ✨ 
You are an expert in behavior change, nutrition, sleep science, and psychological well-being. 🧠🍏💤

INPUT DATA:
{answers_text}

YOUR MISSION: 🚀
Analyze the user's responses and return a JSON report that is supportive, insightful, and visually sparkling with emojis! 🌈✨

OPERATIONAL GUIDELINES:
1. ADAPTIVE ANALYSIS 🔍: Identify the core theme (Mood 🧘, Food 🍎, Sleep 🛌, or Growth 🌱) and match your energy to it!
2. THE "WHY" FACTOR 💡: Don't just give a tip; explain the magic benefit! (e.g., "More water 💧 = a happy, sparkly brain! 🧠✨")
3. CUTIE AESTHETIC 🎀: Use vibrant, relevant emojis in EVERY field. Keep the tone warm, sweet, and high-vibe! 🍭🍭
4. SPECIFICITY 🎯: Every recommendation must be an "Action Item." Use fun verbs like "Swap 🔄," "Try 💫," "Start 🚀," or "Schedule 📅."
5. SMART CORRELATIONS 🔗: 
   - Low Energy + Poor Nutrition = Suggest complex carbs 🍞.
   - High Stress + Poor Sleep = Suggest a 5-minute wind-down 🧘.
   - Low Growth + High Screen Time = Suggest a "Digital Sunset" 🌅.

RESPONSE FORMAT (STRICT JSON ONLY) 📋:
{{
    "summary": "Start with a warm personal greeting like 'Hey there, sweet soul! 🌸' or 'Hi beautiful human! 💖', then 2-3 sentences that make the user feel truly seen, understood, and loved based on their specific answers! 💖✨",
    "recommendations": [
         "Priority action step with emoji (The 'Big Win') 🏆",
         "Secondary habit adjustment with emoji (The 'Support Step') 🛠️", 
         "A small, easy win with emoji (The 'Do It Now' step) ⚡"
    ],
    "warning": "A gentle, cutie 'Caution' or 'Note' with an emoji if needed, otherwise null ⚠️. Only if the user's responses suggest something serious (e.g. chronic pain, severe fatigue, mental health red flags), add a warm but clear note like: '💙 These symptoms are worth discussing with a doctor — this app can't replace professional advice.'",
    "motivation": "A sparkly, high-energy closing phrase to leave them smiling! 🍬🌷✨"
}}

Final Instruction: Return ONLY the raw JSON object. No markdown, no backticks, no text before or after. ⛔️"""
    return prompt

@app.post("/analyze", response_model=HealthAdvice)
async def analyze_quiz(data: AnalysisRequest):
    """Main endpoint that React calls when user finishes the quiz"""
    try:
        # Build prompt
        if data.quiz_id == 1:
            prompt = build_lifestyle_prompt(data.answers)
        else:
            prompt = build_lifestyle_prompt(data.answers)
            
        api_key = os.getenv("OPENROUTER_API_KEY")
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173",   
                "X-Title": "VitalBuddy AI"
            },
            json={
                "model":"openai/gpt-3.5-turbo",   # model name
                "messages": [
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.7
            }
        )
        
        # Better error handling
        if response.status_code != 200:
            error_detail = response.text
            try:
                error_json = response.json()
                if "error" in error_json and "message" in error_json["error"]:
                    error_detail = error_json["error"]["message"]
            except:
                pass
            raise Exception(f"OpenRouter API error: {response.status_code} - {error_detail}")
        
        result = response.json()
        
        # Extract text safely
        if "choices" not in result or not result["choices"]:
            raise Exception(f"Unexpected response format from OpenRouter: {result}")
            
        text = result["choices"][0]["message"]["content"].strip()

        print("🧠 AI raw text:", text[:300])
        
        # Clean possible markdown
        clean_text = text
        if clean_text.startswith("```json"):
            clean_text = clean_text[7:]
        elif clean_text.startswith("```"):
            clean_text = clean_text[3:]
        if clean_text.endswith("```"):
            clean_text = clean_text[:-3]
        clean_text = clean_text.strip()
        
        print(f"📝 Cleaned Response: {clean_text[:200]}...")
        
        # Parse JSON
        ai_data = json.loads(clean_text)
        
        # Validate and return
        advice = HealthAdvice(
            summary=ai_data.get("summary", "Your lifestyle habits have been analyzed."),
            recommendations=ai_data.get("recommendations", ["Stay consistent with healthy habits"]),
            warning=ai_data.get("warning"),
            motivation=ai_data.get("motivation", "You've got this!")
        )
        
        print(f"✅ Successfully generated advice with {len(advice.recommendations)} recommendations")
        return advice
        
    except json.JSONDecodeError as e:
        print(f"❌ JSON Parse Error: {e}")
        print(f"Raw text was: {text[:800] if 'text' in locals() else 'N/A'}")
        raise HTTPException(status_code=500, detail=f"AI returned invalid JSON: {str(e)}")
    except Exception as e:
        print(f"❌ General Error: {e}")
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

@app.get("/health")
async def health_check():
    """Simple endpoint to verify the server is running"""
    return {
        "status": "ok",
        "service": "VitalBuddy AI",
        "ai_connected": bool(api_key)
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)


#tafichi asemi models ili najm nsta5dem minhom
#for m in genai.list_models():
   # print(m.name, m.supported_generation_methods)



