import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'Joaquin',
      email: 'joaco.rm512@gmail.com',
      website: 'www.justkahdri.com'
    },
    {
      name: 'Rodolfo',
      email: 'rodo@saldivar.comm',
      website: 'www.rodolfo_saldivar.com'
    }
  ])

  const setRows = () => (
    users.map(user => (
      <tr>
        {
        Object.values(user).map(field => 
          (<td>{field}</td>))
        }
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
        {setRows()}
      </tbody>
    </table>
    </div>
  );
}

export default App;
