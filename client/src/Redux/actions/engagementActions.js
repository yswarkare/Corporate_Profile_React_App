import api from "./axiosDefaults";
import {
    Add_Engagement,
    Edit_Engagement,
    Update_Engagement,
    Delete_Engagement,
    Get_All_Engagements,
    Get_Engagement,
    Get_Error,
    Set_Engagement_Name,
    Set_Service_Offering,
    Set_Planned_Start_Date,
    Set_Planned_End_Date,
    Set_Engagement_Status,
    Add_New_Engagement_Status
} from "./actionTypes";


export const addEngagement = (engagement) => async (dispatch) => {
    try {
        dispatch({
            type: Add_Engagement,
            payload: engagement
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const editEngagement = (engagement) => async (dispatch) => {
    try {
        dispatch({
            type: Edit_Engagement,
            payload: engagement
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const updateEngagement = (engagement) => async (dispatch) => {
    try {
        dispatch({
            type: Update_Engagement,
            payload: engagement
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const deleteEngagement = (engagement) => async (dispatch) => {
    try {
        dispatch({
            type: Delete_Engagement,
            payload: engagement
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const getAllEngagements = () => async (dispatch) => {
    try {
        let res = await api.get(`/engagements/get-All`);
        dispatch({
            type: Get_All_Engagements,
            payload: res 
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const getEngagement = () => async (dispatch) => {
    try {
        let res = await api.get(`/engagements/get-by-id`);
        dispatch({
            type: Get_Engagement,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setEngagementName = (engagementName) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Engagement_Name,
            payload: engagementName
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setServiceOffering = (serviceOffering) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Service_Offering,
            payload: serviceOffering
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setPlannedStartDate = (plannedStartDate) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Planned_Start_Date,
            payload: plannedStartDate
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setPlannedEndDate = (plannedEndDate) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Planned_End_Date,
            payload: plannedEndDate
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setEngagementStatus = (engagementStatus) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Engagement_Status,
            payload: engagementStatus
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const addNewEngagementStatus = (status) => async (dispatch) => {
    try {
        dispatch({
            type: Add_New_Engagement_Status,
            payload: status
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}