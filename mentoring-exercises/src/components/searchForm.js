import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const triggerCallback = () => {
    onSearch(searchText);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      triggerCallback();
    }
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        onFocus={triggerCallback}
      />
      <button onClick={triggerCallback}> Search </button>
    </div>
  );
}

export default SearchForm;
