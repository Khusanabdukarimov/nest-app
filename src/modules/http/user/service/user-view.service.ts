import { UserResponseDto } from "../../../../core/dto/user";
import { User } from "../../../../core/entities";

export class UserViewService {
	public getUserView(user: User): UserResponseDto {
		return new UserResponseDto().setId(user._id).setName(user.name).build();
	}
}
