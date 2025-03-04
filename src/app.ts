import express from "express";
import db from "./db";
import { sleepEntries } from "./db/schema";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sleep", async (req, res) => {
  const entries = await db.select().from(sleepEntries);

  res.status(200).json(entries);
});

app.post("/sleep", async (req, res) => {
  const createdEntry = await db
    .insert(sleepEntries)
    .values(req.body)
    .returning();

  res.status(201).json(createdEntry);
});

app.listen(port, () => {
  console.log(`running app in port ${port}`);
});
