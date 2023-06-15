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
        {
            name: "EA SPORTS™ FIFA 23",
            developer: "EA Canada & EA Romania",
            publisher: "Electronic Arts",
            genre: "Simulation, Sports",
            tags: "Football(Soccer), Sports, Controller eSports",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1682117049"
        },
        {
            name: "Atomic Heart",
            developer: "Mundfish",
            publisher: "Focus Entertainment, 4Divinity",
            genre: "Action, Adventure, RPG",
            tags: "Horror, Sexual Content, Puzzle, Mystery, FPS",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/668580/header.jpg?t=1684318955"

        },
        {
            name: "Silica",
            developer: "Bohemia Incubator",
            publisher: "Bohemia Interactive",
            genre: "Action, Indie, Strategy, Early Access",
            tags: "Strategy, RTS, Sci-fi, Early Access, Multiplayer",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1494420/header.jpg?t=1683293631"
        },
        {
            name: "Besiege",
            developer: "Spiderling Studios",
            publisher: "Spiderling Studios",
            genre: "Indie, Simulation",
            tags: "Building, Sandbox, Physics, Destruction, Puzzle",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/346010/header.jpg?t=1661441186"
        },
        {
            name: "Hell Let Loose",
            developer: "Black Matter Pty Ltd",
            publisher: "Team17",
            genre: "Action, Indie, Massively Multiplayer, Simulation, Strategy",
            tags: "Shooter, FPS, World War II, Multiplayer, Action",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/686810/header.jpg?t=1685008898"
        },
        {
            name: "Dying Light 2",
            developer: "Techland",
            publisher: "Techland",
            genre: "Action, Adventure, RPG",
            tags: "Co-op, Open World, Zombies, Parkour, Horror",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/534380/header_alt_assets_18.jpg?t=1685542703"
        },
        {
            name: "NBA 2K23",
            developer: "Visual Concepts",
            publisher: "2K",
            genre: "Simulation, Sports",
            tags: "Immersive Sim, Sports, Basketball, Simulation",
            image:"https://cdn.akamai.steamstatic.com/steam/apps/1919590/header.jpg?t=1677540477"
        },
        {
            name: "V Rising",
            developer: "Stunlock Studios",
            publisher: "Stunlock Studios",
            genre: "Action, Adventure, Massively Multiplayer, Early Access",
            tags: "Early Access, Open World, Survival, Vampire",
            image:"https://cdn.akamai.steamstatic.com/steam/apps/1604030/header_alt_assets_2.jpg?t=1684394834"
        },
        {
            name: "Titanfall 2",
            developer: "Respawn Entertainment",
            publisher: "Electronic Arts",
            genre: "Action",
            tags: "FPS, Multiplayer, Mechs, Shooter, Action",
            image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg?t=1668565264"
        },
        {
            name: "Songs of Conquest",
            developer: "Lavapotion",
            publisher: "Coffee Stain Publishing",
            genre: "Adventure, Strategy, Early Access",
            tags: "Early Access, Strategy, Turn-Based Strategy, PvP",
            image:"https://cdn.cloudflare.steamstatic.com/steam/apps/867210/header.jpg?t=1683725305"
        },
        {
            name: "Cities: Skylines",
            developer: "Colossal Order Ltd.",
            publisher: "Paradox Interactive",
            genre: "Simulation, Strategy",
            tags: "City Builder, Simulation, Building, Management",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg?t=1683626322"
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