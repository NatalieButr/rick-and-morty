import { takeEvery, put, call } from "redux-saga/effects";

import { showLoader, hideLoader } from "./loader/actions";
import { FETCH_CHARACTER_LIST, FETCH_MORE_CHARACTER_LIST } from "./types";

function* sagaWorker(action) {
  const { receiveData, receiveError, callAPI } = action;
  try {
    yield put(showLoader());
    let payload = yield call(callAPI);
    yield put({ type: receiveData, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put({ type: receiveError, payload: e });
    yield put(hideLoader());
  }
}

export function* sagaWatcher() {
  yield takeEvery(FETCH_CHARACTER_LIST, sagaWorker);
  yield takeEvery(FETCH_MORE_CHARACTER_LIST, sagaWorker);
}
