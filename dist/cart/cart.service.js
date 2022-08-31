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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const mail_service_1 = require("../mail/mail.service");
const products_service_1 = require("../products/products.service");
const cart_repository_1 = require("./cart.repository");
let CartService = class CartService {
    constructor(cartRepository, productsService, mailService, usersService) {
        this.cartRepository = cartRepository;
        this.productsService = productsService;
        this.mailService = mailService;
        this.usersService = usersService;
        this.getOrders = async (filter, sort, pages, limitPages) => {
            try {
                const orders = await this.cartRepository.find(filter, sort, pages, limitPages);
                const count = await this.cartRepository.findAndCount(filter);
                return { orders, count };
            }
            catch (error) {
                return error;
            }
        };
        this.createOrder = async (cart, user) => {
            const productsInCart = new Set(cart.products);
            const checkStock = await this.checkStock(productsInCart);
            if (checkStock.length > 0) {
                return { errors: checkStock };
            }
            else {
                const cartCreated = await this.cartRepository.createEntity(cart);
                await this.removeStock(productsInCart);
                const mailSent = await this.mailService.orderConfirmed(cartCreated, user);
                await this.usersService.updateUser(user._id, {
                    address: cart.userAddress,
                    phone: cart.userPhone,
                    email: cart.userEmail,
                    name: cart.userName,
                });
                return {
                    message: 'Order generated Succesfully!',
                    _id: cartCreated._id,
                    mailSent,
                };
            }
        };
        this.checkStock = async (products) => {
            const result = [];
            for (const product of products) {
                const productToCheck = await this.productsService.getProductStock(product._id);
                if (product.quantity > productToCheck.stock) {
                    result.push({
                        _id: product._id,
                        error: `${product.name} have no stock enough for purchase.`,
                    });
                }
            }
            return result;
        };
        this.removeStock = async (products) => {
            for (const product of products) {
                await this.productsService.restProductStock(product._id, product.quantity);
            }
        };
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repository_1.CartRepository,
        products_service_1.ProductsService,
        mail_service_1.MailService,
        users_service_1.UsersService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map