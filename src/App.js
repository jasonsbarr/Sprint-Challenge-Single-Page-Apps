import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import Characters from "./pages/Characters.js";
import WelcomePage from "./pages/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
    </main>
  );
}
