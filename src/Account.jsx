// src/Account.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";

export default function Account() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchHistory = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, "users", user.uid, "history"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(d => d.data());
      setHistory(data);
    };

    fetchHistory();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const clearHistory = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const snapshot = await getDocs(collection(db, "users", user.uid, "history"));
    snapshot.docs.forEach(d => deleteDoc(doc(db, "users", user.uid, "history", d.id)));
    setHistory([]);
  };

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
          onClick={() => navigate("/dashboard")}
          style={{
            fontSize: "24px", fontWeight: "800", cursor: "pointer",
            background: "linear-gradient(90deg, #9dd572, #558d2a, #2c4a1f)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px", margin: 0,
          }}>
          VitalBuddy
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "none", border: "1.5px solid #d4e0c8",
            borderRadius: "12px", padding: "8px 20px",
            color: "#558d2a", fontWeight: "600", cursor: "pointer",
            fontFamily: "'Poppins', sans-serif", fontSize: "14px",
          }}>
          ← Back to Dashboard
        </button>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "50px 20px", position: "relative", zIndex: 1 }}>

        {/* Profile card */}
        <div style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid #d4e0c8",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "28px",
          boxShadow: "0 10px 40px rgba(85,141,42,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <div>
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%",
              background: "linear-gradient(135deg, #9dd572, #558d2a)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px", marginBottom: "12px",
            }}>
              🌿
            </div>
            <p style={{ color: "#2c4a1f", fontWeight: "700", fontSize: "17px", margin: 0 }}>
              {user?.email}
            </p>
            <p style={{ color: "#6b7f68", fontSize: "13px", marginTop: "4px" }}>
              {history.length} session{history.length !== 1 ? "s" : ""} completed
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              padding: "12px 28px",
              background: "rgba(220,50,50,0.08)",
              border: "1.5px solid rgba(220,50,50,0.25)",
              borderRadius: "14px", color: "#c0392b",
              fontWeight: "600", fontSize: "14px",
              cursor: "pointer", fontFamily: "'Poppins', sans-serif",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(220,50,50,0.15)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(220,50,50,0.08)"}
          >
            Sign Out
          </button>
        </div>

        {/* History */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: "20px",
        }}>
          <h2 style={{ color: "#2c4a1f", fontSize: "20px", fontWeight: "700", margin: 0 }}>
            Your AI Recommendations
          </h2>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              style={{
                background: "none", border: "none",
                color: "#6b7f68", fontSize: "13px",
                cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                textDecoration: "underline",
              }}>
              Clear history
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)",
            border: "1px solid #d4e0c8",
            borderRadius: "20px", padding: "48px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🌱</div>
            <p style={{ color: "#5f735a", fontSize: "15px" }}>
              No sessions yet complete a quiz to get your first insights!
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                marginTop: "16px", padding: "12px 28px",
                background: "#558d2a", color: "white", border: "none",
                borderRadius: "14px", fontSize: "14px", fontWeight: "600",
                cursor: "pointer", fontFamily: "'Poppins', sans-serif",
              }}>
              Take a Quiz →
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {history.map((entry, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(20px)",
                border: "1px solid #d4e0c8",
                borderRadius: "20px", padding: "28px",
                boxShadow: "0 8px 24px rgba(85,141,42,0.07)",
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "16px",
                }}>
                  <span style={{
                    fontSize: "13px", padding: "4px 12px",
                    borderRadius: "999px", background: "#9dd57230",
                    color: "#395e1c", fontWeight: "600",
                  }}>
                    {entry.quizName}
                  </span>
                  <span style={{ color: "#6b7f68", fontSize: "12px" }}>
                    {entry.date}
                  </span>
                </div>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {entry.recommendations.map((rec, j) => (
                    <li key={j} style={{
                      color: "#4a5f45", fontSize: "14.5px",
                      lineHeight: "1.7", marginBottom: "6px",
                    }}>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}