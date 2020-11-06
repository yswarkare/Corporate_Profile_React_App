import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import HomePage from "./HomePage";
import MainHeader from "./Headers/MainHeader";
import CurrentProfiles from "./CurrentProfiles";
import ArchivedProfiles from "./ArchivedProfiles";

class Wrapper extends Component {

    render () {
        return (
            <div className="wrapper">
                <MainHeader></MainHeader>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route exact path="/current-profiles" component={CurrentProfiles}></Route>
                        <Route exact path="/archived-profiles" component={ArchivedProfiles}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

Wrapper.propTypes = {
    profiles: PropTypes.object.isRequired,
    engagements: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles,
        engagements: state.engagements    
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);