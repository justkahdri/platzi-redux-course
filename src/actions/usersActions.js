import axios from 'axios';
import { LOADING, SET_USERS, TRIGGER_ERROR } from '../types/usersTypes';

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
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (err) {
        dispatch({type: TRIGGER_ERROR, error: err});
    }
    
}
