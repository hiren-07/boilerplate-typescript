import { combineReducers } from 'redux';
import { fetchDataReducer } from './FetchDataReducer';
import { loaderReducer } from './LoaderReducer';

const rootReducer = combineReducers({
    loader:loaderReducer,
    fetchDataReducer:fetchDataReducer
});

export default rootReducer;
