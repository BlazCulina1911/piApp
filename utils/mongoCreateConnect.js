const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const createAndConnect = async () => {
    const server = await MongoMemoryServer.create()

    await mongoose.connect(server.getUri());

    return server;
}


module.exports = createAndConnect;