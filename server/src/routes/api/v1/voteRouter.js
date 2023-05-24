import express from 'express';
import Vote from '../../../models/Vote.js';
import Product from '../../../models/Product.js';

const voteRouter = new express.Router();

voteRouter.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const vote = await Vote.query().findOne({ productId });
    if (!vote) {
      return res.status(200).json({ voteTotal: 0 });
    }
    return res.status(200).json({ voteTotal: vote.voteTotal });
  } catch (error) {
    console.error('Error fetching vote total:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

voteRouter.post('/', async (req, res) => {
  const { productId, voteType } = req.body;
  try {
    let vote = await Vote.query().findOne({ productId });
    if (!vote) {
      console.log('Creating new vote...');
      vote = await Vote.query().insert({
        productId: parseInt(productId, 10),
        voteTotal: voteType,
      });
    } else {
      console.log('Updating existing vote...');
      vote.voteTotal += voteType;
      await vote.$query().patch();
    }

    console.log('Vote:', vote);

    return res.status(200).json({ vote });
  } catch (error) {
    console.error('Error creating/updating vote:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default voteRouter;

