import {useEffect, useState} from "react";
import {getUsersJson} from "../../service/Api";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function Users({props}) {

    let [users, setusers] = useState([]);

    useEffect(() => {

        getUsersJson().then(value => setusers([...value.data]));

    }, [])
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <Switch>

                <Route path={'/users/:id'} component={UserDetails}/>

            </Switch>

        </div>
    );
}