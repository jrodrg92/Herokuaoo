//Dependencies
import { combineReducers } from 'redux';

//Share reducers
import device from './deviceReducer';

import library from '../containers/Library/reducer';

const rootReducer = combineReducers({
    device,
    library
});

export default rootReducer;