import React from "react";
import CharacterInfo from "./CharacterInfo";

export default function Sidebar({ name }) {
  return (
    <aside className="sidebar-info"> 
      <div className="character"></div>
      <CharacterInfo name={name} />
      <div className="info-box">
        <p>Alguma coisa escrito aqui. To sem ideias, pode ser alguma info. Ent fiquem a vontade para dar ideias um bj</p>
      </div>
 

    </aside>
  );
}
