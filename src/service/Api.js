import axios from 'axios'

let baseUrlUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

let getUsersJson = () => baseUrlUsers('users');

export {getUsersJson}