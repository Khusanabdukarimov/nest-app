import { Injectable } from "@nestjs/common";

import { UserCreateDto } from "../../../../core/dto/user";
import { UserEntity } from "../../../../core/entities";

@Injectable()
export class UserService {
	public create(payload: UserCreateDto): UserEntity {
		const user: UserEntity = {
			id: "id",
			...payload,
		};

		return user;
	}
}
