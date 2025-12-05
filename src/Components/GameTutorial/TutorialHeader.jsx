// src/Components/GameTutorial/TutorialHeader.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import TutorialTabs from "./TutorialTabs"; // Certifique-se de que o caminho está correto
import TutorialContainer from "./TutorialContainer"; // Certifique-se de que o caminho está correto
// Importe as imagens diretamente se for usá-las aqui, ou passe como props
// Exemplo: import keyboard from "/src/assets/components/keyboard.png";

// Se as imagens forem globais, você pode passá-las como props
// Para simplicidade, assumindo que as imagens são importadas aqui ou injetadas.

const TutorialHeader = ({ id, keyboard, arrowkey, mouse }) => {
  const navigate = useNavigate();

  return (
    <div className="tutorial-header">
      <main className="main-content">
        <TutorialTabs gameId={id} />
        <TutorialContainer gameId={id} />
      </main>

      <div className="tutorial-instructions">
        <div className="tutorial-instructions-card">
          <div className="instructions-card">
            <img src={keyboard} alt="Imagem de um teclado" />
          </div>
          <div className="instructions-card">
            <img src={arrowkey} alt="Imagem das setas de um teclado" />
          </div>
          <div className="instructions-card">
            <img src={mouse} alt="Imagem de um mouse" />
          </div>
        </div>

        {/* O botão JOGAR inicia o jogo, deve estar no Header ou no componente principal */}
        <button className="play-button" onClick={() => navigate(`/games/${id}`)}>
          JOGAR!
        </button>
      </div>
    </div>
  );
};

export default TutorialHeader;