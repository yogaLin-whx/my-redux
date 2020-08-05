import axios from 'axios';
import store from '../Store';

const todoApi = axios.create({
    baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
})

todoApi.interceptors.request.use(req => {
    store.dispatch({ type: 'loading', payload: { loading: true} });
    console.log("request");
    return req;
}, error => error
);

todoApi.interceptors.response.use(req => {
    store.dispatch({ type: 'loading', payload: { loading: false } });
    console.log("response");
    console.log(req);
    return req;
}, error => error
);

export default todoApi;