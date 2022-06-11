const express = require("express");
const cors = require("cors");
const mongoCreateServer = require("./utils/mongoCreateConnect");
const systemInfoRouter = require("./controller/systemInfoRouter");
const personsRouter = require("./controller/personsRouter");
const { logger } = require("./middleware/logger");

const app = express();

//mongoConnection
mongoServer = mongoCreateServer();
//middleware
app.use(logger);
app.use(cors());
app.use(express.json())

//routes
app.use("/", express.static("logger"))
app.use("/system", systemInfoRouter)
app.use("/api/persons", personsRouter);

app.listen(3000);