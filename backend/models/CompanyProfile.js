const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companyProfileSchema = Schema({
    companyName: { type: String, trim: true, require: true, max: 200 },
    companyId: { type: Number, trim: true, require: true, max: 10000000 },
    webDomain: { type: String, trim: true, require: true, max: 200 },
    registeredDate: { type: Date, require: true },
    clientSCOPname: { type: String, trim: true, require: true, max: 200 },
    status: { type: String, trim: true, require: true, max: 200 },
    statusDate: { type: Date, require: true },
    engagements: [{ type: Schema.Types.ObjectId, ref: "engagements" }],
    numberOfEngagements: { type: Number, trim: true, require: true, max: 10 }
},{
    timestamps: true
});

const CompanyProfile = mongoose.model("company_profiles", companyProfileSchema);

module.exports = CompanyProfile;