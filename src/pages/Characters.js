import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./../components/CharacterList";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const url = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(url)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  return (
    <>
      <CharacterList characters={characters} />
      <p>
        <Link to="/">&larr; Go back home</Link>
      </p>
    </>
  );
};

export default Characters;
