import { Game } from "../../models/index.js"

class GameSeeder {
    static async seed(){
    const gameData = [
        {
            name: "Dead Space",
            developer: "Motive",
            publisher: "Electronic Arts",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg?t=1684172906"
        },
        {
            name: "Marauders",
            developer: "Small Impact Games",
            publisher: "Team17",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1789480/header_alt_assets_1.jpg?t=1683196295"
        },
        {
            name: "No Man's Sky",
            developer: "Hello Games",
            publisher: "Hello Games",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header_alt_assets_17.jpg?t=1683104899"
        }
    ]
    for (const singleGameData of gameData) {
        const currentGame = await Game.query().findOne({ name: singleGameData.name })
        if(!currentGame){
            await Game.query().insert(singleGameData)
        }
    }
}
}

export default GameSeeder