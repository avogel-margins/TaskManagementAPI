import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import helmet from 'helmet';

import { AppModule } from './modules/app/app.module';
import { RootConfig } from './common/config/env.validation';
import { getSwaggerConfig } from './common/swagger/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = app.get(RootConfig);

  app.use(helmet());

  app.enableVersioning({
    defaultVersion: '1',
    prefix: 'api/v',
    type: VersioningType.URI,
  });

  const swaggerConfig = getSwaggerConfig(
    config.PROJECT.NAME,
    config.PROJECT.DESCRIPTION,
    config.PROJECT.VERSION,
  );

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(config.APP.PORT);
}
bootstrap();
