import { LOADER } from '../Constant/Constant';

export const loader = (state = false, action: any) => {
    switch (action.type) {
        case LOADER:
            return action.state;
        default:
            return state;
    }
};
