import { LOADING, SET_POSTS, TRIGGER_ERROR } from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: null
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload, loading: false}
        case LOADING:
            return {...state, loading: true}
        case TRIGGER_ERROR:
            return {...state, error: action.error, loading: false}
        default:
            return state;
    }
}

export default postsReducer;