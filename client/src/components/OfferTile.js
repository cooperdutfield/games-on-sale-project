import React, { useEffect, useState } from 'react';

const OfferTile = ({ productId }) => {
  const [offer, setOffer] = useState(null);

  const fetchOffer = async () => {
    try {
      const response = await fetch(`/api/v1/games/${productId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const product = data.game.products.find((p) => p.id === productId);
      setOffer(product.offers[0]);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  return (
    <div className="offer-tile">
      {offer ? (
        <div>
          <p>Price: {offer.price}</p>
          <p>Start: {offer.start}</p>
          <p>End: {offer.end}</p>
        </div>
      ) : (
        <p>No offer available for this product.</p>
      )}
    </div>
  );
};

export default OfferTile;