import { combineReducers } from 'redux'
import streamReducer from '../components/Stream/redux/streamReducer'

const rootReducer = combineReducers({
    stream: streamReducer
})

export default rootReducer