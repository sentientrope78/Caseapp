import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 4007;

app.use(cors());
app.use(bodyParser.json());

let extractedText = '';

app.post('/api/upload-text', (req, res) => {
  const { text } = req.body;
  extractedText = text;
  res.json({ message: 'Text received successfully' });
});

app.get('/view-text', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Extracted Text</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          pre { white-space: pre-wrap; word-wrap: break-word; }
        </style>
      </head>
      <body>
        <h1>Extracted Text:</h1>
        <pre>${extractedText}</pre>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
