import { pgTable, pgSchema, numeric } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const mySchema = pgSchema("my-schema");


export const testTableInMySchema = mySchema.table("test_table", {
	abc123Def: numeric(),
});
