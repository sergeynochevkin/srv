import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const whiteList = ['http://localhost:3001']

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin)
        return callback(null, true)
      callback(
        new Error(
          `Not allowed by CORS, origin: ${origin}, white list: ${JSON.stringify(
            whiteList,
          )}`,
        ),
      )
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
  await app.listen(3000);
}
bootstrap();
