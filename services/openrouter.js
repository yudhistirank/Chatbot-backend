import axios from "axios";

const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "gryphe/mythomax-l2-13b";

async function askLLM(prompt) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

export default askLLM;
