const CompanyProfile = require("../models/CompanyProfile");
const Engagement = require("../models/Engagement");

const uniqueProfileId = async () => {
    try {
        let id = Math.floor((1*(Math.random()))*1000000);
        let checkId = await CompanyProfile.findOne({ companyId: id});
        console.log("checkId", checkId);
        if ( checkId === undefined || checkId === null ) {
            console.log(id);
            id = id.toString();
            return id;
        } else {
            uniqueProfileId();
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const uniqueEngagementId = async () => {
    try {
        let id = Math.floor((1*(Math.random()))*1000000);
        let checkId = await Engagement.findOne({ engagementId: id});
        if ( checkId === undefined || checkId === null ) {
            console.log(id);
            id = id.toString();
            return id;
        } else {
            uniqueEngagementId();
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

module.exports = {
    uniqueProfileId,
    uniqueEngagementId
};