import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewProfileStatus, showCurrentProfiles } from "../Redux/actions/companyActions";
import AddNewProfile from './CompanyProfiles/AddNewProfile';
// import Profiles from "./CompanyProfiles/Profiles";
import CompanyProfilesTable from './CompanyProfiles/CompanyProfilesTable';

class CurrentProfiles extends Component {

    state = {
        addNewProfile: false
    }

    componentDidMount = () => {
        this.setState({
            addNewProfile: this.props.profiles.AddNewProfile
        });
        this.props.showCurrentProfiles();
    }

    onClickAddNew = () => {
        this.setState({
            addNewProfile: !this.state.addNewProfile
        })
        this.props.addNewProfileStatus(!this.props.profiles.addNewProfile)
    }

    render () {
        return (
            <div className="current-profiles">
                <div className="">
                    <div className="add-new-profile-button">
                        <button onClick={()=>{this.onClickAddNew()}}>
                        {
                            this.props.profiles.addNewProfile === false &&
                            <span>Add New Corporate</span>
                        }
                        {
                            this.props.profiles.addNewProfile === true &&
                            <span>Hide Add New Corporate Form</span>
                        }
                        </button>
                    </div>
                    {
                        this.props.profiles.addNewProfile === true &&
                        <AddNewProfile></AddNewProfile>
                    }
                    <div></div>
                </div>
                <div className="current-profiles-table-container">
                    <CompanyProfilesTable currentProfiles={this.props.currentProfiles} ></CompanyProfilesTable>
                    {/* <Profiles profiles={this.props.currentProfiles}></Profiles> */}
                </div>
            </div>
        )
    }
}

CurrentProfiles.propTypes = {
    profiles: PropTypes.object.isRequired,
    currentProfiles: PropTypes.array.isRequired,
    engagements: PropTypes.object.isRequired,
    addNewProfileStatus: PropTypes.func.isRequired,
    showCurrentProfiles: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles,
        currentProfiles: state.profiles.currentProfiles,
        engagements: state.engagements
    }
}

const mapDispatchToProps = {
    addNewProfileStatus,
    showCurrentProfiles
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProfiles);