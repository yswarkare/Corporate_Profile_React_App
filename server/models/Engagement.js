const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const engagementSchema = Schema({
    name: { type: String, trim: true, required: true, max: 300 },
    engagementId: { type: String, trim: true, required: true, max: 50 },
    serviceOffering: { type: String, trim: true, required: true, max: 300 },
    plannedStartDate: { type: Date },
    plannedEndDate: { type: Date },
    status: { type: String, trim: true, required: true, max: 100 },
    company: { type: Schema.Types.ObjectId, ref: "company_profiles" }
},{
    timestamps: true
});

const Engagement = mongoose.model("engagements", engagementSchema);

module.exports = Engagement;