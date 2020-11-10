import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    getAllCompanyProfiles,
    editCompanyProfile,
    updateCompanyProfile
} from "../../Redux/actions/companyActions";

const withCompanyProfileHOC = (WrappedCompanyProfile) => {
    class withCompanyProfileHOC extends Component {

        componentDidMount = () => {

        }
        
        editProfile = (index, companyId) => {
            console.log(index, companyId);
            this.props.editCompanyProfile(index, companyId)
        }

        updateProfile = (profile) => {
            console.log(profile);
            this.props.updateCompanyProfile(profile);
        }

        render () {
            return (
                <div className="current-profiles-table">
                    <div className="current-profiles-table-header">
                        <div className="header-cell">Company Name</div>
                        <div className="header-cell">Company ID</div>
                        <div className="header-cell">Web Domain</div>
                        <div className="header-cell">No of Engagements</div>
                        <div className="header-cell">Registered Date</div>
                        <div className="header-cell">Client SPOC Name</div>
                        <div className="header-cell">State</div>
                        <div className="header-cell">Actions</div>
                    </div>
                    {
                        this.props.profiles.showProfiles && this.props.profiles.showProfiles.map((profile, index)=>{
                            return (
                                <WrappedCompanyProfile 
                                key={index}
                                profile={profile}
                                edit={this.props.profiles.editProfile}
                                editId={this.props.profiles.editId}
                                updateProfile={(profile)=>{this.updateProfile(profile)}}
                                editProfile={()=>{this.editProfile(index, profile.companyId)}}>
                                </WrappedCompanyProfile>
                            )
                        })
                    }
                </div>
            )
        }
    }

    withCompanyProfileHOC.propTypes = {
        profiles: PropTypes.object.isRequired,
        currentProfiles: PropTypes.array.isRequired,
        getAllCompanyProfiles: PropTypes.func.isRequired,
        editCompanyProfile: PropTypes.func.isRequired,
        updateCompanyProfile: PropTypes.func.isRequired
    }
    
    const mapStateToProps = (state) => {
        return {
            profiles: state.profiles,
            currentProfiles: state.profiles.currentProfiles,
        }
    }
    
    const mapDispatchToProps = {
        getAllCompanyProfiles,
        editCompanyProfile,
        updateCompanyProfile
    }

    return connect(mapStateToProps, mapDispatchToProps)(withCompanyProfileHOC);
}
export default withCompanyProfileHOC;