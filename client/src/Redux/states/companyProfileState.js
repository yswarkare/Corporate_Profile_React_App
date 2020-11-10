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
    company_id: "",
    profiles: [],
    currentProfiles: [],
    archivedProfiles: [],
    showProfiles: null,
    editProfile: false,
    editIndex: null,
    editProfileId: null
}

export default companyProfileState;