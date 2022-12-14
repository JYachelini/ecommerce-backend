"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        PORT: process.env.PORT || 8080,
        FRONTEND_PORT: process.env.FRONTEND_PORT || 5173,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        MONGODB_URI: process.env.MONGODB_URI,
        MAIL_HOST: process.env.MAIL_HOST,
        MAIL_PORT: Number(process.env.MAIL_PORT),
        ADMIN_MAIL: process.env.ADMIN_MAIL,
        ADMIN_MAIL_PASSWORD: process.env.ADMIN_MAIL_PASSWORD,
    };
});
//# sourceMappingURL=config.js.map