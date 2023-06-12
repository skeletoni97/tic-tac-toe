import React, { useState } from "react";
import style from "./Game.module.css";
import GameBoard from "../GameBoard/GameBoard";
import WinnerMessage from "../WinnerMessage/WinnerMessage";
import ResetButton from "../ResetButton/ResetButton";
import { DEFAULT_BOARD } from "../../utils/constants/constants";

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(DEFAULT_BOARD)));
  const [winner, setWinner] = useState<string | null>(null);
  function handleResetBoard() {
    setBoard(JSON.parse(JSON.stringify(DEFAULT_BOARD)));
    setCurrentPlayer("x");
    setWinner(null);
  }
 
  return (
    <div className={style.game}>
      <WinnerMessage winner={winner} />
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
