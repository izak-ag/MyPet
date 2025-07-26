import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { CuidadoresController } from './cuidadores/cuidadores.controller';
import { CuidadoresService } from './cuidadores/cuidadores.service';

import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
  imports: [ComentariosModule, DrizzleModule, ConfigModule],
  controllers: [AppController, CuidadoresController],
  providers: [AppService, CuidadoresService],
})
export class AppModule {}
