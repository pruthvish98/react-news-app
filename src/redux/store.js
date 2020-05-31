import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
// import axios from 'axios';
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
