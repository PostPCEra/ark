import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { LogicModule } from './logics/logic.module';
import { NextModule } from './logics/next/next.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

dotenv.config();

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('public');

  app.get(LogicModule).initialize(app);

  
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('Signal Tube : STube  API description')
    .setVersion('1.0')
    .addTag('photo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('restapi-ui', app, document);  // url route whatever we specify here
 

  app.get(NextModule).prepare().then(() => {
    app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
      console.log(`[ ARK ] Ready on ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`);
    });
  });
})();
