import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getUsers } from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

const Posts = ({usersReducer, postsReducer, getUsers, getPosts}) => {
    const { users } = usersReducer;
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

const mapStateToProps = ({ usersReducer, postsReducer }) => ({
    usersReducer,
    postsReducer
});

const mapDispatchToProps = {
    getUsers,
    ...postsActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);