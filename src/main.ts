import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Pet Project')
    .setDescription('The nest pet project swagger')
    .setVersion('1.0')
    .addTag('table')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(Number(process.env.SERVER_HOST));
}
bootstrap();
