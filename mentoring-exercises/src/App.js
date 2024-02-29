import "./App.css";
import Counter from "./components/counter";
import GenreSelect from "./components/genreSelect";
import SearchForm from "./components/searchForm";
import React, { useState } from "react";

const genres = ["action", "comedy", "terror"];

function App() {
  const [selectedGenre, setGenreSelected] = useState(genres[0]);

  const onSearch = (value) => {
    console.log(`Search ${value}`);
  };

  const onSelectGenre = (selected) => {
    setGenreSelected(selected);
  };

  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm onSearch={onSearch} />
      <GenreSelect
        genres={genres}
        currentlySelected={selectedGenre}
        onSelect={onSelectGenre}
      />
    </div>
  );
}

export default App;
