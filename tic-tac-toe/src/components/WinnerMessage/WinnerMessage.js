import React from "react";
import "./WinnerMessage.css"
function WinnerMessage({ winner }) {
    console.log(winner)
    return (
        <div className={`winner-messag ${winner === null ? "" : "winner-message_visible"}`}>
        Победитель: {winner === "x" ? "Крестик" : "Нолик"}
      </div>
    );
  }
  
export default WinnerMessage;