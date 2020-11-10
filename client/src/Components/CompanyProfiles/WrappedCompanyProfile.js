import React, { Component, Fragment } from 'react';
import withCompanyProfileHOC from './withCompanyProfileHOC';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from "@material-ui/icons/Edit";
import UpdateIcon from '@material-ui/icons/Update';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

class CompanyProfile extends Component {

    state = {
        editProfile: false,
        companyName: this.props.profile.companyName,
        companyId: this.props.profile.companyId,
        webDomain: this.props.profile.webDomain,
        numberOfEngagement: this.props.profile.numberOfEngagement,
        registeredDate: this.props.profile.registeredDate,
        clientSCOPname: this.props.profile.clientSCOPname,
        status: this.props.profile.status,
    }

    componentDidMount = () => {
        console.log("profiles to render => ", this.props.profiles);
    }

    setCompanyName = (companyName) => {
        this.setState({
            companyName: companyName
        });
    }

    setWebDomain = (webDomain) => {
        this.setState({
            webDomain: webDomain
        });
    }

    setClientSPOCname = (clientSCOPname) => {
        this.setState({
            clientSCOPname: clientSCOPname
        });
    }

    setStatus = (status) => {
        this.setState({
            status: status
        });
    }

    onClickEditProfile = () => {
        this.props.editProfile();
        this.setState({
            editProfile: true
        })
    }

    onClickUpdateProfile = () => {
        let profile = {
            companyName: this.state.companyName,
            companyId: this.props.profile.companyId,
            webDomain: this.state.webDomain,
            numberOfEngagement: this.props.profile.numberOfEngagement,
            registeredDate: this.state.registeredDate,
            clientSCOPname: this.state.clientSCOPname,
            status: this.state.status,
        }
        this.setState({
            editProfile: false
        }, this.props.updateProfile(profile));
    }

    render () {
        return (
            <Fragment>
                {
                    this.state.editProfile === false &&
                    <div className="current-profiles-table-body">
                        <div className="table-body-cell"><span>{ this.props.profile.companyName }</span></div>
                        <div className="table-body-cell"><span>{ this.props.profile.companyId }</span></div>
                        <div className="table-body-cell"><span>{ this.props.profile.webDomain }</span></div>
                        <div className="table-body-cell"><span>{ this.props.profile.numberOfEngagement }</span></div>
                        <div className="table-body-cell"><span>{ this.props.profile.registeredDate }</span></div>
                        <div className="table-body-cell"><span>{ this.props.profile.clientSCOPname }</span></div>
                        <div className="table-body-cell"><span>{ this.props.profile.status }</span></div>
                        <div className="table-body-cell">
                            <VisibilityIcon></VisibilityIcon>
                            <IconButton onClick={()=>{this.onClickEditProfile()}}>
                                <EditIcon></EditIcon>
                            </IconButton>
                            <SystemUpdateAltIcon></SystemUpdateAltIcon>
                        </div>
                    </div>
                }
                {
                    this.state.editProfile === true &&
                    <div className="current-profiles-table-body">
                        <div className="table-body-cell">
                            <input
                            type="text"
                            defaultValue={this.state.companyName}
                            onChange={(e)=>{this.setCompanyName(e.target.value)}}
                            className="form-control"/>
                        </div>
                        <div className="table-body-cell"><span>{ this.props.profile.companyId }</span></div>
                        <div className="table-body-cell">
                            <input
                            type="text"
                            defaultValue={this.state.webDomain}
                            onChange={(e)=>{this.setWebDomain(e.target.value)}}
                            className="form-control"/>
                        </div>
                        <div className="table-body-cell"><span>{ this.props.profile.numberOfEngagement }</span></div>
                        <div className="table-body-cell">
                            <input
                            type="date"
                            defaultValue={this.state.registeredDate}
                            onChange={(e)=>{this.setRegisteredDate(e.target.value)}}
                            className="form-control"/>
                        </div>
                        <div className="table-body-cell">
                            <input
                            type="date"
                            defaultValue={this.state.clientSCOPname}
                            onChange={(e)=>{this.setClientSPOCname(e.target.value)}}
                            className="form-control"/>
                        </div>
                        <div className="table-body-cell">
                            <select
                            default={this.state.status}
                            onChange={(e)=>{this.setStatus(e.target.value)}}
                            className="form-control">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="table-body-cell">
                            <VisibilityIcon></VisibilityIcon>
                            <IconButton onClick={()=>{this.onClickUpdateProfile()}}>
                                <UpdateIcon></UpdateIcon>
                            </IconButton>
                            <SystemUpdateAltIcon></SystemUpdateAltIcon>
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
}

const WrappedCompanyProfile = withCompanyProfileHOC(CompanyProfile);

export default WrappedCompanyProfile;