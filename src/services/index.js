import axios from 'axios';
import apis from './apis';


axios.create({
    baseURL: apis.baseURL
});

const getTodos = () => {
    return axios.get(apis.getTodos)
}

export {
    getTodos
}