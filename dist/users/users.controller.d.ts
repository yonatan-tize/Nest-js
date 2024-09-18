import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    handleFindAll(role: "INTERN" | "ADMIN" | "USER"): {
        name: string;
        email: string;
        id: string;
        role: string;
    }[];
    handleFindOne(id: string): {
        name: string;
        email: string;
        id: string;
        role: string;
    };
    handleCreateUser(userData: {
        name: string;
        email: string;
        role: string;
    }): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    handleUpdate(id: string, userData: {
        name: string;
        email: string;
        role: string;
    }): {
        name: string;
        email: string;
        id: string;
        role: string;
    };
    handleDeleteUser(id: string): {
        name: string;
        email: string;
        id: string;
        role: string;
    };
}
