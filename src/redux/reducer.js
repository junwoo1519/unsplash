import {combineReducers} from "redux";
import appReducer from "./app/redux";
import photoReducer from "./photo/redux";
import searchReducer from "./search/redux";

const reducer = combineReducers({
    app: appReducer,
    photo: photoReducer,
    search: searchReducer

})

export default reducer;