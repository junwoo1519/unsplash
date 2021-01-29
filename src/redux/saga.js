import {call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./reducer";
import API from "../api";

const saga = function* () {
    yield takeLatest(Action.Types.GET_LIST, function* (action) {
        const result = yield call(API.getList)
        if (result.data) {
            yield put(Action.Creators.updateState({
                list: result.data
            }))
        }
    })
}

export default saga;