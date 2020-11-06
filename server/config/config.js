require("dotenv").config();

module.exports = {
    MongoURI: process.env.MONGO_URI,
    port: process.env.PORT
}