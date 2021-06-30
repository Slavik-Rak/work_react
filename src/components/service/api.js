import axios from "axios"


let getUrlJson = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
});

let getUsers = ()=>{
   return  getUrlJson('/users');
}
let getPosts = ()=>{
    return  getUrlJson('/posts');
}
let getComents= ()=>{
    return  getUrlJson('/comments');
}


export {getUsers,getPosts,getComents}