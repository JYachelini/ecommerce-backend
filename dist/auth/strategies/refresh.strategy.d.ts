import { ConfigType } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import config from '../../config/config';
declare const RefrestStrategy_base: new (...args: any[]) => Strategy;
export declare class RefrestStrategy extends RefrestStrategy_base {
    private configService;
    constructor(configService: ConfigType<typeof config>);
    validate(payload: any): any;
}
export {};
