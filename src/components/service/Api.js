import axios from "axios";

let usersJsonPlace = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});
let postsUser = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/'
})

let getPosts = (id) => {
    return postsUser(id + '/posts')
}

let getUsers = () => {
    return usersJsonPlace("/users");
}
let getUser = (id) => {
    return usersJsonPlace("/users/" + id);
}

export {getUsers, getUser, getPosts}