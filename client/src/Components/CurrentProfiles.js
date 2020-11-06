import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewProfileStatus } from "../Redux/actions/companyActions";
import AddNewProfile from './CompanyProfiles/AddNewProfile';

class CurrentProfiles extends Component {

    state = {
        addNewProfile: false
    }

    componentDidMount = () => {
        this.setState({
            addNewProfile: this.props.profiles.AddNewProfile
        });
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
            </div>
        )
    }
}

CurrentProfiles.propTypes = {
    profiles: PropTypes.object.isRequired,
    engagements: PropTypes.object.isRequired,
    addNewProfileStatus: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles,
        engagements: state.engagements
    }
}

const mapDispatchToProps = {
    addNewProfileStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProfiles);