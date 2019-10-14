import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  form {
    width: 300px;
  }

  label {
    left: -99999px;
    position: absolute;
  }

  input {
    border: 1px solid #bbb;
    border-radius: 3px 0 0 3px;
    max-width: 600px;
    padding-left: 9px;
    width: 80%;
  }

  img {
    display: inline-block;
    position: relative;
    top: 2px;
  }

  button {
    background: #ddd;
    border: 1px solid #bbb;
    border-left: none;
    border-radius: 0 3px 3px 0;
    height: 30px;
    padding: 3px 6px;
    text-align: center;
    vertical-align: middle;
    width: 60px;
  }
`;

const SearchForm = ({ onSearchSubmit }) => {
  const [val, setVal] = useState({ searchField: "" });

  const handleChange = event => {
    setVal({ searchField: event.target.value });
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    onSearchSubmit(event.target);
  };

  return (
    <section className="search-form">
      <StyledForm onSubmit={handleSearchSubmit}>
        <label htmlFor="search" aria-label="search">
          Search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="search-field"
          placeholder="Search by name here..."
          onChange={handleChange}
          autoFocus
        />
        <button type="submit" className="search-button">
          <img
            src="https://img.icons8.com/search/16"
            alt="search-icon"
          />
        </button>
      </StyledForm>
    </section>
  );
};

export default SearchForm;
