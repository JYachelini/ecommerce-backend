"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.getUsers = async (filter, sort, pages, limitPages) => {
            return await this.userRepository.find(filter, sort, pages, limitPages);
        };
        this.countUsers = async (filter) => {
            return await this.userRepository.findAndCount(filter);
        };
        this.findUser = async (username) => {
            return await this.userRepository.findOne({ username });
        };
        this.findUserById = async (_id) => {
            return await this.userRepository.findById({ _id }, { password: 0 });
        };
        this.findEmail = async (email) => {
            return await this.userRepository.findOne({ email });
        };
        this.register = async (user) => {
            return await this.userRepository.register(user);
        };
        this.updateUser = async (id, user) => {
            const userFound = await this.findUser(user.username);
            if (userFound)
                return { statusCode: common_1.HttpStatus.FOUND, message: 'Username exist.' };
            const emailFound = await this.findEmail(user.email);
            if (emailFound)
                return { statusCode: common_1.HttpStatus.FOUND, message: 'Email exist.' };
            delete user.roles;
            delete user._id;
            const userUpdated = await this.userRepository.updateObject(id, user);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'User Updated Succesfully.',
            };
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_repository_1.UsersRepository))),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map