import { UserResponseDto } from "../../../../core/dto/user";
import { UserEntity } from "../../../../core/entities";

export class UserViewService {
	public getUserView(user: UserEntity): UserResponseDto {
		return new UserResponseDto().setId(user.id).setName(user.name).build();
	}
}
