import React from "react";
import style from "./Cell.module.css";
import cross from "../../images/cross.png";
import zero from "../../images/zero.png";

interface CellProps {
  handleClick: () => void;
  cell: string;
}

function Cell({ handleClick, cell }: CellProps) {
  return (
    <div className={style.cell} onClick={handleClick}>
      {cell === "x" ? <img className={style.cross} src={cross} alt="крестик" /> : <></>}
      {cell === "o" ? <img className={style.zero} src={zero} alt="нолик" /> : <></>}
    </div>
  );
}

export default Cell;