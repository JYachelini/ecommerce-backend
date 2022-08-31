import { Model } from 'mongoose';
import { EntityRepository } from 'src/db/entity.repository';
import { CartInterface } from './interfaces/cart.interface';
import { CartDocument } from './schema/cart.schema';
export declare class CartRepository extends EntityRepository<CartDocument> {
    constructor(cartModel: Model<CartInterface>);
}
