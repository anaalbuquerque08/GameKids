import React from "react";
import "./JogoDaVelha.css";

function App() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = React.useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = React.useState(null);
  const [winner, setWinner] = React.useState(null);
  const [mode, setMode] = React.useState(null); // "amigo" ou "maquina"

  React.useEffect(() => {
    localStorage.setItem("personagem", "Esquilo");

    const personagemEscolhido = localStorage.getItem("personagem");
    const jogadorInicial = personagemEscolhido === "Esquilo" ? "X" : "O";
    setCurrentPlayer(jogadorInicial);
  }, []);

  const handleCellClick = (index) => {
    if (board[index] !== "" || winner) return null;

    const newBoard = board.map((item, i) =>
      i === index ? currentPlayer : item
    );

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (updatedBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return updatedBoard[a];
      }
    }
    return null;
  };

  const checkDraw = (updatedBoard) => {
    return updatedBoard.every((item) => item !== "");
  };

  const makeSmartAIMove = (currentBoard) => {
    const available = currentBoard
      .map((val, idx) => (val === "" ? idx : null))
      .filter((v) => v !== null);

    for (let index of available) {
      const tempBoard = [...currentBoard];
      tempBoard[index] = "O";
      if (checkWinner(tempBoard) === "O") return tempBoard;
    }

    for (let index of available) {
      const tempBoard = [...currentBoard];
      tempBoard[index] = "X";
      if (checkWinner(tempBoard) === "X") {
        tempBoard[index] = "O";
        return tempBoard;
      }
    }

    const randomIndex = available[Math.floor(Math.random() * available.length)];
    const newBoard = [...currentBoard];
    newBoard[randomIndex] = "O";
    return newBoard;
  };

  React.useEffect(() => {
    if (currentPlayer === null || !mode) return;
    if (winner) return;

    const newWinner = checkWinner(board);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }

    if (checkDraw(board)) {
      setWinner("E");
      return;
    }

    if (mode === "maquina" && currentPlayer === "O") {
      const timeout = setTimeout(() => {
        const aiBoard = makeSmartAIMove(board);
        setBoard(aiBoard);
        setCurrentPlayer("X");
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [board, currentPlayer, winner, mode]);

  const resetGameSameMode = () => {
    setBoard(emptyBoard);
    setWinner(null);
    setCurrentPlayer("X");
  };

  const resetToMenu = () => {
    setBoard(emptyBoard);
    setWinner(null);
    setCurrentPlayer("X");
    setMode(null);
  };

  if (!mode) {
    return (
      <main className="jogo-da-velha">
        <h1 className="title">Jogo da Velha</h1>
        <div className="mode-selection">
          <button onClick={() => setMode("amigo")}>👥 Jogar com Amigo</button>
          <button onClick={() => setMode("maquina")}>🤖 Jogar contra Máquina</button>
        </div>
      </main>
    );
  }

  return (
    <main className="jogo-da-velha">
      <h1 className="title">Jogo da Velha</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() =>
              (!winner &&
                ((mode === "amigo") ||
                  (mode === "maquina" && currentPlayer === "X"))) &&
              handleCellClick(index)
            }
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

          <div className="footer-buttons">
            <button onClick={resetGameSameMode}>🔁 Jogar novamente</button>
            <button onClick={resetToMenu}>🏠 Voltar ao menu</button>
          </div>
        </footer>
      )}
    </main>
  );
}

export default App;
