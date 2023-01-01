import {
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { HelloService } from '../services/hello.service';
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  @Get()
  get(@Query() { id }): string {
    console.log(`id:${id}`);
    return this.helloService.get(id);
  }
  @Post()
  post(@Body() { message }): string {
    console.log(`message:${message}`);
    return this.helloService.save(message);
  }
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    console.log(`id:${id}`);
    return this.helloService.update(id, message);
  }
  @Delete()
  remove(@Query() { id }): string {
    console.log(`id:${id}`);
    return this.helloService.remove(id);
  }
}
