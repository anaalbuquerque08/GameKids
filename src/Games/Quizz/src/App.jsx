import React from "react";
import "./JogoDaVelha.css";
import Radio from "../components/Radio";
import perguntasOzzy from "./data/perguntasOzzy";
import perguntasTony from "./data/perguntasTony";

function App() {
  const name = localStorage.getItem("name");
  const theme = localStorage.getItem("theme");

  const perguntas = name === "OZZY" ? perguntasOzzy : perguntasTony;
  const respostaCerta = perguntas.map((item) => item.resposta);

  const [resposta, setResposta] = React.useState("");
  const [cont, setCont] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [mensagem, setMensagem] = React.useState("");

  function handleCheck(e) {
    e.preventDefault();

    if (!resposta) {
      setMensagem("Ops... Selecione uma opcao antes de continuar!");
      return;
    }

    setMensagem("");

    if (respostaCerta.includes(resposta)) {
      setCont((cont) => cont + 1);
    }

    setResposta("");
    setIndex((index) => index + 1);
  }

  return (
    <div className={`choice-page ${theme}`}>
      {perguntas.map((item, pergunta) => (
        <div key={item.id}>
          {pergunta === index ? (
            <form className="container">
              <h4>
                Questao {index + 1} de {perguntas.length}
              </h4>
              <h3>{item.pergunta}</h3>
              <Radio
                options={item.options}
                value={resposta}
                setValue={setResposta}
              />
              {mensagem && <p style={{ color: "red" }}>{mensagem}</p>}
              <button onClick={handleCheck}>Enviar</button>
            </form>
          ) : (
            ""
          )}
        </div>
      ))}
      {index === perguntas.length && (
        <h3>
          Você Acertou {cont} de {perguntas.length} questões
        </h3>
      )}
    </div>
  );
}

export default App;
