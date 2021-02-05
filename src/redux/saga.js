import {fork, all} from "redux-saga/effects";
import appSaga from "./app/saga"
import photoSaga from "./photo/saga"
import searchSaga from "./search/saga"

const saga = function* () {
    yield all(
        [
            fork(appSaga),
            fork(photoSaga),
            fork(searchSaga)
        ]
    )
}

export default saga;