import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../Styles/tutorialGame.css";
import TutorialTabs from "../Components/GameTutorial/TutorialTabs";
import TutorialContainer from "../Components/GameTutorial/TutorialContainer";
import keyboard from "/src/assets/components/keyboard.png";
import arrowkey from "/src/assets/components/arrowkey.png";
import mouse from "/src/assets/components/mouse.png";

import { games } from "../Components/gamesData";

const TutorialGamePage = ({ coins = 32, stars = "5/25" }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const storedTheme = localStorage.getItem("theme");
  const storedName = localStorage.getItem("name");

  const { theme, name } = location.state || {
    theme: storedTheme || "theme-squirrel",
    name: storedName || "ESQUILO"
  };


  const currentGame = games.find(game => game.id === id);


  if (!currentGame) {
    return (
      <div className={`tutorial-page ${theme}`}>
        <div className="tutorial-page-container">
          <h2>Erro: Jogo com ID "{id}" não encontrado.</h2>
        </div>
      </div>
    );
  }


  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("theme", theme);
  }, [name, theme]);

  const { name: gameName, instructions } = currentGame;

  return (
    <div className={`tutorial-page ${theme}`}>
      <div className="tutorial-page-container">

        <div className="tutorial-header">
          <main className="main-content">

            <TutorialTabs gameId={id} />
            <TutorialContainer gameId={id} />
          </main>


          <div className="tutorial-instructions">
            <div className="tutorial-instructions-card">
              <div className="instructions-card">
                <img
                  src={keyboard}
                  height={90}
                  alt="Imagem de um teclado"
                />
              </div>
              <div className="instructions-card">
                <img
                  src={arrowkey}
                  height={90}
                  alt="Imagem das setas de um teclado"
                />
              </div>
              <div className="instructions-card">
                <img
                  src={mouse}
                  height={90}
                  alt="Imagem de um teclado"
                />
              </div>

            </div>

            <button className="play-button" onClick={() => navigate(`/games/${id}`)}>JOGAR!</button>
          </div>
        </div>

        <div className="tutorial-footer">
          <div className="tutorial-footer-box">
            <div className="character-info">
              <div className="character-img"></div>
              <h2>{name}</h2>
            </div>


            <div className="point-container-box"> aqui vai as moedas

              <div className="point-container">
                <div className="coin"></div>
                <p>{coins}</p>
              </div>
              <div className="point-container">
                <div className="star"></div>
                <p>{stars}</p>
              </div>



            </div>

            <div> aqui vai a box</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorialGamePage;