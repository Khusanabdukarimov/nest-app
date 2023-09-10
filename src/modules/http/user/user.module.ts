import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserService, UserViewService } from "./service";

@Module({
	imports: [],
	providers: [UserService, UserViewService],
	exports: [UserService, UserViewService],
	controllers: [UserController],
})
export class UserModule {}
