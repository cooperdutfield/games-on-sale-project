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
}

module.exports = Offer;