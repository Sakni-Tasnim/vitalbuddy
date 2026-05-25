// src/About.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: "🌿",
    title: "Simplicity",
    desc: "Health advice shouldn't be overwhelming. We strip it down to what actually matters for you.",
  },
  {
    icon: "🤍",
    title: "Empathy",
    desc: "No shame, no pressure. VitalBuddy meets you exactly where you are, with kindness.",
  },
  {
    icon: "🧠",
    title: "Intelligence",
    desc: "AI that actually listens your answers shape every recommendation you receive.",
  },
  {
    icon: "🌱",
    title: "Growth",
    desc: "Small habits, big change. We believe every tiny step forward is worth celebrating.",
  },
];

const timeline = [
  {
    emoji: "💡",
    title: "The Idea",
    desc: "Started as a university project with a simple question: why is health advice so generic?",
  },
  {
    emoji: "🛠️",
    title: "Building It",
    desc: "Built solo from scratch; React frontend, FastAPI backend, Firebase auth, and an AI engine that actually personalizes results.",
  },
  {
    emoji: "🤖",
    title: "Adding AI",
    desc: "Integrated an AI layer that reads your quiz answers and generates advice tailored specifically to your lifestyle patterns.",
  },
  {
    emoji: "🌸",
    title: "Today",
    desc: "VitalBuddy is live with 6 quizzes, persistent history, and a growing mission to help people understand themselves better.",
  },
];

export default function About() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f9f0, #e0f0e8, #d5e8d8)",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "-10%", left: "-10%",
        width: "40%", height: "40%",
        background: "radial-gradient(circle, rgba(85,141,42,0.2), transparent)",
        borderRadius: "50%", filter: "blur(70px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-10%",
        width: "50%", height: "50%",
        background: "radial-gradient(circle, rgba(44,74,31,0.15), transparent)",
        borderRadius: "50%", filter: "blur(90px)",
      }} />

      {/* Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid #d4e0c8",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h1
          onClick={() => navigate("/")}
          style={{
            fontSize: "24px", fontWeight: "800", cursor: "pointer",
            background: "linear-gradient(90deg, #9dd572, #558d2a, #2c4a1f)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px", margin: 0,
          }}>
          VitalBuddy
        </h1>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <span
            onClick={() => navigate("/features")}
            style={{ color: "#5f735a", cursor: "pointer", fontSize: "15px" }}>
            Features
          </span>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#558d2a", color: "white", border: "none",
              borderRadius: "12px", padding: "10px 22px",
              fontWeight: "600", fontSize: "14px", cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 6px 16px rgba(85,141,42,0.3)",
            }}>
            Start Now 
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "60px 20px", position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <div style={{
          textAlign: "center", marginBottom: "70px",
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{
            display: "inline-flex", padding: "8px 20px",
            borderRadius: "50px", background: "white",
            border: "1px solid #d4e0c8", marginBottom: "20px",
            fontWeight: "600", color: "#558d2a", fontSize: "14px",
            boxShadow: "0 5px 15px rgba(85,141,42,0.1)",
          }}>
            ✦ Our story
          </div>
          <h1 style={{
            fontSize: "48px", fontWeight: "400", color: "#2c4a1f",
            marginBottom: "20px", letterSpacing: "-0.5px",
            fontFamily: "'Georgia', serif", lineHeight: 1.2,
          }}>
            Health advice that<br />actually knows you.
          </h1>
          <p style={{
            color: "#5f735a", fontSize: "18px",
            maxWidth: "540px", margin: "0 auto", lineHeight: 1.7,
          }}>
            VitalBuddy was born from a simple frustration health apps give everyone the same advice.
            We built something different.
          </p>
        </div>

        {/* Mission card */}
        <div style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid #d4e0c8",
          borderRadius: "28px", padding: "44px",
          marginBottom: "40px",
          boxShadow: "0 10px 40px rgba(85,141,42,0.08)",
        }}>
          <span style={{
            fontSize: "12px", padding: "4px 12px", borderRadius: "999px",
            background: "#9dd57230", color: "#395e1c", fontWeight: "600",
            display: "inline-block", marginBottom: "16px",
          }}>
            🎯 Our Mission
          </span>
          <h2 style={{
            color: "#2c4a1f", fontSize: "26px", fontWeight: "400",
            fontFamily: "'Georgia', serif", marginBottom: "16px", lineHeight: 1.3,
          }}>
            Help people understand their habits before they become problems.
          </h2>
          <p style={{ color: "#5f735a", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            Most people don't realize how much their daily habits, sleep, screen time, nutrition, and stress are connected. VitalBuddy asks the right questions, then uses AI to connect the dots and show you a clearer picture of your own wellbeing. No jargon. Just honest, personalized insights that help you make better choices, one small habit at a time. For informational purposes only  not a substitute for professional medical advice
          </p>
        </div>

        {/* Timeline */}
        <h2 style={{
          color: "#2c4a1f", fontSize: "22px", fontWeight: "700",
          marginBottom: "28px", textAlign: "center",
        }}>
          How it came to life
        </h2>

        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* vertical line */}
          <div style={{
            position: "absolute", left: "28px", top: 0, bottom: 0,
            width: "2px", background: "#d4e0c8", zIndex: 0,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                {/* dot */}
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  border: "2px solid #d4e0c8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0, zIndex: 1,
                  boxShadow: "0 4px 12px rgba(85,141,42,0.1)",
                }}>
                  {t.emoji}
                </div>
                <div style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid #d4e0c8",
                  borderRadius: "18px", padding: "22px 24px",
                  flex: 1,
                  boxShadow: "0 4px 16px rgba(85,141,42,0.06)",
                }}>
                  <h3 style={{ color: "#2c4a1f", fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>
                    {t.title}
                  </h3>
                  <p style={{ color: "#5f735a", fontSize: "14.5px", lineHeight: "1.7", margin: 0 }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <h2 style={{
          color: "#2c4a1f", fontSize: "22px", fontWeight: "700",
          marginBottom: "28px", textAlign: "center",
        }}>
          What we stand for
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px", marginBottom: "60px",
        }}>
          {values.map((v, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid #d4e0c8",
              borderRadius: "20px", padding: "26px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(85,141,42,0.07)",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 16px 36px rgba(85,141,42,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(85,141,42,0.07)";
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "12px" }}>{v.icon}</div>
              <h3 style={{ color: "#2c4a1f", fontSize: "15px", fontWeight: "700", marginBottom: "8px" }}>
                {v.title}
              </h3>
              <p style={{ color: "#5f735a", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Builder card */}
        <div style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid #d4e0c8",
          borderRadius: "28px", padding: "40px",
          marginBottom: "40px",
          boxShadow: "0 10px 40px rgba(85,141,42,0.08)",
          display: "flex", gap: "28px", alignItems: "center",
          flexWrap: "wrap",
        }}>
          <div style={{
            width: "72px", height: "72px", borderRadius: "50%",
            background: "linear-gradient(135deg, #9dd572, #558d2a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "30px", flexShrink: 0,
          }}>
            🌸
          </div>
          <div>
            <span style={{
              fontSize: "12px", padding: "3px 10px", borderRadius: "999px",
              background: "#9dd57230", color: "#395e1c", fontWeight: "600",
              display: "inline-block", marginBottom: "10px",
            }}>
              👩‍💻 The Builder
            </span>
            <h3 style={{ color: "#2c4a1f", fontSize: "18px", fontWeight: "700", margin: "0 0 8px" }}>
              Built by a Telecom & Computer eng student
            </h3>
            <p style={{ color: "#5f735a", fontSize: "14.5px", lineHeight: "1.7", margin: 0 }}>
              VitalBuddy is a solo project built with React, FastAPI, Firebase, and an AI backend 
              combining a passion for technology with a genuine belief that understanding your habits
              is the first step to changing them.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid #d4e0c8",
          borderRadius: "28px", padding: "48px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(85,141,42,0.08)",
        }}>
          <div style={{ fontSize: "40px", marginBottom: "16px" }}>🌷</div>
          <h2 style={{
            color: "#2c4a1f", fontSize: "26px", fontWeight: "400",
            fontFamily: "'Georgia', serif", marginBottom: "12px",
          }}>
            Your habits tell a story.
          </h2>
          <p style={{ color: "#5f735a", fontSize: "16px", marginBottom: "32px", lineHeight: 1.6 }}>
            Let VitalBuddy help you read it. ✨
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#558d2a", color: "white", border: "none",
              borderRadius: "16px", padding: "16px 40px",
              fontSize: "16px", fontWeight: "600", cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 10px 25px rgba(85,141,42,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#395e1c";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#558d2a";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Start Your Journey 
          </button>
        </div>
      </div>
    </div>
  );
}