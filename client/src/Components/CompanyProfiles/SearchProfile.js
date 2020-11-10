import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class SearchProfile extends Component {


    render () {
        return (
            <Fragment>
                <div className="search-box">
                    <input
                    type="search"
                    onChange={(e)=>{this.setSearchInput(e.target.value)}}
                    className="form-control"/>
                </div>
            </Fragment>
        )

    }
}

SearchProfile.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);