import authReducer from './authReducer'
import postReducer from './postReducer'
import { combineReducers } from 'redux'

//combines reducers 
const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
})

export default rootReducer;