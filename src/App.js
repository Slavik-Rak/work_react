import './App.css';
import {getUser, getUsers,} from "./components/service/Api";
import {useEffect, useState} from "react";
import Users from "./components/users/Users";

function App() {


    let [user,setUser]= useState([]);

    let fn = (id)=> {
        getUser(id).then(value => {
            setUser(value.data);
        })
    };


    let [usersArr,setUssersArr] = useState([]);

    useEffect(() => {

        getUsers().then(value => {
            setUssersArr(value.data);
            console.log(value.data);
        });

    }, [])


    return (
        <div>
                    <Users items={usersArr} fn={fn}/>

            {
                user && <div>{user.name} - {user.email}</div>
            }

        </div>
    );
}
export default App;
