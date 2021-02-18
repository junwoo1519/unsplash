import {combineReducers} from "redux";
import appReducer from "./app/redux";
import photoReducer from "./photo/redux";
import searchReducer from "./search/redux";
import collectionReducer from "./collection/redux";
import topicReducer from "./topic/redux";

const reducer = combineReducers({
    app: appReducer,
    photo: photoReducer,
    search: searchReducer,
    collection: collectionReducer,
    topic: topicReducer

})

export default reducer;