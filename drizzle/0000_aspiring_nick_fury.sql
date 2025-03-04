-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "sleep_entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"hours" numeric(3, 1) NOT NULL,
	"date" date NOT NULL,
	"rating" integer NOT NULL,
	CONSTRAINT "sleep_entries_date_key" UNIQUE("date"),
	CONSTRAINT "sleep_entries_rating_check" CHECK ((rating >= 1) AND (rating <= 10))
);

*/