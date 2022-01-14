import React from "react";
import earth from "../../public/earth.jpg";

export function PlanetDisplay() {
  return (
    <article>
      <img src={earth} alt="photo of Earth" />
      <h1>Earth</h1>
      <p>Facts and stuff</p>
      <p>Moons and info</p>
    </article>
  );
}
