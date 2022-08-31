declare const _default: (() => {
    PORT: string | number;
    FRONTEND_PORT: string | number;
    JWT_SECRET: string;
    JWT_REFRESH_SECRET: string;
    MONGODB_URI: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    ADMIN_MAIL: string;
    ADMIN_MAIL_PASSWORD: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    PORT: string | number;
    FRONTEND_PORT: string | number;
    JWT_SECRET: string;
    JWT_REFRESH_SECRET: string;
    MONGODB_URI: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    ADMIN_MAIL: string;
    ADMIN_MAIL_PASSWORD: string;
}>;
export default _default;
