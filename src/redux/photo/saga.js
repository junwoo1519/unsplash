import {all, call, put, takeLatest, select} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading: true}))
            const photo = yield select(state => state.photo)
            const result = yield call(API.getPhotos, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    list: [
                        ...photo.list,
                        ...result.data
                    ]
                }))
            }

            yield put(Action.Creators.updateState({isLoading: false}))
        }),

        takeLatest(Action.Types.GET_PHOTO, function* ({payload}) {
            const result = yield call(API.getPhoto, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    topPhoto: result.data
                }))
            }
        }),

        takeLatest(Action.Types.COLLECTIONS_RELATED, function* ({payload}) {
            const result = yield call(API.collectionsRelated, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    collection: result.data
                }))
            }
        }),
    ])
}

export default saga;