// src/Register.jsx
import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");

    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px",
    borderRadius: "14px", border: "1.5px solid #d4e0c8",
    background: "#f4f7f2", fontSize: "15px",
    color: "#2c4a1f", outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "'Poppins', sans-serif",
  };

  const labelStyle = {
    display: "block", color: "#2c4a1f",
    fontSize: "13px", fontWeight: "600", marginBottom: "8px",
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
      }}>

        {/* Logo */}
        <h1 style={{
          fontSize: "28px", fontWeight: "800",
          background: "linear-gradient(90deg, #9dd572, #558d2a, #2c4a1f)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "6px", letterSpacing: "-0.5px",
        }}>
          VitalBuddy
        </h1>

        <p style={{ color: "#5f735a", fontSize: "15px", marginBottom: "36px" }}>
          Create your account  it's free ✦
        </p>

        {/* Error */}
        {error && (
          <div style={{
            background: "rgba(220,50,50,0.08)",
            border: "1px solid rgba(220,50,50,0.25)",
            borderRadius: "12px", padding: "12px 16px",
            color: "#c0392b", fontSize: "13.5px", marginBottom: "20px",
          }}>
            {error}
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#558d2a"}
            onBlur={(e) => e.target.style.borderColor = "#d4e0c8"}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="at least 6 characters"
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#558d2a"}
            onBlur={(e) => e.target.style.borderColor = "#d4e0c8"}
          />
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="••••••••"
            onKeyDown={(e) => e.key === "Enter" && handleRegister()}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#558d2a"}
            onBlur={(e) => e.target.style.borderColor = "#d4e0c8"}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleRegister}
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
          {loading ? "Creating account..." : "Create Account "}
        </button>

        {/* Login link */}
        <p style={{ textAlign: "center", marginTop: "24px",
          color: "#6b7f68", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#558d2a", fontWeight: "600",
            textDecoration: "none" }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}