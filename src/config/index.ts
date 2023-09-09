import dotEnv from "dotenv";

import { ConfigurationOptions } from "./configOptions";

if (process.env.NODE_ENV === "TEST") {
	dotEnv.config({ path: "../../.env.test" });
} else {
	dotEnv.config();
}

const configuration: ConfigurationOptions = {
	application: {
		http: {
			port: Number(process.env.HTTP_PORT) || 4000,
		},
	},
	mongodb: {
		user: process.env.MONGODB_USER,
		password: process.env.MONGODB_PASSWORD,
		host: process.env.MONGODB_HOST || "localhost",
		port: Number(process.env.MONGODB_PORT) || 27017,
		database: process.env.MONGODB_DATABASE,
	},
};

export default configuration;
