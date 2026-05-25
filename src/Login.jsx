// src/Login.jsx
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Forgot password state
  const [forgotMode, setForgotMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetStatus, setResetStatus] = useState(""); // "success" | "error" | ""
  const [resetMessage, setResetMessage] = useState("");
  const [resetLoading, setResetLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail.trim()) {
      setResetStatus("error");
      setResetMessage("Please enter your email address.");
      return;
    }
    setResetLoading(true);
    setResetStatus("");
    setResetMessage("");
    try {
      await sendPasswordResetEmail(auth, resetEmail.trim());
      setResetStatus("success");
      setResetMessage("Reset link sent! Check your inbox (and spam folder).");
    } catch (err) {
      setResetStatus("error");
      if (err.code === "auth/user-not-found") {
        setResetMessage("No account found with that email.");
      } else if (err.code === "auth/invalid-email") {
        setResetMessage("Please enter a valid email address.");
      } else {
        setResetMessage("Something went wrong. Please try again.");
      }
    } finally {
      setResetLoading(false);
    }
  };

  const sharedInputStyle = {
    width: "100%", padding: "13px 16px",
    borderRadius: "14px", border: "1.5px solid #d4e0c8",
    background: "#f4f7f2", fontSize: "15px",
    color: "#2c4a1f", outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f9f0, #e0f0e8, #d5e8d8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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

      {/* Card */}
      <div style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        border: "1px solid #d4e0c8",
        borderRadius: "28px",
        padding: "48px 44px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 20px 60px rgba(85,141,42,0.12)",
        position: "relative",
        zIndex: 1,
        transition: "all 0.3s ease",
      }}>

        {/* Logo */}
        <h1 style={{
          fontSize: "28px",
          fontWeight: "800",
          background: "linear-gradient(90deg, #9dd572, #558d2a, #2c4a1f)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "6px",
          letterSpacing: "-0.5px",
        }}>
          VitalBuddy
        </h1>

        {/* ── FORGOT PASSWORD MODE ── */}
        {forgotMode ? (
          <>
            <p style={{ color: "#5f735a", fontSize: "15px", marginBottom: "28px" }}>
              Enter your email and we'll send you a reset link.
            </p>

            {/* Status banner */}
            {resetStatus && (
              <div style={{
                background: resetStatus === "success"
                  ? "rgba(85,141,42,0.08)" : "rgba(220,50,50,0.08)",
                border: `1px solid ${resetStatus === "success"
                  ? "rgba(85,141,42,0.25)" : "rgba(220,50,50,0.25)"}`,
                borderRadius: "12px",
                padding: "12px 16px",
                color: resetStatus === "success" ? "#2c6e10" : "#c0392b",
                fontSize: "13.5px",
                marginBottom: "20px",
              }}>
                {resetMessage}
              </div>
            )}

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", color: "#2c4a1f", fontSize: "13px",
                fontWeight: "600", marginBottom: "8px" }}>
                Email
              </label>
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="you@example.com"
                onKeyDown={(e) => e.key === "Enter" && handleResetPassword()}
                style={sharedInputStyle}
                onFocus={(e) => e.target.style.borderColor = "#558d2a"}
                onBlur={(e) => e.target.style.borderColor = "#d4e0c8"}
              />
            </div>

            <button
              onClick={handleResetPassword}
              disabled={resetLoading || resetStatus === "success"}
              style={{
                width: "100%", padding: "15px",
                background: (resetLoading || resetStatus === "success") ? "#a0c070" : "#558d2a",
                color: "white", border: "none",
                borderRadius: "16px", fontSize: "16px",
                fontWeight: "600",
                cursor: (resetLoading || resetStatus === "success") ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 25px rgba(85,141,42,0.3)",
                fontFamily: "'Poppins', sans-serif",
              }}
              onMouseEnter={(e) => {
                if (!resetLoading && resetStatus !== "success") {
                  e.target.style.background = "#395e1c";
                  e.target.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!resetLoading && resetStatus !== "success") {
                  e.target.style.background = "#558d2a";
                  e.target.style.transform = "translateY(0)";
                }
              }}
            >
              {resetLoading ? "Sending..." : resetStatus === "success" ? "Email Sent ✓" : "Send Reset Link →"}
            </button>

            <p
              onClick={() => {
                setForgotMode(false);
                setResetStatus("");
                setResetMessage("");
                setResetEmail("");
              }}
              style={{
                textAlign: "center", marginTop: "24px",
                color: "#558d2a", fontSize: "14px",
                fontWeight: "600", cursor: "pointer",
              }}
            >
               Back to Sign In
            </p>
          </>

        ) : (
          /* ── LOGIN MODE ── */
          <>
            <p style={{ color: "#5f735a", fontSize: "15px", marginBottom: "36px" }}>
              Welcome back, sign in to continue
            </p>

            {error && (
              <div style={{
                background: "rgba(220,50,50,0.08)",
                border: "1px solid rgba(220,50,50,0.25)",
                borderRadius: "12px",
                padding: "12px 16px",
                color: "#c0392b",
                fontSize: "13.5px",
                marginBottom: "20px",
              }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", color: "#2c4a1f", fontSize: "13px",
                fontWeight: "600", marginBottom: "8px" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={sharedInputStyle}
                onFocus={(e) => e.target.style.borderColor = "#558d2a"}
                onBlur={(e) => e.target.style.borderColor = "#d4e0c8"}
              />
            </div>

            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", color: "#2c4a1f", fontSize: "13px",
                fontWeight: "600", marginBottom: "8px" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                style={sharedInputStyle}
                onFocus={(e) => e.target.style.borderColor = "#558d2a"}
                onBlur={(e) => e.target.style.borderColor = "#d4e0c8"}
              />
            </div>

            {/* Forgot password link */}
            <div style={{ textAlign: "right", marginBottom: "24px" }}>
              <span
                onClick={() => {
                  setForgotMode(true);
                  setResetEmail(email); // pre-fill if they already typed their email
                  setError("");
                }}
                style={{
                  color: "#558d2a", fontSize: "13px",
                  fontWeight: "600", cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </span>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                width: "100%", padding: "15px",
                background: loading ? "#a0c070" : "#558d2a",
                color: "white", border: "none",
                borderRadius: "16px", fontSize: "16px",
                fontWeight: "600", cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 25px rgba(85,141,42,0.3)",
                fontFamily: "'Poppins', sans-serif",
              }}
              onMouseEnter={(e) => { if (!loading) {
                e.target.style.background = "#395e1c";
                e.target.style.transform = "translateY(-2px)";
              }}}
              onMouseLeave={(e) => { if (!loading) {
                e.target.style.background = "#558d2a";
                e.target.style.transform = "translateY(0)";
              }}}
            >
              {loading ? "Signing in..." : "Sign In "}
            </button>

            <p style={{ textAlign: "center", marginTop: "24px",
              color: "#6b7f68", fontSize: "14px" }}>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#558d2a", fontWeight: "600",
                textDecoration: "none" }}>
                Create one
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
