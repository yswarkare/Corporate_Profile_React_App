import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withCompanyProfileHOC = () => {
    class withCompanyProfileHOC extends Component {



        render () {
            return (
                <div>
                    <>
                        </>
                </div>
            )
        }
    }

    withCompanyProfileHOC.propTypes = {
        
    }

    const mapStateToProps = (state) => {
        return {
            
        }
    }

    const mapDispatchToProps = {
        
    }

    return connect(mapStateToProps, mapDispatchToProps)(withCompanyProfileHOC);
}
export default withCompanyProfileHOC;