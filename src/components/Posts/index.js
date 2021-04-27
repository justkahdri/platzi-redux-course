import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getUsers } from '../../actions/usersActions';

const Posts = ({users, getUsers}) => {
    const { key } = useParams();

    useEffect(() => {
        if(!users.length) {
            getUsers();
        }
    }, [users, getUsers])

    return (
    <div> 
        <h1>Posts by {}</h1>
        { key } 
    </div>)
}

const mapStateToProps = reducers => (reducers.usersReducer);

export default connect(mapStateToProps, {getUsers})(Posts);