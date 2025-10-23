import React from "react";
import "./JogoDaVelha.css";
import Radio from "../components/Radio";
import perguntasOzzy from "./data/perguntasOzzy";
import perguntasTony from "./data/perguntasTony";

function App() {
  const name = localStorage.getItem("name");
  const theme = localStorage.getItem("theme");

  const perguntas =  name === "OZZY" ? perguntasOzzy : perguntasTony;

  const respostaCerta = perguntas.map((item) => item.resposta);

  perguntas.map((item, index) => console.log(index == 0 ? item : ""));

  const [resposta, setResposta] = React.useState("");
  const [cont, setCont] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  function handleCheck(e) {
    e.preventDefault();
    if (respostaCerta.includes(resposta)) {
      setCont((cont) => cont + 1);
    }
    setIndex((index) => index + 1);
  }

  return (
    <div className={`choice-page ${theme}`}>
      {perguntas.map((item, pergunta) => (
        <div key={item.id}>
          {pergunta === index ? (
            <form className="container">
              <h3>{item.pergunta}</h3>
              <Radio
                options={item.options}
                value={resposta}
                setValue={setResposta}
              />
              <button onClick={handleCheck}>Enviar</button>
            </form>
          ) : (
            ""
          )}
        </div>
      ))}
      {index === 10 && <h3>Você Acertou {cont} de 10 questões</h3>}
    </div>
  );
}

export default App;
