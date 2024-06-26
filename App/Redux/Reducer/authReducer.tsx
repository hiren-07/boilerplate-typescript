import { LOGIN_FAILURE, LOGIN_REQUST, LOGIN_SUCCESS } from "../Constant"

const initialState = {
    loading: false
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUST:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}