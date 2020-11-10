import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    setCompanyName,
    setWebDomain,
    setRegisteredDate,
    setClientSPOCname,
    setCompanyStatus,
    setCompanyStatusDate,
    addCompanyProfile
} from "../../Redux/actions/companyActions";


class AddNewProfile extends Component {

    onChangeSetCompanyName = (companyName) => {
        this.props.setCompanyName(companyName);
    }

    onChangeSetWebDomain = (webDomain) => {
        this.props.setWebDomain(webDomain);
    }

    onChangeSetRegisteredDate = (registeredDate) => {
        this.props.setRegisteredDate(registeredDate);
    }

    onChangeSetClientSPOCname = (clientSPOCname) => {
        this.props.setClientSPOCname(clientSPOCname);
    }

    onChangeSetCompanyStatus = (companyStatus) => {
        this.props.setCompanyStatus(companyStatus);
    }

    onChangeSetCompanyStatusDate = (companyStatusDate) => {
        this.props.setCompanyStatusDate(companyStatusDate);
    }

    onClickAddCompanyProfile = () => {
        this.props.addCompanyProfile(this.props.profile)
    }

    render () {
        return (
            <div className="add-new-profile">
                <div className="add-new-profile-item">
                    <span>Company Name</span>
                    <input
                    type="text"
                    default={this.props.profile.companyName}
                    onChange={(e)=>{this.onChangeSetCompanyName(e.target.value)}} 
                    className="form-control bg-dark text-light"/>
                </div>
                <div className="add-new-profile-item">
                    <span>Web Domain</span>
                    <input
                    type="text"
                    default={this.props.profile.webDomain}
                    onChange={(e)=>{this.onChangeSetWebDomain(e.target.value)}}
                    className="form-control bg-dark text-light"/>
                </div>
                <div className="add-new-profile-item">
                    <span>Registered Date</span>
                    <input
                    type="date"
                    default={this.props.profile.statusDate}
                    onChange={(e)=>{this.onChangeSetRegisteredDate(e.target.value)}}
                    className="form-control bg-dark text-light"/>
                </div>
                <div className="add-new-profile-item">
                    <span>Client SPOC Name</span>
                    <input
                    type="text"
                    default={this.props.profile.clientSPOCname}
                    onChange={(e)=>{this.onChangeSetClientSPOCname(e.target.value)}}
                    className="form-control bg-dark text-light"/>
                </div>
                <div className="add-new-profile-item">
                    <span>Status</span>
                    <select
                    default={this.props.profile.status}
                    onChange={(e)=>{this.onChangeSetCompanyStatus(e.target.value)}}
                    className="form-control">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="add-new-profile-item">
                    <span>Status Date</span>
                    <input
                    type="date"
                    default={this.props.profile.statusDate}
                    onChange={(e)=>{this.onChangeSetCompanyStatusDate(e.target.value)}}
                    className="form-control bg-dark text-light"/>
                </div>
                <div className="add-new-profile-button">
                    <button onClick={()=>{this.onClickAddCompanyProfile()}}>Add New Corporate Profile</button>
                </div>
            </div>
        )

    }
}

AddNewProfile.propTypes = {
    profiles: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    engagements: PropTypes.object.isRequired,
    setCompanyName: PropTypes.func.isRequired,
    setWebDomain: PropTypes.func.isRequired,
    setRegisteredDate: PropTypes.func.isRequired,
    setClientSPOCname: PropTypes.func.isRequired,
    setCompanyStatus: PropTypes.func.isRequired,
    setCompanyStatusDate: PropTypes.func.isRequired,
    addCompanyProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles,
        profile: state.profiles.profile,
        engagements: state.engagements
    }
}

const mapDispatchToProps = {
    setCompanyName,
    setWebDomain,
    setRegisteredDate,
    setClientSPOCname,
    setCompanyStatus,
    setCompanyStatusDate,
    addCompanyProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProfile);