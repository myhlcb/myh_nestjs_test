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
  ParseIntPipe,
  UseGuards,
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
import { Role } from '../common/decorators/role.decorators';
import { RolesGuard } from '../common/guards/roles.guards';
@ApiBearerAuth()
@ApiTags('hello')
@UseFilters(HttpExceptionFilter) //局部使用过滤器
@UseGuards(RolesGuard)
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
  // 局部使用管道
  update(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
    console.log(id, typeof id, 1111111);
    console.log(`id:${id}`);
    return this.helloService.update(id, message);
  }
  @Delete()
  @Role('admin') //使用守卫
  remove(@Query() { id }): string {
    console.log(`id:${id}`);
    return this.helloService.remove(id);
  }
}
