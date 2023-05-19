import React, { useEffect, useState } from "react";
import OfferTile from "./OfferTile";
import OfferFormTile from "./OfferFormTile";
import { parseISO } from 'date-fns'
// import { getDate } from 'date-fns'


const GameShow = (props) => {
  const [game, setGame] = useState({
    name: "",
    developer: "",
    publisher: "",
    image: "",
  });
  const gameId = props.match.params.id;

  const getGame = async () => {
    try {
      const response = await fetch(`/api/v1/games/${gameId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setGame(body.game);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getGame();
  }, []);

  const addOffer = (offerData) => {
    console.log('Adding offer:', offerData);
  };

  return (
    <div className="game-container">
      <div className="game-image">
        <img src={game.image} alt="Game Image" />
      </div>
      <div className="game-details">
        <h1>{game.name}</h1>
        <p><strong>Developer:</strong> {game.developer}</p>
        <p><strong>Publisher:</strong> {game.publisher}</p>
      </div>
      <div className="offers-container">
        <br />
        <br />
        <h2>Product Offers</h2>
        {game.products && game.products.length > 0 ? (
          game.products.map((product) => (
            <OfferTile key={product.id} productId={product.id} />
          ))
        ) : (
          <p>No offers are currently available for this game.</p>
        )}
        <OfferFormTile platform={game.platform} addOffer={addOffer} />
      </div>
    </div>
  );
};

export default GameShow;
