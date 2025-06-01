import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  role: { type: String, enum: ["user", "bot"], required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Chat", chatSchema);
