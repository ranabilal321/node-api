const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const apiRoute = require('./routes/apiRoute');

app.use("/api/v1/", apiRoute);

const serverHost = "0.0.0.0";
const port = 8080;

app.listen(port, serverHost, () => {console.log(`Server is running on ${serverHost}:${port}`)});