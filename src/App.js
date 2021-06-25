import {useEffect, useState} from "react";
import {getComent, getComents} from "./components/api/API";
import Coments from "./components/coments/Coments";

function App() {

let [comentBody,setComent] = useState([])

    let fn = (id) => {
        getComent(id).then(value => setComent(value.data));
         }


    let [coments, setComents] = useState();

    useEffect(() => {
        getComents().then(value => setComents(value.data));
    }, [])


    return (
        <div className="App">

            {
                coments && <Coments items={coments} fn={fn} comentBody={comentBody}/>
            }
            <hr/><hr/><hr/>
            <div>{comentBody.body}</div>

        </div>
    );
}

export default App;
