/* eslint-disable no-console */
import { connection } from "../boot.js"
import GameSeeder from "./seeders/GameSeeder.js"
import PlatformSeeder from "./seeders/PlatformSeeder.js"
import ProductSeeder from "./seeders/ProductsSeeder.js"
import OfferSeeder from "./seeders/OfferSeeder.js"
class Seeder {
  static async seed() {
    console.log("seeding games")
    await GameSeeder.seed()
    console.log("seeding platforms")
    await PlatformSeeder.seed()
    console.log("seeding products")
    await ProductSeeder.seed()
    console.log("seeding offers")
    await OfferSeeder.seed()
    // include individual seed commands here
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder