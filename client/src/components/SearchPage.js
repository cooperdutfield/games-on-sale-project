import React, { useState } from "react";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    let query = searchTerm.trim();

    if (query === "") {
      alert("Please enter a search term");
      return;
    }

    try {
      const response = await fetch(`/api/v1/search?searchTerm=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      console.log("API response:", data);

      if (data.games.length === 0) {
        alert("No game found");
      } else {
        setGameResults(data.games);
      }
    } catch (error) {
      console.log("Error searching game:", error);
      alert("An error occurred while searching for the game");
    }

    setSearchTerm("");
  };

  console.log("gameResults:", gameResults);

  return (
    <div>
      <h1 className="title">Game Search</h1>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <br />
        <input type="submit" value="Search" className="submit-button" />
      </form>
      <SearchResults gameResults={gameResults} />
    </div>
  );
};

export default SearchPage;
