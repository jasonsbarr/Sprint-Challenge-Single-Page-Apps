import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./../components/CharacterList";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const url = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(url)
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  return <CharacterList characters={characters} />;
};

export default Characters;
