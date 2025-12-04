import React from "react";
import { Link } from "react-router-dom";
import "./Quizz.css";
import Radio from "../components/Radio";
import perguntasOzzy from "./data/perguntasOzzy";
import perguntasTony from "./data/perguntasTony";
import { ResultadoQuiz } from "../components/ResultadoQuiz";

function App() {
  const name = localStorage.getItem("name");
  const theme = localStorage.getItem("theme");

  const perguntas = name === "OZZY" ? perguntasOzzy : perguntasTony;
  const respostaCerta = perguntas.map((item) => item.resposta);

  const [respostas, setRespostas] = React.useState({});
  const [index, setIndex] = React.useState(0);
  const [mensagem, setMensagem] = React.useState("");

  const acertos = Object.values(respostas).filter((r) =>
    respostaCerta.includes(r)
  ).length;

  function handleNext(e) {
    e.preventDefault();

    if (!respostas[index]) {
      setMensagem("Ops... selecione uma opcao antes de continuar!");
      return;
    }

    setMensagem("");
    setIndex((i) => i + 1);
  }

  function handleBack(e) {
    e.preventDefault();
    if (index > 0) setIndex((i) => i - 1);
  }

  function handleSelectResposta(value) {
    setRespostas((prev) => ({
      ...prev,
      [index]: value,
    }));
  }

  const personagemImg =
    name === "TONY"
      ? "/src/assets/memory/Tony-Bom.png"
      : "/src/assets/memory/Ozzy-Bom.png";

  return (
    <div className={`choice-page ${theme}`}>
      {index < perguntas.length ? (
        <form className="container">
          <Link to="/home">
            <button class="close-btn"></button>
          </Link>
          <div className="image-container">
            <img
              src={personagemImg}
              alt="Personagem escolhido"
              style={{
                transform: name === "OZZY" ? "rotateY(180deg)" : "none",
              }}
            />
            <div className="quiz-container">
              <h1>MINI QUIZ</h1>
              <h2>{perguntas[index].pergunta}</h2>

              <Radio
                name="quiz"
                options={perguntas[index].options}
                value={respostas[index] || ""}
                setValue={handleSelectResposta}
              />

              {mensagem && <p style={{ color: "red" }}>{mensagem}</p>}
            </div>
          </div>

          <div className="buttons">
            {index > 0 && (
              <button
                className={`button ${name === "TONY" ? "btn-tony" : ""}`}
                onClick={handleBack}
              >
                {"<"} Voltar
              </button>
            )}

            <button
              className={`button ${name === "TONY" ? "btn-tony" : ""}`}
              onClick={handleNext}
            >
              {index === perguntas.length - 1 ? "Enviar" : "Próximo >"}
            </button>
          </div>
        </form>
      ) : (
        <ResultadoQuiz
          acertos={acertos}
          total={perguntas.length}
          onRestart={() => {
            setIndex(0);
            setRespostas({});
            setMensagem("");
          }}
        />
      )}
    </div>
  );
}
export default App;
