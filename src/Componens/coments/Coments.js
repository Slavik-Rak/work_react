import {useEffect, useState} from "react";
import Coment from "../coment/Coment";

export default function Coments(props) {

    let [arrComents, setArrComents] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(arr => {
                setArrComents(arr);
                console.log(arr);

            })

    }, [])

    return (
        <div>

            {
                arrComents.map(coment => <Coment key={coment.id} item={coment}/>)
            }


        </div>
    );
}