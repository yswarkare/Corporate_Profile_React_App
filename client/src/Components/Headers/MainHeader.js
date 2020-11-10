import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class MainHeader extends Component {


    render () {
        return (
            <div className="main-header">
                <h3>Corporate Profiles</h3>
            </div>
        )

    }
}

MainHeader.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);