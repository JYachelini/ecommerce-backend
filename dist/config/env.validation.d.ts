declare enum EnvironmentType {
    Dev = "dev",
    Prod = "prod"
}
declare class EnvironmentVariables {
    NODE_ENV: EnvironmentType;
    PORT: number;
    FRONTEND_PORT: string;
    MONGODB_URI: string;
    JWT_SECRET: string;
    JWT_REFRESH_SECRET: string;
    MAIL_HOST: string;
    MAIL_PORT: number | string;
    ADMIN_MAIL: string;
    ADMIN_MAIL_PASSWORD: string;
}
export declare function validate(configuration: Record<string, unknown>): EnvironmentVariables;
export {};
