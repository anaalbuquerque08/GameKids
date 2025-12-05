import { Link } from "react-router-dom";
import "../styles/notFoundGame.css";

export default function NotFoundGame() {
  const name = localStorage.getItem("name");

  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <img
          className={`${name === "TONY" ? "tony-image" : "ozzy-image"}`}
          src={
            name === "TONY"
              ? "/memory/Tony-Amnésia.png"
              : "/memory/Ozzy-Amnésia.png"
          }
          alt="Personagem triste"
        />
        <h1>Jogo em Andamento</h1>
        <p>
          {" "}
          Não fique triste! Enquanto esse ainda não está pronto, divirta-se com
          os outros jogos disponíveis.
        </p>

        <Link
          className="btn-voltar"
          to="/home"
          state={{
            name: localStorage.getItem("name"),
            theme: localStorage.getItem("theme"),
          }}
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
