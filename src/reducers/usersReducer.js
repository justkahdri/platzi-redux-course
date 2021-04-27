import { SET_USERS, LOADING, TRIGGER_ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: null
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload, loading: false};
        case LOADING:
            return {...state, loading: true};
        case TRIGGER_ERROR:
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}

export default usersReducer;