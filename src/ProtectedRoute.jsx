// src/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined); // undefined = still checking

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Still checking auth state — show nothing to avoid a flash
  if (user === undefined) return (
    <div style={{
      minHeight: "100vh",
      background: "#f0f9f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Poppins', sans-serif",
      color: "#558d2a",
      fontSize: "16px"
    }}>
      Checking session...
    </div>
  );

  // Not logged in → redirect to login page
  if (!user) return <Navigate to="/login" />;

  // Logged in → render the actual page
  return children;
}