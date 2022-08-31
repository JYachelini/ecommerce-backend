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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const guards_1 = require("../auth/guards/");
const user_interface_1 = require("../users/interfaces/user.interface");
const products_dto_1 = require("./dto/products.dto");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts(res, name, _id, category, subcategory, sort, page, limit) {
        let filters = {};
        let sorting = {};
        if (subcategory && category) {
            filters = {
                $and: [
                    { category: new RegExp(category.toString(), 'i') },
                    { subcategory: new RegExp(subcategory.toString(), 'i') },
                ],
            };
        }
        else if (name) {
            filters = { name };
        }
        else if (category) {
            filters = { category };
        }
        else if (subcategory) {
            filters = { subcategory };
        }
        if (_id) {
            filters = { _id };
        }
        if (sort) {
            sorting = { price: sort };
        }
        const actual_page = Number(page) || 1;
        const limits = Number(limit) || 10;
        const products = await this.productService.getProducts(filters, sorting, actual_page, limits);
        const total_items = await this.productService.getCountProducts(filters);
        return res.status(common_1.HttpStatus.OK).json({
            products,
            total_items,
            actual_page,
            last_page: Math.ceil(total_items / limits),
        });
    }
    async getCategories(res) {
        const categories = await this.productService.getCategories({});
        res.json(categories);
    }
    async getProduct(res, id) {
        const product = await this.productService.getProduct(id);
        if (!product || product.name == 'CastError')
            throw new common_1.NotFoundException('Product Does not exists.');
        else
            return res.status(common_1.HttpStatus.OK).json({ product });
    }
    async createProduct(res, createProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        if (product.errors)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(product);
        else
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Product Successfully Created',
                product,
            });
    }
    async updateProduct(res, updateProductDTO, id) {
        const productUpdated = await this.productService.updateProduct(id, updateProductDTO);
        if (!productUpdated)
            throw new common_1.NotFoundException('Product Does not exists');
        else
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Product Updated Successfully',
                productUpdated,
            });
    }
    async deleteProduct(res, id) {
        const productDeleted = await this.productService.deleteProduct(id);
        if (!productDeleted)
            throw new common_1.NotFoundException('Product Does not exists');
        else
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Product Deleted Succesfully',
                productDeleted,
            });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('name')),
    __param(2, (0, common_1.Query)('id')),
    __param(3, (0, common_1.Query)('category')),
    __param(4, (0, common_1.Query)('subcategory')),
    __param(5, (0, common_1.Query)('sort')),
    __param(6, (0, common_1.Query)('page')),
    __param(7, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('/categories'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, decorator_1.hasRoles)(user_interface_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, products_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, decorator_1.hasRoles)(user_interface_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Put)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, products_dto_1.UpdateProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, decorator_1.hasRoles)(user_interface_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map