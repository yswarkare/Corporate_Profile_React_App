import React, { Component } from 'react';
import withCompanyProfileHOC from './withCompanyProfileHOC';

class CompanyProfile extends Component {


    render () {
        return (
            <div>
                
            </div>
        )
    }
}

const WrappedCompanyProfile = withCompanyProfileHOC(CompanyProfile);

export default WrappedCompanyProfile;