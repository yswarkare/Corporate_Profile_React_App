import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllCompanyProfiles } from "../../Redux/actions/companyActions";
import WrappedCompanyProfile from "./WrappedCompanyProfile";

class CompanyProfilesTable extends Component {

    state = {
        
    }

    componentDidMount = () => {
        console.log("Current Profiles => ", this.props.currentProfiles)
    }

    render () {
        return (
            <div className="current-profiles-table">
                {
                    this.props.profiles &&
                    <WrappedCompanyProfile displayProfiles={"pass it down"}></WrappedCompanyProfile>
                }
            </div>
        )

    }
}

CompanyProfilesTable.propTypes = {
    profiles: PropTypes.object.isRequired,
    // currentProfiles: PropTypes.array.isRequired,
    getAllCompanyProfiles: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles,
        // currentProfiles: state.profiles.currentProfiles
    }
}

const mapDispatchToProps = {
    getAllCompanyProfiles
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfilesTable);