import React, { useEffect } from "react"; // Importar React e useEffect
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../Styles/tutorialGame.css";
import TutorialTabs from "../Components/GameTutorial/TutorialTabs";
import TutorialContainer from "../Components/GameTutorial/TutorialContainer";

const TutorialGamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
 
  const storedTheme = localStorage.getItem("theme");
  const storedName = localStorage.getItem("name");
  
  const { theme, name } = location.state || { 
      theme: storedTheme || "theme-squirrel", 
      name: storedName || "ESQUILO" 
  };

  const gameNames = {
    "jogo-da-velha": "Jogo da Velha",
    labirinto: "Labirinto",
    memoria: "Memória",
  };

  const tutorials = {
    "jogo-da-velha": "Objetivo: alinhar três símbolos iguais...",
    labirinto: "Objetivo: sair do labirinto no menor tempo...",
    memoria: "Objetivo: combinar os pares de cartas...",
  };
 
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("theme", theme);
  }, [name, theme]);  

  return ( 
    <div className={`tutorial-page ${theme}`}>
      <div className="tutorial-page-container">

        <div className="tutorial-header">
          <main className="main-content">
            <TutorialTabs />
            <TutorialContainer />
          </main>
            

          <div className="tutorial-instructions">
            <div className="tutorial-instructions-card">
              <h2>Instruções aqui </h2>
            </div>
            <button className="play-button" onClick={() => navigate(`/games/${id}`)}>JOGAR!</button>
          </div>
        </div>

        <div className="tutorial-footer">
          <div className="tutorial-footer-box">
            <h2>Aqui eh o footer do jogo</h2>
          </div>
          
        </div>

      </div>
    </div>
  );


};

export default TutorialGamePage;