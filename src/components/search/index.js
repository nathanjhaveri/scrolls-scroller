import React, { useState } from "react";
import { func } from "prop-types";
import "./style.css";

export default function Search({ onSubmit }) {
  const [query, setQuery] = useState("");

  const onSearch = (event) => {
    if (event) {
      event.preventDefault();
    }

    onSubmit(query);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(query);
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <input
        id="submitButton"
        type="submit"
        value="Search"
        onClick={onSearch}
      />
    </div>
  );
}

Search.propTypes = {
  onSubmit: func.isRequired,
};
