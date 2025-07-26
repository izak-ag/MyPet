import 'dotenv/config';
import { Config } from 'drizzle-kit';

export default {
  schema: './src/database/schemas',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'password',
    database: 'db',
    ssl: false,
  },
} satisfies Config;
