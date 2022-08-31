"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mail_module_1 = require("../mail/mail.module");
const products_module_1 = require("../products/products.module");
const users_module_1 = require("../users/users.module");
const cart_controller_1 = require("./cart.controller");
const cart_repository_1 = require("./cart.repository");
const cart_service_1 = require("./cart.service");
const cart_schema_1 = require("./schema/cart.schema");
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: cart_schema_1.Cart.name, schema: cart_schema_1.CartSchema }]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => products_module_1.ProductsModule),
            mail_module_1.MailModule,
        ],
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService, cart_repository_1.CartRepository],
        exports: [cart_service_1.CartService],
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map