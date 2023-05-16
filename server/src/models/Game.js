const Model = require("./Model")

class Game extends Model {
    static get tableName() {
        return "stations"
    }

    static get jsonSchema(){
        return{
            type: "object",
            required: ["name, price, vendor, img"],
            properties: {
                name: { type: "string"},
                price: {type: "integer"},
                vendor: {type: "string"},
                img: {type: ["string"]}
            }
        }
    }
}

module.exports = Game