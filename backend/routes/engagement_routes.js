const express = require("express");
const router = express.Router();
const Engagement = require("../models/Engagement");
const { uniqueEngagementId } = require("../utils/create_unique_ids");
// const CompanyProfile = require("../models/CompanyProfile");


router.get("/get-all", async (req, res) => {
    try {
        let engagements = await Engagement.find();
        return res.json({ status: true, message: `got all engagements`, engagements });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: `failed to get all engagements \n ${error}`, error: error });
    }
});

router.get("/get-all/:company_id", async (req, res) => {
    try {
        let engagements = await Engagement.find({ company: req.params.company_id });
        return res.json({ status: true, message: `successfully got all engagements by company id`, engagements });
    } catch (error) {
        
    }
})

router.get("/get-by-id/:engagement_id", async (req, res) => {
    try {
        let engagement = await Engagement.findOne({ _id: req.params.engagement_id });
        return res.json({ status: true, message: `successfully got engagement`, engagement });
    } catch (error) {
        return res.json({ status: false, message: `failed to get engagement \n ${error}`, error });
    }
});

router.post("/add-new", async (req, res) => {
    try {
        let engagementId = await uniqueEngagementId();
        if (engagementId === undefined || company_id === null){
            return res.json({ status: false, message: "failed to create unique id" });
        }
        let newEngagement = await new Engagement({
            name: req.body.name,
            engagementId: engagementId,
            serviceOffering: req.body.serviceOffering,
            plannedStartDate: req.body.plannedStartDate,
            plannedEndDate: req.body.plannedEndDate,
            status: req.body.status,
            company: req.body.company_id
        });
        let engagement = await newEngagement.save();
        return res.json({ status: true, message: `successfully added new engagement`, engagement });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: `failed to add engagements`, error });
    }
});

router.patch("/update", async (req, res) => {
    try {
        let oldEngagement = await Engagement.findOneAndUpdate({
            _id: req.body.engagement_id
        },{
            name: req.body.name,
            serviceOffering: req.body.serviceOffering,
            plannedStartDate: req.body.plannedStartDate,
            plannedEndDate: req.body.plannedEndDate,
            status: req.body.status
        });
        let newEngagement = await Engagement.findOne({ _id: req.body.engagement_id });
        return res.json({ status: true, message: `successfully added new engagement`, newEngagement, oldEngagement });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: `failed to add engagements`, error });
    }
});

router.patch("/update-status", async (req, res) => {
    try {
        let oldEngagement = await Engagement.findOneAndUpdate({
            _id: req.body.engagement_id
        },{
            name: req.body.name,
            serviceOffering: req.body.serviceOffering,
            plannedStartDate: req.body.plannedStartDate,
            plannedEndDate: req.body.plannedEndDate,
            status: req.body.status
        });
        let newEngagement = await Engagement.findOne({ _id: req.body.engagement_id });
        return res.json({ status: true, message: `successfully added new engagement`, newEngagement, oldEngagement });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: `failed to add engagements`, error });
    }
});

router.delete("/delete/:engagement_id", async (req, res) => {
    try {
        let engagement = await Engagement.findOneAndRemove({ _id: req.params.engagement_id });
        return res.json({ status: true, message: `successfully deleted engagement`, engagement });
    } catch (error) {
        return res.json({ status: false, message: `failed to delete engagement \n ${error}`, error });
    }
});

module.exports = router;