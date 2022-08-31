import { Model, ObjectId, Schema } from 'mongoose';
export declare class Repository {
    model: Model<Schema>;
    getAll: () => Promise<(import("mongoose").Document<unknown, any, Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }>> & Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    })[] | {
        error: any;
    }>;
    getObject: (id: ObjectId) => Promise<(import("mongoose").Document<unknown, any, Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }>> & Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        error: any;
    }>;
    createObject: (object: Schema) => Promise<(import("mongoose").Document<unknown, any, Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }>> & Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        error: any;
    }>;
    updateObject: (id: ObjectId, object: Schema) => Promise<(import("mongoose").Document<unknown, any, Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }>> & Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        error: any;
    }>;
    deleteObject: (id: ObjectId) => Promise<(import("mongoose").Document<unknown, any, Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }>> & Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        [x: string]: any;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        error: any;
    }>;
}
