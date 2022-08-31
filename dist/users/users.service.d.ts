import { HttpStatus } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDTO } from './dto/user.dto';
import { UserInterface } from './interfaces/user.interface';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers: (filter: any, sort: any, pages: any, limitPages: any) => Promise<import("./schemas/user.schema").UserDocument[]>;
    countUsers: (filter: any) => Promise<any>;
    findUser: (username: string) => Promise<import("./schemas/user.schema").UserDocument>;
    findUserById: (_id: string) => Promise<import("./schemas/user.schema").UserDocument>;
    findEmail: (email: string) => Promise<import("./schemas/user.schema").UserDocument>;
    register: (user: CreateUserDTO) => Promise<{
        error: string;
        _id?: undefined;
        tokens?: undefined;
    } | {
        _id: any;
        tokens: {
            access_token: string;
            refresh_token: string;
            error?: undefined;
        } | {
            error: string;
            access_token?: undefined;
            refresh_token?: undefined;
        };
        error?: undefined;
    }>;
    updateUser: (id: ObjectId, user: UserInterface) => Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
