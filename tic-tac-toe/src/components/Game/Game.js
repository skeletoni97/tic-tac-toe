import React, { useState, useEffect } from "react";
import "./Game.css";
import cross from "../../images/cross.png";
import zero from "../../images/zero.png";

function Game() {
    const [move, setMove] = useState(false)
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]);
      
    function handleClick(en, ne) {
        const newBoard = [...board];
        if (!move) {
            newBoard[en][ne] = 'x';
            setMove(true)
        } else {
            newBoard[en][ne] = 'o'
            setMove(false)
        }
        setBoard(newBoard)
    }

    function handleResetBoard() {
        const newBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
          ];
          setBoard(newBoard)
          setMove(false)
    }
    
  return (
    <div className="game">
        <button className="resetBoard" onClick={handleResetBoard}>reset</button>
      <div className="game-board">
        
        <div className="row">
            <div className="cell" onClick={() => handleClick(0, 0)}>
                <img className={`cross ${board[0][0] === "" ? "cross__none" : ""} ${board[0][0] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[0][0] === "" ? "zero__none" : ""} ${board[0][0] === "x" ? "cross__none" : ""}`} src={zero} alt="нолик"></img>
            </div>
            <div className="cell" onClick={() => handleClick(0, 1)}>
                <img className={`cross ${board[0][1] === "" ? "cross__none" : ""} ${board[0][1] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[0][1] === "" ? "zero__none" : ""} ${board[0][1] === "x" ? "cross__none" : ""} `} src={zero} alt="нолик"></img>
            </div>
            <div className="cell" onClick={() => handleClick(0, 2)}>
                <img className={`cross ${board[0][2] === "" ? "cross__none" : ""} ${board[0][2] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[0][2] === "" ? "zero__none" : ""} ${board[0][2] === "x" ? "cross__none" : ""}`} src={zero} alt="нолик"></img>
            </div>
        </div>
        <div className="row">
            <div className="cell" onClick={() => handleClick(1, 0)}>
                <img className={`cross ${board[1][0] === "" ? "cross__none" : ""} ${board[1][0] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[1][0] === "" ? "zero__none" : ""} ${board[1][0] === "x" ? "cross__none" : ""}`} src={zero} alt="нолик"></img>
            </div>
            <div className="cell" onClick={() => handleClick(1, 1)}>
                <img className={`cross ${board[1][1] === "" ? "cross__none" : ""} ${board[1][1] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[1][1] === "" ? "zero__none" : ""} ${board[1][1] === "x" ? "cross__none" : ""} `} src={zero} alt="нолик"></img>
            </div>
            <div className="cell" onClick={() => handleClick(1, 2)}>
                <img className={`cross ${board[1][2] === "" ? "cross__none" : ""} ${board[1][2] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[1][2] === "" ? "zero__none" : ""} ${board[1][2] === "x" ? "cross__none" : ""}`} src={zero} alt="нолик"></img>
            </div>
        </div>
        <div className="row">
            <div className="cell" onClick={() => handleClick(2, 0)}>
                <img className={`cross ${board[2][0] === "" ? "cross__none" : ""} ${board[2][0] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[2][0] === "" ? "zero__none" : ""} ${board[2][0] === "x" ? "cross__none" : ""}`} src={zero} alt="нолик"></img>
            </div>
            <div className="cell" onClick={() => handleClick(2, 1)}>
                <img className={`cross ${board[2][1] === "" ? "cross__none" : ""} ${board[2][1] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[2][1] === "" ? "zero__none" : ""} ${board[2][1] === "x" ? "cross__none" : ""} `} src={zero} alt="нолик"></img>
            </div>
            <div className="cell" onClick={() => handleClick(2, 2)}>
                <img className={`cross ${board[2][2] === "" ? "cross__none" : ""} ${board[2][2] === "o" ? "cross__none" : ""}`} src={cross} alt="крестик"></img>
                <img className={`zero ${board[2][2] === "" ? "zero__none" : ""} ${board[2][2] === "x" ? "cross__none" : ""}`} src={zero} alt="нолик"></img>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
