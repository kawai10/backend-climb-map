import { IsNotEmpty, IsString } from 'class-validator';
import { CommonUserdto } from './commonUser-dto';

export class createUserDto extends CommonUserdto {
	loginId: string;

	password: string;

	@IsString()
	@IsNotEmpty()
	nickname: string;

	@IsString()
	profilePhoto: string;
}
