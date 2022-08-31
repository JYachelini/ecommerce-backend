import { UsersService } from 'src/users/users.service';
import { MailService } from '../mail/mail.service';
import { ProductsService } from '../products/products.service';
import { UserInterface } from '../users/interfaces/user.interface';
import { CartRepository } from './cart.repository';
import { CreateCartDTO, ProductDTO } from './dto/cart.dto';
export declare class CartService {
    private readonly cartRepository;
    private readonly productsService;
    private readonly mailService;
    private readonly usersService;
    constructor(cartRepository: CartRepository, productsService: ProductsService, mailService: MailService, usersService: UsersService);
    getOrders: (filter: any, sort: any, pages: any, limitPages: any) => Promise<any>;
    createOrder: (cart: CreateCartDTO, user: UserInterface) => Promise<{
        errors: any[];
        message?: undefined;
        _id?: undefined;
        mailSent?: undefined;
    } | {
        message: string;
        _id: any;
        mailSent: any;
        errors?: undefined;
    }>;
    checkStock: (products: Set<ProductDTO>) => Promise<any[]>;
    removeStock: (products: Set<ProductDTO>) => Promise<void>;
}
