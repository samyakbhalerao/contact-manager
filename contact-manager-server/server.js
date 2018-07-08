//import express from 'express';
let express = require('express');
let app = express();
var request = require('request-promise');
var bodyParser = require('body-parser');
app.use(express.static("public/contact-manager-app"));
let dbConfig = require("./config/database");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("content-type", "application/json");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const options = {
    headers: {
        'content-type': 'application/json'
    }
};
const index_path = __dirname + "public/contact-manager-app";
//Launch Inde.html
app.get("/", (req, res) => res.sendFile(path.join(index_path + '/index.html')));
app.get("/userData", (req, res) => {
    request({
        "method": "GET",
        "uri": dbConfig.dbPathUrl + dbConfig.userCollection + dbConfig.apiKey,
        "json": true,
        "headers": {
            "User-Agent": "My little demo app"
        }
    }).then((data) => {
        //  res.end();    
        res.send(data)
    });

});

//Login API
app.post("/api/v1/auth", (req, res) => {
    console.log(req.body);
    request({
        "method": "GET",
        "uri": dbConfig.dbPathUrl + dbConfig.userCollection + dbConfig.apiKey,
        "json": true,
        "headers": {
            "User-Agent": "My little demo app"
        }
    }).then((data) => console.log(data));
    res.statusCode(200).send({ status: 'success' });
});

//Get All Contact Info
app.get("/api/v1/contactlist", (req, res) => {
    console.log(dbConfig.dbPathUrl + dbConfig.contactCollection + dbConfig.apiKey);
    request({
        "method": "GET",
        "uri": dbConfig.dbPathUrl + dbConfig.contactCollection + dbConfig.apiKey,
        "json": true,
        "headers": {
            "User-Agent": "My little demo app"
        }
    }).then((data) => {
        //  console.log(data);
        res.send(data);
    });

});

//Add new Contact
app.post("/api/v1/contact", (req, res) => {
    console.log(req.body);
    options.uri = dbConfig.dbPathUrl + dbConfig.contactCollection + dbConfig.apiKey;
    options.method = "POST";
    options.body = JSON.stringify(req.body);
    let status;
    request(options)
        .then(function (body) {
            console.log("res:", body);
            res.send(body);
        })
        .error(function (err) {
            console.log(err);
        });
});

//Delete Contact
app.delete("/api/v1/contact", (req, res) => {
    request.delete(dbConfig.dbPathUrl + dbConfig.userCollection + "/" + res.body.id + dbConfig.apiKey)
        .then((data) => console.log(data));
    res.sendStatus("200");
});

//Update Contact Info
app.put("/api/v1/contact", (req, res) => {
    let query = `&q={"_id":${JSON.stringify(req.body._id)}}`;
    options.uri = dbConfig.dbPathUrl + dbConfig.contactCollection + dbConfig.apiKey + query;
    options.method = "PUT";
    options.body = JSON.stringify(req.body);
    let status;
    request(options)
        .then(function (body) {
            console.log("res:", body);
         res.send(body);
        })
        .error(function (err) {
            console.error(err);
        });
   
});

app.listen(3000);