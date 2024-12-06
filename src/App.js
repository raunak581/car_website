// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginScreen from "./pages/signin";
import RegistrationScreen from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegistrationScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
