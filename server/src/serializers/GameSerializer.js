class GameSerializer {
  static async getDetails(game) {
    const allowedAttributes = ["id", "name", "developer", "publisher", "genre", "tags", "image"];

    const serializedGame = {};
    allowedAttributes.forEach((attribute) => {
      serializedGame[attribute] = game[attribute];
    });

    const products = await game.$relatedQuery("products");
    console.log(products)

    // Products
    serializedGame.products = await Promise.all(products.map(async (product) => {
        const allowedProductAttributes = ["id", "gameId", "platformId"];

        const serializedProduct = {};
        allowedProductAttributes.forEach((attribute) => {
          serializedProduct[attribute] = product[attribute];
        });

        // offers
        const offers = await product.$relatedQuery("offers");
        serializedProduct.offers = await Promise.all(offers.map(async (offer) => {
            const allowedOfferAttributes = ["price", "start", "end"];

            const serializedOffer = {};
            allowedOfferAttributes.forEach((attribute) => {
              serializedOffer[attribute] = offer[attribute];
            }); 

            return serializedOffer;
          })
        );

        // Serialized Platform
        const platform = await product.$relatedQuery("platform");
        console.log(platform)
         const serializedPlatform = {};
          const allowedPlatformAttributes = ["name"];

        allowedPlatformAttributes.forEach((attribute) => {
          serializedPlatform[attribute] = platform[attribute];
        });
        serializedProduct.platform = serializedPlatform



        return serializedProduct;
      })
    );

    return serializedGame;
  }
}

export default GameSerializer;

    