const Model = require("./Model")

class Product extends Model {
    static get tableName() {
        return 'products'
    }
    static get jsonSchema(){
        return {
            type: "object",
            required: ["gameId", "platformId"],
            properties: {
                name: { type: "string"},
                gameId: { type: "integer"},
                platformId: {type: "integer"}
            }
        }
    }
}

module.exports = Product;