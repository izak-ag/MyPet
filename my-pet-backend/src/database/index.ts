import { ExtractTablesWithRelations } from 'drizzle-orm';
import { drizzle, NodePgQueryResultHKT } from 'drizzle-orm/node-postgres';
import { PgTransaction } from 'drizzle-orm/pg-core';
import * as pg from 'pg';

const schema = {};

const queryClient = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'db',
  user: 'root',
  password: 'password',
  ssl: false,
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
