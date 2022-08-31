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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const entity_repository_1 = require("../db/entity.repository");
const auth_service_1 = require("../auth/auth.service");
let UsersRepository = class UsersRepository extends entity_repository_1.EntityRepository {
    constructor(userModel, authService) {
        super(userModel);
        this.authService = authService;
        this.register = async (user) => {
            const { username, confirmPassword, password, email, address, name, phone } = user;
            if (confirmPassword !== password)
                return { error: "Password's don't match" };
            const emailFound = await this.findOne({ email })
                .catch((err) => {
                throw err;
            })
                .then((doc) => {
                return doc ? true : false;
            });
            const userFound = await this.findOne({ username })
                .catch((err) => {
                throw err;
            })
                .then((doc) => {
                return doc ? true : false;
            });
            if (emailFound) {
                return { error: 'Email already exist.' };
            }
            else {
                if (userFound) {
                    return { error: 'User already exist.' };
                }
                else {
                    const hashedPassword = await this.authService.hashData(password);
                    const newUserRegistered = await this.createEntity({
                        name,
                        username,
                        password: hashedPassword,
                        email,
                        phone,
                        address,
                    });
                    const tokens = await this.authService.getTokens({
                        _id: newUserRegistered._id,
                        name,
                        username,
                        email,
                        phone,
                        address,
                        roles: newUserRegistered.roles,
                    });
                    await this.updateRefreshTokenHash(newUserRegistered._id, tokens.refresh_token);
                    return {
                        _id: newUserRegistered._id,
                        tokens,
                    };
                }
            }
        };
        this.updateRefreshTokenHash = async (_id, refresh_token) => {
            const refresh_tokenHashed = await this.authService.hashData(refresh_token);
            await this.updateObject(_id, { hashRT: refresh_tokenHashed });
        };
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map