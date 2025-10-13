import React from "react";

export default function CharacterInfoTicTacToe({ name, vitorias = 0}) {
  return (
    <div className="infos">
      <h1 className="name">{name}</h1>
      <p className="level mb">Vitorias : {vitorias}</p>
      <div className="hearts-container"></div>
    </div>
  );
}
