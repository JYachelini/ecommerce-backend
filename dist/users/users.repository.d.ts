import { Model, ObjectId } from 'mongoose';
import { EntityRepository } from 'src/db/entity.repository';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UserDocument } from './schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersRepository extends EntityRepository<UserDocument> {
    private authService;
    constructor(userModel: Model<User>, authService: AuthService);
    register: (user: CreateUserDTO) => Promise<{
        error: string;
        _id?: undefined;
        tokens?: undefined;
    } | {
        _id: any;
        tokens: {
            access_token: string;
            refresh_token: string;
            error?: undefined;
        } | {
            error: string;
            access_token?: undefined;
            refresh_token?: undefined;
        };
        error?: undefined;
    }>;
    updateRefreshTokenHash: (_id: ObjectId, refresh_token: string) => Promise<void>;
}
