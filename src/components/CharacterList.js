import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <section className="character-list">
      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </section>
  );
};

export default CharacterList;
