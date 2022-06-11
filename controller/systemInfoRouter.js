const systemInfoRouter = require("express").Router();
const { getInfo, getUsage } = require("../utils/os_utils");
const { logs } = require("../middleware/logger");

systemInfoRouter.get("/", async (req, res) => {

    const info = await getInfo();
    const usage = await getUsage();

    return res
        .status(200)
        .send({ info, usage });
})

systemInfoRouter.get("/logs", (req, res) => {
    return res
        .status(200)
        .json(logs);
})

module.exports = systemInfoRouter;