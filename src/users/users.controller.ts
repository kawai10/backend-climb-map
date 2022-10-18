import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/createUser-dto';
import { Users } from '../entities/Users';
import { loginUserDto } from './dto/loginUser-dto';

@Controller('api/users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('/login')
	async userLogin(@Body() loginData: loginUserDto) {}

	@Post('/register')
	async userRegister(@Body() userData: createUserDto): Promise<Users> {
		return this.usersService.userRegister(userData);
	}

	@Get('/duplicationcheck')
	async checkForDuplicationLoginId(@Query('loginId') loginId: string) {
		return this.usersService.duplicationCheck(loginId);
	}
}
