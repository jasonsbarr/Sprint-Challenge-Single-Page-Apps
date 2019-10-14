import React from "react";
import styled from "styled-components";
import bullet from "../assets/images/rick-and-morty-emoji-32x32.png";

const StyledCard = styled.div`
  background-color: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  font-family: "Courier New", Courier, monospace;
  justify-content: space-between;
  margin-top: 16px;
  max-width: 632px;
  padding: 8px;

  h2 {
    text-align: center;
    margin: 12px auto 16px;
    width: 75%;
  }

  .media-image-container {
    align-content: center;
    background-color: #eeeeee;
    border: 1px #dddddd solid;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-left: 16px;
    padding: 10px;
  }

  .media-image {
    border-radius: 3px;
    height: 200px;
    width: 200px;
  }

  .media-image-caption {
    font-size: 13px;
    font-style: italic;
    margin: 10px auto 0;
    text-align: center;
  }

  ul {
    list-style-type: none;
    margin-right: 24px;
    padding: 0;
    width: 33%;

    li {
      background-image: url(${bullet});
      background-position: left;
      background-repeat: no-repeat;
      font-size: 14px;
      list-style-position: inside;
      margin-top: 6px;
      padding: 9px 0 9px 40px;
    }
  }
`;

const CharacterCard = ({ character }) => {
  const {
    name,
    gender,
    species,
    status,
    image,
    origin: { name: place },
  } = character;
  return (
    <StyledCard>
      <h2 className="media-details-heading">{name}</h2>
      <div className="media-image-container">
        <img className="media-image" src={image} alt={name} />
        <p className="media-image-caption">
          {`${name}`}
          <br />
          {`Status: ${status}`}
        </p>
      </div>
      <div className="media-details">
        <h3 className="media-card-label">Known facts:</h3>
        <ul className="media-card-list">
          <li className="media-card-list-item">{`Species: ${species}`}</li>
          <li className="media-card-list-item">{`From: ${place}`}</li>
          <li className="media-card-list-item">{`Gender: ${gender}`}</li>
          <li className="media-card-list-item">{`Status: ${status}`}</li>
        </ul>
      </div>
    </StyledCard>
  );
};

export default CharacterCard;
