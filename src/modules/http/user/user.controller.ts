import { Controller, Post, Body, Inject } from "@nestjs/common";
import { UserService, UserViewService } from "./service";
import { UserCreateDto, UserResponseDto } from "../../../core/dto/user";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("/user")
export class UserController {
	@Inject() private userService: UserService;
	@Inject() private userViewService: UserViewService;

	@ApiBody({ type: UserCreateDto })
	@ApiResponse({ type: UserResponseDto })
	@Post("/")
	create(@Body() payload: UserCreateDto) {
		const user = this.userService.create(payload);

		return this.userViewService.getUserView(user);
	}
}
