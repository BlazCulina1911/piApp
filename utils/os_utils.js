const osUtilities = require("node-os-utils");

const cpu = osUtilities.cpu;
const ram = osUtilities.mem;
const os = osUtilities.os;

const getUsage = async () => {

    ramInfo = await ram.used();

    cpuUsage = await cpu.usage();
    ramUsage = (ramInfo.usedMemMb / ramInfo.totalMemMb).toFixed(4)*100;
    return {
        cpuUsage,
        ramUsage
    }
}

const getInfo = async () => {

    const osPlatform = await os.oos();
    const osType = await os.type();
    const cpuModel = await cpu.model();
    const ramInfo = await ram.info();

    return {
        osPlatform,
        osType,
        cpuModel,
        ramInfo
    }
}

module.exports = {getUsage, getInfo}