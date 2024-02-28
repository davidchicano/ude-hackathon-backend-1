import { Module } from '@nestjs/common';
import { ExpertService } from './expert.service';
import { ExpertController } from './expert.controller';
import { Expert } from './entities/expert.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Expert])],
  controllers: [ExpertController],
  providers: [ExpertService],
})
export class ExpertModule {}
