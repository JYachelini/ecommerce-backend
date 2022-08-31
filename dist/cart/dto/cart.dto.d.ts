import { ObjectId } from 'mongoose';
export declare class CreateCartDTO {
    userId: ObjectId;
    userAddress: string;
    userPhone: string;
    userName: string;
    userEmail: string;
    userUsername: string;
    products: ProductDTO[];
    totalPrice: number;
    totalQuantity: number;
}
export declare class ProductDTO {
    _id?: ObjectId;
    name?: string;
    description?: string;
    imageURL?: string;
    category?: string;
    subcategory?: string;
    price?: number;
    quantity?: number;
}
