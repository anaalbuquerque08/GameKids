import React from "react";
import "./App.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";  
import Tutorial from "./Pages/Tutorial";
import Choice from "./Pages/Choice";
import BackgroundMusic from "./Components/BackgroundMusic"; // importando música
import GamePage from "./Pages/GamePage";
import TutorialGamePage from "./Pages/TutorialGamePage";

function App() {
  return (
    <> 
      <BackgroundMusic /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Choice />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} /> 
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="/tutorial/:id" element={<TutorialGamePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
