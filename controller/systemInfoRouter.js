const systemInfoRouter = require("express").Router();
const { getInfo, getUsage } = require("../utils/os_utils");
const { logs } = require("../middleware/logger");


systemInfoRouter.get("/info", async (req, res) => {
    
    const info = await getInfo();
    
    return res
    .status(200)
    .json(info);
})

systemInfoRouter.get("/stats", async (req, res) => {

    const usage = await getUsage();

    return res
        .status(200)
        .json(usage);
})

systemInfoRouter.get("/logs", (req, res) => {

    const lastLogs = logs.slice(Math.max(logs.length - 20, 1))
    return res
        .status(200)
        .json(lastLogs);
})

module.exports = systemInfoRouter;