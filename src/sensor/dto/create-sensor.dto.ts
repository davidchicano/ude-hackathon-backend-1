import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSensorDto {
  @ApiProperty({ example: 'wearable' })
  @IsString()
  type: string;
}
