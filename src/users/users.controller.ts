import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}
    // using query 
    @Get() // Get /users or /users?role=Admin
    handleFindAll(@Query('role') role: "INTERN" | "ADMIN" | "USER"){
        return this.userService.findAll(role)
    }

    @Get(':id')
    handleFindOne(@Param('id') id: string){
        return this.userService.findOne(id)
    }

    @Post()
    handleCreateUser(@Body() userData: {name: string, email: string, role: string }) {
        return this.userService.createUser(userData);
    }

    @Patch(':id')
    handleUpdate(@Param('id') id : string, @Body() userData: {name: string, email: string, role: string }){
        return this.userService.updateOne(id, userData)
    }

    @Delete(':id')
    handleDeleteUser(@Param('id') id: string){
        return this.userService.deleteUser(id)
    }

}
