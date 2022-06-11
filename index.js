const express = require("express");
const systemInfoRouter = require("./controller/systemInfoRouter");
const {logger} = require("./middleware/logger");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    return res
    .status(200)
    .send("HELLO!");

})

app.use("/system", systemInfoRouter)

app.listen(3000);