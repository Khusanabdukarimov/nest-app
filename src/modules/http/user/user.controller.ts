import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { UserService } from "./service";
import { UserCreateDto, UserResponseDto } from "../../../core/dto/user";
import { ApiBody, ApiParam, ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("/user")
export class UserController {
	@Inject() private userService: UserService;

	@ApiBody({ type: UserCreateDto })
	@ApiResponse({ type: UserResponseDto })
	@Post("/")
	create(@Body() payload: UserCreateDto) {
		return this.userService.create(payload);
	}
	@ApiParam({
		name: "id",
		type: "string",
		description: "enter user id",
	})
	@Get(":id")
	getUser(@Param("id") param: string) {
		return this.userService.getUser(param);
	}
}
