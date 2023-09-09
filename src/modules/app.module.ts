import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import config from "../config";

@Module({
	imports: [
		MongooseModule.forRoot(
			// TODO: Refactoring this config
			`mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`,
		),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
