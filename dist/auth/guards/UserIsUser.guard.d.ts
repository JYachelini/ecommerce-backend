import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../users/users.service';
export declare class UserIsUserGuard implements CanActivate {
    private userService;
    constructor(userService: UsersService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
