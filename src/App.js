import './App.css';

import{
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
}from "react-router-dom"


import Users from "./components/users/Users";
import {getListUsers} from "./servise/ApiUsers";

function App() {





    return (
        <div className="App">


            <Router>

                <Link to={'/users'}>List Users Oll</Link>


                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>


            </Router>


        </div>
    );
}

export default App;
