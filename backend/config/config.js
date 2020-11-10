require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    hostname: process.env.HOST_NAME,
    MongoURI: process.env.MONGO_URI
}
