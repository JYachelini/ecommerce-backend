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
exports.ProductSeeder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const nestjs_seeder_1 = require("nestjs-seeder");
const products_schema_1 = require("./schemas/products.schema");
let ProductSeeder = class ProductSeeder {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async drop() {
        return await this.productModel.deleteMany({});
    }
    async seed() {
        const products = nestjs_seeder_1.DataFactory.createForClass(products_schema_1.Product).generate(100);
        return await this.productModel.insertMany(products);
    }
};
ProductSeeder = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(products_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductSeeder);
exports.ProductSeeder = ProductSeeder;
//# sourceMappingURL=products.seeder.js.map