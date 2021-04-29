import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import Table from './Table';
import Fatal from '../Fatal';

import * as usersActions from '../../actions/usersActions';

const Users = ({users, getUsers, loading, error}) => {

  useEffect(() => {
    if (!users.length) {
      getUsers();
    } 
  }, [users, getUsers])

  if (loading) {
    return <Loader name='Table'/>
  } else if (error) {
    return <Fatal message={error.message}/>
  } else {
    return <Table />;
  }
}

const mapStateToProps = reducers => (reducers.usersReducer);

export default connect(mapStateToProps, usersActions)(Users);
