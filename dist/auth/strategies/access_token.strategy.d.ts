import { Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import config from '../../config/config';
import { UserInterface } from 'src/users/interfaces/user.interface';
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private configService;
    constructor(configService: ConfigType<typeof config>);
    validate: (payload: UserInterface) => Promise<UserInterface>;
}
export {};
