import './App.css';
import {getUsersJson} from "./service/Api";
import Users from "./components/users/Users";

import{
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
}from "react-router-dom"

function App() {


    return (
        <Router>
        <div className="App">

            <Link to={'/users'}>Users page</Link>
            <Switch>

                <Route path={'/users'} component={Users}/>


            </Switch>


        </div>
            </Router>
    );
}

export default App;
