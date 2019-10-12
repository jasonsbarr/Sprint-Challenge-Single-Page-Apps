import React from "react";

const CharacterCard = ({ character }) => {
  const {
    id,
    name,
    gender,
    species,
    status,
    image,
    origin.name
  } = character;
  return (
    <div>
      <div className="media-image-container">
        <img
          className="media-image"
          src={image}
          alt={name}
        />
        <p className="media-image-caption">
          {`${name}, status: ${status}`}
        </p>
      </div>
      <div className="media-details">
        <h2 className="media-details-heading">{name}</h2>
        <p className="media-card-label">Known facts:</p>
        <ul className="media-card-list">
          <li className="media-card-list-item">{`Species: ${species}`}</li>
          <li className="media-card-list-item">{`From: ${origin.name}`}</li>
          <li className="media-card-list-item">{`Gender: ${gender}`}</li>
          <li className="media-card-list-item">{`Status: ${status}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
