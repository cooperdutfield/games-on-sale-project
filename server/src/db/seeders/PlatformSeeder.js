import { Platform } from "../../models/index.js"

class PlatformSeeder {
    static async seed(){
    const platformData = [
        {
            name: "Steam"
        },
        {
            name: "Epic Games"
        }, 
        {
            name: "Playstation Network"
        },
        {
            name: "Microsoft Store"
        }
    ]
    for (const singlePlatformData of platformData) {
        const currentPlatform = await Platform.query().findOne({ name: singlePlatformData.name })
        if(!currentPlatform){
            await Platform.query().insert(singlePlatformData)
        }
    }
}
}

export default PlatformSeeder