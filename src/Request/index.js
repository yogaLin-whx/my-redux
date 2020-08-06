import axios from 'axios';
import store from '../Store';

const todoApi = axios.create({
    //baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
     baseURL: "http://localhost:8090/todo",
})

todoApi.interceptors.request.use(req => {
    store.dispatch({ type: 'loading', payload: { loading: true} });
    return req;
}, error => error
);

todoApi.interceptors.response.use(req => {
    store.dispatch({ type: 'loading', payload: { loading: false } });
    return req;
}, error => error
);

export default todoApi;