import { NestFactory } from "@nestjs/core";

import { AppModule } from "./modules/app.module";
import swagger from "./common/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	void swagger(app);

	await app.listen(3000);
}

void bootstrap();
