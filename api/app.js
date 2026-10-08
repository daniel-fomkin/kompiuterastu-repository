const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const authRouter = require("./auth/auth.routes");
const errorHandler = require("./middleware/error-handler");
const cookieParser = require("cookie-parser");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("API is working!");
});

app.use("/api", authRouter);

app.use(errorHandler)

module.exports = app;