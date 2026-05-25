// index.jsx
/*import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import Home from "./home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/dashboard" element={<App />} />
      <Route path="/post/1" element={<Post1 />} />
      <Route path="/post/2" element={<Post2 />} />
      <Route path="/post/3" element={<Post3 />} />
    </Routes>
  </BrowserRouter>
);*/


// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import Post4 from "./pages/Post4";
import Post5 from "./pages/Post5";
import Post6 from "./pages/Post6";
import Home from "./home";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Account from "./Account";
import Features from "./Features";
import About from "./About";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      <Route path="/dashboard" element={<ProtectedRoute><App /></ProtectedRoute>} />
      <Route path="/post/1" element={<ProtectedRoute><Post1 /></ProtectedRoute>} />
      <Route path="/post/2" element={<ProtectedRoute><Post2 /></ProtectedRoute>} />
      <Route path="/post/3" element={<ProtectedRoute><Post3 /></ProtectedRoute>} />
      <Route path="/post/4" element={<ProtectedRoute><Post4 /></ProtectedRoute>} />
      <Route path="/post/5" element={<ProtectedRoute><Post5 /></ProtectedRoute>} />
      <Route path="/post/6" element={<ProtectedRoute><Post6 /></ProtectedRoute>} />
      <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);