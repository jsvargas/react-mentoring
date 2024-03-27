// MovieTile
// This component should render a movie tile from the list of movies.
// It should take properties to receive image url, movie name, release year, and a list of relevant genres.
// Alternatively, you can define one component property to take an object with all movie info.
// Additionally, the component should receive a callback property to capture click event.
// Optionally, you can implement a context menu popup that opens when a user clicks on three dots button and contains "Edit" and "Delete" menu items.

import React, { useState } from "react";
import "./movieTile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function MovieTile({ imageUrl, movieName, releaseYear, genres, handleClick }) {
  const [showContentMenu, toggleContentMenu] = useState(false);

  const handleClickMenu = function (value) {
    toggleContentMenu(value);
  };

  return (
    <div className="card" data-testid="movieTile" onClick={() => handleClick()}>
      <button
        className="context-menu"
        onClick={() => handleClickMenu(true)}
        onMouseLeave={() => handleClickMenu(false)}
      >
        <FontAwesomeIcon icon={fas.faEllipsisVertical} />
        {showContentMenu && (
          <div className="menu-content">
            <a>Edit</a>
            <a>Delete</a>
          </div>
        )}
      </button>
      <img src={imageUrl} alt={movieName} />
      <div className="container">
        <div className="title">
          <div className="title-left">
            <h4>{movieName}</h4>
          </div>
          <div className="title-right">
            <h4>
              <b>{releaseYear}</b>
            </h4>
          </div>
        </div>

        <div className="subtitle">
          {genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieTile;
