const express = require('express');

require("dotenv").config();

const app = express();
const portfolioRoute =require("./routes/portfolioRoutes");

app.use("/api/portfolio",portfolioRoute);

const port = process.env.PORT||5000;
const dbConfig = require("./config/dbConfig");
app.listen(port,()=>{
    console.log(`Server is running in the ${port}`);
});