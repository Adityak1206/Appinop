const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNEWUrlParser: true },
    () => console.log("connected to DB")
)

//Import Routes
const productRoutes = require("./routes/product");

//MiddleWares
app.use(express.json());
app.use(cors());

//routeMiddlewares
app.use("/api/products", productRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})




