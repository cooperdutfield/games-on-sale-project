import express from "express"
import Game from "../../../models/Game.js"
import GameSerializer from "../../../serializers/GameSerializer.js"
const gameRouter = new express.Router()

gameRouter.get("/", async (req, res) => {
    try {
        const game = await Game.query()
        const serializedGame = await Promise.all(
            game.map(async (game) => {
                return await GameSerializer.getDetails(game)
            })
        )
        return res.status(200).json({ game: serializedGame})
    } catch (err) {
        return res.status(500).json({ errors: err})
    }
})

gameRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const game = await Game.query().findById(id)
        const serializedGame = await GameSerializer.getDetails(game)
        return res.status(200).json({ game: serializedGame })
    } catch (err) {
        console.log(err)
        console.log(err)
        return res.status(500).json({ errors: err})
    }
})

export default gameRouter