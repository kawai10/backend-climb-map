import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/createUser-dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users) private usersRepository: Repository<Users>,
	) {}

	async userRegister(userData: createUserDto): Promise<Users> {
		const { loginId, nickname, profilePhoto } = userData;
		const hashedPassword = await bcrypt.hash(userData.password, 10);
		return await this.usersRepository.save({
			loginId,
			nickname,
			profilePhoto,
			password: hashedPassword,
		});
	}

	async duplicationCheck(loginId: string) {
		const checkResult = await this.usersRepository.findOneBy({ loginId });
		if (checkResult) {
			return 'Already Exist';
		} else {
			return 'Not Exist';
		}
	}
}
