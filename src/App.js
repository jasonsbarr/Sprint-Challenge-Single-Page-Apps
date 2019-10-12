import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import Characters from "./pages/Characters.js";

export default function App() {
  return (
    <main>
      <Header />

      <Route to="/characters" component={Characters} />
    </main>
  );
}
