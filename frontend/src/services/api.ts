import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({
    baseURL: 'http://localhost:3003',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
    }
});
