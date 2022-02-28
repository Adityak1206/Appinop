const express = require('express');
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

dotenv.config();
app.use('view engine', 'ejs');
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNEWUrlParser: true },
    () => console.log("connected to DB")
)

const funcRoutes = require("./routes/route");







app.listen(8000, function () {
    console.log("Listening on port 8000");
});

