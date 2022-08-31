"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const products_schema_1 = require("../products/schemas/products.schema");
const fakeProduct = () => ({
    name: faker_1.faker.commerce.productName(),
    description: faker_1.faker.commerce.productDescription(),
    imageURL: faker_1.faker.image.cats(),
    price: faker_1.faker.commerce.price(),
    category: faker_1.faker.commerce.department(),
    subcategory: faker_1.faker.commerce.department(),
    stock: faker_1.faker.finance.amount(0, 50, 0),
});
const main = async () => {
    products_schema_1.ProductModel.remove();
    for (let i = 0; i < 50; i++) {
        const fake = new products_schema_1.ProductModel(fakeProduct);
        await fake.save();
    }
};
main();
//# sourceMappingURL=seeder.js.map