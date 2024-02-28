import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'alice@example.com' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  email: string;

  @ApiProperty({ example: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
