import './App.css';
import {getUsersJson} from "./service/Api";
import Users from "./components/users/Users";

import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom"

function App() {
    getUsersJson().then(value => console.log(value.data));

    return (
        <Router>
        <div className="App">

            <Users/>

        </div>
            </Router>
    );
}

export default App;
