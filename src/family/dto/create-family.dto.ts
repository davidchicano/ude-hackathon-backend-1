import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateFamilyDto {
  @ApiProperty({ example: 'Alice Family' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;
}
