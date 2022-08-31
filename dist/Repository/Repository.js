"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor() {
        this.getAll = async () => {
            try {
                return await this.model.find();
            }
            catch (error) {
                return { error };
            }
        };
        this.getObject = async (id) => {
            try {
                return await this.model.findById(id);
            }
            catch (error) {
                return { error };
            }
        };
        this.createObject = async (object) => {
            try {
                const newObject = new this.model(object);
                return await newObject.save();
            }
            catch (error) {
                return { error };
            }
        };
        this.updateObject = async (id, object) => {
            try {
                return await this.model.findByIdAndUpdate(id, object);
            }
            catch (error) {
                return { error };
            }
        };
        this.deleteObject = async (id) => {
            try {
                return await this.model.findByIdAndRemove(id);
            }
            catch (error) {
                return { error };
            }
        };
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map