import { combineReducers } from 'redux';
import { loader } from './hocReducer';
import { fetchDataReducer } from './fetchDataReducer';

const rootReducer = combineReducers({
    loader,
    fetchDataReducer:fetchDataReducer
});

export default rootReducer;
