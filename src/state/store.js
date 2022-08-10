import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import ProxyLabsReducer from "./reducers/ProxyLabsReducer";

export const store = createStore(reducers, {}, applyMiddleware(thunk))