import {
  Controller,
  UseGuards,
  Post,
  Body,
  Request,
  HttpStatus,
  UsePipes,
  Get,
} from '@nestjs/common';
import { CreateUserDto } from './users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('auth/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Get()
  hello() {
    return 'Hello World!';
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    const token = await this.authService.login(req.user);
    return { token, id: req.user.id };
  }
}
