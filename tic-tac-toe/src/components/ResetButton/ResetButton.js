import React from "react";
import "./ResetButton.css";

function ResetButton({handleResetBoard}) {
  return (
      <button className="resetBoard" onClick={handleResetBoard}>
        reset
      </button>
  );
}

export default ResetButton;
