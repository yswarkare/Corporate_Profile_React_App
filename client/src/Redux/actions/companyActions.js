import api from "./axiosDefaults";
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
} from "./actionTypes";


export const addCompanyProfile = (profile) => async (dispatch) => {
    try {
        console.log("profile => ", profile);
        let res = await api.post(`/company-profiles/add-new`, profile);
        dispatch({
            type: Add_Company_Profile,
            payload: res
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const editCompanyProfile = (profile) => async (dispatch) => {
    try {
        dispatch({
            type: Edit_Company_Profile,
            payload: profile
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const updateCompanyProfile = (profile) => async (dispatch) => {
    try {
        dispatch({
            type: Update_Company_Profile,
            payload: profile
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const deleteCompanyProfile = (profile) => async (dispatch) => {
    try {
        dispatch({
            type: Delete_Company_Profile,
            payload: profile
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const getAllCompanyProfiles = (profile) => async (dispatch) => {
    try {
        let res = await api.get(`/company-profiles/get-all`);
        dispatch({
            type: Get_All_Company_Profiles,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const getCompanyProfile = (profile) => async (dispatch) => {
    try {
        let res = await api.get(`/company-profiles/get-by-id`);
        dispatch({
            type: Get_Company_Profile,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setCompanyName = (companyName) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Company_Name,
            payload: companyName
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setWebDomain = (webDomain) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Web_Domain,
            payload: webDomain
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setRegisteredDate = (registeredDate) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Registered_Date,
            payload: registeredDate
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setClientSPOCname = (clientSPOCname) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Client_SPOC_Name,
            payload: clientSPOCname
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setCompanyStatus = (companyStatus) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Company_Status,
            payload: companyStatus
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const setCompanyStatusDate = (companyStatusDate) => async (dispatch) => {
    try {
        dispatch({
            type: Set_Company_Status_Date,
            payload: companyStatusDate
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}

export const addNewProfileStatus = (status) => async (dispatch) => {
    try {
        dispatch({
            type: Add_New_Profile_Status,
            payload: status
        })
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: error
        })
    }
}