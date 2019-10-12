import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return characters ? (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default CharacterList;
