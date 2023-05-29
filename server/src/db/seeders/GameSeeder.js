import { Game } from "../../models/index.js"

class GameSeeder {
    static async seed(){
    const gameData = [
        {
            name: "Dead Space",
            developer: "Motive",
            publisher: "Electronic Arts",
            genre: "Action, Adventure",
            tags: "Horror, Third-Person Shooter, Sci-fi",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg?t=1684172906"
        },
        {
            name: "Marauders",
            developer: "Small Impact Games",
            publisher: "Team17",
            genre: "Action, Early Access",
            tags: "Early Access, Looter Shooter, FPS, Perma Death",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1789480/header_alt_assets_1.jpg?t=1683196295"
        },
        {
            name: "No Man's Sky",
            developer: "Hello Games",
            publisher: "Hello Games",
            genre: "Action, Adventure",
            tags: "Open World, Open World Survival Craft, Space",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header_alt_assets_17.jpg?t=1683104899"
        },
        {
            name: "Pavlov",
            developer: "Vankrupt Games",
            publisher: "Vankrupt Games",
            genre: "Action, Indie, Early Access",
            tags: "VR, Shooter, Action, Multiplayer, FPS, Gore",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/555160/header.jpg?t=1680733944"
        },
        {
            name: "Isonzo",
            developer: "M2H, BlackMill Games",
            publisher: "BlackMill Games",
            genre: "Action, Indie, Massively Multiplayer, Simulation, Strategy",
            tags: "War, Horror, Simulation, Indie, PvP, Realistic",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1556790/header.jpg?t=1684936117"
        },
        {
            name: "Squad",
            developer: "Offworld Industries",
            publisher: "Offworld Industries",
            genre: "Action, Indie, Massively Multiplayer, Strategy",
            tags: "Military, Realistic, FPS, Multiplayer, Tactical",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/393380/header.jpg?t=1685034323"

        },
        {
            name: "HITMAN 3",
            developer: "IO Interactive A/S",
            publisher: "IO Interactive A/S",
            genre: "Action, Adventure",
            tags: "Action, Stealth, Assassin, Sandbox, VR",
            image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg?t=1679476219"
        },
        {
            name: "STAR WARS Jedi: Survivor™",
            developer: "Respawn",
            publisher:"Electronic Arts",
            genre: "Action, Adventure",
            tags: "Action, Adventure, Souls-like, Singleplayer",
            image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg?t=1684344870"
        },
        {
            name: "Buy Don't Starve Together",
            developer: "Klei Entertainment",
            publisher: "Klei Entertainment",
            genre: "Action, Adventure, Indie, RPG, Simulation, Strategy",
            tags: "Survival, Open World Survival Craft, Multiplayer",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/322330/header_alt_assets_37.jpg?t=1682615247"
        },
        {
            name: "Apex Legends™",
            developer: "Respawn Entertainment",
            publisher: "Electronic Arts",
            genre: "Action, Adventure, Free to Play",
            tags: "Free to play, Multiplayer, Battle Royale, Shooter",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1685123076"
        },
        {
            name: "Grounded",
            developer: "Obsidian Entertainment",
            publisher: "Xbox Game Studios",
            genre: "Action, Adventure",
            tags: "Survival, Multiplayer, Open World Survival Craft",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg?t=1684963474"
        },
        {
            name: "Buy Marvel's Guardians of the Galaxy",
            developer: "Eidos-Montréal",
            publisher: "Eidos Interactive Corp.",
            genre: " Action, Adventure",
            tags: "Singleplayer, Story Rich, Action, Action-Adventure",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/header.jpg?t=1677000792"
        },
        {
            name: "Core Keeper",
            developer: "Pugstorm",
            publisher: "Fireshine Games",
            genre: "Adventure, Casual, Indie, RPG, Early Access",
            tags: "Early Access, Online Co-Op, Pixel Graphics, 2D",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1621690/header.jpg?t=1684427778"
        },
        {
            name: "The Long Drive",
            developer: "Genesz",
            publisher: "Genesz",
            genre: "Action, Adventure, Casual, Indie, Simulation, Early Access",
            tags: "Automobile Sim, Open World, Driving, Multiplayer",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1017180/header.jpg?t=1666983789"
        },
        {
            name: "Darkest Dungeon® II",
            developer: "Red Hook Studios",
            publisher: "Red Hook Studios",
            genre: "Indie, RPG, Strategy",
            tags: "Turn-Based Tactics, Roguelite, Dark Fantasy, 2D",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1940340/header.jpg?t=1684783639"
        },

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