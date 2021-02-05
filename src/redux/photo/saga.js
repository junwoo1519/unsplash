import {call, put, takeLatest} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield takeLatest(Action.Types.GET_PHOTOS, function* (action) {
        const result = yield call(API.getPhotos)
        if (result.data) {
            yield put(Action.Creators.updateState({
                list: result.data
            }))
        }
    })
}

export default saga;