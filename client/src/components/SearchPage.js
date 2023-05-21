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
  
    console.log(`Search term: ${query}`);
    console.log(`API URL: https://rawg.io/api/games/${query}`);
  
    setGameResults([]);
    fetch(`https://rawg.io/api/games/${query}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch game from RAWG API");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("API Response:", data);
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
      <h1>Game Search</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <br></br>
        <input type="submit" />
      </form>
      <SearchResults gameResults={gameResults} />
    </div>
  );
};

export default SearchPage;
