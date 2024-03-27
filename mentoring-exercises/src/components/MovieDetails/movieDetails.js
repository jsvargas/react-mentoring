// MovieTile
// This component should render a movie tile from the list of movies.
// It should take properties to receive image url, movie name, release year, and a list of relevant genres.
// Alternatively, you can define one component property to take an object with all movie info.
// Additionally, the component should receive a callback property to capture click event.
// Optionally, you can implement a context menu popup that opens when a user clicks on three dots button and contains "Edit" and "Delete" menu items.

import React from "react";
import "./movieDetails.scss";

function MovieDetails({
  imageUrl,
  movieName,
  releaseYear,
  rating,
  duration,
  description,
}) {
  return (
    <div className="vertical-divisions">
      <div className="left-division">
        <img src={imageUrl} alt={movieName}></img>
      </div>
      <div className="right-division">
        <div className="container">
          <h1>{movieName}</h1>
          <h3> Release year</h3>
          <p> {releaseYear} </p>
          <h3> Rating:</h3>
          <p> {rating} </p>
          <h3> Duration:</h3>
          <p> {duration} </p>
          <h3> Description:</h3>
          <p> {description} </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
