
import {useEffect, useState} from "react";
import Coment from "../coment/Coment";
import './Coments.css'

export default function Coments(props) {

    let [coments, setComents] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(arrComents => {
                setComents(arrComents);
            })

    }, [])

    return (
        <div className={'wrapComents'}>
            {
                coments.map(coment=><Coment item={coment} key={coment.id}/>)
            }
        </div>
    );
}