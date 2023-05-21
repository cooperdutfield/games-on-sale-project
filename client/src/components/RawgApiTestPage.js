import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RawgApiTestPage = (props) => {
  const [games, setGames] = useState([]);

  const getRawgGames = async () => {
    try {
      const response = await fetch("/api/v1/rawg-games"); 
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setGames(body.results);
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getRawgGames();
  }, []);

  let gameIndexItems = null;
  if (games && games.length > 0) {
    gameIndexItems = games.map((gameItem) => {
      return (
        <div key={gameItem.id} className="game-index-item">
          <Link to={`/games/${gameItem.id}`}>
            <img src={gameItem.background_image} alt={gameItem.name} />
          </Link>
        </div>
      );
    });
  }

  return <div className="game-index-container">{gameIndexItems}</div>;
};

export default RawgApiTestPage;
