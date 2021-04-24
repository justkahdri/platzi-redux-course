import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { SET_USERS } from '../../actions';

const Users = ({users, handleFetch}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.cypress.io/users');
      if (response.status === 200) {
        handleFetch(response.data)
      } else {
        setError(`API request failed with code: ${response.status}`);
      }
    }
    fetchData();
  }, [])

  const addRows = () => (
    users.map((user, idx) => (
      <tr key={idx}>
        <td>
          {user.name}
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.website}
        </td>
      </tr>
    ))
  );

  return (
      <table className='table'>
        <thead>
          <tr>
            <td>
            Name
            </td>
            <td>
            Email
            </td>
            <td>
            Url
            </td>
          </tr>
        </thead>
        <tbody>
          {error ? 
          <div>
            <p>An error has ocurred :(</p>
            <p>{error}</p>
          </div>
          : addRows()}
        </tbody>
      </table>
  );
}

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  handleFetch: data => dispatch(SET_USERS(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Users);
