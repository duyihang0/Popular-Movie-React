import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=537d6058aba8ec096cc4927786f25c7e&language=en-US&page=1'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;