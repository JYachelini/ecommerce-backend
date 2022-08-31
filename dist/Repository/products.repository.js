"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const Repository_1 = require("./Repository");
const products_schema_1 = require("../products/schemas/products.schema");
class ProductRepository extends Repository_1.Repository {
    constructor() {
        super();
        this.model = products_schema_1.ProductModel;
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=products.repository.js.map