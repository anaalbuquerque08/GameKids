import React from "react";
import "./App.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  
import Tutorial from "./Pages/Tutorial ";
import Choice from "./Pages/Choice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Choice />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Tutorial" element={<Tutorial />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
