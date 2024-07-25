import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // esta confi viene de la pagina de nest y es para poder usar swagger
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors(); // esto es para elimanar el problema de bloqueo de cors
  //  origin: 'http://localhots.com'; // esto es un ejemplo, haciendo esto atorizamos que dominio tiene permitido perdir los datos al backend

  await app.listen(3000);
}
bootstrap();
