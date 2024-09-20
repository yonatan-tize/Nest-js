import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersService {
    private users;
    findAll(role?: "INTERN" | "ADMIN" | "USER"): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    createUser(user: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ADMIN" | "USER";
        id: string;
    };
    updateOne(id: string, updateUser: UpdateUserDto): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    deleteUser(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}
