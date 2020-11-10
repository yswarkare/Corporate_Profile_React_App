import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentProfiles from "./CurrentProfiles";
import ArchivedProfiles from "./ArchivedProfiles";
import PropTypes from 'prop-types';
import {
    getAllCompanyProfiles,
    getAllCurrentProfiles,
    getAllArchivedProfiles,
    showCurrentProfiles,
    showArchivedProfiles
} from "../Redux/actions/companyActions";

class HomePage extends Component {

    state = {
        activeTab: "current",
        activeTabClass: "list-group-item list-group-item-action bg-primary text-light",
        inactiveTabClass: "list-group-item list-group-item-action bg-dark text-light",
        currentButtonClass: "list-group-item list-group-item-action bg-dark text-light",
        archivedButtonClass: "list-group-item list-group-item-action bg-dark text-light"
    }

    componentDidMount = () =>{
        this.setState({
            currentButtonClass: this.state.activeTabClass,
            archivedButtonClass: this.state.inactiveTabClass
        })
        this.props.getAllCompanyProfiles();
        this.props.getAllCurrentProfiles();
        this.props.getAllArchivedProfiles();
    }

    setActiveTab = (tabName) => {
        this.setState({
            activeTab: tabName
        });
        if (tabName === "archived") {
            this.setState({
                archivedButtonClass: this.state.activeTabClass,
                currentButtonClass: this.state.inactiveTabClass
            })
            this.props.showArchivedProfiles();
        } else if (tabName === "current") {
            this.setState({
                currentButtonClass: this.state.activeTabClass,
                archivedButtonClass: this.state.inactiveTabClass
            })
            this.props.showCurrentProfiles();
        }
    }

    render () {
        return (
            <div className="home-page">
                <div className="tab-button-group">
                    <button className={this.state.currentButtonClass} onClick={()=>{this.setActiveTab("current")}}>Current</button>
                    <button className={this.state.archivedButtonClass} onClick={()=>{this.setActiveTab("archived")}}>Archive</button>
                </div>
                <div className="tab-panel">
                    {
                        this.state.activeTab === "current" &&
                        <CurrentProfiles></CurrentProfiles>
                    }
                    {
                        this.state.activeTab === "archived" &&
                        <ArchivedProfiles></ArchivedProfiles>
                    }
                </div>
            </div>
        )

    }
}

HomePage.propTypes = {
    getAllCompanyProfiles: PropTypes.func.isRequired,
    getAllCurrentProfiles: PropTypes.func.isRequired,
    getAllArchivedProfiles: PropTypes.func.isRequired,
    showCurrentProfiles: PropTypes.func.isRequired,
    showArchivedProfiles: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    getAllCompanyProfiles,
    getAllCurrentProfiles,
    getAllArchivedProfiles,
    showCurrentProfiles,
    showArchivedProfiles
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);