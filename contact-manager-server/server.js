//import express from 'express';
let express = require('express');
let app = express();

app.get("/", (req, res) => res.send("Hello Express"));
app.use(express.static("public"));
app.listen(3000);