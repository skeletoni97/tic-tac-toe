import React from "react";
import "./GameBoard.css";
import cross from "../../images/cross.png";
import zero from "../../images/zero.png";

function GameBoard({ currentPlayer, setCurrentPlayer, board, setWinner, winner }) {
    function checkWinner(board) {
        const winningPositions = [
          [board[0][0], board[0][1], board[0][2]],
          [board[1][0], board[1][1], board[1][2]],
          [board[2][0], board[2][1], board[2][2]],
          [board[0][0], board[1][0], board[2][0]],
          [board[0][1], board[1][1], board[2][1]],
          [board[0][2], board[1][2], board[2][2]],
          [board[0][0], board[1][1], board[2][2]],
          [board[0][2], board[1][1], board[2][0]]
        ];
      
        for (const Positions of winningPositions) {
          const [a, b, c] = Positions;
          if (a && a === b && b === c) {
            return a;
          }
        }
      
        return null;
      }

  function handleClick(rowIndex, colIndex) {
    if (board[rowIndex][colIndex] !== "" || winner !== null) return;

    const newBoard = [...board];

    if (!currentPlayer) {
      newBoard[rowIndex][colIndex] = '1';
      setCurrentPlayer(true);
    } else {
      newBoard[rowIndex][colIndex] = '0';
      setCurrentPlayer(false);
    }
    const result = checkWinner(newBoard);
    setWinner(result);
    return newBoard;
  }

  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              className="cell"
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              <img
                className={`cross ${cell === "" ? "cross__none" : ""} ${
                  cell === "0" ? "cross__none" : ""
                }`}
                src={cross}
                alt="крестик"
              />
              <img
                className={`zero ${cell === "" ? "zero__none" : ""} ${
                  cell === "1" ? "cross__none" : ""
                }`}
                src={zero}
                alt="нолик"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;