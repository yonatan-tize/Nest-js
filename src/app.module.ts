import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { UsersManagementModule } from './users-management/users-management.module';

@Module({
  imports: [UsersModule, DatabaseModule, UsersManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
