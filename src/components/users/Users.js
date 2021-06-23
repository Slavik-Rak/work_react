import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users(props) {

let [arrUsers, setArrUsers] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(arr=>{
                setArrUsers(arr);
            })

    }, [])

    return (
        <div>

            {
                arrUsers.map(user=> <User item={user} key={user.id}/>)
            }

        </div>
    );
}