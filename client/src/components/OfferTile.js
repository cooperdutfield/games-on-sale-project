import React, { useEffect, useState } from 'react';

const getNiceDate = (timeStamp) => {
  const dateNormalized = new Date(timeStamp);
  const monthDay = dateNormalized.toLocaleString('en', {
    month: 'long',
    day: 'numeric',
  });

  return monthDay;
};

const OfferTile = ({ productId }) => {
  const [offer, setOffer] = useState();
  const [platform, setPlatform] = useState();

  const fetchOffer = async () => {
    try {
      const response = await fetch(`/api/v1/games/${productId}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const data = await response.json();
      const product = data.game.products.find((product) => product.id === productId);
      setOffer(product.offers[0]);
      setPlatform(product.platform);
      console.log('platform:', product.platform);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  const renderOffer = () => {
    if (offer && platform) {
      const niceStartDate = getNiceDate(offer.start);
      const niceEndDate = getNiceDate(offer.end);

      return (
        <div>
          <p>Platform: {platform.name}</p>
          <p>Price: ${offer.price}</p>
          <p>Start Date: {niceStartDate}</p>
          <p>End Date: {niceEndDate}</p>
        </div>
      );
    } else {
      return <p>No offers are currently available for this product.</p>;
    }
  };

  return <div className="offer-tile">{renderOffer()}</div>;
};

export default OfferTile;
