import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getUsers } from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

const Posts = ({usersReducer, postsReducer, getUsers, getPostsByUser}) => {
    const { users } = usersReducer;
    const { key } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if(!users.length) {
                await getUsers();
            } 
            getPostsByUser(key);
        }
        fetchData();
    }, [users, key, getPostsByUser, getUsers])

    return (
    <div> 
        <h1>Posts by {}</h1>
        { key } 
        { console.log(postsReducer) }
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