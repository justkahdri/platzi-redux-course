import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getUsers } from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

import Loader from '../Loader';
import Fatal from '../Fatal';

const Posts = ({users, error, loading, getUsers, getPostsByUser}) => {
    const [ name, setName ] = useState();
    const { key } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if(!users.length) {
                await getUsers();
            } else {
                let user = users.find(obj => {
                    return obj.id === parseInt(key)
                  })
                if (user) {
                    setName(user.name)
                    if (!user.hasOwnProperty("posts_index")) {
                        getPostsByUser(key);
                    }
                }
                
            }
        }
        fetchData();
    }, [users])

    if (error) {
        return <Fatal message={error}/>
    } else if (!users.length || loading) {
        return <Loader name={'posts'}/>
    }

    return (
    <div> 
        <h1>Posts by {name}</h1>
    </div>)
}

const mapStateToProps = ({ usersReducer, postsReducer }) => ({
    users: usersReducer.users,
    loading: usersReducer.loading || postsReducer.loading,
    error: postsReducer.error || usersReducer.error,
});

const mapDispatchToProps = {
    getUsers,
    ...postsActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);