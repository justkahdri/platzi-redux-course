import axios from 'axios';
import { LOADING, SET_USERS, TRIGGER_ERROR } from '../types';

export const getUsers = () => async dispatch => {
    dispatch({type: LOADING});
    try {
        const response = await axios.get('https://jsonplaceholder.cypress.io/users');
        if (response.status === 200) {
            dispatch({
                type: SET_USERS, 
                payload: response.data
            });
        } else {
            new Error(`Response status: ${response.status}`);
        }
    } catch (err) {
        console.error(err);
        dispatch({type: TRIGGER_ERROR, error: err});
    }
    
}
