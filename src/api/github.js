import axios from 'axios';

// Set config defaults when creating the instance
const apiGithub = axios.create({
    baseURL: 'https://api.github.com/leonanthomaz'
});

export default apiGithub;