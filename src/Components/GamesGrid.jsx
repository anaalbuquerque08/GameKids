import { games } from "./gamesData";
import SoundButton from "./SoundButton";
import { useNavigate } from "react-router-dom";

export default function GamesGrid() {
  const navigate = useNavigate();

  return (
    <section className="games-grid">
      {games.map((game) => (
        <SoundButton key={game.id} className="game-card">
          <img
            src={game.img}
            alt={game.name}
            className="img-game"
            onClick={() => navigate(`/tutorial/${game.id}`)} 
          />
          <p className="name-game">{game.name}</p>
        </SoundButton>
      ))}
    </section>
  );
}
