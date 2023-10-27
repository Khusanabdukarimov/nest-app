import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { User } from "../core/entities";
import { UserCreateDto } from "../core/dto/user";

@Injectable()
export class UserRepository {
	constructor(@InjectModel("users") private user: Model<User>) {}

	public create(payload: UserCreateDto): User {
		const createUser = new this.user(payload);
		createUser.save().then((r) => console.log(r));
		return createUser;
	}

	public async getUser(id: string): Promise<User> {
		const param = new mongoose.Types.ObjectId(id);
		return await this.user
			.findOne({ _id: param }, { _id: 1, name: 1, username: 1, password: 1 })
			.exec();
	}
}
