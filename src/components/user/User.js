import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"

export default function User({item: {name, id}}) {

    return (
        <div>

            {name} - <Link to={'/users/' + id}>User Details</Link>

        </div>
    );
}