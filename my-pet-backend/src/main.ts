/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const corsOriginAddress = configService.get<string[]>('cors.corsOrigin');

  const corsOrigin =
    corsOriginAddress?.map((origin) =>
      origin.startsWith('/') && origin.endsWith('/')
        ? new RegExp(origin.slice(1, -1))
        : origin,
    ) || true;

  app.enableCors({
    origin: corsOrigin,
    methods: configService.get('cors.corsMethods'),
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
