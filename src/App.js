import './App.css';

import {Link, BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Coments from "./components/coments/Coments";

function App() {


    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <br/>
                <Link to={'/users'}>to Users page</Link>
                <br/>
                <Link to={'/posts'}>to Posts page</Link>
                <br/>
                <Link to={'/coments'}>to Coments page</Link>
                <br/>


                <Route path={'/users'} render={(props) => <Users{...props}/>}/>
                {/*<Route path={'/users'} render={() => <div>This is Users Page</div>}/>*/}
                <Route path={'/posts'} component={Posts}/>

                <Switch>
                <Route path={'/coments'}>
                    <Coments/>
                </Route>
                <Route path={'/coments'}>
                    <Coments/>
                </Route>
                </Switch>


            </div>
        </Router>
    );
}

export default App;
