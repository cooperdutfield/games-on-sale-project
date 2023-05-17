import { Product } from "../../models/index.js";

class ProductSeeder {
    static async seed() {
        const productData = [
            {
                gameId: 1,
                platformId: 1
            },
            {
                gameId: 2,
                platformId: 2
            },
            {
                gameId: 3,
                platformId: 4
            },
            {
                gameId: 4,
                platformId: 1
            }
        ];

        for (const singleProductData of productData) {
            const currentProduct = await Product.query().findOne({ gameId: singleProductData.gameId });
            if (!currentProduct) {
                await Product.query().insert(singleProductData);
            }
        }
    }
}

export default ProductSeeder;
