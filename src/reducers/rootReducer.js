import { combineReducers } from 'redux';
import { quoteReducers } from './quoteReducers';

const rootReducer = combineReducers({
    quoteReducers
});

export default rootReducer;