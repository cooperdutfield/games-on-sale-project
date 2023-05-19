class GameSerializer {
  static async getDetails(game) {
    const allowedAttributes = ["id", "name", "developer", "publisher", "image"];

    const serializedGame = {};
    allowedAttributes.map((attribute) => {
      serializedGame[attribute] = game[attribute];
    });

    const products = await game.$relatedQuery("products");
    serializedGame.products = await Promise.all(
      products.map(async (product) => {
        const allowedProductAttributes = ["id"];

        const serializedProduct = {};
        allowedProductAttributes.map((attribute) => {
          serializedProduct[attribute] = product[attribute];
        });

        const offers = await product.$relatedQuery("offers");
        serializedProduct.offers = await Promise.all(
          offers.map(async (offer) => {
            const allowedOfferAttributes = ["price", "start", "end"];

            const serializedOffer = {};
            allowedOfferAttributes.map((attribute) => {
              serializedOffer[attribute] = offer[attribute];
              console.log(serializedOffer)
            }); 

            return serializedOffer;
          })
        );

        // const platform = await product.$relatedQuery("platform");
        // serializedProduct.platform = await Promise.all(
        //   platform.map(async (platform) => {
        //     const allowedPlatformAttributes = ["name"];

        //     const serializedPlatform = {};
        //     allowedPlatformAttributes.map((attribute) => {
        //       serializedPlatform[attribute] = platform[attribute];
        //     });

        //     return serializedPlatform;
        //   })
        // );
        return serializedProduct;
      })
    );

    return serializedGame;
  }
}

export default GameSerializer;

    