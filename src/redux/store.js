import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/posts';

export default createStore(combineReducers({
    posts: postsReducer
}))
