import React from "react";
import style from "./ResetButton.module.css";

interface ResetButtonProps {
  handleResetBoard: () => void;
}
function ResetButton({ handleResetBoard }: ResetButtonProps) {
  return (
      <button className={style.resetBoard} onClick={handleResetBoard}>
        reset
      </button>
  );
}

export default ResetButton;
