import {call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {
        const result = yield call(API.searchPhotos, payload);
        if (result.data) {
            yield put(Action.Creators.updateState({
                ...result.data
            }))
        }
    })
}

export default saga;