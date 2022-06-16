import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://localhost:44320/api/'
});

export default clienteAxios;
