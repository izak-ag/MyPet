import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCuidadorDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @MinLength(2)
  senha: string;
}
