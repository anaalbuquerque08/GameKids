import { useParams } from "react-router-dom";
import JogoDaVelha from "../Games/Jogo-Da-Velha/src/App";
import Quizz from "../Games/Quizz/src/App";
import JogoDaMemoria from "../Games/Jogo-Da-Memoria/src/App"

// ESSA PAGE AQUI ANAA BASICAMENTE VAI PEGAR O ID RENDERIZAR O COMPONENTE DO JOGO
const GamePage = () => {
  const { id } = useParams();

  const gameComponents = {
    "jogo-da-velha": <JogoDaVelha />,
    "quizz": <Quizz />,
    "memoria": <JogoDaMemoria />
  };
  return <div>{gameComponents[id] || <h2>Jogo não encontrado</h2>}</div>;
};

export default GamePage;
