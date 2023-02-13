import { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";

function NarutoPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);

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
      <h1>Welcome to narutopedia</h1>

      <div className="cardContainer">
        {data.map((x, idx) => {
          return <CharacterCard key={x.id} character={x} />;
        })}
      </div>
    </>
  );
}

export default NarutoPage;
