import { SET_USERS } from "../types";

const INITIAL_STATE = {
    users: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload};
        default:
            return state;
    }
}

export default usersReducer;