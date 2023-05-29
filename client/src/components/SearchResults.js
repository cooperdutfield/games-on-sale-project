import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ gameResults }) => {
  if (!gameResults || gameResults.length === 0) {
    return <div>No game found.</div>;
  }

  return (
    <div>
      <ul>
        {gameResults.map((game) => (
          <li key={game.id}>
            <Link
              to={{
                pathname: `/games/${game.id}`,
                state: {
                  game: game,
                },
              }}
            >
              <img src={game.image} alt="game" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
