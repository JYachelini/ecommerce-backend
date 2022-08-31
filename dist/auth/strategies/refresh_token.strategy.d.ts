import { ConfigType } from '@nestjs/config';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import config from '../../config/config';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private configService;
    constructor(configService: ConfigType<typeof config>);
    validate(req: Request, payload: any): any;
}
export {};
