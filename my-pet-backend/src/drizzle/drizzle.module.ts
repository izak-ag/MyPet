import { Module } from '@nestjs/common';
import { DrizzleService } from './service/drizzle.service';

@Module({
  providers: [DrizzleService],
  exports: [DrizzleService],
})
export class DrizzleModule {}
