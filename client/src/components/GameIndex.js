import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameIndex = (props) => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const response = await fetch("/api/v1/games");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setGames(body.game);
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  let gameIndexImage = null;
  if (games && games.length > 0) {
    gameIndexImage = games.map((gameItem) => {
      return (
        <div key={gameItem.id}>
          <Link to={`/games/${gameItem.id}`}>
            <img src={gameItem.image} alt={`${gameItem.name}`} />
          </Link>
        </div>
      );
    });
  }

  return <div>{gameIndexImage}</div>;
};

export default GameIndex;
