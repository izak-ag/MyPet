import { serial, text, pgTable } from 'drizzle-orm/pg-core';

export const cuidadores = pgTable('cuidadores', {
  id: serial('id').primaryKey(),
  nome: text('nome').notNull(),
  email: text('email').notNull().unique(),
  senha: text('senha').notNull(),
});
