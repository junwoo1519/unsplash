import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.COLLECTION_RELATED, function* ({payload}) {
            const result = yield call(API.collectionRelated, payload);
            if (result.data.results) {
                yield put(Action.Creators.updateState({
                    listRelated: result.data.results
                }))
            }
        }),
    ])
}

export default saga;