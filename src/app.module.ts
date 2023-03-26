import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { TokenCheckMiddleware } from './middlewares/token_check.middleware';
import { VerifyModule } from './verify/verify.module';
import { UserModule } from './user/user.module';
import { RituaisModule } from './rituais/rituais.module';
import { HabilidadesModule } from './habilidades/habilidades.module';
import { PoderesModule } from './poderes/poderes.module';
import { UserAttributeEditMiddleware } from './middlewares/user_attribute_edit.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    VerifyModule,
    UserModule,
    RituaisModule,
    HabilidadesModule,
    PoderesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenCheckMiddleware)
      .exclude(
        { path: '/verify', method: RequestMethod.ALL },
        { path: '/user/exists/name/:name', method: RequestMethod.ALL },
        { path: '/user/exists/id/:id', method: RequestMethod.ALL },
        { path: '/user', method: RequestMethod.POST },
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer.apply(UserAttributeEditMiddleware).forRoutes({
      path: '/user/attribute/:field/*/:value',
      method: RequestMethod.PUT,
    });
  }
}
