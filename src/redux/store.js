import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/posts';
import searchReducer from './reducers/search';

export default createStore(combineReducers({
    posts: postsReducer,
    search: searchReducer
}))
