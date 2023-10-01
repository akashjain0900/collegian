const express = require("express");
const cook = require("cookie-parser");
const app = express();

app.listen(3000, () => console.log("Server started at port 3000"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cook());

const CollegianRouter = require("./src/routes/route");
app.use("/", CollegianRouter);
