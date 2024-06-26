import { LOADER } from "../Constant";
export const loader = (dispatch:any,state:any) => dispatch({
    type: LOADER,
    state:state
});
export const LOADER_SHOW = (dispatch:any) => dispatch({
    type: LOADER,
    state:true
});
export const LOADER_HIDE = (dispatch:any) => dispatch({
    type: LOADER,
    state:false
});

