const Model = require("./Model")

class Platform extends Model {
    static get tableName() {
        return 'platforms'
    }
    static get jsonSchema(){
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type:"string"},
            }
        }
    }
    static get relationMappings() {
        const { Product } = require("./index.js")
        return {
          products: {
            relation: Model.HasManyRelation,
            modelClass: Product,
            join: {
              from: 'platforms.id',
              to: 'products.platformId',
            }
          }
        }
      }
}

module.exports = Platform;