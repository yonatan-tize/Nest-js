import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    // using query 
    @Get()
    handleFindQuery(@Query('role') role:string){
        return {role}
    }

    @Get()
    handleFindAll(){
        return []
    }

    @Get('interns') // users/interns
    handleFindInterns(){
        return []
    }

    @Get(':id')
    handleFindOne(@Param('id') id: string){
        return {id}
    }

    @Post()
    handleCreateUser(@Body() userData: any) {
        return userData;
    }

    @Patch(':id')
    handleUpdate(@Param('id') id : string, @Body() userData: any){
        return {id, ...userData}
    }

    @Delete(':id')
    handleDeleteUser(@Param('id') id: string){
        return {id}
    }

}
