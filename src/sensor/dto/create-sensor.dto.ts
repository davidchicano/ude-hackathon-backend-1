import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSensorDto {
  @ApiProperty({ example: 21431000050 })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ example: 'wearable' })
  @IsString()
  type: string;
}
