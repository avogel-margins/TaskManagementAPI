import { DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

export const swaggerConfig = (
  title: string,
  description: string,
  version: string,
): Omit<OpenAPIObject, 'paths'> => {
  return new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth()
    .build();
};
