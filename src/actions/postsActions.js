import axios from 'axios';

import { LOADING, SET_POSTS, TRIGGER_ERROR } from '../types/postsTypes';

export const getPosts = () => async (dispatch) => {
    dispatch({type: LOADING});
    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        if (response.status === 200) {
            dispatch({type: SET_POSTS, payload: response.data})
        } else {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (err) {
        dispatch({type: TRIGGER_ERROR, error: err});
    }

}