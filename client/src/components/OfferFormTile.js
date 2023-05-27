import React, { useState } from "react";

const OfferFormTile = ({ platform, addOffer, gameId }) => {

  const [formData, setFormData] = useState({
    platformName: "",
    price: "",
    startDate: "",
    endDate: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { price, startDate, endDate, platformName } = formData;
    if (!platformName || !price || !startDate || !endDate) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    const offerData = {
      gameId,
      platformName,
      price: parseFloat(price),
      startDate,
      endDate
    };
    try {
      const response = await fetch(`/api/v1/games/${platform.id}/offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(offerData)
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      setFormData({
        platformName: "",
        price: "",
        startDate: "",
        endDate: ""
      });
      addOffer(offerData);
      setErrorMessage("");
    } catch (error) {
      console.error(`Error adding offer: ${error.message}`);
      setErrorMessage("An error occurred while adding the offer.");
    }
  };

  return (
    <div className="offer-form">
      <h3>Add Offer</h3>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label className="offer-add-text">
              Platform Name:
              <input
                type="text"
                name="platformName"
                value={formData.platformName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="offer-add-text">
              Start Date:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label className="offer-add-text">
              Price:
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                inputMode="numeric"
              />
            </label>
          </div>
          <div>
            <label className="offer-add-text">
              End Date:
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <button type="submit">Add Offer</button>
        </div>
      </form>
    </div>
  );
};

export default OfferFormTile;
