const osUtilities = require("node-os-utils");

const cpu = osUtilities.cpu;
const ram = osUtilities.mem;
const os = osUtilities.os;
const drive = osUtilities.drive
const oscmd = osUtilities.oscmd;

const getUsage = async () => {

    const ramInfo = await ram.info();
    const driveInfo = await drive.info();

    const cpuUsage = await cpu.usage();
    const ramUsage = ramInfo.usedMemPercentage;
    const driveUsage = driveInfo.usedPercentage;
    return {
        cpuUsage,
        ramUsage,
        driveUsage
    }
}

const getInfo = async () => {

    const osPlatform = await os.oos();
    const osType = await os.type();
    const cpuModel = await cpu.model();

    return {
        osPlatform,
        osType,
        cpuModel,
    }
}

module.exports = { getUsage, getInfo }