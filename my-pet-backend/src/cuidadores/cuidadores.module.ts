import { Module } from '@nestjs/common';
import { CuidadoresService } from './cuidadores.service';
import { CuidadoresController } from './cuidadores.controller';

@Module({
  controllers: [CuidadoresController],
  providers: [CuidadoresService],
})
export class CuidadoresModule {}
