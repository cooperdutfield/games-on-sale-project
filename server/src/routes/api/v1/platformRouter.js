import express from "express"
import Platform from "../../../models/Platform.js"


const platformRouter = new express.Router()
platformRouter.get("/:name", async (req, res) => {
    const { name } = req.params
    try {
        const platform = await Platform.query().findById(name)
        return res.status(200).json({ platform: platform })
    } catch (err) {
        return res.status(500).json({ errors: err})
    }
})

export default platformRouter