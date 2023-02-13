import { Modal } from "@mantine/core";
import { useState } from "react";
import "./characterCard.css";

function CharacterCard({ character }: any) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <div className="infoList">
          {Object.keys(character.info).map((key) => {
            return (
              <div key={key}>
                {key}: {character.info[key]}
              </div>
            );
          })}
        </div>
        {/* Modal content */}
      </Modal>
      <div className="card" onClick={() => setOpened(true)}>
        <img className="cardImg" src={character.images[0]} />
        <div className="cardText">{character.name}</div>
      </div>
    </>
  );
}

export default CharacterCard;
