import express from "express"
import Game from "../../../models/Game.js"

const gameRouter = new express.Router()
gameRouter.get("/", async (req, res) => {
    try {
        const games = await Game.query()
        return res.status(200).json({ games: games })
    } catch (err) {
        return res.status(500).json({ errors: err})
    }
})

export default gameRouter