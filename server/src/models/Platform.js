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
}

module.exports = Platform;