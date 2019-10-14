import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextButton from "../components/TextButton";
import "../assets/fonts/Xtreem/xtreem.css";

const MainImg = styled.img`
  display: block;
  border-radius: 100%;
  margin: 0 auto;
`;

const Ult = styled.span`
  display: inline-block;
  font-family: "Xtreem", cursive;
  font-size: 60px;
  font-weight: bold;
  margin: 0 3px;
`;

const WelcomePage = () => (
  <section className="welcome-page">
    <header>
      <h1>
        Welcome to the <Ult>ultimate</Ult> fan site!
      </h1>
      <MainImg
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="rick"
      />
    </header>
    <p style={{ textAlign: "center" }}>
      <TextButton to="/characters">
        View Characters &#x021AA;
      </TextButton>
    </p>
  </section>
);

export default WelcomePage;
