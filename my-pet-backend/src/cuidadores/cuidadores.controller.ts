import { Body, Controller, Post } from '@nestjs/common';
import { CuidadoresService } from './cuidadores.service';
import { CreateCuidadorDto } from './dto/create-cuidador.dto';
import { LoginCuidadorDto } from './dto/login-cuidador.dto';

@Controller('cuidadores')
export class CuidadoresController {
  constructor(private readonly service: CuidadoresService) {}

  @Post()
  async cadastrar(@Body() dto: CreateCuidadorDto) {
    return this.service.cadastrar(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginCuidadorDto) {
    return this.service.login(dto);
  }
}
