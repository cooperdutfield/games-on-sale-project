import React, { useState } from "react";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    let query = searchTerm.trim();

    if (query === "") {
      alert("Please enter a search term");
      return;
    }
    
    setGameResults([]);
    fetch(`https://rawg.io/api/games/${query}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch game from RAWG API");
        }
        return resp.json();
      })
      .then((data) => {
        if (data === undefined || data.detail === "Not found.") {
          alert("No game found");
        } else {
          setGameResults([data]);
        }
      })
      .catch((error) => {
        console.log("Error searching game:", error);
      });
    setSearchTerm("");
  };

  return (
    <div>
    <h1 className="title">Game Search</h1>
    <form onSubmit={onSubmit} className="form">
      <input type="text" value={searchTerm} onChange={handleChange} className="search-input" />
      <br />
      <input type="submit" value="Search" className="submit-button" />
    </form>
    <SearchResults gameResults={gameResults} />
  </div>
);
};

export default SearchPage;
