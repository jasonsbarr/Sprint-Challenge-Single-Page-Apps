import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharacterList;
