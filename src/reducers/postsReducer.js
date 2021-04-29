import { LOADING, UPDATE_POSTS, TRIGGER_ERROR } from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: null
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_POSTS:
            const updated_posts = [...state.posts, ...action.payload];
            return {...state, posts: updated_posts, loading: false, error: null}
        case LOADING:
            return {...state, loading: true}
        case TRIGGER_ERROR:
            return {...state, error: action.error, loading: false}
        default:
            return state;
    }
}

export default postsReducer;