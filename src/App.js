import "./App.css";
import { Header } from "./Components/Header";
import { Container } from "./Components/Container";
import { useState } from "react";

// useEffect

// fetch request from API

function App() {
  const [planet, setPlanet] = useState(undefined);
  async function fetchPlanetInfo() {
    const fetchRequest = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,venus"
    );
    const data = await fetchRequest.json();
    console.log(data, "hello");
    setPlanet([data]);
    console.log(planet);
  }

  return (
    <div className="App">
      <Header onClick={fetchPlanetInfo} />
      <Container planet={planet} />
    </div>
  );
}

export default App;
