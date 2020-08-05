import { createStore, combineReducers } from 'redux';
import reducer from '../Reducer/index';
import loadingReducer from '../Reducer/LoadingReducer';


const store = createStore(combineReducers({reducer, loadingReducer}) );

export default store;