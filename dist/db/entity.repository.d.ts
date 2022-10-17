import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare abstract class EntityRepository<T extends Document> {
    protected readonly entityModel: Model<T>;
    constructor(entityModel: Model<T>);
    find: (Filter: FilterQuery<T>, Sort: any, pages: number, limitPages: number) => Promise<T[] | null>;
    findAll: () => Promise<any>;
    findAndCount: (Filter: FilterQuery<T>) => Promise<any>;
    findById: (Filter: FilterQuery<T>, projection?: Record<string, unknown>) => Promise<T | null>;
    findOne: (Filter: FilterQuery<T>, projection?: Record<string, unknown>) => Promise<T | null>;
    createEntity: (createEntityData: unknown) => Promise<T>;
    updateObject: (Filter: FilterQuery<T>, updateEntityData: UpdateQuery<unknown>) => Promise<T | null>;
    findOneAndUpdate: (Filter: FilterQuery<T>, updateEntityData: UpdateQuery<unknown>) => Promise<T | null>;
    deleteObject: (Filter: FilterQuery<T>) => Promise<boolean>;
    deleteObjects: (Filter: FilterQuery<T>) => Promise<boolean>;
}
