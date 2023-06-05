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
  const [offer, setOffer] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [voteTotal, setVoteTotal] = useState(0);
  const [userVote, setUserVote] = useState(null);

  const fetchOffer = async () => {
    try {
      const response = await fetch(`/api/v1/games/${productId}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const data = await response.json();
      const product = data.game.products.find((product) => product.id === productId.toString());
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
      if (userVote === voteType) {
        return;
      }

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

      let newVoteTotal = voteTotal;
      if (userVote === null) {
        newVoteTotal += voteType;
      } else {
        newVoteTotal += voteType * 2;
      }

      const newUserVote = voteType;

      setVoteTotal(newVoteTotal);
      setUserVote(newUserVote);
    } catch (error) {
      console.error(`Error in vote: ${error.message}`);
    }
  };

  const renderOffer = () => {
    if (offer && platform) {
      const niceStartDate = getNiceDate(offer.start);
      const niceEndDate = getNiceDate(offer.end);
      const hasVoted = userVote !== null;

      return (
        <div>
          <p>Platform: {platform.name}</p>
          <p>Price: ${offer.price}</p>
          <p>Start Date: {niceStartDate}</p>
          <p>End Date: {niceEndDate}</p>
          <p>Vote Total: {voteTotal}</p>
          <button onClick={() => handleVote(1)} disabled={hasVoted && userVote === 1} style={{ cursor: hasVoted && userVote === 1 ? 'not-allowed' : 'pointer' }}>
            Upvote
          </button>
          <br></br>
          <button onClick={() => handleVote(-1)} disabled={hasVoted && userVote === -1} style={{ cursor: hasVoted && userVote === -1 ? 'not-allowed' : 'pointer' }}>
            Downvote
          </button>
        </div>
      );
    } else {
      return <p>No offers are currently available for this product.</p>;
    }
  };

  return (
    <div className="offer-tile">
      <h3>Current Offer</h3>
      {renderOffer()}
    </div>
  );
};

export default OfferTile;
