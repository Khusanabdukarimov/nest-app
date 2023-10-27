import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserService, UserViewService } from "./service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../../../core/entities";
import { UserRepository } from "../../../repository/user.repository";

@Module({
	imports: [MongooseModule.forFeature([{ name: "users", schema: UserSchema }])],
	providers: [UserService, UserViewService, UserRepository],
	exports: [UserService, UserViewService, UserRepository],
	controllers: [UserController],
})
export class UserModule {}
