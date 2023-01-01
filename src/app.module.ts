import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { HelloModule } from './modules/hello.module';
import { CatModule } from './modules/cat.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    // ConfigModule.load(resolve(__dirname,'config','xxx')), 注入config
    MailerModule.forRootAsync({
      // useFactory: (config: ConfigService) => config.get('email'),
      // inject: [ConfigService],  //modules模块外部注入
    }),
    HelloModule,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST }) // 排除
      .forRoutes('hello'); //监听路径
  }
}
