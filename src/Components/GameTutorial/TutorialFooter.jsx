// src/Components/GameTutorial/TutorialFooter.jsx

import React from "react";
// Importe as imagens diretamente se for usá-las aqui
// Exemplo: import mushroom from "/src/assets/components/mushroom.png";

const TutorialFooter = ({ name, coins, stars, mushroom }) => {
  return (
    <div className="tutorial-footer">
      <div className="tutorial-footer-box">
        {/* Informações do Personagem */}
        <div className="character-info">
          <div className="character-img"></div> {/* Assumindo que o estilo define a imagem */}
          <h2>{name}</h2>
        </div>

        {/* Pontuação */}
        <div className="point-container-box">
          <div className="point-container">
            <div className="coin"></div> {/* Assumindo que o estilo define a imagem */}
            <p>{coins}</p>
          </div>
          <div className="point-container">
            <div className="star"></div> {/* Assumindo que o estilo define a imagem */}
            <p>{stars}</p>
          </div>
        </div>

        {/* Mensagem de Rodapé */}
        <div className="box-bottom">
          <p>
            Lembre-se, a brincadeira é para ser divertida! <br />
            perder faz parte :)
          </p>
          <div className="img-bottom">
            <img src={mushroom} alt="Imagem de um cogumelo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialFooter;