import { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./components/characterCard";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchNaruto() {
      let response = await fetch(
        "https://naruto-api.fly.dev/api/v1/characters"
      );
      let result = await response.json();
      setData(result);
      console.log(result);
    }
    fetchNaruto();
  }, []);

  return (
    <>
      <div>hello world</div>
      {data.map((x, idx) => {
        return <CharacterCard key={x.id} character={x} />;
      })}
    </>
  );
}

export default App;
