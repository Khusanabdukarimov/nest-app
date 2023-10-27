import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

import config from "../../config";
@Injectable()
export class MongodbConfigService implements MongooseOptionsFactory {
	public async createMongooseOptions(): Promise<MongooseModuleOptions> {
		const uri = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;
		return { uri };
	}
}
