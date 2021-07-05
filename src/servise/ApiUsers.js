import axios from 'axios'

let mainLinkUsers = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

let getListUsers = () => mainLinkUsers('users');


export {getListUsers}