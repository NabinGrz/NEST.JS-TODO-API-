import { IsBoolean, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateTODODto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: string;
}
