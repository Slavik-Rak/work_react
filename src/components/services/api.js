//
// const getUsers=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
// }
// const getUser=(id)=>{
//     return fetch('https://jsonplaceholder.typicode.com/users'+id)
//         .then(value => value.json())
// }
//
// export {getUser,getUsers};

import axios from "axios";

let axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


const getUsers = () => axiosInstanse('/users');
const getUser = (id) => axiosInstanse('/users/' + id);


export {getUser, getUsers};