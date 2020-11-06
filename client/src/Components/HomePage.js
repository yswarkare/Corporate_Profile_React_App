import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentProfiles from "./CurrentProfiles";
import ArchivedProfiles from "./ArchivedProfiles";
// import PropTypes from 'prop-types';

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
        } else if (tabName === "current") {
            this.setState({
                currentButtonClass: this.state.activeTabClass,
                archivedButtonClass: this.state.inactiveTabClass
            })
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

// HomePage.propTypes = {
    
// }

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);