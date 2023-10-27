import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../../../../repository/user.repository";
import { UserResponseDto } from "../../../../core/dto/user";
import { UserViewService } from "./user-view.service";
import { User } from "../../../../core/entities";

@Injectable()
export class UserService {
	@Inject() private readonly userRepository: UserRepository;
	@Inject() private readonly userViewService: UserViewService;
	create(payload: any): UserResponseDto {
		let user = this.userRepository.create(payload);
		return this.userViewService.getUserView(user);
	}

	async getUser(id: string): Promise<UserResponseDto> {
		let res = this.userRepository.getUser(id);
		return this.userViewService.getUserView(await res);
	}
}
