import { combineReducers } from 'redux';

import device from './deviceReducer';

import library from '../containers/Library/reducer';

const rootReducer = combineReducers({
    device,
    library
});

export default rootReducer;