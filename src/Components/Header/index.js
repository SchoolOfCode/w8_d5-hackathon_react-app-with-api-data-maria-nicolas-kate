import React from "react";
import { HeaderList } from "../HeaderList";

export function Header() {
  function random() {
    console.log("working");
  }
  return (
    <header>
      <HeaderList onClick={random} />
    </header>
  );
}
