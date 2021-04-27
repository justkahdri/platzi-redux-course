import axios from 'axios';
import { SET_USERS } from '../types';

export const getUsers = () => async dispatch => {
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
    }
    
}
