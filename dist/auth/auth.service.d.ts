import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User, UserInterface } from '../users/interfaces/user.interface';
import { ConfigType } from '@nestjs/config';
import config from '../config/config';
import { UsersRepository } from 'src/users/users.repository';
import { ObjectId } from 'mongoose';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    private usersRepository;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigType<typeof config>, usersRepository: UsersRepository);
    validateUser: (username: string, password: string) => Promise<{
        error: string;
        user?: undefined;
    } | {
        user: import("../users/schemas/user.schema").UserDocument;
        error?: undefined;
    }>;
    login: (user: User) => Promise<{
        access_token: string;
        refresh_token: string;
        error?: undefined;
    } | {
        error: string;
    }>;
    logout: (_id: ObjectId) => Promise<{
        error: string;
        message?: undefined;
    } | {
        message: string;
        error?: undefined;
    }>;
    refreshTokens: (_id: ObjectId, refresh_token: string) => Promise<{
        error: string;
        access_token?: undefined;
        refresh_token?: undefined;
    } | {
        access_token: string;
        refresh_token: string;
        error?: undefined;
    }>;
    hashData: (data: string) => Promise<string>;
    getTokens: (user: UserInterface) => Promise<{
        error: string;
        access_token?: undefined;
        refresh_token?: undefined;
    } | {
        access_token: string;
        refresh_token: string;
        error?: undefined;
    }>;
}
