import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	name: string;

	public setName(name: string) {
		this.name = name;
		return this;
	}

	public setId(id: string) {
		this.id = id;
		return this;
	}

	public build(): UserResponseDto {
		return this;
	}
}
