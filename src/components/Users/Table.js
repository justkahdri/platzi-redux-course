import { connect } from "react-redux";

const Table = ({users}) => {
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
                {addRows()}
            </tbody>
        </table>
    );
}

const mapStateToProps = reducers => ({
    users: reducers.usersReducer.users
});

export default connect(mapStateToProps, '')(Table);