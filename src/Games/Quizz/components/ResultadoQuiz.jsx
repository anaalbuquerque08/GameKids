import { useMemo } from "react";
import { getResultadosQuiz } from "../constants/resultadoQuizz";

export const ResultadoQuiz = ({ acertos, total, onRestart }) => {
  const theme = localStorage.getItem("theme");
  const name = localStorage.getItem("name");

  const taxaDeAcertos = (acertos / total) * 100;

  const resultados = getResultadosQuiz(name);

  const resultado = useMemo(
    () => resultados.find(({ min }) => taxaDeAcertos >= min),
    [taxaDeAcertos]
  );

  return (
    <div className="resultado resultado--aberto">
      <div className={`memory_game container ${theme}`}>
        <p className="memory_nivel">Seu desempenho foi</p>

        <h1 className="result_nivel">{resultado?.titulo}</h1>

        <img
          src={resultado?.imagem}
          height={150}
          alt="Resultado do quiz"
        />

        <p className="rate-result">
          <strong>Voce acertou {acertos} de {total} questoes</strong>
        </p>

        <button className={`button ${name === "TONY" ? "btn-tony" : ""}`} onClick={onRestart}>
          Nova tentativa
        </button>
      </div>
    </div>
  );
};
