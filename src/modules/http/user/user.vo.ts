import { UserResponseDto } from "../../../core/dto/user";

export class UserVO {
	public getUserView(user: any): UserResponseDto {
		return new UserResponseDto().setName(user.name).build();
	}
}
