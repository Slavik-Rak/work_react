import axios from 'axios'

let axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

let getComents = () => axiosInstans('/comments');
let getComent = (id) => axiosInstans('/comments/' + id);
export {getComents, getComent};