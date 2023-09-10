import { NestFactory } from "@nestjs/core";

import { AppModule } from "./modules/app.module";
import swagger from "./common/swagger";
import config from "./config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	void swagger(app);

	await app.listen(config.application.http.port);
}

void bootstrap();
