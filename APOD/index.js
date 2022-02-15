const express = require('express');
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNEWUrlParser: true },
    () => console.log("connected to DB")
)

const funcRoutes = require("./routes/route");

const url = "https://api.nasa.gov/planetary/apod?api_key=71w53BvnT9ekc1OhJ0JF3aqVkRFAfNXFffZvfQVO";





app.listen(3000, function () {
    console.log("Listening on port 3000");
});

