import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from '@material-ui/icons/Visibility';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
// import PropTypes from 'prop-types';

class Profile extends Component {

    onClickEditProfile = (index) => {
        this.props.editProfile(index)
    }

    render () {
        return (
            <Fragment>
                <div className="table-body-cell"><span>{ this.props.profile.companyName }</span></div>
                <div className="table-body-cell"><span>{ this.props.profile.companyId }</span></div>
                <div className="table-body-cell"><span>{ this.props.profile.webDomain }</span></div>
                <div className="table-body-cell"><span>{ this.props.profile.numberOfEngagement }</span></div>
                <div className="table-body-cell"><span>{ this.props.profile.registeredDate }</span></div>
                <div className="table-body-cell"><span>{ this.props.profile.clientSCOPname }</span></div>
                <div className="table-body-cell"><span>{ this.props.profile.status }</span></div>
                <div className="table-body-cell">
                    <VisibilityIcon></VisibilityIcon>
                    <IconButton onClick={this.onClickEditProfile(this.props.index)}>
                        <EditIcon></EditIcon>
                    </IconButton>
                    <SystemUpdateAltIcon></SystemUpdateAltIcon>
                </div>
            </Fragment>
        )

    }
}

Profile.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);