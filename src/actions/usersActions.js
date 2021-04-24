import axios from 'axios';

export const getUsers = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.cypress.io/users');
    if (response.status === 200) {
        dispatch({
            type: 'SET_USERS', 
            payload: response.data
        });
    } else {
        dispatch({
            type: 'ERROR', 
            payload: response.status
        });
    }
}
