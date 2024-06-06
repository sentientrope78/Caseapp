import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import 'dotenv/config'; // Ensure dotenv is imported to load environment variables

const openai = new OpenAI({ apiKey: "sk-proj-ky2WcQRoryNFscIeOmTeT3BlbkFJdxvNKTM86UaDUDKg5t9t" });

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for ChatGPT
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  console.log({ prompt });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": prompt }
      ],
      max_tokens: 512,
      temperature: 0,
    });
    res.send(completion.choices[0].message.content);
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send("An error occurred");
  }
});

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
