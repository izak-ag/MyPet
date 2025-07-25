import {
  integer,
  pgTable,
  serial,
  text,
  doublePrecision,
} from 'drizzle-orm/pg-core';

export const comentarios = pgTable('comentarios', {
  id: serial('id').primaryKey(),
  cuidadorId: integer('cuidador_id').notNull(),
  nome: text('nome').notNull(),
  comentario: text('comentario').notNull(),
  avaliacao: doublePrecision('avaliacao').notNull(),
});
