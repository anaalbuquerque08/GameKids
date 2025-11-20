import React from "react";
import "../../Styles/tutorialGame.css";
import { games } from "../gamesData";
import hearts from "/src/assets/components/hearts.png";

export default function TutorialContainer({ gameId }) {

    const gameInfo = games.find(game => game.id === gameId);

    if (!gameInfo) {
        return <div className="tutorial-container">Jogo Tutorial não encontrado.</div>;
    }

    const { name, img, instructions } = gameInfo;

    return (
        <div className="tutorial-container">
            <div className="inside-container" >
                <div className="tutorial-game-info">
                    <img className="tutorial-img" src={img} alt={`Imagem do Jogo ${name}`} />
                    <p className="tutorial-name" >{name}</p>
                </div>
                <div className="tutorial-text">
                    <p>{instructions}</p>
                    <div className="hearts-box">
                        <img
                            src={hearts}
                            alt="corações"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}