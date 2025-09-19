import React from "react";
import "./JogoDaVelha.css";

function App() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = React.useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = React.useState(null);
  const [winner, setWinner] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem("personagem", "Esquilo");

    const personagemEscolhido = localStorage.getItem("personagem");

    const jogadorInicial = personagemEscolhido === "Esquilo" ? "X" : "O";
    setCurrentPlayer(jogadorInicial);
  }, []);

  const handleCellClick = (index) => {
    if (board[index] !== "") return null;
    if (winner) return null;

    setBoard(
      board.map((item, indexItem) =>
        indexItem === index ? currentPlayer : item
      )
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWaysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) setWinner("O");
      if (cells.every((cell) => cell === "X")) setWinner("X");
    });
  };

  React.useEffect(() => {
    checkDraw();
    checkWinner();
  }, [board]);

  const checkDraw = () => {
    if (board.every((item) => item !== "")) {
      setWinner("E");
    }
  };

  const resetGame = () => {
    setCurrentPlayer("X");
    setBoard(emptyBoard);
    setWinner(null);
  };

  return (
    <main className="jogo-da-velha">
      <h1 className="title">Jogo da Velha</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>

      {winner && (
        <footer>
          {winner === "E" ? (
            <h2 className="winner-message">
              <span className={winner}>Empatou!</span>
            </h2>
          ) : (
            <h2 className="winner-message">
              <span className={winner}>{winner}</span> Venceu!
            </h2>
          )}

          <button onClick={resetGame}>Recomeçar Jogo!</button>
        </footer>
      )}
    </main>
  );
}

export default App;
