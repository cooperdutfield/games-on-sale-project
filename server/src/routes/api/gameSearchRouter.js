import express from "express";
import Game from "../../models/Game.js";
import GameSerializer from "../../serializers/GameSerializer.js";

const searchRouter = new express.Router();

searchRouter.get("/", async (req, res) => {
  const { searchTerm } = req.query;

  try {
    if (!searchTerm) {
      return res.status(400).json({ error: "Search term is required" });
    }

    const games = await Game.query().where("name", "like", `%${searchTerm}%`);

    const serializedGames = await Promise.all(
      games.map(async (game) => {
        return await GameSerializer.getDetails(game);
      })
    );

    return res.status(200).json({ games: serializedGames });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err });
  }
});

export default searchRouter;
