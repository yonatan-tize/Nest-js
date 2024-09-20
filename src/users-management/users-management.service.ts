import { Injectable } from '@nestjs/common';
import { CreateUsersManagementDto } from './dto/create-users-management.dto';
import { UpdateUsersManagementDto } from './dto/update-users-management.dto';

@Injectable()
export class UsersManagementService {
  create(createUsersManagementDto: CreateUsersManagementDto) {
    return 'This action adds a new usersManagement';
  }

  findAll() {
    return `This action returns all usersManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersManagement`;
  }

  update(id: number, updateUsersManagementDto: UpdateUsersManagementDto) {
    return `This action updates a #${id} usersManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersManagement`;
  }
}
