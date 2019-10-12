import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => (
  <section className="welcome-page">
    <header>
      <h1>Welcome to the ultimate fan site!</h1>
      <img
        className="main-img"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="rick"
      />
    </header>
    <p>
      <Link to="/characters">View Characters &rarr;</Link>
    </p>
  </section>
);

export default WelcomePage;
