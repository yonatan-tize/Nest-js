import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersManagementService } from './users-management.service';
import { Prisma } from '@prisma/client';

@Controller('users-management')
export class UsersManagementController {
  constructor(private readonly usersManagementService: UsersManagementService) {}

  @Post()
  create(@Body() createUsersManagementDto: Prisma.UserCreateInput) {
    return this.usersManagementService.create(createUsersManagementDto);
  }

  @Get()
  findAll(@Query('role') role?:"INTERN" | "USER" | "ADMIN") {
    return this.usersManagementService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersManagementDto: Prisma.UserUpdateInput) {
    return this.usersManagementService.update(+id, updateUsersManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersManagementService.remove(+id);
  }
}
