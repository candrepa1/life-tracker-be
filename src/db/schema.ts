import {
  pgTable,
  unique,
  check,
  serial,
  numeric,
  date,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const sleepEntries = pgTable(
  "sleep_entries",
  {
    id: serial().primaryKey().notNull(),
    hours: numeric({ precision: 3, scale: 1 }).notNull(),
    date: date().notNull(),
    rating: integer().notNull(),
  },
  (table) => [
    unique("sleep_entries_date_key").on(table.date),
    check("sleep_entries_rating_check", sql`(rating >= 1) AND (rating <= 10)`),
  ]
);
