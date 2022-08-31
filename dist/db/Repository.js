"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(model) {
        this.model = model;
        this.getAll = async (Filter) => {
            try {
                return await this.model.find(Filter).exec();
            }
            catch (error) {
                return error;
            }
        };
        this.getById = async (Filter, projection) => {
            try {
                return await this.model
                    .findById(Filter, Object.assign({ __v: 0 }, projection))
                    .exec();
            }
            catch (error) {
                return error;
            }
        };
        this.createObject = async (object) => {
            try {
                const objectToCreate = new this.model(object);
                return objectToCreate.save();
            }
            catch (error) {
                return error;
            }
        };
        this.updateObject = async (Filter, object) => {
            try {
                return this.model.findByIdAndUpdate(Filter, object, { new: true });
            }
            catch (error) {
                return error;
            }
        };
        this.deleteObject = async (Filter) => {
            try {
                const deleteResult = await this.model.findByIdAndDelete(Filter);
                if (deleteResult)
                    return true;
                else
                    return false;
            }
            catch (error) {
                return error;
            }
        };
        this.deleteObjects = async (Filter) => {
            try {
                const deleteResult = await this.model.deleteMany(Filter);
                return deleteResult.deletedCount >= 1;
            }
            catch (error) {
                return error;
            }
        };
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map