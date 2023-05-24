const Model = require('./Model')

class Vote extends Model {
    static get tableName() {
        return 'votes'
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['productId', 'voteTotal'],
            properties: {
                productId: { type: 'integer' },
                userId: { type: 'integer' },
                voteTotal: { type: 'integer' },
            }
        }
   }
   static get relationMappings() {
    const { User, Product } = require('./index.js');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'votes.userId',
          to: 'users.id',
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'votes.productId',
          to: 'products.id',
        },
      },
    };
  }
}

module.exports = Vote;