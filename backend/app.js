const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { success, info, error } = require("consola"); 
const http = require("http");
const path = require("path");
// const { allowedNodeEnvironmentFlags } = require("process");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


// Routes

// Company Profile Routes

const companyProfileRoutes = require("./routes/company_profile_routes");

app.use("/api/company-profiles", companyProfileRoutes);

// Engagement Routes

const engagementRoutes = require("./routes/engagement_routes");

app.use("/api/engagements", engagementRoutes);

app.get("/home", async (req, res)=>{
    try {
        console.log("Home page request made");
        return res.status(200).json({ status: true, message: `Welcome! This is Home Page.` });
    } catch (err) {
        return res.status(401).json({ status: false, message: `failed to load home page \n${err}`, err });
    }
});

// set static folder

app.use(express.static("client"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
})

// connect to mongodb

const { port, hostname, MongoURI } = require("./config/config");

const connectMongoDB = async () => {
    try {
        await mongoose.connect( MongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });
        return success({ message: `Connected to MongoDB`, badge: true });
    } catch (err) {
        return error({ message: `failed to connect mongodb \n${err}`, badge: true });
    }
}

// start server

const startServer = async () => {
    try {
        await connectMongoDB();
        const server = http.createServer(app);
        server.listen(port, ()=>{
            return success({ message: `server started at http://${hostname}:${port}`, badge: true});
        });
    } catch (err) {
        return error({ message: `failed to start server \n${err}`, err });
    }
}

startServer();