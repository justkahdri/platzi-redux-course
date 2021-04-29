import axios from 'axios';

import { LOADING, TRIGGER_ERROR, UPDATE_POSTS } from '../types/postsTypes';

export const getPostsByUser = key => async (dispatch, getState) => {
    dispatch({type: LOADING});

    try {
        const { users } = getState().usersReducer;
        const user_id = users[key].id;

        const response = await axios.get(
            `http://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        if (response.status === 200) {
            dispatch({type: UPDATE_POSTS, payload: response.data})
        } else {
            throw new Error(`Response status: ${response.status}`);
        }    
    } catch (err) {
        dispatch({type: TRIGGER_ERROR, error: err});
    }
}