import { LOADER } from "../../constant";

export const loaderReducer = (state = false, action:any) => {
    switch (action.type) {
        case LOADER:
            return action.state;
        default:
            return state;
    }
}
  