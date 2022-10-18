import {
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export class createUserDto {
	@IsString()
	@IsNotEmpty()
	@MaxLength(15)
	@Matches(/^\w+$/)
	loginId: string;

	@IsString()
	@IsNotEmpty()
	nickname: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	@Matches(/^[!@#$%^&*()]+\w+$/)
	password: string;

	@IsString()
	profilePhoto: string;
}
