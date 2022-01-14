import React from "react";
import { HeaderList } from "../HeaderList";

export function Header({ onClick }) {
  return (
    <header>
      <HeaderList onClick={onClick} />
    </header>
  );
}
