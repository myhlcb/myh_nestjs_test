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
  UseFilters,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiHeader,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { HelloService } from '../services/hello.service';
import { Hello, UserRole } from '../classes/hello';
import { CreateHelloDto } from '../dto/hello.dto';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
@ApiBearerAuth()
@ApiTags('hello')
@UseFilters(HttpExceptionFilter) //局部使用过滤器
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  @Get()
  @ApiHeader({ name: 'X-Custom', description: 'tyy to add header' })
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({ status: 200, description: 'get...', type: Hello })
  get(@Query() { id }): string {
    console.log(`id:${id}`);
    return this.helloService.get(id);
  }
  @Post()
  post(@Body() createHelloDto: CreateHelloDto): string {
    console.log(createHelloDto);
    return this.helloService.save(createHelloDto);
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
