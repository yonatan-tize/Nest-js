import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersManagementService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUsersManagementDto: Prisma.UserCreateInput) {

    return this.databaseService.user.create({
      data : createUsersManagementDto
    })
  }

  async findAll(role?:"INTERN" | "USER" | "ADMIN") {
    if (role){
      return this.databaseService.user.findMany({
        where: {
          role,
        }
      });
    };

    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateUsersManagementDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUsersManagementDto
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      }
    });
  }
}
