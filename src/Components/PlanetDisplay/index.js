import React from "react";
// import earth from "../../public/earth.jpg";
import venus from "../../public/venus.jpg";

export function PlanetDisplay({ planet }) {
  if (planet === undefined) {
    return <h1>waiting</h1>;
  }
  return (
    <article>
      <img src={venus} alt="Venus" />
      <h1>{planet.englishName}</h1>
      <p>{planet.bodyType}</p>
      <p>{planet.moons}</p>
    </article>
  );
}
