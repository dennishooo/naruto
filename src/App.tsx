import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchNaruto() {
      let response = await fetch(
        "https://naruto-api.fly.dev/api/v1/characters"
      );
      let data = await response.json();
      console.log(data);
    }
    fetchNaruto();
  }, []);
  return <div>hello world</div>;
}

export default App;
