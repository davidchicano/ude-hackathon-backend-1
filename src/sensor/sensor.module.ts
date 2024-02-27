import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { Sensor } from './entities/sensor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sensor]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [SensorController],
  providers: [SensorService],
})
export class SensorModule {}
