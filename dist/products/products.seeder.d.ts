import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { ProductDocument } from './schemas/products.schema';
export declare class ProductSeeder implements Seeder {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    drop(): Promise<any>;
    seed(): Promise<any>;
}
