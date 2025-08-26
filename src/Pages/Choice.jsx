import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/variables.css";
import "../styles/Choice.css";

export default function Choice() {
  const [themeClass, setThemeClass] = useState("theme-squirrel"); // default
  const navigate = useNavigate();

const handleChoice = (animal) => {
  const theme = animal === "frog" ? "theme-frog" : "theme-squirrel";
  const name = animal === "frog" ? "OZZY" : "TONY";
  navigate("/home", { state: { theme, name } });
};

 

  return (
    <div className={`choice-page ${themeClass}`}>
      <div className="container">
        <button className="close-btn" onClick={() => handleChoice("squirrel")}></button>
        <div className="characters"></div>
        <div className="text">
          <h1>QUAL ANIMAL QUER JOGAR HOJE?</h1>
        </div>
        <div className="btn-container"> 
          <button 
            className="btn btn-frog" 
            onMouseEnter={() => setThemeClass("theme-frog")}
            onMouseLeave={() => setThemeClass("theme-squirrel")}
            onClick={() => handleChoice("frog")}
          >
            SAPO
          </button>
          <button 
            className="btn btn-squirrel"
            onMouseEnter={() => setThemeClass("theme-squirrel")}
            onMouseLeave={() => setThemeClass("theme-squirrel")}
            onClick={() => handleChoice("squirrel")}
          >
            ESQUILO
          </button>
        </div>
      </div>
    </div>
  );
}
