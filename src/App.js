import './App.css';
import {getPosts, getUser, getUsers} from "./components/service/Api";
import {useEffect, useState} from "react";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import InfoUser from "./components/infoUser/InfoUser";

function App() {

    let [post, setPost] = useState([]);
    let [user, setUser] = useState([]);

    let fn = (id) => {
        getUser(id).then(value => {
            setUser(value.data);
        })

        getPosts(id).then(value => {
            setPost(value.data)
        })
    };


    let [usersArr, setUssersArr] = useState([]);

    useEffect(() => {

        getUsers().then(value => {
            setUssersArr(value.data);
        });

    }, [])

    return (
        <div>
            <Users items={usersArr} fn={fn}/>
            <hr/>
           <InfoUser infoUs={user}/>
            <hr/>
            <Posts itemsPost={post}/>

        </div>
    );
}

export default App;
