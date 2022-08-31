import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from '../db/entity.repository';
import { ProductInterface } from './interfaces/products.interface';
import { ProductDocument } from './schemas/products.schema';
export declare class ProductsRepository extends EntityRepository<ProductDocument> {
    constructor(productModel: Model<ProductInterface>);
    getCategories: (Filter: FilterQuery<ProductDocument>) => Promise<any>;
}
