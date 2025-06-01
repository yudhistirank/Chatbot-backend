import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { askLLM } from "./services/openrouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await askLLM(message);
    res.json({ response: reply });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
