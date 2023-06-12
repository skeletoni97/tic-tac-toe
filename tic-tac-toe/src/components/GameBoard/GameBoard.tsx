import React from "react";
import style from "./GameBoard.module.css";
import Cell from "../Cell/Cell"

interface GameBoardProps {
  currentPlayer: string;
  setCurrentPlayer: (value: string) => void;
  board: Array<Array<"x" | "o" | "">>;
  setWinner:(value: string | null) => void;
  winner: string | null;
};

function GameBoard({
  currentPlayer,
  setCurrentPlayer,
  board,
  setWinner,
  winner,
}: GameBoardProps) {

  function checkWinner(board: Array<Array<"x" | "o" | "">>) {
    const winningPositions: Array<Array<"x" | "o" | "">> = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    for (const Positions of winningPositions) {
      const [a, b, c] = Positions;
      if (a && a === b && b === c) {
        return a;
      }
    }

    return null;
  }

  function handleClick(rowIndex: number, colIndex: number) {
    if (board[rowIndex][colIndex] || winner !== null) return;
    const newBoard = [...board];
    if (currentPlayer === "x") {
      newBoard[rowIndex][colIndex] = "x";
      setCurrentPlayer("o");
    } else {
      newBoard[rowIndex][colIndex] = "o";
      setCurrentPlayer("x");
    }
    const result = checkWinner(newBoard);
    setWinner(result);
    return newBoard;
  }

  return (
    <div className={style.gameBoard}>
      {board.map((row, rowIndex) => (
        <div className={style.row} key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell 
                key={colIndex}
                cell={cell}
                handleClick={() => handleClick(rowIndex, colIndex)}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
