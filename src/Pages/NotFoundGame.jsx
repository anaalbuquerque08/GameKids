// src/components/NotFoundGame.jsx (ou pages/NotFoundGame.jsx)

import React, { useMemo } from "react";  
import { Link } from "react-router-dom";
import "../styles/notFoundGame.css";
import "../styles/variables.css";

export default function NotFoundGame() { 
  const name = localStorage.getItem("name"); 
  const theme = localStorage.getItem("theme") || "theme-squirrel";  
  const { characterImage, imageClassName } = useMemo(() => {
    return {
      characterImage:
        name === "TONY"
          ? "/memory/Tony-Amnésia.png"
          : "/memory/Ozzy-Amnésia.png",
      imageClassName: name === "TONY" ? "tony-image" : "ozzy-image",
    };
  }, [name]);


  return ( 
    <div className={`notfound-wrapper ${theme}`}> 
      <div className="notfound-card">
        <img
          className="img-character"
          src={characterImage}
          alt="Personagem triste"
        />

        <div className="notfound-text">
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
            name: name,
            theme: theme, 
          }}
        >
          Home
        </Link>
        </div>
      </div>
    </div>
  );
}