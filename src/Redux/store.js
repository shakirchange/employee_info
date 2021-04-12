//import thunk from 'redux-thunk';
import Reducer from './Reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(Reducer, applyMiddleware(thunk));

export default store