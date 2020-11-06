const companyProfileState = {
    profile: {
        _id: "",
        companyName: "",
        companyId: "",
        webDomain: "",
        registeredDate: "",
        clientSCOPname: "",
        status: "",
        statusDate: "",
        numberOfEngagements: "",
        engagements: [{}]
    },
    addNewProfile: false,
    editProfile: false,
    company_id: "",
    profiles: [],
    currentProfiles: [],
    archivedProfiles: []
}

export default companyProfileState;