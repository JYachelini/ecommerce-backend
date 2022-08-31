import { Response } from 'express';
import { ObjectId } from 'mongoose';
import { CreateProductDTO, UpdateProductDTO } from './dto/products.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(res: Response, name: string, _id: ObjectId, category: string, subcategory: string, sort: string, page: number, limit: number): Promise<Response<any, Record<string, any>>>;
    getCategories(res: Response): Promise<void>;
    getProduct(res: Response, id: ObjectId): Promise<Response<any, Record<string, any>>>;
    createProduct(res: Response, createProductDTO: CreateProductDTO): Promise<Response<any, Record<string, any>>>;
    updateProduct(res: Response, updateProductDTO: UpdateProductDTO, id: ObjectId): Promise<Response<any, Record<string, any>>>;
    deleteProduct(res: Response, id: ObjectId): Promise<Response<any, Record<string, any>>>;
}
