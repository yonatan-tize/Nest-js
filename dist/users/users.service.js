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
                "id": "1",
                "name": "John Doe",
                "email": "johndoe@example.com",
                "role": "ADMIN"
            },
            {
                "id": "2",
                "name": "Jane Smith",
                "email": "janesmith@example.com",
                "role": "INTERN"
            },
            {
                "id": "3",
                "name": "Michael Johnson",
                "email": "michaelj@example.com",
                "role": "USER"
            },
            {
                "id": "4",
                "name": "Emily Davis",
                "email": "emilydavis@example.com",
                "role": "INTERN"
            }
        ];
    }
    findAll(role) {
        if (role) {
            const users = this.users.filter((user) => user.role === role);
            if (users.length === 0) {
                throw new common_1.NotFoundException("User Role Not Found");
            }
            return users;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new common_1.NotFoundException("User Not Found");
        }
        return user;
    }
    createUser(user) {
        let id = (this.users.length + 1).toString();
        const newUser = {
            id,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
    updateOne(id, updateUser) {
        const user = this.users.find(user => user.id === id);
        if (!user)
            throw new common_1.NotFoundException("User Id Not Found");
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
        if (!removedUser)
            throw new common_1.NotFoundException("User Id Not Found");
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map