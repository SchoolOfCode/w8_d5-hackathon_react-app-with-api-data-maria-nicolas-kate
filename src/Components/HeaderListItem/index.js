import React from "react";
import { Button } from "../Button";

export function HeaderListItem({ text, onClick, id }) {
  return (
    <li key={`li${id}`}>
      <Button text={text} onClick={onClick} id={id}/>
    </li>
  );
}
