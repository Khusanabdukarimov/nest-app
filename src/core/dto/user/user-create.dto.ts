import { ApiProperty } from "@nestjs/swagger";

export class UserCreateDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	username: string;

	@ApiProperty()
	password: string;
}
