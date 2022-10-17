import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { CartService } from './cart.service';
import { CreateCartDTO } from './dto/cart.dto';
export declare class CartController {
    private cartService;
    private usersService;
    constructor(cartService: CartService, usersService: UsersService);
    createOrder(res: Response, createCartDTO: CreateCartDTO, req: Request): Promise<void>;
    getOrders(res: any, page: number, limit: number, userId: ObjectId, _id: ObjectId): Promise<any>;
}
