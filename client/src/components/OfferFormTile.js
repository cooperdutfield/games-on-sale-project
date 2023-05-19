import React, { useState } from "react";

const OfferFormTile = ({ platform, addOffer }) => {
  const [platformName, setPlatformName] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    if (!platformName || !price || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }

    // Create the offer object
    const offerData = {
      platformName,
      price: parseFloat(price),
      start: startDate,
      end: endDate,
    };

    // Pass the offer data to the parent component
    addOffer(offerData);

    // Clear the form inputs
    setPlatformName("");
    setPrice("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="offer-form">
      <h3>Add Offer</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label htmlFor="platformName">Platform Name:</label>
            <input
              type="text"
              id="platformName"
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
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
