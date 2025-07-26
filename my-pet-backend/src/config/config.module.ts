import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { appConfig } from './data.config';

const ConfigModuleExports = NestConfigModule.forRoot({
  isGlobal: true,
  load: [appConfig],
  envFilePath: '.env',
});

@Global()
@Module({
  imports: [ConfigModuleExports],
  exports: [ConfigModuleExports],
})
export class ConfigModule {}
