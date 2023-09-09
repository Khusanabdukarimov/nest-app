type HttpOptions = {
	port: number;
};
type ApplicationOptions = {
	http: HttpOptions;
};

type MongoDBOptions = {
	user: string;
	password: string;
	host: string;
	port: number;
	database: string;
};

export type ConfigurationOptions = {
	application: ApplicationOptions;
	mongodb: MongoDBOptions;
};
