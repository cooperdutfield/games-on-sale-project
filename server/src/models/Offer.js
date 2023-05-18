const Model = require("./Model")

class Offer extends Model {
    static get tableName() {
        return 'offers'
    }
    static get jsonSchema(){
        return {
            type: "object",
            required: ["productId","price","start","end"],
            properties: {
                productId: { type: "integer"},
                price: {type: "number"},
                start: {type: "string"},
                end: {type: "string"}
            }
        }
    }
    static get relationMappings() {
        const { Product } = require("./index.js") 
        return {
          product: {
            relation: Model.BelongsToOneRelation,
            modelClass: Product,
            join: {
              from: 'games.id',
              to: 'products.gameId',
            }
          }
        }
    }
}

module.exports = Offer;