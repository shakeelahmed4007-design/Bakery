import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// D1 binding interface for type safety
interface D1Env {
  DB?: D1Database;
}

export function getDb(env?: D1Env) {
  // Support both Cloudflare Workers (env binding) and Vercel (no-op stub)
  const db = env?.DB;
  if (!db) {
    throw new Error(
      "Database binding `DB` is unavailable. Ensure D1 is configured in your environment."
    );
  }

  return drizzle(db, { schema });
}

