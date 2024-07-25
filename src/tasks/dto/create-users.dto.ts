import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  isString,
  Max,
} from 'class-validator';

export class createUsersDto {
  //para validar seria de la siguiente manera

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Max(100)
  age: number;
}
