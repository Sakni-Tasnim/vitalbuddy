// src/Features.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: "🌿",
    title: "Lifestyle & Habits Quiz",
    desc: "Discover how your daily habits shape your health. We analyze smoking, screen time, routines and more to reveal patterns you might be missing.",
    tag: "Habits",
    color: "#9dd572",
  },
  {
    icon: "💪",
    title: "Physical Health Quiz",
    desc: "Check in on your body energy levels, joint comfort, and mobility. Get insights to help you move and feel your best every day.",
    tag: "Physical",
    color: "#558d2a",
  },
  {
    icon: "😴",
    title: "Sleep & Recovery Quiz",
    desc: "How well are you really resting? We analyze your sleep patterns and give you tips to recharge your energy naturally.",
    tag: "Sleep",
    color: "#2c4a1f",
  },
  {
    icon: "🧠",
    title: "Psychology & Mood Quiz",
    desc: "Track your stress, mood, and emotions. Get gentle guidance to stay balanced, positive, and mentally strong.",
    tag: "Mental Health",
    color: "#558d2a",
  },
  {
    icon: "🥗",
    title: "Nutrition Quiz",
    desc: "Tell us about your meals, water intake, and cravings. We'll give you tips to eat smarter and feel energized throughout the day.",
    tag: "Nutrition",
    color: "#9dd572",
  },
  {
    icon: "🌱",
    title: "Self-Reflection Quiz",
    desc: "Take a moment for yourself. Explore your goals, motivation, and satisfaction to understand where you are and where you want to go.",
    tag: "Growth",
    color: "#2c4a1f",
  },
];

const highlights = [
  {
    icon: "🤖",
    title: "AI-Powered Analysis",
    desc: "Every quiz is analyzed by our AI to give you personalized, actionable recommendations not generic advice.",
  },
  {
    icon: "📖",
    title: "Recommendation History",
    desc: "All your past AI insights are saved to your account so you can track your progress over time.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Your data is protected with Firebase Authentication. Only you can see your health journey.",
  },
  {
    icon: "⚡",
    title: "Takes Under 3 Minutes",
    desc: "Each quiz is short, focused, and designed to fit into your busy day without overwhelming you.",
  },
];

export default function Features() {
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
            onClick={() => navigate("/about")}
            style={{ color: "#5f735a", cursor: "pointer", fontSize: "15px" }}>
            About
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

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px", position: "relative", zIndex: 1 }}>

        {/* Hero section */}
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
            ✦ Everything VitalBuddy offers
          </div>
          <h1 style={{
            fontSize: "48px", fontWeight: "400", color: "#2c4a1f",
            marginBottom: "16px", letterSpacing: "-0.5px",
            fontFamily: "'Georgia', serif", lineHeight: 1.2,
          }}>
            Built for your<br />whole self.
          </h1>
          <p style={{
            color: "#5f735a", fontSize: "18px",
            maxWidth: "520px", margin: "0 auto", lineHeight: 1.7,
          }}>
            6 science-backed quizzes, AI-powered insights, and a personal health history all in one place.
          </p>
        </div>

        {/* Highlights */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px", marginBottom: "70px",
        }}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid #d4e0c8",
              borderRadius: "20px", padding: "24px",
              boxShadow: "0 8px 24px rgba(85,141,42,0.07)",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(85,141,42,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(85,141,42,0.07)";
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>{h.icon}</div>
              <h3 style={{ color: "#2c4a1f", fontSize: "15px", fontWeight: "700", marginBottom: "8px" }}>
                {h.title}
              </h3>
              <p style={{ color: "#5f735a", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quizzes section */}
        <h2 style={{
          color: "#2c4a1f", fontSize: "24px", fontWeight: "700",
          marginBottom: "28px", textAlign: "center",
        }}>
          The 6 Quizzes
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px", marginBottom: "70px",
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid #d4e0c8",
              borderRadius: "20px", padding: "28px",
              boxShadow: "0 8px 24px rgba(85,141,42,0.07)",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(85,141,42,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(85,141,42,0.07)";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{f.icon}</div>
              <span style={{
                fontSize: "12px", padding: "3px 10px",
                borderRadius: "999px", background: "#9dd57230",
                color: "#395e1c", fontWeight: "600", marginBottom: "12px",
                display: "inline-block",
              }}>
                {f.tag}
              </span>
              <h3 style={{ color: "#2c4a1f", fontSize: "16px", fontWeight: "700", margin: "10px 0 8px" }}>
                {f.title}
              </h3>
              <p style={{ color: "#5f735a", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
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
          <div style={{ fontSize: "40px", marginBottom: "16px" }}>🌸</div>
          <h2 style={{
            color: "#2c4a1f", fontSize: "28px", fontWeight: "400",
            fontFamily: "'Georgia', serif", marginBottom: "12px",
          }}>
            Ready to start your journey?
          </h2>
          <p style={{ color: "#5f735a", fontSize: "16px", marginBottom: "32px", lineHeight: 1.6 }}>
            Takes less than 3 minutes. No commitment. Just clarity. ✨
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