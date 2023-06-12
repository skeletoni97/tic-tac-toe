import React from "react";
import style from "./GameBoard.module.css";
import Cell from "../Cell/Cell"

interface GameBoardProps {
  currentPlayer: boolean;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  board: string[][];
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  winner: string | null;
};

function GameBoard({
  currentPlayer,
  setCurrentPlayer,
  board,
  setWinner,
  winner,
}: GameBoardProps) {

  function checkWinner(board: string[][]) {
    const winningPositions: string[][] = [
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
    console.log(rowIndex,colIndex)
    if (board[rowIndex][colIndex] !== "" || winner !== null) return;

    const newBoard = [...board];

    if (!currentPlayer) {
      newBoard[rowIndex][colIndex] = "x";
      setCurrentPlayer(true);
    } else {
      newBoard[rowIndex][colIndex] = "o";
      setCurrentPlayer(false);
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
