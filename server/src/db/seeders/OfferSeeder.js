import { Offer } from "../../models/index.js";

class OfferSeeder {
    static async seed() {
        const offerData = [
            {
                price: 40,
                start: "2025/11/10",
                end: "2025/11/12",
                productId: 1
            },
            {
                price: 30,
                start: "2024/4/5",
                end: "2026/9/3",
                productId: 2
            },
            {
                price: 10,
                start: "2023/9/20",
                end: "2024/10/5",
                productId: 3
            },
            {
                price: 5,
                start: "2066/5/6",
                end: "2069/3/20",
                productId: 4
            }
        ];

        for (const singleOfferData of offerData) {
            const currentOffer = await Offer.query().findOne({ price: singleOfferData.price });
            if (!currentOffer) {
                await Offer.query().insert(singleOfferData);
            }
        }
    }
}

export default OfferSeeder;
