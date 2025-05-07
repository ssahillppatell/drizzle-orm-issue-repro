import { numeric, pgSchema } from 'drizzle-orm/pg-core';

export const mySchema = pgSchema("my-schema");

export const testTable = mySchema.table("test_table", {
  abc123def: numeric()
});
