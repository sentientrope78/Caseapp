import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import 'dotenv/config'; // Ensure dotenv is imported to load environment variables

const openai = new OpenAI({ apiKey: "" });

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
        { "role": "system", "content": "You are a helpful assistant for treatify, which is a medtech company. It is meant for doctors to analyze patient reports quickly and give medicine recommendations." },
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
