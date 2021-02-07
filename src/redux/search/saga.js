import {all, call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield  all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {
            const result = yield call(API.searchPhotos, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    photos: result.data
                }))
            }
        }),

        takeLatest(Action.Types.SEARCH_COLLECTIONS, function* ({payload}) {
            const result = yield call(API.searchCollections, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    collections: result.data
                }))
            }
        })

    ])
}

export default saga;