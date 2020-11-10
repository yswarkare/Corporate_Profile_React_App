const express = require("express");
const router = express.Router();
const CompanyProfile = require("../models/CompanyProfile");
const { uniqueProfileId } = require("../utils/create_unique_ids");
// const uuid = require("uuid");


router.get("/", async (req, res) => {
    try {
        // let profiles = await CompanyProfile.find();
        return res.json({ status: true, message: `got profiles of all companies` });
    } catch (error) {
        return res.json({ status: false, message: `failed to get profiles of all companies \n ${error}`, error: error });
    }
});

router.get("/get-all", async (req, res) => {
    try {
        let profiles = await CompanyProfile.find();
        return res.json({ status: true, message: `got profiles of all companies`, profiles });
    } catch (error) {
        return res.json({ status: false, message: `failed to get profiles of all companies \n ${error}`, error: error });
    }
});

router.get("/get-all-current", async (req, res) => {
    try {
        let currentProfiles = await CompanyProfile.find({ status: "active" });
        return res.json({ status: true, message: `got profiles of all companies`, currentProfiles });
    } catch (error) {
        return res.json({ status: false, message: `failed to get profiles of all companies \n ${error}`, error: error });
    }
});

router.get("/get-all-archived", async (req, res) => {
    try {
        let archivedProfiles = await CompanyProfile.find({ status: "inactive" });
        return res.json({ status: true, message: `got profiles of all companies`, archivedProfiles });
    } catch (error) {
        return res.json({ status: false, message: `failed to get profiles of all companies \n ${error}`, error: error });
    }
});

router.get("/get-by-id/:company_id", async (req, res) => {
    try {
        let companyProfile = await CompanyProfile.findOne({ _id: req.params.company_id });
        return res.json({ status: true, message: `successfully got company profile`, companyProfile });
    } catch (error) {
        return res.json({ status: false, message: `failed to get company profile \n ${error}`, error });
    }
});

router.post("/add-new", async (req, res) => {
    try {
        console.log(req.body)
        let company_id = await uniqueProfileId();
        if (company_id === undefined || company_id === null){
            return res.json({ status: false, message: "failed to create unique id" });
        }
        console.log("unique company_id", company_id);
        let newCompanyProfile = await new CompanyProfile({
            companyName: req.body.companyName,
            companyId: company_id,
            webDomain: req.body.webDomain,
            registeredDate: req.body.registeredDate,
            clientSCOPname: req.body.clientSCOPname,
            status: req.body.status,
            statusDate: req.body.statusDate
        });
        let companyProfile = await newCompanyProfile.save();
        return res.status(200).json({ status: true, message: `successfully created new company profile`, companyProfile });
    } catch (error) {
        return res.json({ status: false, message: `failed to create new company profile \n ${error}`, error });
    }
});

router.patch("/update", async (req, res) => {
    console.log(JSON.stringify(req.body));
    try {
        let oldCompanyProfile = await CompanyProfile.findOneAndUpdate({
            companyId: req.body.companyId
        },{
            companyName: req.body.companyName,
            webDomain: req.body.webDomain,
            registeredDate: req.body.registeredDate,
            clientSCOPname: req.body.clientSCOPname,
            status: req.body.status
        });
        let newCompanyProfile = await CompanyProfile.findOne({ companyId: req.body.companyId });
        return res.json({ status: true, message: `successfully updated company profile`, newCompanyProfile });
    } catch (error) {
        return res.json({ status: false, message: `failed to update company profile \n ${error}`, error });
    }
});

router.patch("/update-status/:company_id", async (req, res) => {
    try {
        let oldCompanyProfile = await CompanyProfile.findOneAndUpdate({
            _id: req.params.company_id
        },{
            status: req.body.status,
            statusDate: req.body.statusDate
        });
        let newCompanyProfile = await CompanyProfile.findOne({ _id: req.params.company_id });
        return res.json({ status: true, message: `successfully updated status`, newCompanyProfile, oldCompanyProfile });
    } catch (error) {
        
    }
})

module.exports = router;