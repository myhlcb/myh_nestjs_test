import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersEntity } from '../../entity/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
