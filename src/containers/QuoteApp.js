import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import * as QuoteActions from '../actions/QuoteActions';
import { Presentational } from '../components/presentational';

class QuoteApp extends Component {
    render() {
        return(
            <div>
                <Presentational />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        index: state.index,
        quotes: state.quotes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreator(QuoteActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteApp);