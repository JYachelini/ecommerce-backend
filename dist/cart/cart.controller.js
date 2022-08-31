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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const guards_1 = require("../auth/guards");
const user_interface_1 = require("../users/interfaces/user.interface");
const users_service_1 = require("../users/users.service");
const cart_service_1 = require("./cart.service");
const cart_dto_1 = require("./dto/cart.dto");
let CartController = class CartController {
    constructor(cartService, usersService) {
        this.cartService = cartService;
        this.usersService = usersService;
    }
    async createOrder(res, createCartDTO, req) {
        const user = req.user;
        if (Object.keys(createCartDTO).length == 0)
            throw new common_1.BadRequestException();
        const resp = await this.cartService.createOrder(createCartDTO, user);
        if (resp.errors) {
            res.status(common_1.HttpStatus.CONFLICT).json(resp.errors);
        }
        else {
            res.status(common_1.HttpStatus.OK).json(resp);
        }
    }
    async getCarts(res, page, limit, userId, _id) {
        let filters = {};
        if (userId) {
            filters = { userId };
        }
        if (_id) {
            filters = { _id };
        }
        const actual_page = Number(page) || 1;
        const limits = Number(limit) || 10;
        const orders = await this.cartService.getOrders(filters, { createdAt: 'desc' }, actual_page, limits);
        const total_items = orders.count;
        return res.status(common_1.HttpStatus.OK).json({
            orders: orders.orders,
            total_items,
            actual_page,
            last_page: Math.ceil(total_items / limits),
        });
    }
};
__decorate([
    (0, decorator_1.hasRoles)(user_interface_1.UserRole.USER),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cart_dto_1.CreateCartDTO, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createOrder", null);
__decorate([
    (0, decorator_1.hasRoles)(user_interface_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('userId')),
    __param(4, (0, common_1.Query)('cartId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCarts", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService,
        users_service_1.UsersService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map