import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import OpenAI from 'openai';
import 'dotenv/config'; // Ensure dotenv is imported to load environment variables

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});
const app = express();
const port = 8008;

app.use(cors());
app.use(bodyParser.json());

app.post('/analyze', async (req, res) => {
  try {
    // Fetch the extracted text from the extraction server
    const response = await axios.get('http://localhost:4007/view-text');
    const extractedText = response.data;

    // Analyze the text using OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for Treatify, a medtech company. Your job is to assist doctors in analyzing patient reports quickly and providing medicine recommendations. Provide appropriate treatment suggestions for any files uploaded at 4007/view-text.' },
        { role: 'user', content: extractedText }
      ],
      max_tokens: 512,
      temperature: 0,
    });

    const analysisResult = completion.choices[0].message.content;

    // Respond with the analysis result
    res.json({ analysis: analysisResult });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Analyzer server is running on http://localhost:${port}`);
});
