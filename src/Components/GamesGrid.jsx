import { games } from "./gamesData"; 
import SoundButton from "./SoundButton";

export default function GamesGrid(){
  return (
    <section className="games-grid">
      {games.map((game) => (
         <SoundButton key={game.id} className="game-card">
          <img src={game.img} alt={game.name} className="img-game" />
          <p className="name-game">{game.name}</p>
         </SoundButton>
      ))}
    </section>
  );
}

 

 