import { games } from "./gamesData"; 

export default function GamesGrid(){
  return (
    <section className="games-grid">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.img} alt={game.name} className="img-game" />
          <p>{game.name}</p>
        </div>
      ))}
    </section>
  );
}
