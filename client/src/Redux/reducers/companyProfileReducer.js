import companyProfileState from "../states/companyProfileState";
import {
    Add_Company_Profile,
    Edit_Company_Profile,
    Update_Company_Profile,
    Delete_Company_Profile,
    Get_All_Company_Profiles,
    Get_Company_Profile,
    Get_Error,
    Set_Company_Name,
    Set_Web_Domain,
    Set_Registered_Date,
    Set_Client_SPOC_Name,
    Set_Company_Status,
    Set_Company_Status_Date,
    Add_New_Profile_Status
} from "../actions/actionTypes";


const companyProfileReducer = ( state = companyProfileState, action ) => {
    let stateCopy = state;

    switch (action.type) {

        case Add_Company_Profile:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Edit_Company_Profile:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Update_Company_Profile:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Delete_Company_Profile:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Get_All_Company_Profiles:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Get_Company_Profile:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Get_Error:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Set_Company_Name:
        console.log(action.payload);
        stateCopy.profile.companyName = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Set_Web_Domain:
        console.log(action.payload);
        stateCopy.profile.webDomain = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Set_Registered_Date:
        console.log(action.payload);
        stateCopy.profile.registeredDate = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Set_Client_SPOC_Name:
        console.log(action.payload);
        stateCopy.profile.clientSCOPname = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Set_Company_Status:
        console.log(action.payload);
        stateCopy.profile.status = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Set_Company_Status_Date:
        console.log(action.payload);
        stateCopy.profile.statusDate = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Add_New_Profile_Status:
        console.log(action.payload);
        stateCopy.addNewProfile = action.payload;
        console.log(stateCopy);
        return stateCopy;

        default:
        return stateCopy;
    }
}

export default companyProfileReducer;