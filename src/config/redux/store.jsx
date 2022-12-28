import { applyMiddleware, createStore } from 'redux'
import rootReducers from './reducer/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

export default store