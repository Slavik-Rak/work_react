import {getListUsers} from "../../servise/ApiUsers";
import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";

export default function Users(props) {

    let [arrUsers, setArrUsers] = useState([]);

    useEffect(() => {

        getListUsers().then(value => {
            setArrUsers([...value.data]);

        });

    }, [])


    return (
        <div>
            {
                arrUsers.map(value => <User key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>
    );
}