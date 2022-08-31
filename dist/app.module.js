"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const products_module_1 = require("./products/products.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const cart_module_1 = require("./cart/cart.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const config_2 = require("./config/config");
const env_validation_1 = require("./config/env.validation");
const mail_module_1 = require("./mail/mail.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                load: [config_2.default],
                isGlobal: true,
                validate: env_validation_1.validate,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_2.default.KEY],
                useFactory: (configService) => ({
                    uri: configService.MONGODB_URI,
                }),
            }),
            products_module_1.ProductsModule,
            cart_module_1.CartModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map