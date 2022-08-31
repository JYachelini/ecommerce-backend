import { ObjectId } from 'mongoose';
import { ProductInterface } from './interfaces/products.interface';
import { CreateProductDTO, UpdateProductDTO } from './dto/products.dto';
import { ProductsRepository } from './products.repository';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: ProductsRepository);
    getProducts: (filter: any, sort: any, pages: any, limitPages: any) => Promise<ProductInterface[]>;
    getCategories: (filter: any) => Promise<any>;
    getCountProducts: (filter: any) => Promise<any>;
    getProduct: (id: ObjectId) => Promise<ProductInterface>;
    getProductStock: (id: ObjectId) => Promise<ProductInterface>;
    restProductStock: (_id: ObjectId, quantity: number) => Promise<any>;
    createProduct: (createProductDTO: CreateProductDTO) => Promise<ProductInterface>;
    updateProduct: (id: ObjectId, updateProductDTO: UpdateProductDTO) => Promise<ProductInterface>;
    deleteProduct: (id: ObjectId) => Promise<boolean>;
}
