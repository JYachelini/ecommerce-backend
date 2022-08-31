import { Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import config from '../../config/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigType<typeof config>);
    validate: (payload: any) => Promise<any>;
}
export {};
