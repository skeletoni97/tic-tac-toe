import React, { useState } from "react";
import "./ResetButton.css";
import { DEFAULT_BOARD } from "../../utils/constants/constants"

function ResetButton({handleResetBoard}) {

  return (
      <button className="resetBoard" onClick={handleResetBoard}>
        reset
      </button>
  );
}

export default ResetButton;
