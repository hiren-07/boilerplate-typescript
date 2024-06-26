import { combineReducers } from 'redux';
import { loader } from './hocReducer';

const rootReducer = combineReducers({
    loader,
});

export default rootReducer;
