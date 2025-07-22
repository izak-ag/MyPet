import 'dotenv/config';
import { Config } from 'drizzle-kit';

console.log(process.env.DATABASE_URL);
export default {
  schema: './src/database/schemas',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DATABASE_URL!,
    port: Number(process.env.DATABASE_PORT) | 5432,
    user: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
  },
} satisfies Config;
