import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/cat.controller';
import { CatsService } from '../services/cat.service';
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [],
})
export class CatModule {}
