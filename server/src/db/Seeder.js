/* eslint-disable no-console */
import { connection } from "../boot.js"
import GameSeeder from "./seeders/GameSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding games")
    await GameSeeder.seed()
    // include individual seed commands here
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder