import React from "react";
import { HeaderListItem } from "../HeaderListItem";

export function HeaderList({ onClick }) {
  const bodies = [
    "Sun",
    "Moon",
    "Mars",
    "Mercury",
    "Jupiter",
    "Venus",
    "Saturn",
  ];
  return (
    <ul>
      {bodies.map(function (element, id) {
        return <HeaderListItem text={element} id={id} onClick={onClick} />;
      })}
    </ul>
  );
}
