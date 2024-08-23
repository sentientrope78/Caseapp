import express from "express"
import mysql from "mysql"
import fs from "fs"
import path from "path"
import cors from "cors"
import './Analyzer.mjs'
import './ExtractedText.mjs'
import './data.mjs'
import './openai.mjs'

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Effy1234',
  database: 'nigger',
  port: 3306
});

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Index server is running on port: ${port}`);
});

app.get("/", (req,res) => {
  res.json("Let's go mfs")
})

app.get("/usercredentials", (req, res) => {
  const q = "Select username, password FROM usercredentials"
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})
