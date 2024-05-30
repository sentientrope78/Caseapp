import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import 'dotenv/config'; // Ensure dotenv is imported to load environment variables

const openai = new OpenAI({apiKey: "sk-proj-ky2WcQRoryNFscIeOmTeT3BlbkFJdxvNKTM86UaDUDKg5t9t"});

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for ChatGPT
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      max_tokens: 512,
      temperature: 0,
    });
    res.send(completion.choices[0].text);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
