import React from "react";
import "./Cell.css";
import cross from "../../images/cross.png";
import zero from "../../images/zero.png";

function Cell({ handleClick, cell }) {
  return (
    <div className="cell" onClick={handleClick}>
      {cell === "x" ? <img className="cross" src={cross} alt="крестик" /> : <></>}
      {cell === "o" ? <img className="zero" src={zero} alt="нолик" /> : <></>}
    </div>
  );
}

export default Cell;
