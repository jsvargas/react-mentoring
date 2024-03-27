import React from "react";

/**
 * This component will render a label "Sort by" and a select control to the right.
 *  Select should have the following options:
    Release Date
    Title

    The component should take a property that specifies current selection. 
    Additionally, it should take a callback property to handle selection changes. 
    The callback should be called every time a user changes "Sort by" value. 
    The new value should be passed in callback arguments.

 */

function SortControl({ selected, changeSelected }) {
  const handleChange = function (newSelection) {
    changeSelected(newSelection);
  };
  return (
    <div>
      <span>Sort by</span>
      <span>
        <select
          data-testid="select"
          onChange={(e) => handleChange(e.target.value)}
          value={selected}
        >
          <option value="releaseDate">Release date</option>
          <option value="title">Title</option>
        </select>
      </span>
    </div>
  );
}

export default SortControl;
