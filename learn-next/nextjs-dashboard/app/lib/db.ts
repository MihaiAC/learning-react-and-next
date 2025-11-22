import postgres from "postgres";

const isProd = process.env.NODE_ENV === "production";

export const sql = postgres(
  process.env.POSTGRES_URL!,
  isProd ? { ssl: "require" } : {}
);
