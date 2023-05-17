const Model = require("./Model")

class Game extends Model {
    static get tableName() {
        return 'games'
    }
    static get jsonSchema(){
        return {
            type: "object",
            required: ["name", "developer", "publisher", "image"],
            properties: {
                name: { type:"string"},
                developer: {type:"string"},
                publisher:{type:"string"},
                images:{type:"string"}
            }
        }
    }
}

module.exports = Game;