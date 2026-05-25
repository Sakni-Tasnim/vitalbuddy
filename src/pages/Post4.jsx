import React, { useState } from "react";
import "./Post1.css"; 
import psychologyQuestions from "../psychologyQuestions";
import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase";

const Post4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const question = psychologyQuestions[currentQuestion];

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setAnswers({
      ...answers,
      [question.id]: question.options[index],
    });
  };

  const shouldShowQuestion = (q) => {
    if (!q.dependsOn) return true;
    const previousAnswer = answers[q.dependsOn.questionId];
    return q.dependsOn.value.includes(previousAnswer);
  };

  const saveToHistory = async (quizName, recommendations) => {
  const user = auth.currentUser;
  if (!user) return;
  
  await addDoc(collection(db, "users", user.uid, "history"), {
    quizName,
    recommendations,
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "numeric",
    }),
    createdAt: new Date(), // for sorting
  });
};


  const handleNextClick = () => {
    let nextIndex = currentQuestion + 1;

    while (nextIndex < psychologyQuestions.length) {
      if (shouldShowQuestion(psychologyQuestions[nextIndex])) {
        setCurrentQuestion(nextIndex);
        setSelectedAnswer(null);
        return;
      }
      nextIndex++;
    }

    setIsFinished(true);
    handleGetResults();
  };

  const handleGetResults = async () => {
    setLoading(true);
    setError(null);

    try {
      const formattedAnswers = Object.entries(answers).map(([id, answer]) => {
        const q = psychologyQuestions.find(q => q.id === id);
        return {
          question_id: id,
          question_text: q ? q.text : id,
          answer: answer
        };
      });

      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quiz_id: 4, // ID for Psychology & Mood
          answers: formattedAnswers
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      setAdvice(data);
      
      await saveToHistory("Psychology & Mood 🧠🧘", data.recommendations);
      
    } catch (err) {
      console.error("❌ Frontend Error:", err);
      setError(`Failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
    setIsFinished(false);
    setAdvice(null);
    setError(null);
  };

  return (
    <div className="quiz-page">
      <div className="card-container">
        <div className="header">
          <h1>Psychology & Mood quiz 🧠🧘</h1>
          {!isFinished ? (
            <p>{currentQuestion + 1}. {question.text}</p>
          ) : (
            <p>Reflection Complete 🧠</p>
          )}
        </div>

        {!isFinished && (
          <ul className="questions">
            {question.options.map((option, index) => {
              let className = "option";
              if (selectedAnswer === index) className += " selected";
              return (
                <li
                  key={index}
                  className={className}
                  onClick={() => handleAnswerClick(index)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
        
        {isFinished && advice && (
          <div className="results-container" style={{ textAlign: 'left', marginTop: '20px', animation: 'fadeIn 0.5s ease-in' }}>
            <h3 style={{ color: '#2c4a1f', marginBottom: '15px'}}>Psychological Insights</h3>
            
            <div style={{ background: '#f4f7f2', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
              <p style={{ color: '#4a5f45', lineHeight: '1.6' }}>{advice.summary}</p>
            </div>
          
            <h4 style={{ color: '#558d2a', marginBottom: '10px'}}>Mental Wellness Steps:</h4>
            <ul style={{ color: '#4a5f45', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
              {advice.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>

            {advice.warning && (
              <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', marginBottom: '20px', color: '#856404' }}>
                💡 Note: {advice.warning}
              </div>
            )}
            
            <p style={{ color: '#558d2a', fontStyle: 'italic', fontWeight: 500 }}>{advice.motivation}</p>
          </div>
        )}

        {isFinished && loading && (
          <div style={{ padding: '20px', color: '#558d2a' }}>✨ Assessing emotional patterns...</div>
        )}

        {error && (
          <div style={{ color: '#dc3545', marginTop: '10px', padding: '10px', background: '#f8d7da', borderRadius: '8px' }}>
            ❌ {error}
          </div>
        )}

        {!isFinished ? (
          <button
            className="next-btn"
            onClick={handleNextClick}
            disabled={selectedAnswer === null}
          >
            Next Question →
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {!advice && !loading && (
              <button className="next-btn" onClick={handleGetResults}>✨ Get Insights</button>
            )}
            <button className="reset-btn" onClick={handleReset}>Restart Quiz 🔄</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post4;