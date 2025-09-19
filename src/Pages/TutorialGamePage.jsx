import { useParams, useNavigate } from "react-router-dom";

const TutorialGamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div className="tutorial-page">
      <h1>Tutorial: {gameNames[id] || id}</h1>
      <p>{tutorials[id] || "Tutorial não disponível."}</p>
      <button onClick={() => navigate(`/games/${id}`)}>Jogar Agora!</button>
    </div>
  );
};

export default TutorialGamePage;
