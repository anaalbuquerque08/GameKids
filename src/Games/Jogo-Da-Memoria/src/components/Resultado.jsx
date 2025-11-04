import { useMemo } from "react";
import { getResultados } from "../constants/resultados";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Resultado = () => {
  const {
    cartas,
    idsDosParesEncontrados,
    quantidadeDeCartasViradas,
    iniciarJogo,
  } = useJogoDaMemoria();

  const aberto = useMemo(
    () =>
      cartas.length > 0 && cartas.length === idsDosParesEncontrados.length * 2,
    [idsDosParesEncontrados.length]
  );

  const taxaDeAcertos =
    (cartas.length / (quantidadeDeCartasViradas ?? 1)) * 100;

  const resultados = getResultados();
  
  const resultado = useMemo(
    () => resultados.find(({ min }) => min < taxaDeAcertos),
    [aberto]
  );

  const cn = `resultado${aberto ? " resultado--aberto" : ""}`;
  const theme = localStorage.getItem("theme")
  
  return (
    <div className={cn}>
      <div className={`memory_game container ${theme}`}>
        <p className="memory_nivel">Seu nível de memória é</p>
        <h1 className="result_nivel">{resultado?.titulo}</h1>
        <img
          src={resultado?.imagem}
          height={150}
          alt="Imagem de nível de memória"
        />
        <p className="rate-result">
          <strong>Voce acertou {taxaDeAcertos.toFixed(0)}% do jogo</strong>
        </p>
        <button className="button" onClick={iniciarJogo}>
          Nova partida
        </button>
      </div>
    </div>
  );
};
