
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    tags: ["Habits", "Behavior"],
    title: "Lifestyle & Habits 🌿📅",
    excerpt: "Discover how your daily habits shape your health! Answer a few quick questions about smoking, screen time, and routines and see what patterns you might be missing",
    cta: "Start Quiz →",
    link: "/post/1",
  },
  {
    id: 2,
    tags: ["Health", "Physical"],
    title: "Physical Health 🏋️‍♂️🩺",
    excerpt: "Let's check in on your body! This quiz asks about energy levels, joint comfort, and mobility, giving insights to help you move and feel your best",
    cta: "Start Quiz →",
    link: "/post/2",
  },
  {
    id: 3,
    tags: ["Sleep", "Recovery"],
    title: "Sleep & Recovery 🌙🛌",
    excerpt: "How well are you really resting? Answer questions about your sleep patterns and naps, we'll give tips to recharge your energy naturally.",
    cta: "Start Quiz →",
    link: "/post/3",
  },
  {
    id: 4,
    tags: ["Mental Health", "Emotion"],
    title: "Psychology / Mood 🧠🧘",
    excerpt: "Our mind matters! Track your stress, mood, and emotions with this short quiz and get gentle guidance to stay balanced and positive.",
    cta: "Start Quiz →",
    link: "/post/4",
  },
  {
    id: 5,
    tags: ["Nutrition", "Diet"],
    title: "Nutrition 🍎🥗",
    excerpt: "Fuel your body the right way! Tell us about your meals, water intake, and cravings, we'll give tips to eat smarter and feel energized.",
    cta: "Start Quiz →",
    link: "/post/5",
  },
  {
    id: 6,
    tags: ["Reflection", "Growth"],
    title: "Self-Reflection / Personal Growth 📖🔭",
    excerpt: "Take a moment for yourself. This quiz asks about your goals, motivation, and satisfaction, helping you understand where you are and where you want to go",
    cta: "Start Quiz →",
    link: "/post/6",
  },
];

function Card({ post }) {
  const ref = useRef();
  const navigate = useNavigate();

  const handleMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const reset = () => {
    ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={() => navigate(post.link)}
      style={{
        background: "#f4f7f2",
        border: "1px solid #d4e0c8",
        borderRadius: "20px",
        padding: "28px",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transformStyle: "preserve-3d",
        cursor: "pointer",
        boxShadow: "0 12px 25px -5px rgba(85, 141, 42, 0.12)",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        {post.tags.map((t) => (
          <span key={t} style={{
            fontSize: 13, padding: "4px 10px", borderRadius: 999,
            background: "#9dd57230", color: "#395e1c", marginRight: 10, fontWeight: 600,
          }}>
            {t}
          </span>
        ))}
      </div>
      <h2 style={{ fontSize: "22px", marginBottom: 14, color: "#2c4a1f", lineHeight: 1.3 }}>
        {post.title}
      </h2>
      <p style={{ color: "#4a5f45", marginBottom: 24, lineHeight: 1.6, fontSize: "15.5px" }}>
        {post.excerpt}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#6b7f68" }}>
        <span>{post.date}</span>
        <span>⚡ {post.cta}</span>
      </div>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate(); // ✅ now inside the component

  return (
    <div style={{ background: "#e8f0e2", minHeight: "100vh", paddingBottom: "60px" }}>
      <header style={{
        background: "#f4f7f2",
        borderBottom: "1px solid #d4e0c8",
        padding: "22px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
        fontFamily: "'Poppins', sans-serif",
      }}>
        <h1 style={{
          fontSize: "30px", fontWeight: "800",
          background: "linear-gradient(90deg, #9dd572, #558d2a, #2c4a1f)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px", margin: 0,
        }}>
          VitalBuddy
        </h1>

        <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <a onClick={() => navigate("/about")} style={{ textDecoration: "none", color: "#5f735a", cursor: "pointer" }}>
  About
</a>
          <a onClick={() => navigate("/features")} style={{ textDecoration: "none", color: "#5f735a", cursor: "pointer" }}>
  Features
</a>
          <span
            onClick={() => navigate("/account")} // ✅ now works
            style={{ textDecoration: "none", color: "#5f735a", cursor: "pointer" }}
          >
            Account
          </span>
        </nav>
      </header>

      <main style={{ padding: "50px 40px" }}>
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "28px", color: "#2c4a1f", marginBottom: 12, fontWeight: 700, lineHeight: 1.2 }}>
            What would you like to check today? 🤔💭
          </h2>
          <p style={{ color: "#5f735a", fontSize: "16.5px", maxWidth: "560px", lineHeight: 1.65 }}>
            Choose a quick quiz to get personalized insights about your health and lifestyle. 🚀
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 32,
        }}>
          {posts.map((p) => (
            <Card key={p.id} post={p} />
          ))}
        </div>
      </main>
    </div>
  );
}