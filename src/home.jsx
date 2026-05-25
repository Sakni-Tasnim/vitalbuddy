import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 25,
        y: (e.clientY / window.innerHeight) * 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: "🧬",
      title: "AI Analysis",
      desc: "Advanced machine learning algorithms analyze your health patterns",
    },
    {
      icon: "📊",
      title: "Smart Insights",
      desc: "Personalized recommendations based on your unique lifestyle data",
    },
    {
      icon: "⚡",
      title: "Real-time Tracking",
      desc: "Monitor your vital metrics with instant feedback and alerts",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #f0f9f0, #e0f0e8, #d5e8d8)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 🌿 MOVING BACKGROUND BLOBS */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(85,141,42,0.2), transparent)",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          borderRadius: "50%",
          filter: "blur(70px)",
          transition: "transform 0.2s ease-out",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(44,74,31,0.15), transparent)",
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          borderRadius: "50%",
          filter: "blur(90px)",
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* 🌿 NAVBAR */}
      <nav
  style={{
    position: "fixed",
    width: "100%",
    padding: "20px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(15px)",
    borderBottom: "1px solid #d4e0c8",
    zIndex: 100,
  }}
>
  <h1
  style={{
    fontSize: "30px",
    fontWeight: "800",
    background: "linear-gradient(90deg, #9dd572, #558d2a, #2c4a1f)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  }}
>
  VitalBuddy
</h1>

  <div style={{ display: "flex", gap: "30px" }}>
   <a onClick={() => navigate("/about")} style={{ textDecoration: "none", color: "#5f735a", cursor: "pointer" }}>
  About
</a>
   <a onClick={() => navigate("/features")} style={{ textDecoration: "none", color: "#5f735a", cursor: "pointer" }}>
  Features
</a>
  </div>
</nav>

      {/* 🌿 HERO */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "750px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* badge */}
          <div
            style={{
              display: "inline-flex",
              padding: "10px 22px",
              borderRadius: "50px",
              background: "white",
              border: "1px solid #d4e0c8",
              marginBottom: "25px",
              fontWeight: "600",
              color: "#558d2a",
              boxShadow: "0 5px 15px rgba(85,141,42,0.1)",
            }}
          >
            ✦ FREE 
          </div>

<h1 style={{
  fontSize: "56px",
  lineHeight: "1.15",
  fontWeight: "400",                    // Thinner weight for elegance
  color: "#2c4a1f",
  marginBottom: "24px",
  letterSpacing: "-0.5px",              // Slightly tighter
  fontFamily: "'Georgia', 'Times New Roman', serif"  // Match the serif style
}}>
  Your health,<br />
  simplified.
</h1>

          {/* subtitle */}
          <p
            style={{
              fontSize: "20px",
              color: "#4a5f45",
              marginBottom: "45px",
              lineHeight: "1.6",
            }}
          >
            Take quick quizzes about your lifestyle and get personalized insights
            that actually help you improve.
          </p>

          {/* 🔥 BUTTON WITH HOVER */}
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#558d2a",
              color: "white",
              padding: "18px 42px",
              borderRadius: "16px",
              border: "none",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(85,141,42,0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#395e1c";
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 15px 30px rgba(85,141,42,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#558d2a";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 25px rgba(85,141,42,0.3)";
            }}
          >
            Start Your Journey 
          </button>

          <p style={{ marginTop: "20px", color: "#6b7f68" }}>
            takes less than 3 minutes ✨
          </p>
        </div>

        {/* 🌿 FEATURES */}
        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.7)",
                padding: "25px",
                borderRadius: "20px",
                border: "1px solid #d4e0c8",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ color: "#2c4a1f" }}>{f.title}</h3>
              <p style={{ color: "#5f735a" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}