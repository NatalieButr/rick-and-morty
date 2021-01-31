import { takeEvery, put, call } from "redux-saga/effects";
import { showLoader, hideLoader } from "./errors/actions";

export function* sagaWatcher() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery("FETCH_CHARACTER_LIST", sagaWorker);
}

function* sagaWorker(action) {
  const { receiveData, receiveError, callAPI } = action;
  console.log(action);
  try {
    yield put(showLoader());
    let payload = yield call(callAPI);
    yield put({ type: receiveData, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put({ type: receiveError, e });
    yield put(hideLoader());
  }
}
