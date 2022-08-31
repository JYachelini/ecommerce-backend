"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
        this.getProducts = async (filter, sort, pages, limitPages) => {
            try {
                const products = await this.productRepository.find(filter, sort, pages, limitPages);
                return products;
            }
            catch (error) {
                return error;
            }
        };
        this.getCategories = async (filter) => {
            try {
                const categories = await this.productRepository.getCategories(filter);
                return categories;
            }
            catch (error) {
                return error;
            }
        };
        this.getCountProducts = async (filter) => {
            try {
                const count = await this.productRepository.findAndCount(filter);
                return count;
            }
            catch (error) {
                return error;
            }
        };
        this.getProduct = async (id) => {
            try {
                const product = await this.productRepository.findById(id);
                return product;
            }
            catch (error) {
                return error;
            }
        };
        this.getProductStock = async (id) => {
            try {
                const product = await this.productRepository.findById(id, {
                    name: 0,
                    description: 0,
                    imageURL: 0,
                    price: 0,
                    category: 0,
                    subcategory: 0,
                    _id: 0,
                });
                return product;
            }
            catch (error) {
                return error;
            }
        };
        this.restProductStock = async (_id, quantity) => {
            try {
                const { stock } = await this.getProductStock(_id);
                await this.updateProduct(_id, { stock: stock - quantity });
            }
            catch (error) {
                return error;
            }
        };
        this.createProduct = async (createProductDTO) => {
            try {
                const newProduct = this.productRepository.createEntity(createProductDTO);
                return newProduct;
            }
            catch (error) {
                return error;
            }
        };
        this.updateProduct = async (id, updateProductDTO) => {
            try {
                const updatedProduct = this.productRepository.updateObject(id, updateProductDTO);
                return updatedProduct;
            }
            catch (error) {
                return error;
            }
        };
        this.deleteProduct = async (id) => {
            try {
                const deletedProduct = this.productRepository.deleteObject(id);
                return deletedProduct;
            }
            catch (error) {
                return error;
            }
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map