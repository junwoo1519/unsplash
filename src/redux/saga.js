import {call, all} from "redux-saga/effects";
import appSaga from "./app/saga"
import photoSaga from "./photo/saga"
import searchSaga from "./search/saga"
import collectionSaga from "./collection/saga"
import topicSaga from "./topic/saga"

const saga = function* () {
    yield all(
        [
            call(appSaga),
            call(photoSaga),
            call(searchSaga),
            call(collectionSaga),
            call(topicSaga),
        ]
    )
}

export default saga;