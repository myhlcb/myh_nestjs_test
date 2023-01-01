import {
  Body,
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.body.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  get(): string {
    return '111111';
  }
}
