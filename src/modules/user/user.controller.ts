import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  find() {
    return this.userService.find();
  }
  @Post()
  insert(@Body() data: { name: string; password: string; status: number }) {
    return this.userService.create(data).save();
  }
}
