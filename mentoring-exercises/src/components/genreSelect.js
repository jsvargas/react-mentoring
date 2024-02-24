import React from "react";

function GenreSelect({ genres, currentlySelected, onSelect }) {
  const highlightedButton = {
    color: "white",
    backgroundColor: "DodgerBlue",
  };

  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>
            <button
              onClick={() => onSelect(genre)}
              style={currentlySelected === genre ? highlightedButton : null}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreSelect;
