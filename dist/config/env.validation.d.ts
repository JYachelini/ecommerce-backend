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
}
export declare function validate(configuration: Record<string, unknown>): EnvironmentVariables;
export {};
