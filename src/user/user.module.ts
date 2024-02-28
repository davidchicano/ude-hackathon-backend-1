import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Family } from 'src/family/entities/family.entity';
import { Expert } from 'src/expert/entities/expert.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Family]),
    TypeOrmModule.forFeature([Expert]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
