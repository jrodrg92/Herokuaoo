//Dependencies
import { combineReducers } from 'redux';

//Share reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
    device
});

export default rootReducer;