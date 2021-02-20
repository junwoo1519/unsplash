import {all, call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOPIC_SLUG, function* ({payload}) {
            const result = yield call(API.topicSlug, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    slugs: result.data
                }))
            }
        }),
        takeLatest(Action.Types.GET_TOPIC_PHOTO, function* ({payload}) {
            const result = yield call(API.topicPhoto, payload);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    slugPhotos: result.data
                }))
            }
        }),
    ])
}

export default saga;