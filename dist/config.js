"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        PORT: process.env.PORT || 8080,
        FRONTEND_PORT: process.env.FRONTEND_PORT || 5173,
        JWT_SECRET: process.env.JWT_SECRET,
        MONGODB_URI: process.env.MONGODB_URI,
    };
});
//# sourceMappingURL=config.js.map