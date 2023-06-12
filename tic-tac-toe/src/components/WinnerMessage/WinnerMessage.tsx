import React from "react";
import styles from "./WinnerMessage.module.css"
interface WinnerMessageProps {
  winner: string | null;
}

function WinnerMessage({ winner }: WinnerMessageProps) {
    return (
        <div className={ winner ? `${styles.winnerMessage} ${styles.winnerMessage_visible}` : styles.winnerMessage }>
        Победитель: {winner === "x" ? "Крестик" : "Нолик"}
      </div>
    );
  }
  
export default WinnerMessage;