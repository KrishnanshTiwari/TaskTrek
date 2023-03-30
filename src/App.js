import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      
      </Routes>
      
    </div>
  );
}
