    import express from "express";
    import objection from "objection";
    const { ValidationError } = objection;
    import { Offer } from "../../../models";
    
    const gameOfferRouter = new express.Router({ mergeParams: true });
    
    gameOfferRouter.post("/", async (req, res) => {
      const { productId, price, startDate, endDate } = req.body;
      
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
    