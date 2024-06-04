import express from 'express';
import mysql from "mysql"
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import 'dotenv/config'; // Ensure dotenv is imported to load environment variables

const openai = new OpenAI({apiKey: "sk-proj-ky2WcQRoryNFscIeOmTeT3BlbkFJdxvNKTM86UaDUDKg5t9t"});

// Setup server
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Effy1234',
  database: 'nigger',
  port: 3306
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for ChatGPT
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.completions.create({
      model: 'text-davinci-003',
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

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
