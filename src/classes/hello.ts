import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: 'zhangsan', description: 'name' })
  name: string;
  @ApiProperty({ example: 10, description: 'age' })
  age: number;
  @ApiProperty({ enum: UserRole })
  role: number;
}
