//File for setting up the pdf server, npm start will start this server, start SQL sever with 'node indexBackend.js'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 4006;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json({ limit: '50mb' })); // Increase the payload size limit
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Increase the payload size limit for URL-encoded data

// Placeholder function for analyzing PDFs
function analyzePdf(pdfBuffer) {
  // Implement your PDF analysis logic here
  // For now, it just returns a dummy result
  return { text: 'Dummy analysis result from PDF' };
}

app.post('/analyze', (req, res) => {
  const { pdf } = req.body;

  // Convert the base64 PDF string to a buffer
  const pdfBuffer = Buffer.from(pdf, 'base64');

  const analysisResult = analyzePdf(pdfBuffer); // Use the PDF analysis function
  res.json({ analysis: analysisResult });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
