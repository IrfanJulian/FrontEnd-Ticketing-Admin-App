import { combineReducers } from 'redux'
import authReducer from './authReducer'
import ticketReducer from './ticketReducer'
import airlinesReducer from './airlinesReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    ticket: ticketReducer,
    airlines: airlinesReducer
})

export default rootReducer