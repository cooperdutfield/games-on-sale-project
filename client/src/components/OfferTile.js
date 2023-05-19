import React, { useEffect, useState } from 'react';

const OfferTile = ({ productId }) => {
  const [offer, setOffer] = useState(null);
  const [platform, setPlatform] = useState(null);

  const fetchOffer = async () => {
    try {
      const response = await fetch(`/api/v1/games/${productId}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const data = await response.json();
      const product = data.game.products.find((product) => product.id === productId);
      setOffer(product.offers[0]);
      fetchPlatform(product.platformId);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const fetchPlatform = async (platformId) => {
    try {
      const response = await fetch(`/api/v1/platforms/${platformId}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const data = await response.json();
      setPlatform(data.platform.name); 
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  const renderOffer = () => {
    if (offer) {
      return (
        <div>
          <p>Platform: {platform}</p>
          <p>Price: ${offer.price}</p>
          <p>Start Date: {offer.start}</p>
          <p>End Date: {offer.end}</p>
        </div>
      );
    } else {
      return <p>No offers are currently available for this product.</p>;
    }
  };

  return <div className="offer-tile">{renderOffer()}</div>;
};

export default OfferTile;
