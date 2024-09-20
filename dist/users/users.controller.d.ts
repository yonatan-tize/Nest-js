import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    handleFindAll(role: "INTERN" | "ADMIN" | "USER"): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    handleFindOne(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    handleCreateUser(userData: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ADMIN" | "USER";
        id: string;
    };
    handleUpdate(id: string, userData: UpdateUserDto): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    handleDeleteUser(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}
