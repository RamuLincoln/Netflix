import axios from 'axios';

export default axios.create({
    baseURL : "http://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        MaxResults : 5,
        key : '[Api]'
    }
});