import axios from 'axios';

const api = axios.create({
    // Base do json-server utilizando a porta 8001
    baseURL: 'http://localhost:8001'
});

export { api }