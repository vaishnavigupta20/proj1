const express = require("express");

const userRouter = require("./routes/user");
const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middlewares")

const app = express();
const port = 3000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/vaishnavi_1");

// Middleware - Pluging express to handle JSON data
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

// Routes
app.use("/user", userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
