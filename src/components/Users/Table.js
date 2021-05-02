import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
            <td>
                <Link to={`/posts/${user.id}`}>
                    <div className="eye icon"></div>
                </Link>
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