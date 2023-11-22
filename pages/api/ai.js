import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export default async function GPT(req, res) {
  const body = req.body;

  const base = process.env.AZURE_OPEN_AI_BASE;
  const key = process.env.AZURE_OPEN_AI_KEY;

  const client = new OpenAIClient(base, new AzureKeyCredential(key));

  const deploymentId = "dennisgpt35";

  const messages = body;

  // [
  //   {
  //     role: "system",
  //     content: "You are a helpful assistant. You will talk like a pirate.",
  //   },

  //   { role: "user", content: "What's the best way to train a parrot?" },
  // ];

  // console.log(`Messages: ${messages.map((m) => m.content).join("\n")}`);

  const response = await client.getChatCompletions(deploymentId, messages, {
    maxTokens: 500,
  });

  const result = response.choices[0].message.content;

  res.json(result);
}
