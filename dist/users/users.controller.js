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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const guards_1 = require("../auth/guards");
const user_dto_1 = require("./dto/user.dto");
const users_service_1 = require("./users.service");
const user_interface_1 = require("./interfaces/user.interface");
const decorator_1 = require("../auth/decorator");
const cart_service_1 = require("../cart/cart.service");
let UsersController = class UsersController {
    constructor(usersService, authService, cartService) {
        this.usersService = usersService;
        this.authService = authService;
        this.cartService = cartService;
    }
    async login(req, res) {
        const tokens = await this.authService.login(req.user);
        if (tokens.error)
            res.status(common_1.HttpStatus.NOT_FOUND).json(tokens);
        else
            res.status(common_1.HttpStatus.OK).json(tokens);
    }
    async register(user, res) {
        const registerUser = await this.usersService.register(user);
        if (registerUser._id) {
            res.status(common_1.HttpStatus.OK).json(registerUser);
        }
        else if (registerUser.error) {
            res.status(common_1.HttpStatus.NOT_IMPLEMENTED).json(registerUser);
        }
    }
    async logout(_id, res) {
        const logout = await this.authService.logout(_id);
        res.status(common_1.HttpStatus.OK).json(logout);
    }
    async refreshToken(_id, refresh_token) {
        return this.authService.refreshTokens(_id, refresh_token);
    }
    async users(res, _id, sort, page, limit) {
        let filters = {};
        if (_id) {
            filters = { _id };
        }
        let sorting = {};
        const actual_page = Number(page) || 1;
        const limits = Number(limit) || 10;
        const users = await this.usersService.getUsers(filters, sorting, actual_page, limits);
        const total_items = await this.usersService.countUsers(filters);
        if (users) {
            res.status(common_1.HttpStatus.OK).json({
                users,
                total_items,
                actual_page,
                last_page: Math.ceil(total_items / limits),
            });
        }
        else {
            res.status(common_1.HttpStatus.CONFLICT).json({ users });
        }
    }
    async updateUser(user, id, res) {
        if (Object.keys(user).length == 0)
            throw new common_1.BadRequestException();
        const resp = await this.usersService.updateUser(id, user);
        res.status(resp.statusCode).json({ message: resp.message });
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDTO, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, decorator_1.GetCurrentUser)('_id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtRefreshAuthGuard),
    (0, common_1.Post)('refresh'),
    __param(0, (0, decorator_1.GetCurrentUser)('_id')),
    __param(1, (0, decorator_1.GetCurrentUser)('refresh_token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "refreshToken", null);
__decorate([
    (0, decorator_1.hasRoles)(user_interface_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('userId')),
    __param(2, (0, common_1.Query)('sort')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, Number, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "users", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.UserIsUserGuard),
    (0, common_1.Put)('user/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UpdateUserDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
UsersController = __decorate([
    (0, common_1.Controller)(''),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => cart_service_1.CartService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService,
        cart_service_1.CartService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map