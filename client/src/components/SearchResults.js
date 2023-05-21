import React from "react";
import { Link } from "react-router-dom";

const SearchResults = (props) => {
  if (!props.gameResults || props.gameResults.length === 0) {
    return <p>No games found</p>;
  }

  return (
    <div>
      <ul>
        {props.gameResults.map((game) => (
          <li key={game.id}>
            <Link
              to={{
                pathname: `/game/${game.id}`,
                gameProps: {
                  game: game,
                },
              }}
            >
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
