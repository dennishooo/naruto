function CharacterCard({ character }: any) {
  return (
    <div>
      <img style={{ maxWidth: "100px" }} src={character.images[0]} />
      <div>{character.name}</div>
    </div>
  );
}

export default CharacterCard;
