import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { HelloModule } from './modules/hello.module';
import { CatModule } from './modules/cat.module';
@Module({
  imports: [HelloModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
