/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateCuidadorDto } from './dto/create-cuidador.dto';
import { LoginCuidadorDto } from './dto/login-cuidador.dto';
import { cuidadores } from './cuidador.entity';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';
import { database as db } from '../database/index';

type CuidadorSemSenha = Omit<typeof cuidadores.$inferSelect, 'senha'>;

@Injectable()
export class CuidadoresService {
  async cadastrar(dto: CreateCuidadorDto): Promise<CuidadorSemSenha> {
    const existente = await db
      .select()
      .from(cuidadores)
      .where(eq(cuidadores.email, dto.email));
    if (existente.length > 0) {
      throw new BadRequestException('Email já cadastrado');
    }

    const senhaHash = await bcrypt.hash(dto.senha, 10);
    const [novoCuidador] = await db
      .insert(cuidadores)
      .values({ ...dto, senha: senhaHash })
      .returning();

    const { senha, ...cuidadorSemSenha } = novoCuidador;
    return {
      id: novoCuidador.id,
      nome: novoCuidador.nome,
      email: novoCuidador.email,
    };
  }

  async login(dto: LoginCuidadorDto): Promise<CuidadorSemSenha> {
    const [cuidador] = await db
      .select()
      .from(cuidadores)
      .where(eq(cuidadores.email, dto.email));
    if (!cuidador) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const senhaConfere = await bcrypt.compare(dto.senha, cuidador.senha);
    if (!senhaConfere) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const { senha, ...cuidadorSemSenha } = cuidador;
    return cuidadorSemSenha;
  }
}
