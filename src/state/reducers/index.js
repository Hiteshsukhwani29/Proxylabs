import { combineReducers } from "redux";
import ProxyLabsReducer from "./ProxyLabsReducer";

const reducers = combineReducers({
    t1: ProxyLabsReducer
})

export default reducers;