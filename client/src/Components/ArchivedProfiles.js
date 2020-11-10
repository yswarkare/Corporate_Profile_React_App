import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showArchivedProfiles } from "../Redux/actions/companyActions";
import PropTypes from 'prop-types';
// import Profiles from "./CompanyProfiles/Profiles";
import CompanyProfilesTable from "./CompanyProfiles/CompanyProfilesTable";

class ArchivedProfiles extends Component {

    componentDidMount = () => {
        this.props.showArchivedProfiles();
    }

    render () {
        return (
            <div className="archived-profiles">
                <CompanyProfilesTable></CompanyProfilesTable>
                {/* <Profiles profiles={this.props.archivedProfiles}></Profiles> */}
            </div>
        )

    }
}

ArchivedProfiles.propTypes = {
    archivedProfiles: PropTypes.array.isRequired,
    showArchivedProfiles: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        archivedProfiles: state.profiles.archivedProfiles
    }
}

const mapDispatchToProps = {
    showArchivedProfiles
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedProfiles);