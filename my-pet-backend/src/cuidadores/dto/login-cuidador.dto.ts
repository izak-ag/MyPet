
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginCuidadorDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;
}
