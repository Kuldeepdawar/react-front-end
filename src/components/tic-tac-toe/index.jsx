import { useEffect, useState } from "react";
import "./styles.css";

function Squre({ value, onClick }) {
  return (
    <button onClick={onClick} className="squre">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isxTurn, setIsXTrun] = useState(true);
  const [status, setStatus] = useState("");

  function handleRestart() {
    setIsXTrun(true);
    setSquare(Array(9).fill(""));
  }

  function num1Winner(squares) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  function handleClick(getCurrentId) {
    const copySquare = [...square];
    if (num1Winner(copySquare) || copySquare[getCurrentId]) return;
    copySquare[getCurrentId] = isxTurn ? "X" : "0";
    setIsXTrun(!isxTurn);
    setSquare(copySquare);
  }

  useEffect(() => {
    if (!num1Winner(square) && square.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (num1Winner(square)) {
      setStatus(`Winner is ${num1Winner(square)}. Please retstart the game`);
    } else {
      setStatus(`Next Players is ${isxTurn ? "X" : "0"} `);
    }
  }, [square, isxTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Squre value={square[0]} onClick={() => handleClick(0)} />
        <Squre value={square[1]} onClick={() => handleClick(1)} />
        <Squre value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Squre value={square[3]} onClick={() => handleClick(3)} />
        <Squre value={square[4]} onClick={() => handleClick(4)} />
        <Squre value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Squre value={square[6]} onClick={() => handleClick(6)} />
        <Squre value={square[7]} onClick={() => handleClick(7)} />
        <Squre value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
