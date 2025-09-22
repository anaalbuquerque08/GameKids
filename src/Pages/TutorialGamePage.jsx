import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../Styles/tutorialGame.css";
import TutorialTabs from "../Components/GameTutorial/TutorialTabs";
import TutorialContainer from "../Components/GameTutorial/TutorialContainer";

const TutorialGamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, name } = location.state || { theme: "theme-squirrel", name: "ESQUILO" };

  const gameNames = {
    "jogo-da-velha": "Jogo da Velha",
    labirinto: "Labirinto",
    memoria: "Memória",
  };

  // Pode ter textos diferentes para cada jogo, AQUI TA SIMPLES, SÓ PRA EXEMPLO VIU KKKKK BJS!
  const tutorials = {
    "jogo-da-velha": "Objetivo: alinhar três símbolos iguais...",
    labirinto: "Objetivo: sair do labirinto no menor tempo...",
    memoria: "Objetivo: combinar os pares de cartas...",
  };
  // OBS: Caso queira mais customizações por jogo (como descrições detalhadas, imagens ou componentes especiais),
  // você pode criar componentes separados para cada jogo e chamá-los dinamicamente pelo `id`.
  // Exemplo: const gameComponent = gameComponents[id]; return <>{gameComponent}</>;
  // EXEMPLO REAL ANAAA:
  //  const tutorialComponents = {
  //   "jogo-da-velha": <JogoDaVelhaTutorial />,
  //   "labirinto": <LabirintoTutorial />,
  //   "memoria": <MemoriaTutorial />,
  // };
  // VAI RENDERIZAR:  {tutorialComponents[id] || <p>Tutorial não disponível.</p>}







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
          <h2>Aqui eh o footer do jogo</h2>
        </div>

      </div>
    </div>
  );


};

export default TutorialGamePage;
