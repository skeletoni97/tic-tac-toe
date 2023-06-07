import React, { useState, useEffect } from "react";
import "./Game.css";
import GameBoard from "../GameBoard/GameBoard";
import ResetButton from "../ResetButton/ResetButton";
import { DEFAULT_BOARD } from "../../utils/constants/constants";

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(DEFAULT_BOARD)));
  const [winner, setWinner] = useState(null);
  function handleResetBoard() {
    setBoard(JSON.parse(JSON.stringify(DEFAULT_BOARD)));
    setCurrentPlayer(false);
    setWinner(null);
  }
console.log(winner)
  return (
    <div className="game">
        <div className={`winner-messag ${winner === null ? "" : "winner-message_visible"}`}>
          Победитель: {winner === "1" ? "Крестик" : "Нолик"}
        </div>
      <ResetButton handleResetBoard={handleResetBoard} />
      <GameBoard
        board={board}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  );
}

export default Game;
