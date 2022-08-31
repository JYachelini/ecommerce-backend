"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_seeder_1 = require("nestjs-seeder");
const config_2 = require("../config/config");
const env_validation_1 = require("../config/env.validation");
const products_seeder_1 = require("./products.seeder");
const products_schema_1 = require("./schemas/products.schema");
(0, nestjs_seeder_1.seeder)({
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
        mongoose_1.MongooseModule.forFeature([{ name: products_schema_1.Product.name, schema: products_schema_1.ProductSchema }]),
    ],
}).run([products_seeder_1.ProductSeeder]);
//# sourceMappingURL=seeder.js.map