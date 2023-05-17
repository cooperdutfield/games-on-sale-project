import express from "express"
import Game from "../../../models/Game.js"

const gameRouter = new express.Router()

gameRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const game = await Game.query().findById(id)
        return res.status(200).json({ game: game })
    } catch (err) {
        return res.status(500).json({ errors: err})
    }
})

export default gameRouter