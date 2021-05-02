import axios from 'axios';

import { LOADING, TRIGGER_ERROR, UPDATE_POSTS } from '../types/postsTypes';
import { SET_USERS } from '../types/usersTypes';

export const getPostsByUser = id => async (dispatch, getState) => {
    dispatch({type: LOADING});

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${id}`
          );

        if (response.status === 200) {
            const { posts } = getState().postsReducer;
            const updated_posts = [...posts, response.data];
            dispatch({ type: UPDATE_POSTS, payload: updated_posts });
        
            const { users } = getState().usersReducer;
        
            const user_index = users.findIndex(user => user.id === parseInt(id));
        
            const posts_index = updated_posts.length - 1;
            const updated_users = [...users];
            updated_users[user_index] = {
            ...users[user_index],
            posts_index
            };
            
            dispatch({ type: SET_USERS, payload: updated_users });
        } else {
            throw new Error(`Response status: ${response.status}`);
        }    
    } catch (err) {
        dispatch({type: TRIGGER_ERROR, error: err});
    }
}