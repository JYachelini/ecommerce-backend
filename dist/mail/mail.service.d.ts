import { MailerService } from '@nestjs-modules/mailer';
import { CartInterface } from 'src/cart/interfaces/cart.interface';
import { UserInterface } from 'src/users/interfaces/user.interface';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    orderConfirmed: (cart: CartInterface, user: UserInterface) => Promise<any>;
}
