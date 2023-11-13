const express = require("express");
const mongo = require("./connect");
const mentorRouter = require("./router/mentor");
const studentRouter = require("./router/student");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
mongo.connect();

app.use('/', (req, res, next) =>{
    console.log("Middleware");
    next();
});

app.use("/mentor", mentorRouter);

app.use("/student", studentRouter);

app.listen(process.env.PORT);