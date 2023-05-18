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
                gameId: { type: "integer"},
                platformId: {type: "integer"}
            }
        }
    }
    static get relationMappings() {
        const { Game, Platform, Offer } = require("./index.js")
        // Product belongs to one Game
        // Game has many Products
        // association sandwich
        // entity - relation - entity
        return {
          game: {
            relation: Model.BelongsToOneRelation,
            modelClass: Game,
            join: {
              from: 'products.gameId',
              to: 'games.id',
            },
          },
          platform: {
            relation: Model.BelongsToOneRelation,
            modelClass: Platform,
            join: {
              from: 'products.platformId',
              to: 'platforms.id',
            }
          },
          offers: {
            relation: Model.HasManyRelation,
            modelClass: Offer,
            join: {
              from: 'products.d',
              to: 'offers.platformId',
            }
          }
        }
    }
}

module.exports = Product;