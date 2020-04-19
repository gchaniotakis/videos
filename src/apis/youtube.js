import axios from 'axios';

const KEY = 'AIzaSyBsowfqTWs3qKGPsQKfchiJGfWMUh2vSEE';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});