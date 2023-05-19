import React, { useState } from "react";

const OfferFormTile = ({ platform, addOffer }) => {
  const [formData, setFormData] = useState({
    platformName: "",
    price: "",
    startDate: "",
    endDate: ""
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { platformName, price, startDate, endDate } = formData;
    if (!platformName || !price || !startDate || !endDate) {
      console.error("Please fill in all fields.");
      return;
    }
    const offerData = {
      platformName,
      price: parseFloat(price),
      start: startDate,
      end: endDate
    };
    try {
      const response = await fetch("/api/v1/games/:id", {
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
      console.log("Offer added successfully.");
    } catch (error) {
      console.error(`Error adding offer: ${error.message}`);
    }
  };
  return (
    <div className="offer-form">
      <h3>Add Offer</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>
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
            <label>
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
            <label>
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
            <label>
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
