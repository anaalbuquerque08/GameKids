import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../styles/tutorialGame.css";
import TutorialHeader from "../Components/GameTutorial/TutorialHeader"; 
import TutorialFooter from "../Components/GameTutorial/TutorialFooter"; 
import { games } from "../Components/gamesData";
import keyboard from "/src/assets/components/keyboard.png";
import arrowkey from "/src/assets/components/arrowkey.png";
import mouse from "/src/assets/components/mouse.png";
import mushroom from "/src/assets/components/mushroom.png";


const TutorialGamePage = ({ coins = 32, stars = "5/25" }) => {
  const { id } = useParams();
  const location = useLocation();
  const storedTheme = localStorage.getItem("theme");
  const storedName = localStorage.getItem("name");

  const { theme, name } = location.state || {
    theme: storedTheme || "theme-squirrel",
    name: storedName || "ESQUILO",
  };

  const currentGame = games.find(game => game.id === id);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("theme", theme);
  }, [name, theme]);

  if (!currentGame) {
    return (
      <div className={`tutorial-page ${theme}`}>
        <div className="tutorial-page-container">
          <h2>Erro: Jogo com ID "{id}" não encontrado.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={`tutorial-page ${theme}`}>
      <div className="tutorial-page-container">
        <TutorialHeader
          id={id}
          keyboard={keyboard}
          arrowkey={arrowkey}
          mouse={mouse}
        />
        <TutorialFooter
          name={name}
          coins={coins}
          stars={stars}
          mushroom={mushroom}
        />
      </div>
    </div>
  );
};

export default TutorialGamePage;