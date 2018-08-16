import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// const enhancers = compose(
//     applyMiddleware(thunk, apiMiddleware(options)),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// );


var store = createStore(rootReducer, {videos: [], currentVideo: null}, applyMiddleware(thunk));

export default store;