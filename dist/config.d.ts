declare const _default: (() => {
    PORT: string | number;
    FRONTEND_PORT: string | number;
    JWT_SECRET: string;
    MONGODB_URI: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    PORT: string | number;
    FRONTEND_PORT: string | number;
    JWT_SECRET: string;
    MONGODB_URI: string;
}>;
export default _default;
