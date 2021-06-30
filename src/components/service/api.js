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

let getUserPost=(id)=>{
    return  getUrlJson('/users/'+id+'/posts');
}
// https://jsonplaceholder.typicode.com/users/USER_ID_HERE/posts
export {getUsers,getPosts,getComents,getUserPost}