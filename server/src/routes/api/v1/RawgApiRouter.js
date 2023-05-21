import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const rawgApiKey = process.env.RAWG_API_KEY;
const RawgApiRouter = new express.Router();

RawgApiRouter.get("/", async (req, res) => {
  try {
    const url = "https://api.rawg.io/api/games";
    const queryParams = new URLSearchParams({
      platforms: "4,5,6,18",
      dates: `2006-01-01,${new Date().getFullYear()}-12-31`,
      ordering: "-rating",
      page_size: 20,
      key: rawgApiKey,
    });

    const response = await fetch(`${url}?${queryParams}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch games from RAWG API");
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ errors: err.message });
  }
});

export default RawgApiRouter;
