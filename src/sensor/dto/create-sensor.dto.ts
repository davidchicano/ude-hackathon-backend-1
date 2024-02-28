import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class CreateSensorDto {
  @ApiProperty({ example: 21431000050 })
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty({ example: 'wearable' })
  @IsString()
  type: string;
}
