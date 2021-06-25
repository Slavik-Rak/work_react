import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./components/services/api";
import Users from "./components/users/Users";

function App() {


    let [user, setUser] = useState([])

    let appFn = (id) => {
        getUser(id).then(value => setUser(value.data));
    }


    let [users, setUsers] = useState(null);

    useEffect(() => {

        getUsers().then(usersArr => {
            {
                setUsers(usersArr.data);

            }
        });

    }, [])


    return (
        <div>
            {
                users && <Users items={users} appFn={appFn}/>
            }
            <hr/>

            <div>
                {user.username}
            </div>


            <hr/>
        </div>
    );
}

export default App;
