import React, { useState } from "react";

const AddNewGameForm = (props) => {
  const [gameName, setGameName] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?search=${gameName}&key=YOUR_RAWG_API_KEY`
      );
      const data = await response.json();

      const gameDetails = data.results[0];
      const { genres, tags, developers, publishers, background_image } = gameDetails;
      setGenre(genres.map((genre) => genre.name).join(", "));
      setTags(tags.map((tag) => tag.name).join(", "));
      setDeveloper(developers.map((developer) => developer.name).join(", "));
      setPublisher(publishers.map((publisher) => publisher.name).join(", "));
      setImageUrl(background_image);

      await fetch("/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameName,
          genre,
          tags,
          developer,
          publisher,
          imageUrl,
        }),
      });

      setGameName("");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="offer-form">
      <h3>Add Offer</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div>
            <label className="offer-add-text">
              Game Name:
              <input
                type="text"
                name="gameName"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h4>Game Details:</h4>
        <p>Genre: {genre}</p>
        <p>Tags: {tags}</p>
        <p>Developer: {developer}</p>
        <p>Publisher: {publisher}</p>
        <p>Image URL: {imageUrl}</p>
      </div>
    </div>
  );
};

export default AddNewGameForm;
