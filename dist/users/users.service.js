"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                "name": "John Doe",
                "email": "johndoe@example.com",
                "id": "abc123",
                "role": "ADMIN"
            },
            {
                "name": "Jane Smith",
                "email": "janesmith@example.com",
                "id": "def456",
                "role": "INTERN"
            },
            {
                "name": "Michael Johnson",
                "email": "michaelj@example.com",
                "id": "ghi789",
                "role": "USER"
            },
            {
                "name": "Emily Davis",
                "email": "emilydavis@example.com",
                "id": "jkl012",
                "role": "INTERN"
            }
        ];
    }
    findAll(role) {
        if (role) {
            return this.users.filter((user) => user.role === role);
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    createUser(user) {
        let id = (this.users.length + 1).toString();
        const newUser = {
            ...user,
            id
        };
        this.users.push(newUser);
        return newUser;
    }
    updateOne(id, updateUser) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updateUser };
            }
            return user;
        });
        return this.findOne(id);
    }
    deleteUser(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map