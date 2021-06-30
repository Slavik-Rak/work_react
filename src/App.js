import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom"
import './App.css';
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {getPosts, getUsers, getComents, getUserPost, getPostComents} from "./components/service/api";
import Posts from "./components/posts/Posts";
import Coments from "./components/coments/Coments";


function App() {


    let [arrUsers, setArrUsers] = useState([]);
    let [arrPosts, setArrPosts] = useState([]);
    let [arrComents, setArrComents] = useState([]);
    let [userPost, setUserPost] = useState([]);
   let [postComents, setPostComents] = useState([]);


    let fn = (id) => {
        getUserPost(id).then(value => {
            setUserPost(value.data)
        });
    }


    let fnPaostId = (id)=>{
        getPostComents(id).then(value => {
            setPostComents(value.data);
        });
    }




    useEffect(() => {
        getUsers().then(value => setArrUsers(value.data));
        getPosts().then(value => setArrPosts(value.data))
        getComents().then(value => setArrComents(value.data))
    }, [])


    return (

        <Router>

            <div className="App">
                <Link to={'/clean'}>CleanAll</Link>
                <br/>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <br/>
                <Link to={'/coments'}>Coments</Link>


                <hr/>
                <hr/>


                <Route path={'/clean'} render={() => {

                }}/>
                <Route path={'/users'} render={() => <Users fn={fn} items={arrUsers}/>}/>
                <Route path={'/posts'} render={() => <Posts items={arrPosts} fnPaostId={fnPaostId}/>}/>
                <Route path={'/coments'} render={() => <Coments items={arrComents}/>}/>

                {
                    userPost && <Posts items={userPost}  fnPaostId={fnPaostId}/>

                }
                {
                    postComents && <Coments items={postComents}/>
                }
            </div>

        </Router>


    );
}

export default App;
