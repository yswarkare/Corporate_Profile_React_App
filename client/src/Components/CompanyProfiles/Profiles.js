import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
// import PropTypes from 'prop-types';

class Profiles extends Component {

    state = {

    }

    editProfile = (index) => {
        console.log(index);
    }

    render () {
        return (
            <Fragment>
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
                    <div className="current-profiles-table-body">
                        {
                            this.props.profiles && this.props.profiles.map((profile, index)=>{
                                return (
                                    <Fragment key={index}>
                                        <Profile profile={profile} index={index} editProfile={()=>{this.editProfile(index)}}></Profile>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )

    }
}

Profiles.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);