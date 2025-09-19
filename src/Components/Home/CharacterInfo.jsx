import React from "react";

export default function CharacterInfo({ name, level = 2, coins = 32, stars = "5/25" }) {
  return (
    <div className="infos">
      <h1 className="name">{name}</h1>
      <p className="level">LVL {level}</p>
      <div className="progress"></div>
      <div className="hearts-container"></div>

      <div className="point-container">
        <div className="coin"></div>
        <p>{coins}</p>
      </div>
      <div className="point-container">
        <div className="star"></div>
        <p>{stars}</p>
      </div>
    </div>
  );
}
