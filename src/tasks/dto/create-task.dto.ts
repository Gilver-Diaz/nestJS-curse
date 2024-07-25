import second, { IsString, min, MinLength } from 'class-validator';

export class createTaskDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;
}
