import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as QuoteActions from '../actions/QuoteActions';
import Presentational from '../components/presentational';

class QuoteApp extends Component {
    render() {
        const { list, actions } = this.props;
        return(
            <div>
                <Presentational list={list} actions={actions} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        list: state.quoteReducers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(QuoteActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteApp);