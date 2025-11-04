import { useEffect } from "react";
import "../JogoDaMemoria.css"
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";

export const JogoDaMemoria = () => {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  );
};

const JogoDaMemoriaConteudo = () => {
  const { cartas, iniciarJogo } = useJogoDaMemoria();

  useEffect(() => {
    iniciarJogo();
  }, []);

  const theme = localStorage.getItem("theme")
  theme === "TONY" ? "theme-squirrel" :"theme-frog";

  return (
    <div className={`jogo-da-memoria choice-page ${theme}`}>
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        {cartas?.length === 0 ? (
          <p>Carregando cartas...</p>
        ) : (
          <div className="cartas">
            {cartas.map((props) => (
              <Carta key={props.id} {...props} />
            ))}
          </div>
        )}
      </div>
      <Resultado />
    </div>
  );
};
