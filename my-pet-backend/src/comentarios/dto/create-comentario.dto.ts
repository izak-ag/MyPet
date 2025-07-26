import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComentarioDto {
  @IsInt()
  cuidadorId: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  comentario: string;

  @IsNumber()
  avaliacao: number;
}
