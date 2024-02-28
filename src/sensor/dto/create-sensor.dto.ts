import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateSensorDto {
  @ApiProperty({ example: 'uuid_from_user' })
  @IsUUID()
  userId: string; // Assuming UUID is used for the user's ID as well
}
