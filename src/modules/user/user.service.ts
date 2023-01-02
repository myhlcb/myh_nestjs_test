import { Injectable, Get } from '@nestjs/common';
import { UsersEntity } from '../../entity/users.entity';
@Injectable()
export class UserService {
  find() {
    return UsersEntity.find();
  }
  create(data) {
    return UsersEntity.create(data);
  }
}
