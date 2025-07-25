import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: text('email').notNull(),
  type: text('type'),
});
