import React from "react";
// import earth from "../../public/earth.jpg";
import venus from "../../public/venus.jpg";

export function PlanetDisplay({ planet }) {
  if (planet === undefined) {
    return <h1>waiting</h1>;
  }
  console.log(planet.bodies[0].englishName);
  return (
    <article>
      <img src={venus} alt="Venus" />
      <h1>{planet.bodies[0].englishName}</h1>
      <p>{planet.bodies[0].bodyType}</p>
      {/* <p>{planet.bodies[0].moons}</p> */}
    </article>
  );
}
