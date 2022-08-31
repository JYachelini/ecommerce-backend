import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare abstract class Repository<T extends Document> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    getAll: (Filter: FilterQuery<T>) => Promise<T[] | null>;
    getById: (Filter: FilterQuery<T>, projection?: Record<string, unknown>) => Promise<T | null>;
    createObject: (object: unknown) => Promise<T>;
    updateObject: (Filter: FilterQuery<T>, object: UpdateQuery<unknown>) => Promise<T | null>;
    deleteObject: (Filter: FilterQuery<T>) => Promise<boolean>;
    deleteObjects: (Filter: FilterQuery<T>) => Promise<boolean>;
}
