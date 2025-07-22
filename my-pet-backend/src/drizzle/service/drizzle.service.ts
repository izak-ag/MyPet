import { Injectable, Logger } from '@nestjs/common';
import { Database, Transaction, database } from 'src/database';

@Injectable()
export class DrizzleService {
  private readonly logger = new Logger(DrizzleService.name);
  public readonly db: Omit<Database, 'transaction'> = database;

  transaction(fn: (tx: Transaction) => Promise<void>) {
    return database
      .transaction((tx) => fn(tx))
      .catch((err) => {
        this.logger.error(`Database rollback: ${err.message}`);
        throw err;
      });
  }
}
