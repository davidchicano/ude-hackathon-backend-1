import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateExpertDto {
  @ApiProperty({ example: 'Amanda' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @ApiProperty({ example: 'Lopez' })
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
}
