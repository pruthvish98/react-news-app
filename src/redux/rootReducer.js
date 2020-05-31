import { combineReducers } from "redux";
import headLinesReducer from "./headlines/headLineReducer";
import searchReducer from "./searchNews/searchReducer";
import globleReducer from "./globleState/globleReducer";
import categoryReducer from "./categaoryNews/categoryReducer";
import sourceReducer from "./sources/sourceReducer";

const rootReducer = combineReducers({
    headLines: headLinesReducer,
    searchResult: searchReducer,
    globle: globleReducer,
    category: categoryReducer,
    source: sourceReducer
});

export default rootReducer;
