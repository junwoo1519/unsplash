import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({payload}) {
            const result = yield call(API.getPhotos, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
        }),

        takeLatest(Action.Types.GET_PHOTO, function* ({payload}) {
            const result = yield call(API.getPhoto, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    TopPhoto: result
                }))
            }
        })
    ])
}

export default saga;