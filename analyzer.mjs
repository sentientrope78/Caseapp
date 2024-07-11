import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import 'dotenv/config'; // Ensure dotenv is imported to load environment variables
import { treatmentData, diabetesData } from './data.mjs'; // Import your existing data

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

let latestText = ''; // Initialize latestText to store the received text

// Function to format data into a prompt
const formatDataAsPrompt = (data) => {
  return data.map(entry =>
    `Patient: ${entry.name}\nGender: ${entry.gender}\nAge: ${entry.age}\nPregnant: ${entry.pregnant}\nDiet: ${entry.diet}\nExercise: ${entry.exercise}\nNo Smoking: ${entry.no_smoking}\nNo Alcohol: ${entry.no_alcohol}\nMental Therapy: ${entry.mental_therapy}\nInsulin Injection: ${entry.insulin_injection}\nGlyburide: ${entry.glyburide}\nMetformin: ${entry.metformin}\nBeta Lactams: ${entry.beta_lactams}\nTetracycline: ${entry.tetracycline}\nAcarbose: ${entry.acarbose}\nSulfonylurease: ${entry.sulfonylurease}\nDapagliflozin: ${entry.dapagliflozin}\nPioglitazone: ${entry.pioglitazone}\nGLP1RA Therapy: ${entry.GLP1RA_therapy}\nLisinopril: ${entry.lisinopril}\nLiraglutides: ${entry.liraglutides}\nExenatide: ${entry.exenatide}\nOzempic: ${entry.ozempic}\nEmpagliflozin: ${entry.empagliflozin}\nAntipsychotics: ${entry.antipsychotics}\nCorticosteroids: ${entry.corticosteroids}\nSitagliptin: ${entry.sitagliptin}\nAspirin: ${entry.aspirin}\nCollagen: ${entry.collagen}\nElastin: ${entry.elastin}\nDPP4 Inhibitors: ${entry.DPP4_inhibitors}`).join('\n\n');
};

const combinedData = formatDataAsPrompt([...treatmentData, ...diabetesData]);

// Endpoint to receive text data from port 4007
app.post('/view-text', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'No text provided.' });
  }

  // Store the received text
  latestText = text;
  console.log('Received text:', text);
  res.json({ message: 'Text received successfully' });
});

// Endpoint for analyzing text
app.post('/analyze', async (req, res) => {
  if (!latestText) {
    return res.status(400).json({ message: 'No text available to analyze.' });
  }

  console.log('Analyzing text:', latestText);

  try {
    const prompt = `Here is some context data:\n\n${combinedData}\n\nAnalyze the following medical text and provide insights:\n\n${latestText}`;
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { "role": "system", "content": "You are a helpful assistant for Treatify, which is a medtech company. It is meant for doctors to analyze patient reports quickly and give medicine recommendations." },
        { "role": "user", "content": prompt }
      ],
      max_tokens: 512,
      temperature: 0,
    });
    res.json({ success: true, analysis: completion.choices[0].message.content });
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: "An error occurred" });
  }
});

const PORT = process.env.PORT || 4008;

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

