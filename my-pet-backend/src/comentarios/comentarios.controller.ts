import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  create(@Body() dto: CreateComentarioDto) {
    return this.comentariosService.create(dto);
  }

  @Get(':cuidadorId')
  findByCuidador(@Param('cuidadorId') cuidadorId: string) {
    return this.comentariosService.findByCuidador(Number(cuidadorId));
  }
}
