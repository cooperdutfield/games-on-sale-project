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
  const [voteTotal, setVoteTotal] = useState(0);

  const fetchOffer = async () => {
    try {
      const response = await fetch(`/api/v1/games/${productId}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const data = await response.json();
      const product = data.game.products.find((product) => product.id === productId.toString()); // Convert productId to a string
      setOffer(product.offers[0]);
      setPlatform(product.platform);

      const voteResponse = await fetch(`/api/v1/votes/${productId}`);
      if (!voteResponse.ok) {
        throw new Error(`${voteResponse.status} (${voteResponse.statusText})`);
      }
      const voteData = await voteResponse.json();
      const latestVoteTotal = voteData.voteTotal !== undefined ? voteData.voteTotal : 0;
      setVoteTotal(latestVoteTotal);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  const handleVote = async (voteType) => {
    try {
      const productIdInt = parseInt(productId, 10);
      const response = await fetch(`/api/v1/votes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productIdInt,
          voteType: voteType,
        }),
      });

      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }

      const newVoteTotal = voteTotal + voteType;
      console.log('Current voteTotal:', voteTotal);
      console.log('voteType:', voteType);
      console.log('New voteTotal:', newVoteTotal);

      setVoteTotal(newVoteTotal);
    } catch (error) {
      console.error(`Error in vote: ${error.message}`);
    }
  };

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
          <p>Vote Total: {voteTotal}</p>
          <button onClick={() => handleVote(1)}>Upvote</button>
          <br></br>
          <button onClick={() => handleVote(-1)}>Downvote</button>
        </div>
      );
    } else {
      return <p>No offers are currently available for this product.</p>;
    }
  };

  return <div className="offer-tile">{renderOffer()}</div>;
};

export default OfferTile;
