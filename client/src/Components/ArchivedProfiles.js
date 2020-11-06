import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ArchivedProfiles extends Component {


    render () {
        return (
            <div className="archived-profiles">
                archived profiles
            </div>
        )

    }
}

ArchivedProfiles.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedProfiles);