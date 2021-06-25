import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./components/services/api";
import Users from "./components/users/Users";

function App() {


    let [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers().then(usersArr => {
            {
                setUsers(usersArr.data);
            }
        });

    }, [])


    return (
        <div>

            <Users items={users}/>

        </div>
    );
}

export default App;
