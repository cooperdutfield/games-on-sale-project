class GameSerializer {
    static async getDetails(game) {
      const allowedAttributes = [
        "id",
        "name",
        "developer",
        "publisher",
        "image"
      ];
  
      const serializedGame = {};
      allowedAttributes.map((attribute) => {
        serializedGame[attribute] = game[attribute];
      });

      // when serializing all this data for the show page, can query products but may not need to send that data back tot he front end

      const products = await game.$relatedQuery("products");
      serializedGame.products = await Promise.all(
        products.map(async (product) => {
          const allowedProductAttributes = ["id"]
          
            const serializedProduct = {};
            allowedProductAttributes.map((attribute) => {
            serializedProduct[attribute] = product[attribute];
          }); 

          const offerings = await product.$relatedQuery("offers");
          const latestOffer = offerings[offerings.length - 1];
          serializedProduct.latestOffer = latestOffer;
          const platform = await product.$relatedQuery("platform");
          serializedProduct.platform = platform;
          return serializedProduct;
        })
      );
      return serializedGame;
    }
  }
  
  export default GameSerializer;
  
    