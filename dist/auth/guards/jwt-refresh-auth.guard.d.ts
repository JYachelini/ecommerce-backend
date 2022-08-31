declare const JwtRefreshAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtRefreshAuthGuard extends JwtRefreshAuthGuard_base {
    constructor();
    handleRequest(err: any, user: any, info: any): any;
}
export {};
