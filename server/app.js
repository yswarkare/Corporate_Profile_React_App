const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookeParser = require("cookie-parser");
const { success, error, info } = require("consola");
const http = require("http");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookeParser);

// Company Profile Routes

const companyProfileRoutes = require("./routes/company_profile_routes");

app.use("/api/company-profiles", companyProfileRoutes);

// Engagement Routes

const engagementRoutes = require("./routes/engagement_routes");

app.use("/api/engagements", engagementRoutes);

// Connect to MongoDB Database

const { port, MongoURI } = require("./config/config");

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
        return success({ message: `successfully connected to MongoDB`, badge: true });
    } catch (err) {
        return error({ message: `failed to connect MongoDB \n ${err}`, badge: true });
    }
}

// Start Server

const startServer = async () => {
    try {
        await connectMongoDB();
        const server = http.createServer(app, (req, res)=> {
            return info({ message: `server created`, badge: true });
        });
        server.listen(port, ()=> {
            return success({ message: `server started at port ${port}`, badge: true });
        });
    } catch (err) {
        return error({ message: `failed to start server \n ${err}`, badge: true });
    }
}

startServer();