import { Injectable } from '@nestjs/common';
import { database as db } from '../database/index';
import { comentarios } from './comentario.entity';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class ComentariosService {
  create(dto: CreateComentarioDto) {
    return db.insert(comentarios).values(dto).returning();
  }

  findByCuidador(cuidadorId: number) {
    return db
      .select()
      .from(comentarios)
      .where(eq(comentarios.cuidadorId, cuidadorId));
  }
}
