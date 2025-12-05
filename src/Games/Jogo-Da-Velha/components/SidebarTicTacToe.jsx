import CharacterInfoTicTacToe from "./CharacterInfoTicTacToe";
import roboImg from "/TicTacToe/robo.png";
import ozzyImg from "/src/assets/characters/frog.png";
import tonyImg from "/src/assets/characters/squirrel.png";

export default function SidebarTicTacToe({ name, vitorias, isOpponent }) {
  const characterImage =
    name === "ROBO"
      ? roboImg
      : name === "OZZY"
      ? ozzyImg
      : name === "TONY"
      ? tonyImg
      : null;

  return (
    <aside className="sidebar-info">
      <div
        className="character"
        style={{
          backgroundImage: `url(${characterImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          transform: isOpponent ? "scaleX(-1)" : "none",
        }}
      ></div>
      <CharacterInfoTicTacToe name={name} vitorias={vitorias} />
    </aside>
  );
}
