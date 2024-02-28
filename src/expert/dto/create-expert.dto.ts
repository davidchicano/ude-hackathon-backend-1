import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateExpertDto {
  @ApiProperty({ example: 'Alice' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @ApiProperty({ example: 'Smith' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  surname: string;

  @ApiProperty({ example: 'Cardiologist' })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ example: 'Sant Joan de Deu' })
  @IsString()
  @IsNotEmpty()
  hospital: string;

  @ApiProperty({ example: 'Barcelona' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  location: string;

  @ApiProperty({ example: 'patient uuid' })
  @IsString()
  @Length(1, 255)
  password: string;
}
