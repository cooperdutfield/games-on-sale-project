import React, { useEffect, useState } from "react";
import OfferTile from "./OfferTile";
import OfferFormTile from "./OfferFormTile";
import { parseISO } from 'date-fns'


const GameShow = (props) => {
  const [game, setGame] = useState({
    name: "",
    developer: "",
    publisher: "",
    genre:"",
    tags:"",
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
<div>
  <div className="game-image">
    <img src={game.image} alt="Game Image" />
  </div>
  <div className="game-details-container">
    <div className="game-details">
      <h1 className="game-name">{game.name}</h1>
      <p className="game-developer"><strong>Developer:</strong> {game.developer}</p>
      <p className="game-publisher"><strong>Publisher:</strong> {game.publisher}</p>
      <p className="game-developer"><strong>Genre:</strong> {game.genre}</p>
      <p className="game-publisher"><strong>Tags:</strong> {game.tags}</p>
    </div>
    <div className="offers-container">
      <h2 className="offers-heading">Product Offers</h2>
      {game.products && game.products.length > 0 ? (
        game.products.map((product) => (
          <OfferTile key={product.id} productId={product.id} />
        ))
      ) : (
        <p className="no-offers-text">No offers are currently available for this game.</p>
      )}
      <OfferFormTile platform={game.platform} addOffer={addOffer} gameId={gameId} />
    </div>
  </div>
</div>

  );
};

export default GameShow;
