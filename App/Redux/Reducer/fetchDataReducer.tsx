import { FETCH_DATA_REQUEST,FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS } from "../Constant";

const initialState = {
    page : 1,
    totalPage : 100,
    data : [],
    loading : false
}

export const fetchDataReducer = (state=initialState,action:any)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                loading:true 
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                page:action.page,
                totalPage : action.totalPage,
                data : action.payload,
                loading:false
            }
        
        default : return state
    }
}