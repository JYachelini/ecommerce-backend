import { AuthService } from '../auth/auth.service';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';
import { UsersService } from './users.service';
import { ObjectId } from 'mongoose';
import { Response } from 'express';
import { CartService } from 'src/cart/cart.service';
export declare class UsersController {
    private usersService;
    private authService;
    private cartService;
    constructor(usersService: UsersService, authService: AuthService, cartService: CartService);
    login(req: any, res: any): Promise<void>;
    register(user: CreateUserDTO, res: any): Promise<void>;
    logout(_id: ObjectId, res: Response): Promise<void>;
    refreshToken(_id: ObjectId, refresh_token: string): Promise<{
        error: string;
        access_token?: undefined;
        refresh_token?: undefined;
    } | {
        access_token: string;
        refresh_token: string;
        error?: undefined;
    }>;
    users(res: any, _id: ObjectId, sort: string, page: number, limit: number): Promise<void>;
    updateUser(user: UpdateUserDTO, id: ObjectId, res: any): Promise<void>;
}
