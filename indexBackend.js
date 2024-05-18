import express from "express"
import mysql from "mysql"
import fs from "fs"
import path from "path"

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Effy1234',
  database: 'nigger',
  port: 3306
});

app.listen(port, () => {
  console.log("Server running at http://localhost:${port}");
});

app.get("/", (req,res) => {
  res.json("Let's go mfs")
})

app.get("/usercredentials", (req, res) => {
  const q = "Select * FROM usercredentials"
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})
