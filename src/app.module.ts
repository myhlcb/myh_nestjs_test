import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module';
import { CatModule } from './modules/cat/cat.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { StatusMonitorModule } from 'nest-status-monitor';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { AuthModule } from './modules/auth/auth.module';
import statusConfig from './config/statusMonitor';
@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')), //注入config
    StatusMonitorModule.setUp(statusConfig),
    // MailerModule.forRootAsync({
    //   useFactory: (config: ConfigService) => config.get('email'),
    //   inject: [ConfigService], //modules模块外部注入
    // }),
    HelloModule,
    CatModule,
    AuthModule,
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
