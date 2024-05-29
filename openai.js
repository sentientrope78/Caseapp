import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Configuration, OpenAIApi } from 'openai';

// Directly configure OpenAI with the API key
const configuration = new Configuration({
  apiKey: "sk-proj-ky2WcQRoryNFscIeOmTeT3BlbkFJdxvNKTM86UaDUDKg5t9t",
});
const openai = new OpenAIApi(configuration);

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for ChatGPT
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 512,
      temperature: 0,
    });
    res.send(completion.data.choices[0].text);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
