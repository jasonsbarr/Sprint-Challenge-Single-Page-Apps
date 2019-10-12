import React, { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const url = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  return (
    <pre>{JSON.stringify(characters, null, 2) || "Loading..."}</pre>
  );
};

export default Characters;
