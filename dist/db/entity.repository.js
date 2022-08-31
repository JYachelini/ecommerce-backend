"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRepository = void 0;
class EntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
        this.find = async (Filter, Sort, pages, limitPages) => {
            try {
                return await this.entityModel
                    .find(Filter, { __v: 0, password: 0 })
                    .sort(Sort)
                    .skip((pages - 1) * limitPages)
                    .limit(limitPages)
                    .exec();
            }
            catch (error) {
                return error;
            }
        };
        this.findAndCount = async (Filter) => {
            try {
                return await this.entityModel.countDocuments(Filter).exec();
            }
            catch (error) {
                return error;
            }
        };
        this.findById = async (Filter, projection) => {
            try {
                return await this.entityModel
                    .findById(Filter, Object.assign({ __v: 0 }, projection))
                    .exec();
            }
            catch (error) {
                return error;
            }
        };
        this.findOne = async (Filter, projection) => {
            try {
                return await this.entityModel
                    .findOne(Filter, Object.assign({ __v: 0 }, projection))
                    .exec();
            }
            catch (error) {
                return error;
            }
        };
        this.createEntity = async (createEntityData) => {
            try {
                const entity = new this.entityModel(createEntityData);
                return await entity.save();
            }
            catch (error) {
                return error;
            }
        };
        this.updateObject = async (Filter, updateEntityData) => {
            try {
                return await this.entityModel.findByIdAndUpdate(Filter, updateEntityData, {
                    new: true,
                });
            }
            catch (error) {
                return error;
            }
        };
        this.findOneAndUpdate = async (Filter, updateEntityData) => {
            try {
                return await this.entityModel.findOneAndUpdate(Filter, updateEntityData, {
                    new: true,
                });
            }
            catch (error) {
                return error;
            }
        };
        this.deleteObject = async (Filter) => {
            try {
                const deleteResult = await this.entityModel.findByIdAndDelete(Filter);
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
                const deleteResult = await this.entityModel.deleteMany(Filter);
                return deleteResult.deletedCount >= 1;
            }
            catch (error) {
                return error;
            }
        };
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entity.repository.js.map