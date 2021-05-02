import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getUsers } from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

import Loader from '../Loader';
import Fatal from '../Fatal';

const Posts = ({usersReducer, postsReducer, getUsers, getPostsByUser}) => {
    const {users} = usersReducer;
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
                    console.log('K')
                    if (!user.hasOwnProperty("posts_index")) {
                        getPostsByUser(key);
                    }
                }
                
            }
        }
        fetchData();
    }, [users])

    if (usersReducer.error) {
        return <Fatal message={usersReducer.error}/>
    } else if (!users.length || usersReducer.loading) {
        return <Loader name={'posts'}/>
    }

    return (
    <div> 
        <h1>Posts by {name}</h1>
        { console.log(postsReducer, 'USERS', usersReducer) }
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