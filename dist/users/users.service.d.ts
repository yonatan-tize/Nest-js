export declare class UsersService {
    private users;
    findAll(role?: "INTERN" | "ADMIN" | "USER"): {
        name: string;
        email: string;
        id: string;
        role: string;
    }[];
    findOne(id: string): {
        name: string;
        email: string;
        id: string;
        role: string;
    };
    createUser(user: {
        name: string;
        email: string;
        role: string;
    }): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    updateOne(id: string, updateUser: {
        name?: string;
        email?: string;
        role?: string;
    }): {
        name: string;
        email: string;
        id: string;
        role: string;
    };
    deleteUser(id: string): {
        name: string;
        email: string;
        id: string;
        role: string;
    };
}
