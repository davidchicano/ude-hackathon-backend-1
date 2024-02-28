import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorModule } from './sensor/sensor.module';
import { ExpertModule } from './expert/expert.module';
import { UserModule } from './user/user.module';
import { Family } from './family/entities/family.entity';
import { Sensor } from './sensor/entities/sensor.entity';
import { User } from './user/entities/user.entity';
import { Expert } from './expert/entities/expert.entity';
import { FamilyModule } from './family/family.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ude',
      password: 'secret',
      database: 'hackathon_db',
      entities: [User, Expert, Sensor, Family],
      synchronize: true, // Note: set to false in production
    }),
    UserModule,
    ExpertModule,
    SensorModule,
    FamilyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
