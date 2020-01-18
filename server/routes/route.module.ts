import { Module } from '@nestjs/common';
import { NextModule } from '../logics/next/next.module';
import { AuthModule } from '../logics/auth/auth.module';
import { ApiAuthController } from './api/auth.controller';
import { AuthController } from './auth.controller';
import { HomeController } from './home.controller';

import { PhotoController } from '../photo/photo.controller';
import { PhotoModule } from '../photo/photo.module';

@Module({
  imports: [
    NextModule,
    AuthModule,

    PhotoModule,
  ],
  controllers: [
    ApiAuthController,
    AuthController,
    HomeController,

    PhotoController,
  ],
})
export class RouteModule {}
