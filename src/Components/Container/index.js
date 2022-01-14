import React from "react";
import { PlanetDisplay } from "../PlanetDisplay";

export function Container({ planet }) {
  return (
    <main>
      <PlanetDisplay planet={planet} />
    </main>
  );
}
