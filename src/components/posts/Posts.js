import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts({idUs}) {

    let [arrPosts, setArrComents] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/'+`${idUs}`+'/posts')
            .then(value => value.json())
            .then(arr=>{
                setArrComents(arr);
            })

    }, [])

    return (
        <div>

            {
                arrPosts.map(post=><Post post={post}/>)
            }

        </div>
    );
}