import {call, all} from "redux-saga/effects";
import appSaga from "./app/saga"
import photoSaga from "./photo/saga"
import searchSaga from "./search/saga"

const saga = function* () {
    yield all(
        [
            call(appSaga),
            call(photoSaga),
            call(searchSaga)
        ]
    )
}

export default saga;