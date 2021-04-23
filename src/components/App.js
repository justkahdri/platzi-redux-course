import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.cypress.io/users');
      console.log('response:', response);
      // if (response) {
      //   setUsers(response)
      // }
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
    <div className="margin">
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
    </div>
  );
}

export default App;
