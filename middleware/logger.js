const fs = require("fs");

let logs = [];

const logger = (req, res, next) => {
    const remoteAddress = (req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    const clientIp = remoteAddress.substr(remoteAddress.lastIndexOf(":") + 1);

    const log = `${req.method} ${req.url} from ${clientIp} to ${req.rawHeaders[1]}`;
    logs.push(log);
    console.log(log);
    next();
}

module.exports = {
    logger,
    logs
};