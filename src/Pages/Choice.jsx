import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../Components/Choice/CloseButton";
import CharacterDisplay from "../Components/Choice/CharacterDisplay";
import ChoiceText from "../Components/Choice/ChoiceText";
import AnimalButtons from "../Components/Choice/AnimalButtons";
import "../styles/variables.css";
import "../styles/choice.css";



export default function Choice() {
  const [themeClass, setThemeClass] = useState("theme-squirrel");
  const navigate = useNavigate();

  const handleChoice = (animal) => {
    const theme = animal === "frog" ? "theme-frog" : "theme-squirrel";
    const name = animal === "frog" ? "OZZY" : "TONY";
    navigate("/home", { state: { theme, name } });
  };

  return (
    <div className={`choice-page ${themeClass}`}>
      <div className="container">
        <CloseButton onClick={() => handleChoice("squirrel")} />
        <CharacterDisplay />
        <ChoiceText />
        <AnimalButtons handleChoice={handleChoice} setThemeClass={setThemeClass} />
      </div>
    </div>
  );
}
