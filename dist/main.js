"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const front_port = configService.get('FRONTEND_PORT') || 5173;
    if (configService.get('NODE_ENV') == 'dev') {
        app.enableCors({
            origin: `http://localhost:${front_port}`,
            credentials: true,
        });
    }
    else if (configService.get('NODE_ENV') == 'prod') {
        app.enableCors({
            origin: `https://jyachelini.github.io/ecommerce-fullstack/`,
            credentials: true,
        });
    }
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    const port = configService.get('PORT');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map