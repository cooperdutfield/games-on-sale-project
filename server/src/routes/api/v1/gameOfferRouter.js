    import express from "express";
    import objection from "objection";
    const { ValidationError } = objection;
    import { Offer } from "../../../models/index.js";
    
    const gameOfferRouter = new express.Router({ mergeParams: true });

    // Nick Notes 
    // - make sure we seed all of the platforms 
    
    gameOfferRouter.post("/", async (req, res) => {
      const { gameId, price, startDate, endDate, platformName} = req.body;
      
      // use a findOne query to search for a platform that matches the platformName from req.body
        // then, check to see if your app has an instance of this game for that platform (check to see if a product exists with this gameId and platformId)
          // if a product doesnt exist
            // create the product 
          // otherwise, save the product to a variable....now you have a product id

      try {
        const newOffer = await Offer.query().insertAndFetch({
          productId,
          price,
          startDate,
          endDate
        });
    
        return res.status(201).json({ offer: newOffer });
      } catch (error) {
        if (error instanceof ValidationError) {
          return res.status(422).json({ errors: error.data });
        }
        return res.status(500).json({ errors: error });
      }
    });
    
    export default gameOfferRouter;
    