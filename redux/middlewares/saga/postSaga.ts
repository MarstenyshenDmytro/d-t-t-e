import { successPost, errorPost } from "../../actions/post";
import { getPostAPI } from "../../../api/getPostAPI";
import { call, put } from "redux-saga/effects";
import { AnyAction } from "redux";

function* postSaga({ payload: { id } }: AnyAction) {
  try {
    const data = yield call(getPostAPI, id);
    yield put(successPost({ ...data, comments: data.comments.reverse() }));
  } catch (e) {
    yield put(errorPost());
  }
}

export default postSaga;
