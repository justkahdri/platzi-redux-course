import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

const Users = ({users, getUsers, loading}) => {

  useEffect(() => {
    getUsers();
  }, [getUsers])

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
    loading ? <h3>Loading table...</h3> :
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
          {addRows()}
        </tbody>
      </table>
  );
}

const mapStateToProps = reducers => (reducers.usersReducer);

export default connect(mapStateToProps, usersActions)(Users);
