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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../config/config");
const users_repository_1 = require("../users/users.repository");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService, usersRepository) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.usersRepository = usersRepository;
        this.validateUser = async (username, password) => {
            const user = await this.usersService.findUser(username);
            if (!user)
                return { error: 'User not found.' };
            const isMatchPassword = await bcrypt.compare(password, user.password);
            if (!isMatchPassword)
                return { error: 'Wrong password.' };
            if (user && isMatchPassword) {
                const { password, username } = user, rest = __rest(user, ["password", "username"]);
                return { user };
            }
        };
        this.login = async (user) => {
            if (user.error)
                return { error: user.error };
            const payload = {
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                roles: user.roles,
                address: user.address,
            };
            const tokens = await this.getTokens(payload);
            await this.usersRepository.updateRefreshTokenHash(payload._id, tokens.refresh_token);
            return tokens;
        };
        this.logout = async (_id) => {
            const setRefreshTokenNull = await this.usersRepository.findOneAndUpdate({ _id, hashRT: { $ne: null } }, { hashRT: null });
            if (!setRefreshTokenNull)
                return { error: 'You are already logout.' };
            return { message: 'Logout Succesfully.' };
        };
        this.refreshTokens = async (_id, refresh_token) => {
            const user = await this.usersRepository.findById(_id);
            if (!user || !user.hashRT)
                throw new common_1.ForbiddenException('Access Denied.');
            const refresh_tokenMatches = await bcrypt.compare(refresh_token, user.hashRT);
            if (!refresh_tokenMatches)
                throw new common_1.ForbiddenException('Access Denied.');
            const tokens = await this.getTokens(user);
            await this.usersRepository.updateRefreshTokenHash(user._id, tokens.refresh_token);
            return tokens;
        };
        this.hashData = async (data) => {
            const salt = await bcrypt.genSalt(10);
            return await bcrypt.hash(data, salt);
        };
        this.getTokens = async (user) => {
            if (user.error)
                return { error: user.error };
            const { _id, username, name, email, phone, roles, address } = user;
            const [access_token, refresh_token] = await Promise.all([
                this.jwtService.sign({
                    _id: _id,
                    name,
                    username,
                    email,
                    phone,
                    role: roles,
                    address,
                }, {
                    secret: this.configService.JWT_SECRET,
                    expiresIn: '30m',
                }),
                this.jwtService.sign({ _id: _id, username }, { secret: this.configService.JWT_REFRESH_SECRET, expiresIn: '15d' }),
            ]);
            return {
                access_token,
                refresh_token,
            };
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)(config_1.default.KEY)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_repository_1.UsersRepository))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService, void 0, users_repository_1.UsersRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map