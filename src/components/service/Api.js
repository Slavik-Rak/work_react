import axios from "axios";

let usersJsonPlace = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});


let getUsers=()=>{
    return usersJsonPlace("/users");
}
let getUser=(id)=>{
    return usersJsonPlace("/users/"+id);
}

export {getUsers,getUser}