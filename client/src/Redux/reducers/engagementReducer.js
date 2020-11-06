import engagementState from "../states/engagementState";
import {
    Add_Engagement,
    Edit_Engagement,
    Update_Engagement,
    Delete_Engagement,
    Get_All_Engagements,
    Get_Engagement,
    Set_Engagement_Name,
    Set_Service_Offering,
    Set_Planned_Start_Date,
    Set_Planned_End_Date,
    Set_Engagement_Status,
    Add_New_Engagement_Status
} from "../actions/actionTypes";


const engagementReducer = ( state = engagementState, action ) => {
    let stateCopy = state;

    switch (action.type) {

        case Add_Engagement:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;
        
        case Edit_Engagement:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Update_Engagement:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Delete_Engagement:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Get_All_Engagements:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Get_Engagement:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Set_Engagement_Name:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Set_Service_Offering:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Set_Planned_Start_Date:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Set_Planned_End_Date:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Set_Engagement_Status:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Add_New_Engagement_Status:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        default:
        return stateCopy;
    }
}

export default engagementReducer;