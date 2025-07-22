import { ExtractTablesWithRelations } from 'drizzle-orm';
import { drizzle, NodePgQueryResultHKT } from 'drizzle-orm/node-postgres';
import { PgTransaction } from 'drizzle-orm/pg-core';
import pg from 'pg';

const schema = {};

const queryClient = new pg.Client({
  connectionString: process.env.DATABASE_URI,
});

if (process.env.NODE_ENV !== 'test') {
  queryClient.connect();
}

export const database = drizzle(queryClient, {
  schema,
});

export type Database = typeof database;
export type Transaction = PgTransaction<
  NodePgQueryResultHKT,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
>;
