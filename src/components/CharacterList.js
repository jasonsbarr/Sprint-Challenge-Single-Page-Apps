import React from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const ListContainer = styled.section`
  margin: 0 auto;
`;

const CharacterList = ({ characters }) => (
  <ListContainer className="character-list">
    {characters.map(character => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </ListContainer>
);

export default CharacterList;
