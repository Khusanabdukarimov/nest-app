import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import config from "../config";
import { UserModule } from "./http/user/user.module";

@Module({
	imports: [
		// MongooseModule.forRoot(
		// 	// TODO: Refactoring this config
		// 	`mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`,
		// ),
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
