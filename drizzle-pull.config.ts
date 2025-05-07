import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "drizzle-pull",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schemaFilter: ["my-schema"]
});
