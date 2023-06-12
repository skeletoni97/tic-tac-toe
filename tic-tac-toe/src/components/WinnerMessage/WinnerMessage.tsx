import React from "react";
import styles from "./WinnerMessage.module.css"
interface WinnerMessageProps {
  winner: string | null;
}

function WinnerMessage({ winner }: WinnerMessageProps) {
  return winner ? (
    <div className={styles.winnerMessage}>
      Победитель: {winner === "x" ? "Крестик" : "Нолик"}
    </div>
  ) : <></>;
  }
  
export default WinnerMessage;