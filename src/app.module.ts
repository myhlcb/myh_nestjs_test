import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { HelloModule } from './modules/hello.moduls';

@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
