import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-edc50.firebaseio.com/'
});

export default instance;