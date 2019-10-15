import React, { useState } from "react";
import styled from "styled-components";
import CharacterList from "./../components/CharacterList";
import SearchForm from "./../components/SearchForm";
import TextButton, { TextLink } from "../components/TextButton";
import { useFetchGet } from "../hooks";

const ErrorMessage = styled.p`
  background-color: rgba(255, 99, 71, 0.5);
  border: 3px dotted maroon;
  border-radius: 3px;
  color: maroon;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  line-height: 1.2;
  margin: 8px auto;
  max-width: 800px;
  padding: 12px;
  text-align: center;
  width: 80%;
`;

const ButtonRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const Characters = () => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [url, setUrl] = useState(baseUrl);
  const pages = { prev: "", next: "" };
  const NavButton = ({ to, children }) => (
    <TextButton to={to}>{children}</TextButton>
  );

  const Buttons = () => (
    <ButtonRow>
      <TextLink
        inactive={!!pages.prev ? undefined : 1}
        onClick={() => (pages.prev ? handlePage(pages.prev) : false)}
      >
        &lsaquo; Previous
      </TextLink>
      <NavButton to="/">
        <span style={{ fontSize: "28px" }}>&#x2302;</span> Home
      </NavButton>
      <TextLink
        inactive={!!pages.next ? undefined : 1}
        onClick={() => (pages.next ? handlePage(pages.next) : false)}
      >
        Next &rsaquo;
      </TextLink>
    </ButtonRow>
  );

  const CharactersHeader = () => (
    <>
      <SearchForm onSearchSubmit={handleCharacterSearch} />
      <Buttons />
    </>
  );

  const render = useFetchGet(url);

  const handleCharacterSearch = ({ search }) => {
    setUrl(`${baseUrl}/?name=${search.value}`);
    search.value = "";
  };

  const handlePage = page => setUrl(page);

  return (
    <>
      <CharactersHeader />
      {render({
        pending: () => <div>Loading...</div>,
        error: err => (
          <a>
            Something is riggity riggity wrecked... Try again?
            <span style={{ display: "block", margin: "8px auto 0" }}>
              <a href="/characters">Start Over</a>
            </span>
          </a>
        ),
        data: data => {
          pages.prev = data.info.prev;
          pages.next = data.info.next;
          return <CharacterList characters={data.results} />;
        },
      })}
      <Buttons />
    </>
  );
};

export default Characters;
