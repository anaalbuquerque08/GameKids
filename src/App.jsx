import React from "react";
import "./App.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";  
import TutorialGamePage from "./Pages/TutorialGamePage";
import Choice from "./Pages/Choice";
import BackgroundMusic from "./Components/BackgroundMusic"; 
import GamePage from "./Pages/GamePage"; 

function App() {
  return (
    <> 
      <BackgroundMusic /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Choice />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<TutorialGamePage/>} /> 
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="/tutorial/:id" element={<TutorialGamePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
